import styles from './Contact.module.css';
import { Trans } from "@lingui/macro";

const Contact = ({ contact }) => {
    if (!contact.email) return null;

    return (
        <section className={`section ${styles.contact} center`} id='contact'>
            <h2 className='section__title'><Trans>Contact</Trans></h2>
            <a href={`mailto:${contact.email}`}>
                <span type='button' className='btn btn--outline'><Trans>
                    Email me
                </Trans></span>
            </a>
        </section>
    );
};

export default Contact;
