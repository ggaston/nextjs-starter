import { useRouter } from "next/router";
import { LocaleProvider } from "../context/locale";

interface Props {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
    const router = useRouter()
    const locale = router.query?.locale as string

    return (
        <LocaleProvider lang={locale || 'cs'}>
            {children}
        </LocaleProvider>
    )
}
