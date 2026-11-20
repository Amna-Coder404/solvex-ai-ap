import { decode } from 'base64-arraybuffer';
import { supabase } from './supabase';

export async function uploadNoteImage(userId, base64) {
    const path = `${userId}/${Date.now()}.jpg`;
    const { error } = await supabase.storage
        .from('note-images')
        .upload(path, decode(base64), { contentType: 'image/jpeg' });
    if (error) throw error;
    return path;
}

export async function getImageUrl(path) {
    const { data } = await supabase.storage.from('note-images').createSignedUrl(path, 3600);
    return data?.signedUrl;
}