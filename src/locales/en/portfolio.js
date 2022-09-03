const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://www.amantel.de',
    // title: 'amantel',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Alexander Mantel',
    role: `Full Stack Developer & M.\u202fSc. Student @ TU Clausthal`,
    description:
        `From developing across the stack in Java, Kotlin, React.JS, and Kubernetes to learning and teaching mathematics, I love to solve problems of all shapes and sizes.`,
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
                    <em>Ongoing Research Project: </em>
                    The aim of the project is to aid individuals in transferring their knowledge to others via self-made video tutorials recorded on smart glasses.
                    <br /><br />
                    In particular, it strives to empower employees in dextrous work environments to share their modus-operandi in ways where documentation or even third-party footage isn&apos;t effective.
                </p>
            ),
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'kubernetes'],
        // sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
        livePreview: 'https://smartorials.de',
    },
    {
        name: `Pflegebrille 2.0\n(Care Lenses)`,
        description:
            (
                <p>
                    <em>Research Project: </em>
                    The Care Lenses aim to and are currently the only available concept to support nursing practice that offers a variety of different activities via smart glasses in Germany.
                    <br /><br />
                    These include inspecting patient info and updates, documenting nursing activities, viewing professional workflows, as well as live consulting with registered doctors and nurses.
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
    'Architecture': [
        'RESTful APIs',
        'CI/CD'
    ],
    'Languages': [
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
    'Platform Development & Administration': [
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
    'Frameworks & Libraries': [
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
    'Tools & Operating Systems': [
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
