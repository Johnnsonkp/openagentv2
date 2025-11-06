import './Home.css';

import CustomTab from '../../components/Tab/CustomTab';
import LandingPageImage from '../../components/ui/LandingPageImage';
import TrustSection from '../../components/TrustSection/TrustSection';
import locationPin from '../../assets/location-pin.svg';

function Home() {

  const plotPinIconsDynamically = () => {
    const origin = window.location.origin
    const numberOfHouses = 20;
    const radialCircle = document.getElementsByClassName('bg-circularLight');
    const centerX = window.innerWidth / 1.8;
    const centerY = window.innerHeight / 1;

    for (let i = 0; i < numberOfHouses; i++) {
      const div = document.createElement('a');
      const angle = (i / numberOfHouses) * Math.PI * 2;
      const radius = 160 + Math.random() * 480;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      div.href = `${origin}` 
      div.classList.add("radial-pin");
      div.innerHTML = `<svg class="radial-img" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path class=""
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>`;
      div.style.position = "absolute"; 
      div.classList.add("reverse-rotating")
      div.style.top = `${y}px`;
      div.style.left = `${x}px`;
      radialCircle[0].appendChild(div);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center px-3 sm:px-5 py-3 pb-50" 
      onLoad={() =>plotPinIconsDynamically()}
    >
      <LandingPageImage />
      <div className='h-[70vh] sm:h-[80vh] md:h-[85vh] w-full rounded-lg radial-container'>
        <div className="rotating bg-circularLight">
          <div className="radial-point"></div>
        </div>
        
        <div className='max-w-[865px] mt-8 sm:mt-10 md:mt-14 mx-auto px-4 sm:px-6 items-center inner-wrapper'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center hero-cta">
            <span className='text-purple'>We make it easier </span>
            for you to buy, sell and own property
          </h1>
          <CustomTab />
          <p className='flex items-center justify-center text-sm sm:text-base gap-1 sm:gap-2'>
            <img src={locationPin} alt="Location Pin" className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span>No stress, just pure property know-how.</span>
          </p>
        </div>
      </div>

      <TrustSection />

    </div>
  );
}

export default Home;
