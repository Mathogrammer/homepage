import { Portfolio } from '../../portfolio-types';
import { portfolio as portfolioBase } from '../../portfolio-base';

// About
portfolioBase.about.role = `Full Stack Developer & M.\u202fSc. Student @ TU Clausthal`;
portfolioBase.about.description = `From developing across the stack in Java, Kotlin, React.JS, and Kubernetes to learning and teaching mathematics, I love to solve problems of all shapes and sizes.`;
portfolioBase.about.resume = 'https://www.amantel.de/cv.pdf';

// Project: SmARtorials
portfolioBase.projects[0].name = 'SmARtorials';
portfolioBase.projects[0].description = (
    <p>
        <em>Ongoing Research Project: </em>
        The aim of the project is to aid individuals in transferring their knowledge to others via self-made video tutorials recorded on smart glasses.
        <br /><br />
        In particular, it strives to empower employees in dextrous work environments to share their modus-operandi in ways where documentation or even third-party footage isn&apos;t effective.
    </p>
);

// Project: Pflegebrille 2.0
portfolioBase.projects[1].name = `Pflegebrille 2.0\n(Care Lenses)`;
portfolioBase.projects[1].description = (
    <p>
        <em>Research Project: </em>
        The Care Lenses aim to and are currently the only available concept to support nursing practice that offers a variety of different activities via smart glasses in Germany.
        <br /><br />
        These include inspecting patient info and updates, documenting nursing activities, viewing professional workflows, as well as live consulting with registered doctors and nurses.
    </p>
);

// Skills
portfolioBase.skills[0].category = 'Architecture';
portfolioBase.skills[1].category = 'Languages';
portfolioBase.skills[2].category = 'Platform Development & Administration';
portfolioBase.skills[3].category = 'Frameworks & Libraries';
portfolioBase.skills[4].category = 'Tools & Operating Systems';

export const portfolio: Portfolio = portfolioBase;