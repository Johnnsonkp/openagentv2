import './Home.css';

import AlgoIcon from '../../assets/images/algo-icon.svg';
import CallerIcon from '../../assets/images/caller-icon.svg';
import CustomTab from '../../components/Tab/CustomTab';
import LandingPageImage from '../../components/ui/LandingPageImage';
import SellerIcon from '../../assets/images/seller-icon.svg';
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
      className="min-h-screen flex flex-col items-center px-3 sm:px-5 py-3" 
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

      <div className="shadow my-8 sm:my-12 lg:my-15 h-fit w-[95%] max-w-7xl bg-base-100 rounded-lg p-4 sm:p-6 lg:p-8">
        <div className='w-full mb-6 sm:mb-8'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center lg:text-left'>How does Openagent work?</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={AlgoIcon} alt="Algorithm Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Our algorithm does the hard work</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              We analyse every property sale in Australia and crunch the data on transactions in your suburb, including who's sold what, when, how quickly and for how much.
            </p>
          </div>

          <div className="divider lg:divider-horizontal my-0"></div>

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={CallerIcon} alt="Caller Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">But the human touch is key</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              Our consultants then add their deep personal knowledge of agents to make bespoke recommendations and guide you through the selection process.
            </p>
          </div>

          <div className="divider lg:divider-horizontal my-0"></div>

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={SellerIcon} alt="Seller Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">To create a service 100% free for sellers^</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              There is no absolutely no cost to use our service. Our fee comes via the agent only once your home is sold.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
