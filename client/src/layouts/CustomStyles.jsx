// src/layouts/CustomStyles.jsx
import { useReducer, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function CustomStyles() {
  const scrollReducer = (prev) => {
    const newPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = newPosition - prev.position;
    return {
      position: newPosition,
      hideHeader: newPosition > 128 && distance > 0,
    };
  };

  const [scrollState, dispatchScrollState] = useReducer(scrollReducer, {
    position: 0,
    hideHeader: false,
  });

  useEffect(() => {
    const handleScroll = () => dispatchScrollState();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Helmet>
      <style>
        {`
          :root {
            --header-distance: ${scrollState.hideHeader ? '-4rem' : '0'};
          }
        `}
      </style>
    </Helmet>
  );
}
