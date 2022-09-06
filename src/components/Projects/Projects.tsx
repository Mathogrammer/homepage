import { Trans } from '@lingui/macro';
import { StaticProps } from '../../../pages';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import styles from './Projects.module.css';

const Projects = ({ projects }: Pick<StaticProps['props'], 'projects'>) => {
    if (!projects.length) return null;

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'><Trans>Projects</Trans></h2>

            <div className={styles.projects__grid}>
                {projects.map((project, index) => (
                    <ProjectContainer key={`project-${index}`} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
