import BreadCrumb from '../../components/ui/BreadCrumb'
import ContactUsForm from '../../components/Forms/ContactUsForm/ContactUsForm'
import Nav from '../../components/ui/Nav'
import bannerPattern from '../../assets/images/pattern-bg.png'

export default function ContactUs() {
  return (
    <div>
      <header
        className="h-[300px] max-h-[300px] bg-[rgb(26,121,78)] relative flex items-end justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerPattern})` }}
      >
        <Nav />

        <div className='max-w-[650px]'>
          <h1 className="text-white font-semibold text-5xl leading-[1.3] text-center mb-10">
            Contact us, we love to hear from you
          </h1>
        </div>
      </header>
      
      <div className="w-full mx-auto px-16 py-10 bg-white rounded-lg shadow-md h-full">
        <BreadCrumb />
        <ContactUsForm />
      </div>
    </div>
  )
}
