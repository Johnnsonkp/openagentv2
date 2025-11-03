import { Link } from "react-router-dom"
import OpenAgentLogo from "../../assets/openAgentLogo.svg"

function Nav() {
  return (
    <div className="w-full h-25 flex absolute top-2 left-0 px-8 z-5">
      <nav className="navbar bg-base-100 shadow-lg max-w-[843px] my-auto mx-auto rounded-2xl flex justify-between">

        <Link to="/" className="btn btn-ghost border-none text-xl hover:bg-white hover:border-none hover:shadow-none">
          <img src={OpenAgentLogo} alt="OpenAgent Logo" className="h-8" />
        </Link>

        <div>
          <Link to="/about" className="mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal">
            About
          </Link>
          <Link to="/contact" className="mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal">
            Contacts
          </Link>
          <Link to="/contact-us" className="mx-2 btn btn-ghost border-none text-lg hover:bg-white hover:border-none hover:shadow-none font-normal">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav