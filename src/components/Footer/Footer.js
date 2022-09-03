import Link from 'next/link'
import styles from './Footer.module.css'
import { Trans } from "@lingui/macro"

const Footer = () => (
    <footer className={styles.footer}>
        © 2022 Alexander Marc Mantel -&nbsp;
        <Link href='/legalnotice-privacy'>
            <a className={`link ${styles.footer__link}`}>
                <Trans>
                    Legal Notice / Privacy Policy
                </Trans>
            </a>
        </Link>
    </footer>
)

export default Footer
