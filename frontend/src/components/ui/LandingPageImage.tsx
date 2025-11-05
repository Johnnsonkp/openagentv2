import '../../pages/Home/Home.css';

import { useEffect, useState } from 'react';

import OverheadImage from "../../assets/images/overhead-map.jpg"

let hasLoaded = false;

function LandingPageImage() {
  const [loadingDelay, setLoadingDelay] = useState(!hasLoaded);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      setTimeout(() => {
        setLoadingDelay(false);
        hasLoaded = true;
      }, 1000);
    }
  }, [])

  return (
    <>
      {!loadingDelay &&OverheadImage ? (
        <img 
          src={OverheadImage} 
          onLoad={() => setLoaded(true)}
          className={`page-content landing-img w-full h-auto rounded-lg transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          alt="Overhead Map" 
        />
      ) : (
        <div className={`page-content skeleton-pulse`} />
      )}
    </>
  )
}

export default LandingPageImage