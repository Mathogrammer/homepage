import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
                />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'anonymous'} />
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
