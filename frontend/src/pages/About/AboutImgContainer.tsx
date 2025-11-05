import { useEffect, useState } from 'react';

let hasLoaded = false;

function AboutImgContainer({src, alt}: {src: string, alt: string}) {
  const [loadingDelay, setLoadingDelay] = useState(!hasLoaded);
  
    useEffect(() => {
      if (!hasLoaded) {
        setTimeout(() => {
          setLoadingDelay(false);
          hasLoaded = true;
        }, 800);
      }
    }, [])

    
  return (
    <>
    {!loadingDelay && src? 
      <img src={src} alt={alt} className="w-full h-auto rounded-lg"/> 
              :
      <div className="skeleton h-100 w-full"></div>}
    </>
  )
}

export default AboutImgContainer