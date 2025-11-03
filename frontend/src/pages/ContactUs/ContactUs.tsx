import Nav from '../../components/ui/Nav'

export default function ContactUs() {
  return (
    <div>
      <div className="h-50 bg-[#1A794E]">
        <Nav />

        <div className="relative bottom-0">
          <p className="">Contact us, we love to hear from you</p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-32 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">
          If you have any questions, feedback, or need assistance, please feel free to reach out to us. We're here to help!
        </p>
        <h2 className="text-2xl font-semibold mb-2">Email</h2>
        <p className="mb-4">contact@example.com</p>
      </div>
    </div>
  )
}
