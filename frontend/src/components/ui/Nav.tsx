import { Link } from "react-router-dom"
import OpenAgentLogo from "../../assets/openAgentLogo.svg"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
 import { useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const pathname = location.pathname.replace(/-/g, ' ').replace(/\//g, ' ').trim();

  console.log("Current Pathname:", pathname.trim());
  console.log("eqal", pathname.trim() == "about us")


  return (
    <div className="w-full h-25 flex absolute top-2 left-0 px-8 z-5">
      <nav className="navbar bg-base-100 shadow-lg max-w-[843px] my-auto mx-auto rounded-2xl flex justify-between">

        <Link to="/" className="btn btn-ghost border-none text-xl hover:bg-white hover:border-none hover:shadow-none">
          <img src={OpenAgentLogo} alt="OpenAgent Logo" className="h-8" />
        </Link>

        <div className="hidden md:flex">
          <Link to="/about-us" className={`mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal hover:text-green-500 ${pathname === 'about us' ? 'text-green-500' : ''}`}>
            About Us
          </Link>
          <Link to="/contacts" className={`mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal hover:text-green-500 ${pathname == 'contacts'? 'text-green-500' : ''}`}>
            Contacts
          </Link>
          <Link to="/contact-us" className={`mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal hover:text-green-500 ${pathname == "contact us"? 'text-green-500' : ''}`}>
            Contact Us
          </Link>
        </div>

        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/about-us" className="text-base">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-base">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-base">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav