import './Home.css';

import axios, { AxiosError } from 'axios';

import CustomTab from '../../components/Tab/CustomTab';
import type { HealthCheckResponse } from '../../types';
import Nav from '../../components/ui/Nav';
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

    return (
      <div className="min-h-screen flex flex-col items-center p-5 ">
        <div className='border-4 border-gray-200 h-[85vh] w-full rounded-lg radial-container'>
          <Nav />

          <div className="rotating bg-circularLight">
            <div className="radial-point"></div>
          </div>
          
          <div className='max-w-[865px] pt-16 mx-auto items-center'>
            <h1 className="text-6xl font-bold mb-4 text-center hero-cta">
              <span className='text-purple'>We make it easier </span>
              for you to buy, sell and own property
            </h1>

            <CustomTab />

            <button
              onClick={checkBackend}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors items-center"
            >
                {loading ? 'Checking...' : 'Check Backend Connection'}
            </button>
          </div>
          
        </div>
        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    );
}

export default Home;
