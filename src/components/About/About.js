import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { photo, name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {photo && (
          <img height="200px" alt="Avatar placeholder" src={photo} />
        )}

        <div>
          {name && (
            <h1>
              Hi, I&apos;m<br /><span className='about__name'>{name}.</span>
            </h1>
          )}

          <div className='about__contact center'>
            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  Curriculum Vitae
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
                    <div className='about__social'>
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
                    <div className='about__social'>
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
                    <div className='about__social'>
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

      {role && <h2 className='about__role'>A {role}.</h2>}


      <p className='about__desc'>{description && description}</p>
    </div>
  )
}

export default About
