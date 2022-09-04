const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://www.amantel.de',
    // title: 'amantel',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Alexander Mantel',
    role: `Full Stack Entwickler & M.\u202fSc. Student @ TU Clausthal`,
    description:
        `Von der Entwicklung über den gesamten Stack, u.\u202fa. in Java, Kotlin, React.JS und Kubernetes, bis hin zum Lernen und Lehren von Mathematik \u2013 ich liebe es, komplexe Aufgaben zu verstehen und zu lösen.`,
    resume: 'https://www.amantel.de/cv.pdf',
    social: {
        github: 'https://github.com/Mathogrammer',
        mail: 'mailto:contact@amantel.de'
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'SmARtorials',
        description:
            (
                <p>
                    <em>Laufendes Forschungsprojekt: </em>
                    Das Ziel des Projektes ist es Menschen durch selbst erstellte Videotutorials, die mittels Datenbrillen gefilmt werden, dabei zu unterstützen, ihr Wissen weiterzugeben.
                    <br /><br />
                    Insbesondere sollen Mitarbeiter*innen von kleinen und mittelständischen Unternehmen sollen dabei in der Lage versetzt werden, mit geringem Aufwand ihr Wissen zu dokumentieren, für die sie vorher keine geeigneten Möglichkeiten der Explizierung hatten.
                </p>
            ),
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'kubernetes'],
        // sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
        livePreview: 'https://smartorials.de',
    },
    {
        name: `Pflegebrille 2.0`,
        description:
            (
                <p>
                    <em>Forschungsprojekt: </em>
                    Die Pflegebrille ist derzeit das einzige verfügbare Konzept zur Unterstützung der Pflegepraxis in Deutschland, das eine Vielzahl von unterschiedlichen Tätigkeiten anbietet.
                    <br /><br />
                    Darunter zählen das Prüfen von Patientendaten und -berichten, das Dokumentieren von Pflegetätigkeiten, das Ansehen von professionell erstellten Arbeitsabläufen sowie das Konsultieren mit Ärzten und anderen Pflegekräften in Echtzeit.
                </p>
            ),
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'kubernetes', 'webrtc', 'opencv'],
        // stack: ['localstorage', 'Openweather API', 'Google Map API', 'Movie Database API'],
        // sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
        livePreview: 'https://pflegebrille.de',
    },
    // {
    // name: 'Smart Fooding',
    // description:
    //   'TODO',
    // stack: ['html-css-javascript', 'sequelize', 'React'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
    // },
]

const skills = {
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'Softwarearchitekturen': [
        'RESTful APIs',
        'CI/CD'
    ],
    'Programmiersprachen': [
        {
            name: 'Java',
            icon: 'java-plain',
            href: 'www.java.com'
        },
        {
            name: 'Kotlin',
            icon: 'kotlin-plain',
            href: 'www.kotlinlang.org',
        },
        {
            name: 'JavaScript',
            icon: 'javascript-plain',
            href: 'www.javascript.com',
        },
        {
            name: 'HTML',
            icon: 'html5-plain-wordmark',
        },
        {
            name: 'CSS',
            icon: 'css3-plain-wordmark',
        },
        {
            name: 'Python',
            icon: 'python-plain',
            href: 'www.python.org',
        },
        {
            name: 'C#',
            icon: 'csharp-plain',
            href: 'docs.microsoft.com/de-de/dotnet/csharp/',
        },
        {
            name: 'LaTeX',
            icon: 'latex-plain',
            href: 'www.latex-project.org',
        },
        {
            name: 'C/C++',
            icon: 'cplusplus-plain',
            href: 'www.cplusplus.com'
        }
        ,
        'XML, JSON, YAML',
        {
            name: 'SQLite',
            icon: 'sqlite-plain',
            href: 'www.sqlite.com',
        },
    ],
    'Platform Entwicklung & Administration': [
        {
            name: 'Android',
            icon: 'android-plain',
            href: 'www.android.com',
        },
        {
            name: 'Docker',
            icon: 'docker-plain',
            href: 'www.docker.com',
        },
        {
            name: 'Gitlab CI/CD',
            icon: 'gitlab-plain',
            href: 'docs.gitlab.com/ee/ci/',
        },
        {
            name: 'Kubernetes',
            icon: 'kubernetes-plain',
            href: 'www.kubernetes.io',
        },
        {
            name: 'Node.JS',
            icon: 'nodejs-plain',
            href: 'www.nodejs.org',
        },
    ],
    'Frameworks & Bibliotheken': [
        {
            name: 'Android Room',
            href: 'developer.android.com/training/data-storage/room',
        },
        {
            name: 'React.JS',
            icon: 'react-plain',
            href: 'www.reactjs.org',
        },
        {
            name: 'WebRTC',
            href: 'www.webrtc.org',
        },
        {
            name: 'OpenCV',
            icon: 'opencv-plain',
            href: 'www.opencv.org',
        },
    ],
    'Tools & Betriebssysteme': [
        {
            name: 'Windows',
            icon: 'windows8-plain',
            href: 'www.windows.com',
        },
        {
            name: 'Linux',
            icon: 'linux-plain',
            href: 'www.linux.org',
        },
        {
            name: 'Git',
            icon: 'git-plain',
            href: 'www.git-scm.com',
        },
        {
            name: 'Android Studio',
            icon: 'androidstudio-plain',
            href: 'developer.android.com/studio',
        },
        {
            name: 'IntelliJ IDEA',
            icon: 'intellij-plain',
            href: 'www.jetbrains.com/idea',
        },
        {
            name: 'PyCharm',
            icon: 'pycharm-plain',
            href: 'www.jetbrains.com/pycharm/',
        },
        {
            name: 'VS Code',
            icon: 'vscode-plain',
            href: 'code.visualstudio.com',
        },
        {
            name: 'Rider',
            icon: 'jetbrains-plain',
            href: 'www.jetbrains.com/rider',
        }
    ]
}

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'contact@amantel.de',
}

export { header, about, projects, skills, contact }
