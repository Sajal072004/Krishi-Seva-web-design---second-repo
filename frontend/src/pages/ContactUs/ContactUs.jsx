import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    emailjs
      .sendForm(
        'service_4b9gjsf',
        'template_192906p',
        form.current,
        'gmCFgUwn4BO7j3Mvk'
      )
      .then(
        (result) => {
          setLoading(false); // Stop loading after success
          toast.success('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          setLoading(false); // Stop loading after error
          toast.error('Something went wrong. Please try again.');
          console.error('Error sending email:', error.text); // Log error details to the console
        }
      );
  };

  return (
    <div className="flex h-[100vh] bg-[#F9FAFC]">
      <div className="fixed h-screen w-[25vw] md:w-[20vw]">
        <Sidebar />
      </div>
      <div className="flex flex-col items-center p-6 ml-[25vw] md:ml-[20vw] w-full mt-2">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-green-500">Contact </span>Us
        </h1>
        <p className="text-center text-lg mb-8">
          This is a brief description of the contact page. Please fill out the form below to get in touch with us.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-row w-[75vw] h-[70vh] bg-white shadow-lg rounded-lg mt-2"
        >
          <div
            className="w-[45%] h-full bg-cover bg-center rounded-l-lg"
            style={{ backgroundImage: 'url("farmer_contact.jpg")' }}
          ></div>
          <div className="w-[65%] p-6 flex flex-col justify-start bg-[#33814B]">
            <h1 className="mt-4 mb-4 text-xl text-white">Full Name</h1>
            <input
              required
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="mb-6 p-2 border border-white rounded-[50px] bg-transparent pl-4 text-white placeholder-white focus:outline-none focus:ring-0"
            />
            <h1 className="mb-4 text-xl text-white">Email</h1>
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
              className="mb-6 p-2 border border-white rounded-[50px] bg-transparent pl-4 text-white placeholder-white focus:outline-none focus:ring-0"
            />
            <h1 className="mb-4 text-xl text-white">Message</h1>
            <textarea
              required
              name="message"
              placeholder="Message"
              className="mb-4 p-2 border border-white rounded-[15px] bg-transparent h-24 pl-4 text-white placeholder-white focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={loading} // Disable button when loading
              className={`bg-white text-green-500 py-2 rounded-md transition ${
                loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-green-500 hover:text-white'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default ContactUs;
