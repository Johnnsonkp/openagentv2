import { Route, Routes } from 'react-router-dom';

import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import ThankYou from '../pages/ThankYou';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
