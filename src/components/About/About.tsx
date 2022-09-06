import { t, Trans } from "@lingui/macro";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import styles from './About.module.css';
import XingIcon from './XingIcon';
import photo from '../../../public/profile/profilePicRounded.png';
import type { Portfolio } from "../../portfolioTypes";


const About = ({
    about: { name, role, description, resume, social }
}: Pick<Portfolio, 'about'>) => (
    <div className={`${styles.about} center`}>
        <div className={styles.about__header}>
            {photo && (
                <div className={styles.about__image}>
                    <Image width='200px' height='200px' alt={t`Avatar placeholder`} src={photo} placeholder='blur' />
                </div>
            )}

            <div>
                {name && (
                    <h1><Trans>
                        Hi, I&apos;m
                        <br />
                        <span className={styles.about__name}>{name}.</span>
                    </Trans></h1>
                )}

                <div className='center'>
                    {resume && (
                        <a href={resume}>
                            <span className='btn btn--outline'><Trans>
                                Curriculum Vitae [DE]
                            </Trans></span>
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

                            {social.xing && (
                                <a
                                    href={social.xing}
                                    aria-label='xing'
                                    className='link link--icon'
                                >
                                    <div className={styles.about__social}>
                                        <XingIcon />
                                        Xing
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
                                        <Trans>
                                            Mail
                                        </Trans>
                                    </div>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>

        {role && <h2 className={styles.about__role}><Trans>A {role}.</Trans></h2>}

        <p className={styles.about__desc}>{description ?? ''}</p>
    </div>
);

export default About;
