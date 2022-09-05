import { useThemeContext } from '../src/contexts/theme'
import Head from '../src/CustomHead'
import Header from '../src/components/Header/Header'
import About from '../src/components/About/About'
import Projects from '../src/components/Projects/Projects'
import Skills from '../src/components/Skills/Skills'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import styles from '../src/app.module.css'
import ReactDOMServer from 'react-dom/server'

const App = ({ header, about, projects, skills, contact }) => {
    const [{ themeName }] = useThemeContext()

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
    )
}

export async function getStaticProps(context) {
    const locale = context.locale;
    let data;
    if (process.env.NODE_ENV === 'production')
        data = await import(`../src/locales/${locale}/messages`);
    else
        data = await import(`@lingui/loader!../src/locales/${locale}/messages.po`);

    const portfolioLocale = locale === 'pseudo' ? 'en' : locale;
    const portfolio = await import(`../src/locales/${portfolioLocale}/portfolio`);

    const projects = portfolio.projects.map(project => ({
        ...project,
        description: ReactDOMServer.renderToStaticMarkup(project.description),
    }));

    return {
        props: {
            ...portfolio,
            projects,
            translation: data.messages
        },
    }
}

export default App
