import './Home.css';

import axios, { AxiosError } from 'axios';

import CustomTab from '../../components/Tab/CustomTab';
import type { HealthCheckResponse } from '../../types';
import Nav from '../../components/ui/Nav';
import OverheadImage from "../../assets/images/overhead-map.jpg"
import locationPin from '../../assets/location-pin.svg';
import { useState } from 'react';

function Home() {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const checkBackend = async (): Promise<void> => {
        setLoading(true);
        try {
            const response = await axios.get<HealthCheckResponse>('/api/health');
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            const axiosError = error as AxiosError<HealthCheckResponse>;
            setMessage('Failed to connect to backend' + (axiosError.response ? `: ${axiosError.response.data.message}` : ''));
        } finally {
            setLoading(false);
        }
    };

    const plotPinIconsDynamically = () => {
      let origin = window.location.origin
      
      const numberOfHouses = 20;
      let radialCircle = document.getElementsByClassName('bg-circularLight');
      const centerX = window.innerWidth / 1.8;
      const centerY = window.innerHeight / 1;

      for (let i = 0; i < numberOfHouses; i++) {
        let div = document.createElement('a');
        div.href = `${origin}` 

        div.classList.add("radial-pin");
        div.innerHTML = `<svg class="radial-img" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path class=""
                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>`

        const angle = (i / numberOfHouses) * Math.PI * 2;
        const radius = 160 + Math.random() * 480;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        div.style.position = "absolute"; 
        div.classList.add("reverse-rotating")
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;

        radialCircle[0].appendChild(div);
      }
    };

    return (
      <div className="min-h-screen flex flex-col items-center px-5 py-3" onLoad={() =>plotPinIconsDynamically()}>
        <img src={OverheadImage} className="page-content landing-img" alt="Overhead Map" />
        <div className='border-4 border-gray-200 h-[85vh] w-full rounded-lg radial-container'>
          <Nav />

          <div className="rotating bg-circularLight">
            <div className="radial-point"></div>
          </div>
          
          <div className='max-w-[865px] mt-14 mx-auto items-center inner-wrapper'>
            <h1 className="text-6xl font-bold mb-4 text-center hero-cta">
              <span className='text-purple'>We make it easier </span>
              for you to buy, sell and own property
            </h1>

            <CustomTab />

            {/* <button
              onClick={checkBackend}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors items-center"
            >
                {loading ? 'Checking...' : 'Check Backend Connection'}
            </button> */}
            <p className='flex items-center justify-center'>
              <img src={locationPin} alt="Location Pin" /> No stress, just pure property know-how.
            </p>
          </div>
        </div>
        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    );
}

export default Home;
