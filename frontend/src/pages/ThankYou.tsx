import { useLocation, useNavigate } from 'react-router-dom';

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { contactName, email } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        
        {contactName && (
          <p className="text-lg text-gray-600 mb-2">
            Thank you, <span className="font-semibold">{contactName}</span>!
          </p>
        )}
        
        <p className="text-gray-600 mb-6">
          Your contact form has been submitted successfully. We've received your message and will get back to you soon.
        </p>

        {email && (
          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to <span className="font-medium">{email}</span>
          </p>
        )}

        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full btn btn-primary"
          >
            Back to Home
          </button>
          
          <button
            onClick={() => navigate('/contact-us')}
            className="w-full btn btn-outline"
          >
            Submit Another Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
