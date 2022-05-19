import { useContext } from "react"
import { LocaleContext } from "lib/context/locale"

export function useLocale() {
    const context = useContext(LocaleContext)

    return context
}