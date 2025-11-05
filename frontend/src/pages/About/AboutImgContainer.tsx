import { useEffect, useState } from 'react';

let hasLoaded = false;

function AboutImgContainer({src, alt}: {src: string, alt: string}) {
  const [loadingDelay, setLoadingDelay] = useState(!hasLoaded);
  const [loaded, setLoaded] = useState(false);
  
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
    {loadingDelay == false && src? 
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto rounded-lg transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      /> 
              :
      <div className="skeleton h-100 w-full"></div>}
    </>
  )
}

export default AboutImgContainer