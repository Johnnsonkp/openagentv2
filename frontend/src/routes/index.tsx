import { Route, Routes } from 'react-router-dom';

import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
