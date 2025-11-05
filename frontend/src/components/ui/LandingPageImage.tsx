import '../../pages/Home/Home.css';

import { useEffect, useState } from 'react';

import OverheadImage from "../../assets/images/overhead-map.jpg"

let hasLoaded = false;

function LandingPageImage() {
  const [loadingDelay, setLoadingDelay] = useState(!hasLoaded);

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
        <img src={OverheadImage} className="page-content landing-img" alt="Overhead Map" />
      ) : (
        <div className={`page-content skeleton-pulse`} />
      )}
    </>
  )
}

export default LandingPageImage