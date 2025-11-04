import { Route, Routes } from 'react-router-dom';

import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import ThankYou from '../pages/ThankYou';
import Contacts from '../pages/Contact/Contacts';
import AboutUs from '../pages/About/AboutUs';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
