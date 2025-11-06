import AlgoIcon from '../../assets/images/algo-icon.svg';
import CallerIcon from '../../assets/images/caller-icon.svg'
import SellerIcon from '../../assets/images/seller-icon.svg';

function TrustSection() {
  return (
    <div className="shadow my-8 sm:my-12 lg:my-15 h-fit w-[95%] max-w-7xl bg-base-100 rounded-lg p-4 sm:p-6 lg:p-8">
        <div className='w-full mb-6 sm:mb-8'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center lg:text-left'>How does Openagent work?</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={AlgoIcon} alt="Algorithm Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Our algorithm does the hard work</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              We analyse every property sale in Australia and crunch the data on transactions in your suburb, including who's sold what, when, how quickly and for how much.
            </p>
          </div>

          <div className="divider lg:divider-horizontal my-0"></div>

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={CallerIcon} alt="Caller Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">But the human touch is key</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              Our consultants then add their deep personal knowledge of agents to make bespoke recommendations and guide you through the selection process.
            </p>
          </div>

          <div className="divider lg:divider-horizontal my-0"></div>

          <div className="flex-1 min-w-[200px] max-w-full lg:max-w-[300px] mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 pb-3">
              <div className='border border-gray-300 rounded-full p-3 sm:p-4 flex items-center justify-center shrink-0'>
                <img src={SellerIcon} alt="Seller Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">To create a service 100% free for sellers^</h3>
            </div>
            <p className='text-sm sm:text-base py-3'>
              There is no absolutely no cost to use our service. Our fee comes via the agent only once your home is sold.
            </p>
          </div>
        </div>
      </div>
  )
}

export default TrustSection