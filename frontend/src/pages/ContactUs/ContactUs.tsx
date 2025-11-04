import BannerSection from '../../components/ui/BannerSection'
import BreadCrumb from '../../components/ui/BreadCrumb'
import ContactUsForm from '../../components/Forms/ContactUsForm/ContactUsForm'

export default function ContactUs() {
  return (
    <div>
      <BannerSection title={'Contact us, we love to hear from you'}/>
      
      <div className="w-full mx-auto px-16 py-10 bg-white rounded-lg shadow-md h-full ">
        <BreadCrumb />
        <ContactUsForm />
      </div>
    </div>
  )
}
