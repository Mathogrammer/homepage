import { Portfolio } from '../../portfolio-types';
import { portfolio as portfolioBase } from '../../portfolio-base';

// About
portfolioBase.about.role = `Full Stack Entwickler & M.\u202fSc. Student @ TU Clausthal`;
portfolioBase.about.description = `Von der Entwicklung über den gesamten Stack, u.\u202fa. in Java, Kotlin, React.JS und Kubernetes, bis hin zum Lernen und Lehren von Mathematik \u2013 ich liebe es, komplexe Aufgaben zu verstehen und zu lösen.`;
portfolioBase.about.resume = 'https://www.amantel.de/cv.pdf';

// Project: SmARtorials
portfolioBase.projects[0].name = 'SmARtorials';
portfolioBase.projects[0].description = (
    <p>
        <em>Laufendes Forschungsprojekt: </em>
        Das Ziel des Projektes ist es Menschen durch selbst erstellte Videotutorials, die mittels Datenbrillen gefilmt werden, dabei zu unterstützen, ihr Wissen weiterzugeben.
        <br /><br />
        Insbesondere sollen Mitarbeiter*innen von kleinen und mittelständischen Unternehmen sollen dabei in der Lage versetzt werden, mit geringem Aufwand ihr Wissen zu dokumentieren, für die sie vorher keine geeigneten Möglichkeiten der Explizierung hatten.
    </p>
);

// Project: Pflegebrille 2.0
portfolioBase.projects[1].name = `Pflegebrille 2.0`;
portfolioBase.projects[1].description = (
    <p>
        <em>Forschungsprojekt: </em>
        Die Pflegebrille ist derzeit das einzige verfügbare Konzept zur Unterstützung der Pflegepraxis in Deutschland, das eine Vielzahl von unterschiedlichen Tätigkeiten anbietet.
        <br /><br />
        Darunter zählen das Prüfen von Patientendaten und -berichten, das Dokumentieren von Pflegetätigkeiten, das Ansehen von professionell erstellten Arbeitsabläufen sowie das Konsultieren mit Ärzten und anderen Pflegekräften in Echtzeit.
    </p>
);

// Skills
portfolioBase.skills[0].category = 'Softwarearchitekturen';
portfolioBase.skills[1].category = 'Programmiersprachen';
portfolioBase.skills[2].category = 'Platform Entwicklung & Administration';
portfolioBase.skills[3].category = 'Frameworks & Bibliotheken';
portfolioBase.skills[4].category = 'Tools & Betriebssysteme';

export const portfolio: Portfolio = portfolioBase;