import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import Image from 'next/image'
import styles from './About.module.css'
import photo from '../../../public/profile/profilePicRounded.png';

const About = ({
    about: { name, role, description, resume, social },
}) => (
    <div className={`${styles.about} center`}>
        <div className={styles.about__header}>
            {photo && (
                <div className={styles.about__image}>
                    <Image width='200px' height='200px' alt='Avatar placeholder' src={photo} placeholder='blur' />
                </div>
            )}

            <div>
                {name && (
                    <h1>
            Hi, I&apos;m
                        <br />
                        <span className={styles.about__name}>{name}.</span>
                    </h1>
                )}

                <div className='center'>
                    {resume && (
                        <a href={resume}>
                            <span type='button' className='btn btn--outline'>
                Curriculum Vitae [DE]
                            </span>
                        </a>
                    )}

                    {social && (
                        <>
                            {social.github && (
                                <a
                                    href={social.github}
                                    aria-label='github'
                                    className='link link--icon'
                                >
                                    <div className={styles.about__social}>
                                        <GitHubIcon />
                    GitHub
                                    </div>
                                </a>
                            )}

                            {social.linkedin && (
                                <a
                                    href={social.linkedin}
                                    aria-label='linkedin'
                                    className='link link--icon'
                                >
                                    <div className={styles.about__social}>
                                        <LinkedInIcon />
                    LinkedIn
                                    </div>
                                </a>
                            )}

                            {social.mail && (
                                <a
                                    href={social.mail}
                                    aria-label='mail'
                                    className='link link--icon'
                                >
                                    <div className={styles.about__social}>
                                        <MailIcon />
                    Mail
                                    </div>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>

        {role && <h2 className={styles.about__role}>A {role}.</h2>}

        <p className={styles.about__desc}>{description && description}</p>
    </div>
)

export default About
