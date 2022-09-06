import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from './ProjectContainer.module.css';
import type { StaticProps } from '../../../pages/index';

const ProjectContainer = ({ project } : { project: StaticProps['props']['projects'][number]}) => (
    <div className={styles.project}>
        <h3>{project.name}</h3>
    
        <div className={styles.project__description} dangerouslySetInnerHTML={{ __html: project.description }} />

        {project.stack && (
            <ul className={styles.project__stack}>
                {project.stack.map((item, index) => (
                    <li key={`project-stack-${index}`} className={styles.project__stack_item}>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon />
            </a>
        )}
    </div>
);

export default ProjectContainer;
