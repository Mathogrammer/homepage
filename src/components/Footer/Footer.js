import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
    © 2022 Alexander Marc Mantel -&nbsp;
        <Link href='/legalnotice-privacy'>
            <a className={`link ${styles.footer__link}`}>
        Legal Notice / Privacy Policy
            </a>
        </Link>
    </footer>
)

export default Footer
