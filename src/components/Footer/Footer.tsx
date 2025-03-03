import Link from 'next/link';
import styles from './Footer.module.css';
import { Trans } from "@lingui/macro";

const Footer = () => (
    <footer className={styles.footer}>
        © 2025 Alexander Marc Mantel -&nbsp;
        <Link className={`link ${styles.footer__link}`} href='/legalnotice-privacy'>
            <Trans>
                Legal Notice / Privacy Policy
            </Trans>
        </Link>
    </footer>
);

export default Footer;
