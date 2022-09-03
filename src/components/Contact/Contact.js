import styles from './Contact.module.css'

const Contact = ({ contact }) => {
    if (!contact.email) return null

    return (
        <section className={`section ${styles.contact} center`} id='contact'>
            <h2 className='section__title'>Contact</h2>
            <a href={`mailto:${contact.email}`}>
                <span type='button' className='btn btn--outline'>
          Email me
                </span>
            </a>
        </section>
    )
}

export default Contact
