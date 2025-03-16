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
        linkedin: 'www.linkedin.com/in/alexander-marc-mantel-78584a235',
        mail: 'mailto:contact@amantel.de'
    },
};

const projects: ProjectsInfo = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Fakultät 73',
        description: '',
        stack: ['reactjs', 'typescript', 'java', 'spring-boot', 'docker', 'postgresql', 'azure'],
        livePreview: 'https://www.volkswagen-karriere.de/de/einstiegsmoeglichkeiten/absolventen/fakultaet-73.html'
    },
    {
        name: 'SmARtorials',
        description: '',
        stack: ['android', 'reactjs', 'kotlin', 'java', 'nodejs', 'docker', 'kubernetes'],
        livePreview: 'https://smartorials.de',
    },
    {
        name: `Pflegebrille 2.0\n(Care Lenses)`,
        description: '',
        stack: ['android', 'reactjs', 'kotlin', 'java', 'docker', 'kubernetes', 'webrtc', 'opencv'],
        livePreview: 'https://pflegebrille.de',
    },
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
                name: 'PostgreSQL',
                icon: 'postgresql-plain',
                href: 'www.postgresql.org',
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
            },
            'XML, JSON, YAML',
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
        category: 'Agile Methods',
        items: [
            'Kanban',
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
                name: 'Mac',
                icon: 'apple-plain',
                href: 'https://www.apple.com/mac/',
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
            },
            {
                name: 'Docusaurus',
                customIcon: 'docusaurus',
                href: 'www.docusaurus.io',
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
// https://de.wikipedia.org/wiki/Gruppentheorie

const contact: ContactInfo = {
    // email is optional - if left empty Contact section won't show up
    email: 'contact@amantel.de',
};

export const portfolio: Portfolio = { header, about, projects, skills, contact };