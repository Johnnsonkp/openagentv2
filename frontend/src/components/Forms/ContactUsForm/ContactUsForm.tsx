import LeftSideBlockText from '../../ui/LeftSideBlockText';
import { useContactForm } from '../../../hooks/useContactForm';

export default function ContactUsForm() {
  const {
    formData,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
  } = useContactForm();


  console.log("errsors:", errors);

  return (
    <div className="" id="contact">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 text-center">
        <h2 className="text-4xl font-bold mb-4 text-left">Contact us, we love to hear from you</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <LeftSideBlockText />

        <div className="bg-[#F7F7F8] p-10">
          <h4 className="mb-5">Fill in your details and we'll be in touch right away. Or if you prefer, call us on 13 24 34</h4>
          <form onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" hidden />

            <div className="mb-5">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                autoComplete="off"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={`bg-white w-full px-4 py-3 border placeholder:text-gray-400 rounded-md outline-none focus:ring-4 ${
                  errors.firstName 
                    ? 'border-red-500 focus:border-red-600 ring-red-100' 
                    : 'border-gray-500 focus:border-gray-600 ring-gray-100'
                }`}
              />
              {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName}</p>)}
            </div>

            <div className="mb-5">
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                autoComplete="off"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={`bg-white w-full px-4 py-3 border placeholder:text-gray-400 rounded-md outline-none focus:ring-4 ${
                  errors.lastName 
                    ? 'border-red-500 focus:border-red-600 ring-red-100' 
                    : 'border-gray-500 focus:border-gray-600 ring-gray-100'
                }`}
              />
              {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName}</p>)}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="off"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`bg-white w-full px-4 py-3 border placeholder:text-gray-400 rounded-md outline-none focus:ring-4 ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-600 ring-red-100' 
                    : 'border-gray-500 focus:border-gray-600 ring-gray-100'
                }`}
              />
              {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
            </div>

            <div className="mb-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                autoComplete="off"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`bg-white w-full px-4 py-3 border placeholder:text-gray-400 rounded-md outline-none focus:ring-4 ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-600 ring-red-100' 
                    : 'border-gray-500 focus:border-gray-600 ring-gray-100'
                }`}
              />
              {errors.phone && (<p className="text-red-500 text-sm mt-1">{errors.phone}</p>)}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="What do you want to speak to us about"
                value={formData.additionalInfo}
                onChange={(e) => handleChange('additionalInfo', e.target.value)}
                className="bg-white w-full px-4 py-3 border placeholder:text-gray-400 rounded-md outline-none h-36 focus:ring-4 border-gray-500 focus:border-gray-600 ring-gray-100"
              />
            </div>
            {submitError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {errors.message && (<p className="text-red-500 text-sm mt-1">{errors.message}</p>)}

            <p className="text-sm text-gray-500 mt-2">
              By sending a message you agree to the Terms and Condition and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}