import { Portfolio } from '../../portfolio-types';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import styles from './Skills.module.css';

const Skills = ({ skills }: Pick<Portfolio, 'skills'>) => {

    if (!skills) return null;

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            {skills.map(({ category, items }, catergoryIndex) => (
                <div key={`skill-category-${catergoryIndex}`}>
                    <h4 className={styles.skills__category__title}>{category}</h4>
                    <ul className={styles.skills__list}>
                        {items.map((skill, itemIndex) => {
                            if (typeof skill !== 'string' && skill.href) {
                                return (
                                    <a key={`skill-item-${itemIndex}`} href={`https://${skill.href}`}>
                                        <li className={`${styles.skills__list_item} btn btn--plain`}>
                                            {!!skill.icon && <i className={`devicon-${skill.icon}`} />}
                                            {!!skill.customIcon && (
                                                <CustomIcon
                                                    name={skill.customIcon}
                                                    className={styles.skills__list_item__custom_icon}
                                                    aria-hidden='true'
                                                />
                                            )}
                                            {skill.name}
                                        </li>
                                    </a>
                                );
                            }
                            return (
                                <li
                                    key={`skill-item-${itemIndex}`}
                                    className={`${styles.skills__list_item} btn btn--plain`}
                                >
                                    {!!(typeof skill !== 'string' && skill.icon) && <i className={`devicon-${skill.icon}`} />}
                                    {!!(typeof skill !== 'string' && skill.customIcon) && (
                                        <CustomIcon name={skill.customIcon}
                                            className={styles.skills__list_item__custom_icon}
                                        />
                                    )}
                                    {typeof skill === 'string' ? skill : skill.name}
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
