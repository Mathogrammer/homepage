import { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return isVisible ? (
        <Fab className={styles.scroll_top} href='#top'>
            <ArrowUpwardIcon sx={{ zIndex: 100, backgroundColor: 'transparent' }} fontSize='large' />
        </Fab>
    ) : null;
};

export default ScrollToTop;
