#!/usr/bin/env python3
import json
import os
import re
from googletrans import Translator

# Language mapping from filename to Google Translate language code
LANGUAGE_MAP = {
    'english.json': 'en',
    'chinese.json': 'zh-cn',
    'french.json': 'fr',
    'spanish.json': 'es',
    'germany.json': 'de',
    'italiano.json': 'it',
    'korean.json': 'ko',
    'russian.json': 'ru',
    'poland.json': 'pl',
    'netherlands.json': 'nl',
    'turkey.json': 'tr',
    'indonesia.json': 'id',
    'finland.json': 'fi',
    'romania.json': 'ro',
    'hungary.json': 'hu',
    'slovakia.json': 'sk',
    'bulgaria.json': 'bg',
    'latvia.json': 'lv',
    'lithuania.json': 'lt'
}

def translate_text(text, target_lang):
    """Translate text while preserving %s placeholders and {{}} markers"""
    translator = Translator()
    
    # Remove {{}} markers temporarily
    text_no_markers = re.sub(r'\{\{|\}\}', '', text)
    
    # Protect %s placeholders by replacing them with unique tokens
    placeholders = re.findall(r'%s\d+|%s', text_no_markers)
    protected_text = text_no_markers
    tokens = []
    
    for i, ph in enumerate(placeholders):
        token = f"PLACEHOLDER{i}"
        tokens.append((token, ph))
        protected_text = protected_text.replace(ph, token, 1)
    
    # Translate
    try:
        translated = translator.translate(protected_text, src='ja', dest=target_lang).text
    except Exception as e:
        print(f"Translation error: {e}")
        return text_no_markers
    
    # Restore placeholders
    for token, original in tokens:
        translated = translated.replace(token, original)
    
    return translated

def process_json_file(filename, lang_code):
    """Process a single JSON file and translate Japanese to target language"""
    filepath = os.path.join('docs', filename)
    
    print(f"Processing {filename} (target language: {lang_code})...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Load Japanese reference
    with open('docs/japanese.json', 'r', encoding='utf-8') as f:
        japanese_data = json.load(f)
    
    translated_data = []
    
    for i, entry in enumerate(japanese_data):
        japanese_key = entry[0]  # With {{}}
        japanese_text = entry[1]  # Pure Japanese
        
        # Translate the Japanese text
        translated_text = translate_text(japanese_text, lang_code)
        
        # Keep the key (with {{}}) and replace only the translation
        translated_data.append([japanese_key, translated_text])
        
        print(f"  [{i+1}/{len(japanese_data)}] Translated")
    
    # Write back to file
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    print(f"✓ Completed {filename}\n")

def main():
    for filename, lang_code in LANGUAGE_MAP.items():
        if os.path.exists(os.path.join('docs', filename)):
            process_json_file(filename, lang_code)
        else:
            print(f"Warning: {filename} not found, skipping...\n")

if __name__ == '__main__':
    main()
