import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {
    const [responseMessage, setResponseMessage] = useState("");

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value
        }));
        setResponseMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = inputValues;
        const phoneNumber = "+919209143657";

        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        setResponseMessage("Your message has been sent successfully!");
        e.target.reset();
    };

    return (
        <section id="contact" className="py-20 md:h-screen">
            <div className="px-4 md:py-10 md:w-2/3 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#00ffff]">Contact Me</h2>

                <form id="contactForm" className="md:flex-1 bg-gray-700 shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInputValues}
                            value={inputValues.name}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-300 rounded-md shadow-sm"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputValues}
                            value={inputValues.email}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-300 rounded-md shadow-sm"                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            onChange={handleInputValues}
                            value={inputValues.message}
                            className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-300 rounded-md shadow-sm"                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-gray-500"
                    >
                        Send Message
                    </button>
                    {responseMessage && (
                        <p id="responseMessage" className="text-center mt-4 text-sm text-green-600">
                            {responseMessage}
                        </p>
                    )}
                </form>

                <ul className='md:ps-10 flex text-center justify-evenly content-evenly mt-14'>
                    <li>
                        <a href="https://github.com/nitingayke" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-none' >
                            <GitHubIcon />
                        </a>
                        <p className="pt-5 text-gray-500">GitHub</p>
                    </li>
                    <li>
                        <a href="https://in.linkedin.com/in/nitin-gayke92" target='_blank' className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-none' >
                            <LinkedInIcon />
                        </a>
                        <p className="pt-5 text-gray-500">LinkedIn</p>
                    </li>
                    <li>
                        <a href="/" className='p-2 pb-3 cursor-pointer rounded text-[#00ffff] home-page-buttons hover:rounded-none' >
                            <InstagramIcon />
                        </a>
                        <p className="pt-5 text-gray-500">Instagram</p>
                    </li>
                </ul>

            </div>
        </section>
    );
};
