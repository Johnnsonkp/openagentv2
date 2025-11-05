import AboutImgContainer from "./AboutImgContainer"
import BannerSection from "../../components/ui/BannerSection"
import agentImg from "../../assets/images/agent-1.png"
import agentImg2 from "../../assets/images/agent-2.png"

function AboutUs() {
  return (
    <div className="h-full">
      <BannerSection title={'Find an agent you trust, get the support you need'}/>

      <main className="h-full min-h-[40vh] max-w-[1350px] mx-auto w-full py-5 px-4 sm:px-8 md:px-12 lg:px-20 pb-30">
        <section className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 my-6 sm:my-8 md:my-10">
          <div className="left w-full md:flex-[0.48]">
            <p className="text-sm sm:text-base">Welcome to OpenAgent. We've been around since 2013 and our vision is to make it easy for people to buy, sell and own property.</p>
            <h2 className="text-2xl sm:text-3xl font-semibold my-3 sm:my-4">Selling a home is a big deal</h2>
            <p className="pb-3 sm:pb-4 text-sm sm:text-base">
              And that is why this was the first problem we set out to solve. Let's face it, the home selling process can be stressful. On top of being busy, you might have pressure to sell quickly, be going through a difficult time, or even have property in another state. Every story is different, but we know that no matter what your home-selling journey looks like, we can help
            </p>

            <p className="pb-3 sm:pb-4 text-sm sm:text-base">
              Choosing an agent can sometimes feel like a lottery. We remove the guesswork by putting the powerful tools of knowledge, insight and choice in a vendor's hands. And it doesn't stop there if a vendor needs further advice on agents or how to negotiate commissions, they have an expert voice in their corner. 
            </p>

            <p className="text-sm sm:text-base">Find an agent you trust, get the support you need.</p>
          </div>

          <div className="right w-full md:flex-[0.45]">
              <AboutImgContainer src={agentImg} alt="Agent on house tour" />
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row-reverse justify-between items-start gap-6 md:gap-8 my-6 sm:my-8 md:my-10">
          <div className="left w-full md:flex-[0.48]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">How are we different?</h2>
            <p className="pb-3 sm:pb-4 text-sm sm:text-base">
              We've built a company around putting you first. Every decision we make is made to get you the best outcome. We focus on delivering caring and personalised service, listening to your needs and constantly finding new ways to serve you better.
            </p>

            <p className="pb-3 sm:pb-4 text-sm sm:text-base">
              From deciding when to sell and how to add value to your home, we work hard to provide you with all the information you might need throughout your home-selling journey. Whether it's our in-depth guides, agent recommendations, expert Q&As, our property price estimator, checklists, commission calculators or our helpful blog, we've got you covered.
            </p>

            <p className="text-sm sm:text-base">Check out the team behind OpenAgent.</p>
          </div>

          <div className="right w-full md:flex-[0.45]">
            <AboutImgContainer src={agentImg2} alt="Agent greeting client" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutUs