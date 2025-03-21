import Head from 'next/head';
import Link from 'next/link';
import styles from '../src/notice.module.css';

const NoticePage = () => (
    <div className={styles.root}>
        <Head>
            <meta charSet='utf-8' />
            <title>Legal Notice / Privacy Policy</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='robots' content='noindex' />
        </Head>
        <Link className='link' href='/'>
            Go back to Homepage
        </Link>
        <h1>Legal Disclosure</h1>
        <br />
        Information in accordance with Section 5 TMG <br /> <br />
        Alexander Marc Mantel <br /> Stolpstraße 35 <br /> 38124 Braunschweig <br />
        <h2>Contact Information</h2>
        Telephone: <span className={styles.ph} data-t='2909 3062 671 94+' />
        <br />
        E-Mail:{' '}
        <span className={styles.em} data-u='tcatnoc' data-d='ed.letnama' />
        <br />
        <br />
        <h2>Disclaimer</h2>
        Accountability for content
        <br />
        The contents of our pages have been created with the utmost care.However, we
        cannot guarantee the contents&apos; accuracy, completeness or
        topicality.According to statutory provisions, we are furthermore responsible
        for our own content on these web pages.In this matter, please note that we
        are not obliged to monitor the transmitted or saved information of third
        parties, or investigate circumstances pointing to illegal activity.Our
        obligations to remove or block the use of information under generally
        applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia
        Act(TMG).
        <br /> <br />
        Accountability for links
        <br />
        Responsibility for the content of external links(to web pages of third
        parties) lies solely with the operators of the linked pages.No violations
        were evident to us at the time of linking.Should any legal infringement
        become known to us, we will remove the respective link immediately.
        <br /> <br />
        Copyright
        <br />
        Our web pages and their contents are subject to German copyright law.Unless
        expressly permitted by law, every form of utilizing, reproducing or
        processing works subject to copyright protection on our web pages requires
        the prior consent of the respective owner of the rights.Individual
        reproductions of a work are only allowed for private use. The materials from
        these pages are copyrighted and any unauthorized use may violate copyright
        laws.
        <br />
        <br />
        <h2>Privacy Policy</h2>
        <h3>Log Files</h3>
        <p>
            This website follows a standard procedure of using log files. These files
            log visitors when they visit websites. All hosting companies do this and a
            part of hosting services&apos; analytics. The information collected by log
            files can include internet protocol (IP) addresses, browser type, Internet
            Service Provider (ISP), date and time stamp, referring/exit pages, and
            possibly the number of clicks. These are not linked to any information
            that is personally identifiable. The purpose of the information is for
            analyzing trends, administering the site and gathering access information.
        </p>
        <h3>Cookies and Web Beacons</h3>
        <p>
            This website does not use cookies or similar technologies and does not
            collect any personally identifiable information.
        </p>
        <h3>Consent</h3>
        <p>
            By using our website, you hereby consent to our Privacy Policy and agree
            to its Terms and Conditions.
        </p>
    </div>
);

export default NoticePage;
