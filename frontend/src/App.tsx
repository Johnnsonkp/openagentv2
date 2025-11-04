import './App.css';

import { AppRoutes } from './routes';
import Footer from './components/ui/Footer';
import Nav from './components/ui/Nav';

function App() {
    return (
      <>
        <Nav />
        <AppRoutes />
        <Footer />
      </>
    );
}

export default App;