import katex from 'katex';
import { useMemo, useState } from 'react';
import { WebView } from 'react-native-webview';
import KATEX_CSS from '../constants/katexCss';
import { colors } from '../constants/theme';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** text with $...$ / $$...$$ / \( \) / \[ \] -> HTML with rendered math */
export function mathToHtml(text) {
    const render = (tex, display) => {
        try {
            return katex.renderToString(tex.trim(), { displayMode: display, throwOnError: false });
        } catch {
            return esc(tex);
        }
    };
    const re = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|\$([^$\n]+?)\$/g;
    const parts = [];
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
        parts.push(esc(text.slice(last, m.index)));
        if (m[1] !== undefined) parts.push(render(m[1], true));
        else if (m[2] !== undefined) parts.push(render(m[2], true));
        else if (m[3] !== undefined) parts.push(render(m[3], false));
        else parts.push(render(m[4], false));
        last = m.index + m[0].length;
    }
    parts.push(esc(text.slice(last)));
    return parts.join('').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br/>');
}

export const buildDoc = (body, { fontSize = 16, color = colors.text } = {}) => `<!doctype html>
<html><head><meta name="viewport" content="width=device-width, initial-scale=1">
<style>${KATEX_CSS}
body{margin:0;padding:0;font-family:-apple-system,Roboto,Helvetica,Arial,sans-serif;font-size:${fontSize}px;line-height:1.55;color:${color};background:transparent;overflow-wrap:anywhere}
.katex{font-size:1.1em}
.katex-display{margin:.6em 0;overflow-x:auto;overflow-y:hidden}
</style></head>
<body><div id="c">${body}</div>
<script>
function send(){ if(window.ReactNativeWebView){ window.ReactNativeWebView.postMessage(String(document.getElementById('c').getBoundingClientRect().height)); } }
window.addEventListener('load', function(){ send(); setTimeout(send, 300); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(send);
</script></body></html>`;

export default function MathView({ text, color }) {
    const [height, setHeight] = useState(24);
    const html = useMemo(() => buildDoc(mathToHtml(text), { color }), [text, color]);
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html }}
            scrollEnabled={false}
            style={{ height, width: '100%', backgroundColor: 'transparent' }}
            containerStyle={{ backgroundColor: 'transparent' }}
            onMessage={(e) => {
                const next = Math.ceil(parseFloat(e.nativeEvent.data)) + 4;
                if (next > 4 && next !== height) setHeight(next);
            }}
        />
    );
}