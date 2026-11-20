// Urdu Compulsory Inter Part 1 - Bahawalpur Board past papers (2019, 2022 G1 & G2, 2023 G1 & G2, 2024 G2)
// tamam sawalat, options aur jawabat mukammal taur par Urdu mein hain.
// "// check" wale sawalat scan mein dhundlay thay, inhein original paper ya teacher se zaroor mila lein.
// repeated: kitni baar in past papers mein aaya (field na ho to 1).

const AS = 'اسباق (حصہ نثر و نظم)';
const SH = 'اصنافِ شعر (مطلع، مقطع، قافیہ، ردیف)';
const IB = 'علمِ بیان (تشبیہ، استعارہ، تلمیح)';
const QG = 'قواعد و انشاء (تذکیر و تانیث / مطابقت)';

export default [
    // ---------- Paper: 2023 (Group I) ----------
    { id: 'u1', chapter: QG, question: 'میرے قلم ۔۔۔۔۔۔ نب خراب ہے۔', options: ['کی', 'کا', 'کے', 'کو'], correctAnswer: 'کا' },
    { id: 'u2', chapter: QG, question: 'مجھ پر کیچڑ ۔۔۔۔۔۔', options: ['اچھالا گیا', 'اچھالے گئے', 'اچھالی گئی', 'اچھالی گئیں'], correctAnswer: 'اچھالا گیا' },
    { id: 'u3', chapter: QG, question: 'ڈاکٹر نے زخم پر مرہم ۔۔۔۔۔۔', options: ['لگایا', 'لگائی', 'لگائے', 'لگائیں'], correctAnswer: 'لگایا', repeated: 2 },
    { id: 'u4', chapter: QG, question: 'ہم نے تاش ۔۔۔۔۔۔', options: ['کھیلا', 'کھیلی', 'کھیلے', 'کھیلو'], correctAnswer: 'کھیلا' },
    { id: 'u5', chapter: QG, question: 'یہ اُردو ۔۔۔۔۔۔ بہترین لغت ہے۔', options: ['کی', 'کا', 'کے', 'کو'], correctAnswer: 'کی' },
    { id: 'u6', chapter: SH, question: 'قافیے کے بعد بار بار آنے والے مستقل حروف کہلاتے ہیں:', options: ['ردیف', 'مطلع', 'استعارہ', 'قافیہ'], correctAnswer: 'ردیف' },
    { id: 'u7', chapter: SH, question: 'اصطلاح میں "مطلع" غزل کا شعر ہوتا ہے:', options: ['پہلا', 'دوسرا', 'تیسرا', 'آخری'], correctAnswer: 'پہلا' },
    { id: 'u8', chapter: SH, question: '"مقطع" کا لغوی معنی ہے:', options: ['نکلنے کا مقام', 'آغاز', 'کاٹنے کی جگہ', 'قینچی'], correctAnswer: 'کاٹنے کی جگہ' },
    { id: 'u9', chapter: SH, question: '"قافیہ" کے الفاظ ہوتے ہیں:', options: ['ہم معنی', 'بے معنی', 'مستقل', 'ہم وزن'], correctAnswer: 'ہم وزن' },
    { id: 'u10', chapter: SH, question: '"مطلع" کے دونوں مصرعوں کا ہونا ضروری ہے:', options: ['موزوں', 'برابر', 'ہم قافیہ', 'ہم ردیف'], correctAnswer: 'ہم قافیہ', repeated: 2 },
    { id: 'u11', chapter: IB, question: '"تشبیہ" کس زبان کا لفظ ہے:', options: ['عربی', 'فارسی', 'ہندی', 'براہوئی'], correctAnswer: 'عربی' },
    { id: 'u12', chapter: IB, question: 'مشبہ اور مشبہ بہ میں پائی جانے والی مشترکہ صفت کہلاتی ہے:', options: ['غرض تشبیہ', 'وجہ تشبیہ', 'تشبیہ', 'تلمیح'], correctAnswer: 'وجہ تشبیہ' },
    { id: 'u13', chapter: IB, question: '"استعارہ" کے لغوی معنی ہیں:', options: ['خریدنا', 'بیچنا', 'ادھار لینا', 'ادھار دینا'], correctAnswer: 'ادھار لینا' },
    { id: 'u14', chapter: IB, question: '"گنج قاروں" کیا ہے:', options: ['تشبیہ', 'استعارہ', 'کنایہ', 'تلمیح'], correctAnswer: 'تلمیح' },
    { id: 'u15', chapter: IB, question: 'مستعار لہ اور مستعار منہ کو کیا کہتے ہیں:', options: ['طرفین تشبیہ', 'طرفین استعارہ', 'مجاز', 'علم بیان'], correctAnswer: 'طرفین استعارہ' },
    { id: 'u16', chapter: AS, question: 'سرسید خطوں کا جواب دینے میں نہایت:', options: ['فیاض تھے', 'چالاک تھے', 'کنجوس تھے', 'کمزور تھے'], correctAnswer: 'فیاض تھے' },
    { id: 'u17', chapter: AS, question: '"تصریف" کا لاطینی ترجمہ سب سے پہلے کہاں سے شائع ہوا:', options: ['لاہور سے', 'بغداد سے', 'دہلی سے', 'وینس سے'], correctAnswer: 'وینس سے' },
    { id: 'u18', chapter: AS, question: 'افسانہ "اوورکوٹ" کا مصنف ہے:', options: ['غلام عباس', 'پریم چند', 'ممتاز مفتی', 'احمد ندیم قاسمی'], correctAnswer: 'غلام عباس' },
    { id: 'u19', chapter: AS, question: 'مرزا غالب میرٹھ گئے:', options: ['کار پر', 'بس پر', 'ڈاک میں بیٹھ کر', 'پیدل'], correctAnswer: 'ڈاک میں بیٹھ کر', repeated: 3 },
    { id: 'u20', chapter: AS, question: 'تانگوں میں گھوڑے استعمال کیے جاتے ہیں:', options: ['ولایتی', 'بناسپتی', 'دیسی', 'عربی'], correctAnswer: 'ولایتی' }, // check (options C aur D scan mein katay huay thay)

    // ---------- Paper: 2019 (Group II / Code 6024) ----------
    { id: 'u21', chapter: QG, question: 'کھیتوں کو دے لو پانی اب یہ بہہ ۔۔۔۔۔۔ ہے گنگا۔', options: ['رہا', 'رہی', 'رہے', 'رہو'], correctAnswer: 'رہی' }, // check (misra scan mein dhundla tha)
    { id: 'u22', chapter: QG, question: 'پیاز کا بھاؤ بک ۔۔۔۔۔۔ ہے۔', options: ['رہا', 'رہی', 'رہے', 'رہیں'], correctAnswer: 'رہا' },
    { id: 'u23', chapter: QG, question: 'میرے سر میں درد ہو ۔۔۔۔۔۔ ہے۔', options: ['رہی', 'رہا', 'رہے', 'رہیں'], correctAnswer: 'رہا' },
    { id: 'u24', chapter: QG, question: 'ہم نے گیہوں خرید ۔۔۔۔۔۔ ہیں۔', options: ['لی', 'لیا', 'لیے', 'لے'], correctAnswer: 'لیے' },
    { id: 'u25', chapter: QG, question: 'یہ قائد اعظم ۔۔۔۔۔۔ فوٹو ہے۔', options: ['کی', 'کا', 'کے', 'کو'], correctAnswer: 'کا' },
    { id: 'u26', chapter: SH, question: 'حسنِ مطلع آتا ہے:', options: ['غزل کے شروع میں', 'غزل کے درمیان میں', 'غزل کے آخر میں', 'اصل مطلع کے بعد'], correctAnswer: 'اصل مطلع کے بعد' },
    { id: 'u27', chapter: SH, question: 'غزل کے اشعار کے آخر میں آنے والے ہم شکل الفاظ کہلاتے ہیں:', options: ['قافیہ', 'ردیف', 'مطلع', 'مقطع'], correctAnswer: 'ردیف' },
    { id: 'u28', chapter: SH, question: 'مقطع کی نشان دہی کیجیے:', options: ['اب تو کچھ اور ہی اعجاز دکھایا جائے', 'تک میر جگر سوختہ کی جلد خبر لے', 'اچھا ہے اہلِ جور کیے جائیں سختیاں', 'یہ آرزو تھی تجھے گل کے روبرو کرتے'], correctAnswer: 'تک میر جگر سوختہ کی جلد خبر لے' },
    { id: 'u29', chapter: SH, question: 'مطلع کے دونوں مصرعوں میں لازمی ہوتا ہے:', options: ['ردیف', 'قافیہ', 'تلمیح', 'تشبیہ'], correctAnswer: 'قافیہ' },
    { id: 'u30', chapter: SH, question: '"پھرے راہ سے وہ یہاں آتے آتے / اجل مر رہی تو کہاں آتے آتے" یہ شعر مثال ہے:', options: ['مقطع کی', 'مطلع ثانی کی', 'مطلع کی', 'تلمیح کی'], correctAnswer: 'مطلع کی' },
    { id: 'u31', chapter: IB, question: 'تلمیح کی نشان دہی کیجیے:', options: ['باغ جناح', 'اورنگ زیب', 'اورنگ سلیمان', 'کوہ ہمالیہ'], correctAnswer: 'اورنگ سلیمان' },
    { id: 'u32', chapter: IB, question: '"پتے پتے بوٹے بوٹے حال ہمارا جانے ہے / جانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے" اس میں مستعار لہ ہے:', options: ['باغ', 'جانے نہ جانے', 'گل', 'محبوب'], correctAnswer: 'محبوب' },
    { id: 'u33', chapter: IB, question: 'استعارہ سے مراد ہے:', options: ['لفظ کو حقیقی معنوں میں استعمال کرنا', 'لفظ کو مجازی معنوں میں استعمال کرنا', 'لفظ کو اصطلاحی معنوں میں استعمال کرنا', 'لفظ کو متضاد معنوں میں استعمال کرنا'], correctAnswer: 'لفظ کو مجازی معنوں میں استعمال کرنا', repeated: 2 },
    { id: 'u34', chapter: IB, question: 'طرفینِ تشبیہ سے مراد ہے:', options: ['مشبہ اور مشبہ بہ', 'حرف تشبیہ اور وجہ تشبیہ', 'مستعار لہ اور مستعار منہ', 'غرض تشبیہ اور وجہ تشبیہ'], correctAnswer: 'مشبہ اور مشبہ بہ', repeated: 2 }, // check (options scan mein katay huay thay)
    { id: 'u35', chapter: IB, question: '"میرا چاند ابھی سکول سے نہیں آیا" یہ مثال ہے:', options: ['تشبیہ کی', 'تلمیح کی', 'استعارہ کی', 'کنایہ کی'], correctAnswer: 'استعارہ کی' }, // check (options scan mein katay huay thay)
    { id: 'u36', chapter: AS, question: 'نوجوان کو حادثہ کس روڈ پر پیش آیا:', options: ['مال روڈ پر', 'میکلوڈ روڈ پر', 'منٹگمری روڈ پر', 'لارنس روڈ پر'], correctAnswer: 'میکلوڈ روڈ پر' },
    { id: 'u37', chapter: AS, question: 'قمر کو تقریب میں دعوت دی:', options: ['ایک امیر زادے نے', 'ایک جاگیردار نے', 'ایک رئیس نے', 'ایک ٹھیکے دار نے'], correctAnswer: 'ایک رئیس نے' },
    { id: 'u38', chapter: AS, question: '"تصریف" کا لاطینی ترجمہ وینس سے کب شائع ہوا:', options: ['1487ء میں', '1497ء میں', '1477ء میں', '1467ء میں'], correctAnswer: '1497ء میں' },
    { id: 'u39', chapter: AS, question: 'سرسید نے "خطباتِ احمدیہ" کتنی مدت میں لکھی:', options: ['دو برس میں', 'اڑھائی برس میں', 'ڈیڑھ برس میں', 'ایک برس میں'], correctAnswer: 'دو برس میں' },
    { id: 'u40', chapter: AS, question: 'ولیم ڈراگن خیر خواہ تھا:', options: ['سوئٹزر لینڈ کا', 'انگلینڈ کا', 'آئرلینڈ کا', 'فن لینڈ کا'], correctAnswer: 'آئرلینڈ کا' },

    // ---------- Paper: 2019 (Group I / Code 6023) ----------
    { id: 'u41', chapter: QG, question: 'میں نے منڈی سے دو من گندم ۔۔۔۔۔۔', options: ['خریدی', 'خریدا', 'خریدے', 'خریدیں'], correctAnswer: 'خریدی' },
    { id: 'u42', chapter: QG, question: 'وزیر نے حلف ۔۔۔۔۔۔', options: ['اٹھائی', 'اٹھایا', 'اٹھائیں', 'اٹھا'], correctAnswer: 'اٹھایا' },
    { id: 'u43', chapter: QG, question: 'یہ ۔۔۔۔۔۔ آستین کا سانپ ہے۔', options: ['میرے', 'میرا', 'میریں', 'میری'], correctAnswer: 'میرا' },
    { id: 'u44', chapter: QG, question: 'یہ دہی ۔۔۔۔۔۔', options: ['کھٹی ہے', 'کھٹا ہے', 'کھٹے ہیں', 'کھٹیں ہیں'], correctAnswer: 'کھٹا ہے' },
    { id: 'u45', chapter: QG, question: 'اس نے اُردو ۔۔۔۔۔۔', options: ['پڑھی', 'پڑی', 'پڑھا', 'پڑھیں'], correctAnswer: 'پڑھی' },
    { id: 'u46', chapter: SH, question: '"یہ آرزو تھی تجھے گل کے روبرو کرتے / ہم اور بلبل بے تاب گفتگو کرتے" اس میں قافیہ ہے:', options: ['آرزو', 'گل ، بلبل', 'روبرو ، گفتگو', 'کرتے'], correctAnswer: 'روبرو ، گفتگو' },
    { id: 'u47', chapter: SH, question: 'شعر میں ردیف آتا ہے:', options: ['شروع میں', 'درمیان میں', 'آخر میں', 'آخر سے پہلے'], correctAnswer: 'آخر میں', repeated: 2 },
    { id: 'u48', chapter: SH, question: '"جو برائی تھی مرے نام سے منسوب ہوئی / دوستو! کتنا برا تھا مرا اچھا ہونا" اصطلاح میں یہ شعر کہلاتا ہے:', options: ['مطلع', 'مقطع', 'ردیف', 'عام شعر'], correctAnswer: 'عام شعر' }, // check (options B aur C scan mein dhundlay thay)
    { id: 'u49', chapter: SH, question: '"گل کو ہوتا صبا! قرار اے کاش / رہتی اک آدھ دن، بہار اے کاش" اس شعر میں ردیف ہے:', options: ['گل', 'صبا', 'قرار ، بہار', 'اے کاش'], correctAnswer: 'اے کاش' },
    { id: 'u50', chapter: SH, question: '"تک میر جگر سوختہ کی جلد خبر لے / کیا یار بھروسا ہے چراغِ سحری کا" یہ شعر ہے:', options: ['مطلع کا', 'مقطع کا', 'ردیف کا', 'قافیہ کا'], correctAnswer: 'مقطع کا' },
    { id: 'u51', chapter: IB, question: 'مشبہ اور مشبہ بہ کو کہتے ہیں:', options: ['حروف تشبیہ', 'ارکان استعارہ', 'طرفین تشبیہ', 'طرفین استعارہ'], correctAnswer: 'طرفین تشبیہ', repeated: 2 }, // check (sawal ki statement scan mein kati hui thi)
    { id: 'u52', chapter: IB, question: '"آ رہی ہے چاہِ یوسف سے صدا / دوست یاں تھوڑے ہیں اور بھائی بہت" یہ شعر ہے:', options: ['تلمیح کا', 'استعارہ کا', 'تشبیہ کا', 'ردیف کا'], correctAnswer: 'تلمیح کا' },
    { id: 'u53', chapter: IB, question: '"امڈ آتی ہیں آج یوں آنکھیں / جیسے دریا کہیں مچلتے ہیں" اس شعر میں وجہ تشبیہ ہے:', options: ['امڈنا', 'آنکھیں', 'دریا', 'مچلنا'], correctAnswer: 'امڈنا' }, // check (sawal aur options scan mein katay huay thay)
    { id: 'u54', chapter: IB, question: 'تلمیح ہے:', options: ['شیر دل فوجی', 'بکری کی طرح بزدل', 'سر آنکھوں پر بٹھانا', 'ابنِ مریم'], correctAnswer: 'ابنِ مریم' }, // check (option D scan mein kata hua tha)
    { id: 'u55', chapter: IB, question: 'استعارہ ہے:', options: ['پھول سا چہرہ', 'من و سلویٰ', 'سرِ مژگاں ستارے', 'شش و پنج میں'], correctAnswer: 'سرِ مژگاں ستارے' },
    { id: 'u56', chapter: AS, question: 'نصابی سبق "اُسوہ حسنہ" کے مطابق اسلام میں دو چیزیں ہیں:', options: ['کتاب اور قلم', 'کتاب اور فقہ', 'کتاب اور سنت', 'کتاب اور حدیث'], correctAnswer: 'کتاب اور سنت' },
    { id: 'u57', chapter: AS, question: 'نصابی سبق "مکتوباتِ غالب" کے مطابق نواب مصطفیٰ خان رہا ہو کر کس شہر میں قیام پذیر ہوئے:', options: ['لاہور', 'رام پور', 'بنارس', 'میرٹھ'], correctAnswer: 'میرٹھ' },
    { id: 'u58', chapter: AS, question: 'اچھن کے باپ نے چراغ نہ جلانے کا سبب پوچھا تو اچھن نے کیا بتایا:', options: ['تیل نہیں تھا', 'ماچس نہیں تھی', 'دیا سلائی نہیں تھی', 'چراغ ٹوٹ گیا تھا'], correctAnswer: 'دیا سلائی نہیں تھی' },
    { id: 'u59', chapter: AS, question: 'سرسید احمد خان کھانا کھانے کے بعد کیا پیتے تھے:', options: ['پانی', 'چائے', 'دودھ', 'کافی'], correctAnswer: 'چائے', repeated: 2 },
    { id: 'u60', chapter: AS, question: 'نصابی سبق "سفارش" میں مصنف کے دوست ڈاکٹر کا نام کیا تھا:', options: ['عبدالستار', 'عبدالغفار', 'عبدالجبار', 'عبدالقهار'], correctAnswer: 'عبدالستار' },

    // ---------- Paper: 2024 (Group II) ----------
    { id: 'u61', chapter: AS, question: 'نظام سقے کے مسودات سے ثابت ہوا ہے کہ پانی پہنچانے کے لیے ضروری ہیں:', options: ['فوارے', 'نل', 'مشکیزے', 'پائپ'], correctAnswer: 'نل' }, // check (options C aur D scan mein dhundlay thay)
    { id: 'u62', chapter: AS, question: '"مقالع الاسنان" آلہ ہے:', options: ['دانت نکالنے کا', 'انیما کا', 'پیشاب خارج کرنے کا', 'مثانے سے پتھری نکالنے کا'], correctAnswer: 'دانت نکالنے کا' },
    { id: 'u63', chapter: AS, question: 'مشتاق احمد یوسفی کے بقول ہمارے ہاں لائق قیافہ شناس جی رہے ہیں:', options: ['دال روٹی پر', 'بکرے کی بوٹی پر', 'چکن بریانی پر', 'پستہ و بادام پر'], correctAnswer: 'دال روٹی پر' },
    { id: 'u64', chapter: SH, question: 'اگر شاعر کا تخلص پہلے شعر میں ہو، جس کے دونوں مصرعے ہم قافیہ ہوں، تو کہلائے گا:', options: ['مطلع', 'مقطع', 'قافیہ', 'ردیف'], correctAnswer: 'مطلع' },
    { id: 'u65', chapter: SH, question: '"پھرے راہ سے وہ یہاں آتے آتے / اجل مر رہی تو کہاں آتے آتے" قافیہ ہے:', options: ['یہاں ، کہاں', 'آتے آتے', 'اجل', 'پھرے راہ سے'], correctAnswer: 'یہاں ، کہاں' },
    { id: 'u66', chapter: SH, question: 'ردیف کتنے الفاظ پر مشتمل ہوتی ہے:', options: ['ایک', 'تین', 'پانچ', 'تعداد مقرر نہیں'], correctAnswer: 'تعداد مقرر نہیں' },
    { id: 'u67', chapter: SH, question: 'ہو بہو آنے والے الفاظ کہلاتے ہیں:', options: ['مطلع', 'مقطع', 'ردیف', 'قافیہ'], correctAnswer: 'ردیف' },
    { id: 'u68', chapter: IB, question: '"میری حور تو کہاں ہے؟" وجہ جامع کی نشان دہی کیجیے:', options: ['حور', 'بیوی', 'خوبصورتی', 'کمرہ'], correctAnswer: 'خوبصورتی' }, // check (option D scan mein kata hua tha)
    { id: 'u69', chapter: IB, question: 'استعارہ کس علم کا رکن ہے:', options: ['علمِ بیان', 'علمِ بدیع', 'علمِ عروض', 'علمِ صرف'], correctAnswer: 'علمِ بیان' },
    { id: 'u70', chapter: SH, question: 'غزل میں پایا جانا لازم ہے:', options: ['مقطع', 'مطلع', 'ردیف', 'قافیہ'], correctAnswer: 'قافیہ', repeated: 2 },
    { id: 'u71', chapter: IB, question: 'ارکانِ تشبیہ کی تعداد ہے:', options: ['تین', 'چار', 'پانچ', 'چھ'], correctAnswer: 'پانچ' },
    { id: 'u72', chapter: QG, question: 'گیہوں صحن میں پھیلا ۔۔۔۔۔۔', options: ['دی ہے', 'دیا ہے', 'دیے ہیں', 'دی ہیں'], correctAnswer: 'دیے ہیں' },
    { id: 'u73', chapter: IB, question: 'آیتِ قرآنی یا حدیثِ مبارکہ کی طرف مختصر اشارہ کرنے کو کہتے ہیں:', options: ['تشبیہ', 'استعارہ', 'کنایہ', 'تلمیح'], correctAnswer: 'تلمیح' },
    { id: 'u74', chapter: QG, question: 'گھاس پر شبنم ۔۔۔۔۔۔', options: ['جمی ہوئی ہے', 'لگی ہوئی ہے', 'نظر آئی', 'جما ہوا ہے'], correctAnswer: 'جمی ہوئی ہے' }, // check (sawal ki ibtida scan mein kati hui thi)
    { id: 'u75', chapter: QG, question: 'میز کمرے میں ۔۔۔۔۔۔', options: ['رکھا ہے', 'پڑا ہے', 'پڑے ہیں', 'رہی ہے'], correctAnswer: 'رکھا ہے' },
    { id: 'u76', chapter: QG, question: 'شاعر کو بادشاہ نے خلعت عطا ۔۔۔۔۔۔', options: ['کر دیے ہے', 'کر دی ہیں', 'کر دیا ہے', 'کر دی ہے'], correctAnswer: 'کر دی ہے' },

    // ---------- Paper: 2022 (Group I) ----------
    { id: 'u77', chapter: AS, question: 'غالب کو قید کی سزا ہوئی:', options: ['دو مہینے', 'ایک ماہ', 'پانچ مہینے', 'تین مہینے'], correctAnswer: 'تین مہینے' }, // check (sawal scan mein kata hua tha)
    { id: 'u78', chapter: AS, question: 'غزوہ احد میں مسلمانوں نے شکست کھائی:', options: ['اُحد سے', 'معرکہ اُحد سے', 'غزوہ احد سے', 'جنگِ اُحد سے'], correctAnswer: 'اُحد سے' }, // check (sawal ka text dhundla tha)
    { id: 'u79', chapter: AS, question: 'قمر صاحب کے لیے جھونپڑا ہی ہے:', options: ['نعمت', 'جنت', 'محل', 'گھر'], correctAnswer: 'جنت' }, // check (options scan mein katay huay thay)
    { id: 'u80', chapter: AS, question: 'کشتیِ نوح سے عبرت حاصل کرو، اس میں "کشتیِ نوح" قواعد کی رو سے ہے:', options: ['اسمِ نکرہ', 'اسمِ معرفہ', 'اسمِ ظرفِ مکان', 'اسمِ ظرفِ زمان'], correctAnswer: 'اسمِ معرفہ' }, // check (sawal aur options dhundlay thay)
    { id: 'u81', chapter: AS, question: 'گوندا کی تلاش میں نکل گیا تھا:', options: ['منیر شامی', 'میڈیکل ڈاکٹر', 'حاتم طائی', 'ابنِ انشاء'], correctAnswer: 'منیر شامی' },
    { id: 'u82', chapter: IB, question: '"آتشِ نمرود" ہے:', options: ['تشبیہ', 'قافیہ', 'تلمیح', 'وجہ جامع'], correctAnswer: 'تلمیح' },
    { id: 'u83', chapter: IB, question: 'مشبہ اور مشبہ بہ کہلاتے ہیں:', options: ['وجہ تشبیہ', 'طرفین تشبیہ', 'مشترک صفت', 'وجہ جامع'], correctAnswer: 'طرفین تشبیہ' },
    { id: 'u84', chapter: AS, question: 'بوٹی چکھ کر بکری کے چارے کا مفصل حال بتا سکتے ہیں:', options: ['قیافہ شناس', 'نجومی', 'دست شناس', 'افسانے کا ہیرو'], correctAnswer: 'قیافہ شناس' },
    { id: 'u85', chapter: IB, question: '"ناوک نے اس کی مژگاں کے طائرِ سدرہ تک شکار کیا" میں تلمیح ہے:', options: ['طائرِ سدرہ', 'ناوک', 'مژگاں', 'شکار'], correctAnswer: 'طائرِ سدرہ' },
    { id: 'u86', chapter: IB, question: 'وجہ جامع اہم رکن ہے:', options: ['تشبیہ کا', 'استعارہ کا', 'کنایہ کا', 'تلمیح کا'], correctAnswer: 'استعارہ کا' },
    { id: 'u87', chapter: IB, question: 'استعارہ کے ارکان کی تعداد ہے:', options: ['4', '3', '2', '5'], correctAnswer: '3' }, // check (options C aur D scan mein dhundlay thay)
    { id: 'u88', chapter: SH, question: 'اگر غزل میں ردیف نہ ہو تو وہ کہلائے گی:', options: ['غیر مردف', 'اینٹی غزل', 'مردف', 'نظم'], correctAnswer: 'غیر مردف' },
    { id: 'u89', chapter: SH, question: '"گل کو ہوتا صبا! قرار اے کاش / رہتی اک آدھ دن، بہار اے کاش" میں "قافیہ" کیا ہے:', options: ['گل ، صبا', 'اے کاش', 'قرار ، بہار', 'رہتی ، دن'], correctAnswer: 'قرار ، بہار' },
    { id: 'u90', chapter: SH, question: 'آخری شعر سے پہلے شعر میں تخلص استعمال ہو تو وہ شعر کہلائے گا:', options: ['مقطع', 'مطلع', 'حسنِ مطلع', 'عام شعر'], correctAnswer: 'عام شعر' },
    { id: 'u91', chapter: QG, question: 'میں نے بائیسکل ۔۔۔۔۔۔', options: ['خریدا', 'خریدے', 'خریدی', 'خرید'], correctAnswer: 'خریدی' },
    { id: 'u92', chapter: QG, question: 'شاہدہ بہت ۔۔۔۔۔۔ ہے۔', options: ['لڑاکن', 'لڑاکا', 'لڑاکی', 'لڑاکو'], correctAnswer: 'لڑاکا' },
    { id: 'u93', chapter: QG, question: '"مکتوباتِ اقبال" چھپ ۔۔۔۔۔۔', options: ['گیا', 'گئے', 'گئی', 'گئیں'], correctAnswer: 'گئے' },
    { id: 'u94', chapter: QG, question: 'یہ میرے بیٹے ۔۔۔۔۔۔ فوٹو ہے۔', options: ['کی', 'کا', 'کے', 'کو'], correctAnswer: 'کا' },
    { id: 'u95', chapter: QG, question: 'ہم نے میچ کا ٹکٹ ۔۔۔۔۔۔', options: ['خریدا', 'خریدی', 'خریدے', 'خریدیں'], correctAnswer: 'خریدا' },

    // ---------- Paper: 2022 (Group II) ----------
    { id: 'u96', chapter: AS, question: 'ظرافت اور خوش طبعی سرسید کی:', options: ['کمزوری تھی', 'فطرت ثانیہ تھی', 'جبلت میں داخل تھی', 'پہچان تھی'], correctAnswer: 'فطرت ثانیہ تھی' }, // check (options A, B, C scan mein dhundlay thay)
    { id: 'u97', chapter: AS, question: '"سقت" کے لغوی معنی کیا ہیں:', options: ['رکنا', 'راستہ', 'چلنا', 'ٹھہراؤ'], correctAnswer: 'چلنا' }, // check (lafz scan mein dhundla tha)
    { id: 'u98', chapter: AS, question: 'ابوالقاسم زہراوی کے عہد میں قرطبہ شہر میں کل کتنے سرکاری ہسپتال تھے:', options: ['100', '200', '150', '50'], correctAnswer: '50' },
    { id: 'u99', chapter: AS, question: '"کیا واقعی دنیا گول ہے" کے مصنف کا نام کیا ہے:', options: ['پطرس بخاری', 'مشتاق یوسفی', 'ابنِ انشاء', 'کرنل محمد خان'], correctAnswer: 'ابنِ انشاء' },
    { id: 'u100', chapter: SH, question: '"قافیہ" مشتق ہے لفظ:', options: ['وقف سے', 'قفی سے', 'قوفہ سے', 'قضا سے'], correctAnswer: 'قفی سے' },
    { id: 'u101', chapter: SH, question: '"حکم ہے سچ بھی قرینے سے کہا جائے عدیم / زخم کو زخم نہیں پھول بتایا جائے" یہ شعر:', options: ['مطلع ہے', 'مقطع ہے', 'ردیف ہے', 'قافیہ ہے'], correctAnswer: 'مقطع ہے' },
    { id: 'u102', chapter: SH, question: '"قافیہ" کے لغوی معنی ہیں:', options: ['پیچھے آنے والا', 'گھڑ سوار کے پیچھے بیٹھنے والا', 'بار بار آنے والا', 'ان میں سے کوئی نہیں'], correctAnswer: 'پیچھے آنے والا' },
    { id: 'u103', chapter: IB, question: '"بزمِ عدو میں صورتِ پروانہ دل میرا" اس مصرع میں مشبہ کیا ہے:', options: ['بزم', 'پروانہ', 'دل', 'صورت'], correctAnswer: 'دل' },
    { id: 'u104', chapter: IB, question: 'وہ مشترک صفت جو مستعار لہ اور مستعار منہ میں پائی جائے کہلاتی ہے:', options: ['حرف تشبیہ', 'استعارہ', 'وجہ شبہ', 'وجہ جامع'], correctAnswer: 'وجہ جامع' },
    { id: 'u105', chapter: IB, question: '"کس شیر کی آمد ہے کہ رن کانپ رہا ہے" اس مصرع میں ہے:', options: ['استعارہ', 'تشبیہ', 'وجہ جامع', 'تلمیح'], correctAnswer: 'استعارہ' },
    { id: 'u106', chapter: IB, question: 'تلمیح کی نشاندہی کیجیے:', options: ['گلِ مراد', 'میرا شیر', 'چاند چہرہ', 'واقعہ معراج'], correctAnswer: 'واقعہ معراج' },
    { id: 'u107', chapter: QG, question: 'ایسی باتوں سے رعب ختم ہو ۔۔۔۔۔۔', options: ['جاتا ہے', 'جاتی ہے', 'چکی ہے', 'رہی ہے'], correctAnswer: 'جاتا ہے' },
    { id: 'u108', chapter: QG, question: 'ترازو ٹوٹ ۔۔۔۔۔۔', options: ['گیا ہے', 'گئی ہے', 'گئے ہیں', 'ان میں سے کوئی نہیں'], correctAnswer: 'گیا ہے' },
    { id: 'u109', chapter: QG, question: 'نازیہ اور شازیہ نے کہا ہم بازار جائیں ۔۔۔۔۔۔', options: ['گی', 'گے', 'گیں', 'گیا'], correctAnswer: 'گی' },
    { id: 'u110', chapter: QG, question: 'نوائے وقت ہر روز شائع ۔۔۔۔۔۔ ہے۔', options: ['ہوتی', 'ہوتے', 'ہوتا', 'ہوئیں'], correctAnswer: 'ہوتا' },
    { id: 'u111', chapter: QG, question: 'اکبر نے گھوڑا گاڑی ۔۔۔۔۔۔', options: ['خریدے', 'خریدا', 'خریدی', 'خریدیں'], correctAnswer: 'خریدی' },
];