import { useThemeContext } from '../src/contexts/theme';
import Head from '../src/CustomHead';
import Header from '../src/components/Header/Header';
import About from '../src/components/About/About';
import Projects from '../src/components/Projects/Projects';
import Skills from '../src/components/Skills/Skills';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import styles from '../src/app.module.css';
import ReactDOMServer from 'react-dom/server';
import { Portfolio, ProjectsInfo } from '../src/portfolioTypes';
import { Messages } from "@lingui/core";
import { GetStaticProps } from 'next';

type PortfolioAmend = Omit<Portfolio, 'projects'>;
type ProjectsInfoAmend = Omit<ProjectsInfo[number], 'description'>;

type StaticProps = {
    props: PortfolioAmend & {
        projects: Array<ProjectsInfoAmend & {
            description: string;
        }>;
        translation: Messages;
    }
} 


const App = ({ header, about, projects, skills, contact }: StaticProps['props']) => {
    const [{ themeName }] = useThemeContext();

    return (
        <div>
            <Head />
            <div id='top' className={`${themeName} ${styles.app}`}>
                <div className={styles.spacerTop} />
                <Header
                    header={header}
                    projects={projects}
                    skills={skills}
                    contact={contact}
                />
                <div className={styles.spacerBottom} />

                <main>
                    <About about={about} />
                    <Projects projects={projects} />
                    <Skills skills={skills} />
                    <Contact contact={contact} />
                </main>

                <ScrollToTop />
                <Footer />
            </div>
        </div>
    );
};
export const getStaticProps: GetStaticProps = async (context) => {
    const locale = context.locale;
    let data: { messages: Messages };
    if (process.env.NODE_ENV === 'production')
        data = await import(`../src/locales/${locale}/messages`);
    else
        data = await import(`@lingui/loader!../src/locales/${locale}/messages.po`);

    const portfolioLocale = locale === 'pseudo' ? 'en' : locale;
    const portfolio: Portfolio = await import(`../src/locales/${portfolioLocale}/portfolio`).then(module => module.portfolio);

    const projects = portfolio.projects.map(project => ({
        ...project,
        description: typeof project.description === 'string' ? project.description : ReactDOMServer.renderToStaticMarkup(project.description),
    }));

    const result: StaticProps = {
        props: {
            ...portfolio,
            projects,
            translation: data.messages
        },
    };

    return result;
};

export type { StaticProps };

export default App;
