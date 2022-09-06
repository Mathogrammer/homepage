import { Trans } from '@lingui/macro';
import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
    if (!projects.length) return null;

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'><Trans>Projects</Trans></h2>

            <div className={styles.projects__grid}>
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
