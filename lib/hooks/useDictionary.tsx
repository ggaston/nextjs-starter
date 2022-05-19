import { useLocale } from 'lib/hooks/useLocale'
import translations from 'content/dictionaries/ui.json'

/**
 * 
 * @returns function Translated strings from translation JSON dictionary
 */
export function useTranslations() {
    const { locale } = useLocale()

    function t(key: string):string {
        
        if (translations[locale]) {
            if(!translations[locale][key]){
                console.warn(`${key} in ${locale} not available.`)
            } 

            return translations[locale][key] || translations['cs'][key]
        }
    }

    return { t }
}
