import React, { useState, useEffect } from 'react';
import Styles from './ScrollToTop.module.scss';

const ScrollToTopButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <button
            className={`${Styles.scrollTop} ${showScroll ? Styles.show : ''}`}
            onClick={scrollTop}
        >
            ↑ Topo
        </button>
    );
};

export default ScrollToTopButton;