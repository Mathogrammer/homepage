import { Trans } from '@lingui/macro';
import { StaticProps } from '../../../pages';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import styles from './Projects.module.css';

const Projects = ({ projects }: Pick<StaticProps['props'], 'projects'>) => {
    if (!projects.length) return null;

    const [currentProject, ...previousProjects] = projects;

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'><Trans>Projects</Trans></h2>

            <div className={styles.projects__section}>
                <h3><Trans>Current Project</Trans></h3>
                <ProjectContainer project={currentProject} />
            </div>

            <div className={styles.projects__section}>
                <h3><Trans>Previous Projects</Trans></h3>
                <div className={styles.projects__grid}>
                    {previousProjects.map((project, index) => (
                        <ProjectContainer key={`project-${index}`} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
