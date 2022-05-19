import styles from 'styles/Navigation.module.css'
import ActiveLink from './ActiveLink'

export default function Navigation({ navItems }) {

    return (
        <ul className={styles.nav}>

            {navItems.map((navItem, index) =>
                <li className={styles.navitem} key={index} >
                    {/* trailing slash if enabled in next.config.js */}
                    <ActiveLink href={navItem.path + navItem.filename + '/'} activeClassName={styles.active}>
                        <a>{`${navItem.filename} (${navItem.path.slice(1,-1)})`}</a>
                    </ActiveLink>
                </li>
            )}
        </ul>
    )
}