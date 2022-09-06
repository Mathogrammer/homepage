import { Portfolio } from '../../portfolio-types';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

const Header = ({ header: { homepage, title }, projects, skills, contact }: Omit<Portfolio, 'about'>) => (
    <header className={`${styles.header} center`}>
        <h3>
            {homepage ? (
                <a href={homepage} className='link'>
                    {title}
                </a>
            ) : (
                title
            )}
        </h3>
        <Navbar projects={projects} skills={skills} contact={contact} />
    </header>
);

export default Header;
