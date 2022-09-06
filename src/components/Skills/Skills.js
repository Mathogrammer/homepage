// import { useMemo } from 'react'
import uniqid from 'uniqid';
import styles from './Skills.module.css';

const Skills = ({ skills }) => {

    // const skillCategories = useMemo(() => {
    //     skills.map
    // }, [skills]);

    if (!skills) return null;

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            {Object.entries(skills).map(([category, items]) => (
                <div key={uniqid()}>
                    <h4 className={styles.skills__category__title}>{category}</h4>
                    <ul className={styles.skills__list}>
                        {items.map((skill) => {
                            if (skill.href) {
                                return (
                                    <li
                                        key={uniqid()}
                                        className={`${styles.skills__list_item} btn btn--plain`}
                                    >
                                        <a href={`https://${skill.href}`}>
                                            {skill.icon && <i className={`devicon-${skill.icon}`} />}
                                            {skill.name || skill}
                                        </a>
                                    </li>
                                );
                            }
                            return (
                                <li
                                    key={uniqid()}
                                    className={`${styles.skills__list_item} btn btn--plain`}
                                >
                                    {skill.icon && <i className={`devicon-${skill.icon}`} />}
                                    {skill.name || skill}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Skills;
