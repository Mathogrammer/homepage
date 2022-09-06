type HeaderInfo = {
    homepage?: string;
    title?: string;
}

type AboutInfo = {
    name: string;
    role: string;
    description?: string;
    resume?: string;
    social?: {
        github?: string;
        linkedin?: string;
        xing?: string;
        mail?: string;
    }
}

type ProjectsInfo = Array<{
    name: string;
    // To allow JSX we have to modify pages/index.tsx to serialise it to static markup
    description: string | JSX.Element;
    stack?: string[];
    sourceCode?: string;
    livePreview?: string;
}>

type SkillsInfo = {
    [category: string]: Array<string | {
        name: string;
        icon?: string;
        href?: string;
    }>
}

type ContactInfo = {
    email?: string;
}

type Portfolio = {
    header: HeaderInfo;
    about: AboutInfo;
    projects: ProjectsInfo;
    skills: SkillsInfo;
    contact: ContactInfo;
}

export type { HeaderInfo, AboutInfo, ProjectsInfo, SkillsInfo, ContactInfo, Portfolio };