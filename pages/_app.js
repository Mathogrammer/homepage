/* eslint-disable react/jsx-props-no-spreading */
import '../src/index.css'
import { ThemeProvider } from '../src/contexts/theme'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
