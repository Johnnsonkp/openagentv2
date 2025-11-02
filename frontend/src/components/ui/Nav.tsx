import { Link } from "react-router-dom"
import OpenAgentLogo from "../../assets/openAgentLogo.svg"

function Nav() {
  return (
    <div className="w-full h-30 flex absolute top-2 left-0 px-5 z-5">
      <nav className="navbar bg-base-100 shadow-lg max-w-[843px] my-auto mx-auto rounded-2xl flex justify-between">
        <a className="btn btn-ghost border-none text-xl hover:bg-white hover:border-none hover:shadow-none">
          <img src={OpenAgentLogo} alt="OpenAgent Logo" className="h-8" />
        </a>

        <div>
          <Link to="/about" className="btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-light">
            About
          </Link>
          <Link to="/contact" className="btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-light">
            Contacts
          </Link>
          <Link to="/contact-us" className="btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-light">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav