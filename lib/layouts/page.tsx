import { useRouter } from "next/router";
import { LocaleProvider } from "lib/context/locale";
import Footer from "lib/components/Footer";
import styles from 'styles/Layout.module.css'

interface Props {
    pageWidth: string
    children: React.ReactNode
}

export default function PageLayout({ pageWidth, children }: Props) {
    const router = useRouter()
    const locale = router.query?.locale as string

    return (
        <LocaleProvider lang={locale || 'cs'}>
            <div className={styles.container + `${pageWidth ? (' ' + pageWidth) : ''}`}>
                {children}
                <Footer/>
            </div>
        </LocaleProvider>
    )
}
