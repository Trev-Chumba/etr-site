import { useState } from 'react';
import emailjs from '@emailjs/browser';
//import { Github } from 'lucide-react';
import { Slide, ToastContainer, toast } from 'react-toastify';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const successNotify = () => {
    toast.success('Email sent successfully!', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: 'colored',
      transition: Slide,
    });
  };

  const failedNotify = () => {
    toast.error('Failed to send email. Try again!', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: 'colored',
      transition: Slide,
    });
  };
  //const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          successNotify();
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          failedNotify();
          console.error(error);
        }
      );
  };

  return (
    <div className="flex flex-col">
      <div className="relative rounded-lg bg-white p-8 shadow-sm  dark:bg-gray-950 sm:p-12">
        <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="space-y-7 mb-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded  dark:bg-slate-900"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded  dark:bg-slate-900"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 border rounded  dark:bg-slate-900"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-green-600
             hover:text-white"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-row space-x-16 justify-center mt-6">
          {/* <a
            href="https://github.com/Trev-Chumba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="Github"
              className="w-6 h-6 text-white  hover:opacity-70 dark:invert"
            />
          </a> */}

          {/* Bluesky Icon from Public Folder */}
          <a
            href="https://bsky.app/profile/nomad-006.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/bluesky.svg"
              alt="Bluesky"
              className="w-6 h-6 text-white hover:opacity-70"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
