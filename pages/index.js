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

import * as portfolio from '../src/portfolio'

const App = ({ header, about, projects, skills, contact }) => {
    const [{ themeName }] = useThemeContext()

    return (
        <div>
            <Head />
            <div id='top' className={`${themeName} ${styles.app}`}>
                <div className={styles.spacer} />
                <Header
                    header={header}
                    projects={projects}
                    skills={skills}
                    contact={contact}
                />
                <div className={styles.spacer} />

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

export async function getStaticProps() {
    const projects = portfolio.projects.map(project => ({
        ...project,
        description: ReactDOMServer.renderToStaticMarkup(project.description),
    }));

    return {
        props: {
            ...portfolio,
            projects
        },
    }
}

export default App
