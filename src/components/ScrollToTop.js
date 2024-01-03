import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    if (pathname.indexOf('/') !== -1 && pathname.indexOf('/', pathname.indexOf('/') + 1) !== -1){
        console.log(pathname)
        console.log(pathname.indexOf('/') !== -1 && pathname.indexOf('/', pathname.indexOf('/') + 1) !== -1)
     window.scrollTo(0, 0);
    }
  }, [pathname]);
}

export default ScrollToTop;