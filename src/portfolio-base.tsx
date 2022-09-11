import { HeaderInfo, AboutInfo, ProjectsInfo, SkillsInfo, ContactInfo, Portfolio } from './portfolio-types';

const header: HeaderInfo = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://www.amantel.de',
    // title: 'amantel',
};

const about: AboutInfo = {
    // all the properties are optional - can be left empty or deleted
    name: 'Alexander Mantel',
    role: '',
    description: '',
    resume: 'https://www.amantel.de/cv.pdf',
    social: {
        github: 'https://github.com/Mathogrammer',
        xing: 'https://www.xing.com/profile/AlexanderMarc_Mantel/',
        mail: 'mailto:contact@amantel.de'
    },
};

const projects: ProjectsInfo = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'SmARtorials',
        description: '',
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'kubernetes'],
        livePreview: 'https://smartorials.de',
    },
    {
        name: `Pflegebrille 2.0\n(Care Lenses)`,
        description: '',
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'kubernetes', 'webrtc', 'opencv'],
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
];

const skills: SkillsInfo = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    {
        category: 'Architecture',
        items: [
            'RESTful APIs',
            'CI/CD'
        ]
    },
    {
        category: 'Languages',
        items: [
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
                name: 'TypeScript',
                icon: 'typescript-plain',
                href: 'www.typescriptlang.org',
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
        ]
    },
    {
        category: 'Platform Development & Administration',
        items: [
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
        ]
    },
    {
        category: 'Frameworks & Libraries',
        items: [
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
        ]
    },
    {
        category: 'Tools & Operating Systems',
        items: [
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
];

// TODO: Interests
// Math-links:
// https://de.wikipedia.org/wiki/Analysis
// https://de.wikipedia.org/wiki/Topologie_(Mathematik)
// https://de.wikipedia.org/wiki/Mengenlehre
// https://de.wikipedia.org/wiki/Stochastik
// https://de.wikipedia.org/wiki/Mathematische_Logik

const contact: ContactInfo = {
    // email is optional - if left empty Contact section won't show up
    email: 'contact@amantel.de',
};

export const portfolio: Portfolio = { header, about, projects, skills, contact };