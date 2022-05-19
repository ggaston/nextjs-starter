import { createContext, useState } from "react";

export const LocaleContext = createContext(undefined)

interface Props  {
    lang: string
    children: React.ReactNode
}

export const LocaleProvider = function({lang, children}:Props) {
    const [locale, setLocale] = useState(lang)

    return (
        <LocaleContext.Provider value={{
            locale, setLocale
        }}>
            {children}
        </LocaleContext.Provider>
    )
}