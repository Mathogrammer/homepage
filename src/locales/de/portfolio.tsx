import { Portfolio } from '../../portfolio-types';
import { portfolio as portfolioBase } from '../../portfolio-base';

// About
portfolioBase.about.role = `Full-Stack Entwickler und -Trainer`;
portfolioBase.about.description = `Von der Entwicklung über den gesamten Stack, u.\u202fa. in Java, Kotlin, React.JS und Kubernetes, bis hin zum Lernen und Lehren von Mathematik \u2013 ich liebe es, komplexe Aufgaben zu verstehen und zu lösen.`;
portfolioBase.about.resume = 'https://www.amantel.de/cv.pdf';

// Project: Fakultät 73
portfolioBase.projects[0].name = 'Fakultät 73';
portfolioBase.projects[0].description = (
    <p>
        <p>
            <em>Umschulungsprojekt: </em>
        </p>
        <p>
            Die Fakultät 73 ist ein praxisorientiertes Qualifizierungsprogramm der Volkswagen AG mit dem Ziel, Teilnehmer*innen in zwei Jahren
            Vollzeitqualifizierung zu Junior-Softwareentwickler*innen auszubilden.
        </p>
        <br />
        <p>
            Innerhalb des ersten Jahres lernen die Teilnehmer*innen die Grundlagen einer Sprache, in der sie sich im zweiten Jahr spezialisieren können.
        </p>
        <br />
        <p>
            Als Haupttrainer (in der 5. Gen.) für die Java-Full-Stack Spezialisierung unterrichte ich insbesondere den Frontaspekt der Full-Stack-Entwicklung.
            Des Weiteren zeige ich den Teilnehmer*innen die Tools für das Alltagsleben eines Entwicklers, u. a. Git, Docker und die Nutzung des Terminals.
        </p>
    </p>
);

// Project: SmARtorials
portfolioBase.projects[1].name = 'SmARtorials';
portfolioBase.projects[1].description = (
    <p>
        <p>
            <em>Forschungsprojekt: </em>
        </p>
        <p>
            Das Ziel des Projektes ist es Menschen durch selbst erstellte Videotutorials, die mittels Datenbrillen gefilmt werden, dabei zu unterstützen, ihr Wissen weiterzugeben.
        </p>
        <br />
        <p>
            Insbesondere sollen Mitarbeiter*innen von kleinen und mittelständischen Unternehmen sollen dabei in der Lage versetzt werden, mit geringem Aufwand ihr Wissen zu dokumentieren, für die sie vorher keine geeigneten Möglichkeiten der Explizierung hatten.
        </p>
        <br />
        <p>
            Als Hauptentwickler an dem Projekt habe ich eine konfigurierbaren Videoansicht und -aufnahme auf den Datenbrillen entwickelt.
        </p>
    </p>
);

// Project: Pflegebrille 2.0
portfolioBase.projects[2].name = `Pflegebrille 2.0`;
portfolioBase.projects[2].description = (
    <p>
        <p>
            <em>Forschungsprojekt: </em>
        </p>
        <p>
            Die Pflegebrille ist derzeit das einzige verfügbare Konzept zur Unterstützung der Pflegepraxis in Deutschland, das eine Vielzahl von unterschiedlichen Tätigkeiten anbietet.
        </p>
        <br />
        <p>
            Darunter zählen das Prüfen von Patientendaten und -berichten, das Dokumentieren von Pflegetätigkeiten, das Ansehen von professionell erstellten Arbeitsabläufen sowie das Konsultieren mit Ärzten und anderen Pflegekräften in Echtzeit.
        </p>
        <br />
        <p>
            Als einer der Hauptentwickler an dem Projekt habe ich an der Implementierung der Oberfläche für die Gestensteuerung mitgewirkt, sowie bei der Umsetzung von Anrufen in einen gesicherten Kontext mit Hilfe von WebRTC.
        </p>
    </p>
);

// Skills
portfolioBase.skills[0].category = 'Softwarearchitekturen';
portfolioBase.skills[1].category = 'Programmiersprachen';
portfolioBase.skills[2].category = 'Platform Entwicklung & Administration';
portfolioBase.skills[3].category = 'Frameworks & Bibliotheken';
portfolioBase.skills[4].category = 'Agile Methoden';
portfolioBase.skills[5].category = 'Tools & Betriebssysteme';

export const portfolio: Portfolio = portfolioBase;