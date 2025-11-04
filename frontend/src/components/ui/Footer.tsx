import bannerPattern from '../../assets/images/pattern-bg.png'
import openagentLightLogo from '../../assets/images/openagent-light-logo.png'

function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center footer bg-[#292928] text-neutral-content p-10 w-full mt-auto"
      style={{ backgroundImage: `url(${bannerPattern})` }}
    >
      <div className="mx-auto">
        <a
          href="https://www.openagent.com.au"
          rel="noopener"
          aria-label="OpenAgent Homepage"
          className="ga-event"
        >
          <img
            className="ga-event"
            data-category="Footer"
            data-eventlabel="OpenAgent Homepage"
            data-eventvalue="OpenAgent Homepage"
            src={openagentLightLogo}
            alt="OpenAgent Logo"
            width="150"
          />

        </a>
      </div>

      <div className="flex w-full max-w-[900px] mx-auto">
        <nav className="w-full text-center">
          <h6 className="footer-title text-[#00AB55] font-bold">Corporate</h6>
          <div className="flex-col">
            <div>
              <a className="link link-hover">Branding</a>
            </div>
            <div>
              <a className="link link-hover">Design</a>
            </div>
            <div>
              <a className="link link-hover">Marketing</a>
            </div>
            <div>
              <a className="link link-hover">Advertisement</a>
            </div>
          </div>
        </nav>

        <nav className="w-full text-center">
          <h6 className="footer-title text-[#00AB55] font-bold">Resources</h6>
          <div>
            <a className="link link-hover">About us</a>
          </div>
          <div>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <a className="link link-hover">Jobs</a>
          </div>
          <div>
            <a className="link link-hover">Press kit</a>
          </div>
        </nav>

        <nav className="w-full text-center">
          <h6 className="footer-title text-[#00AB55] font-bold">Tools</h6>
          <div>
            <a className="link link-hover">Terms of use</a>
          </div>
          <div>
            <a className="link link-hover">Privacy policy</a>
          </div>
          <div>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>

        <nav className="w-full text-center">
          <h6 className="footer-title text-[#00AB55] font-bold">Market News &amp; Trends</h6>
          <div>
            <a className="link link-hover">Twitter</a>
          </div>
          <div>
            <a className="link link-hover">Instagram</a>
          </div>
          <div>
            <a className="link link-hover">Facebook</a>
          </div>
          <div>
            <a className="link link-hover">GitHub</a>
          </div>
        </nav>
      </div>

      <div className="w-full h-[50px] bg-[#1B1B1A] text-center border-t mt-6">
        <p className="text-center m-auto">© 2025
          <a href="https://www.chinonso.io/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">Chinonso.io</a>.
            All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer