import style from 'styles/Footer.module.css'

export default function Footer(){

    return (
        <footer className={style.footer}>
            2013-{new Date().getFullYear()} © 
        </footer>
    )
}