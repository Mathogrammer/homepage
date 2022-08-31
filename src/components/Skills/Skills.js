import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {
        Object.entries(skills).map(([category, items]) => (
          <div key={uniqid()}>
            <h4 className='category__title'>{category}</h4>
            <ul className='skills__list'>
              {items.map((skill) => {
                if (skill.href) {
                  return (
                    <li key={uniqid()} className='skills__list-item btn btn--plain'>
                      <a href={`https://${skill.href}`}>
                        {
                          skill.icon && <i className={`devicon-${skill.icon}`} />
                        }
                        {skill.name || skill}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={uniqid()} className='skills__list-item btn btn--plain'>{
                    skill.icon && <i className={`devicon-${skill.icon}`} />
                  }
                    {skill.name || skill}
                  </li>
                )
              })}
            </ul>
          </div>
        ))
      }
    </section >
  )
}

export default Skills
