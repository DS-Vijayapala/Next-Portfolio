import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {

        event.preventDefault();

        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

        const response = await fetch("https://api.web3forms.com/submit", {

            method: "POST",
            body: formData

        });

        const data = await response.json();

        if (data.success) {

            setResult("Form Submitted Successfully");
            event.target.reset();

        } else {

            console.log("Error", data);
            setResult(data.message);

        }

    };

    return (

        <div
            id="contact"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2  text-slate-800"
        >

            {/* Header */}

            <div className="text-center mb-12">

                <h4 className="text-green-600 text-lg font-Ovo">Contact Me</h4>

                <h2 className="text-2xl sm:text-4xl font-bold mt-2 dark:text-gray-300">Get In Touch</h2>

                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 text-base dark:text-gray-300">

                    Have a project or idea in mind? Feel free to reach out - I’d love to hear from you.

                </p>

            </div>

            {/* Contact Form */}

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">

                {/* Name & Email */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-10">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-600
                                    focus:border-green-500 focus:ring-green-300 focus:outline-none
                                    bg-white/80 dark:bg-slate-800/80 placeholder-gray-500 dark:placeholder-gray-400
                                    dark:text-gray-100 shadow-sm transition-all duration-300"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-600
                                    focus:border-green-500 focus:ring-green-300 focus:outline-none
                                    bg-white/80 dark:bg-slate-800/80 placeholder-gray-500 dark:placeholder-gray-400
                                    dark:text-gray-100 shadow-sm transition-all duration-300"
                        required
                    />

                </div>

                {/* Message */}

                <div className='m-10'>

                    <textarea
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-600
                                    focus:border-green-500 focus:ring-green-300 focus:outline-none
                                    bg-white/80 dark:bg-slate-800/80 placeholder-gray-500 dark:placeholder-gray-400
                                    dark:text-gray-100 shadow-sm transition-all duration-300"
                        required
                    >

                    </textarea>

                </div>

                {/* Submit Button */}

                <button
                    type="submit"
                    className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full
                                hover:bg-green-700 transition-all duration-300 shadow-md mx-auto"
                >

                    Submit Now
                    <Image src={assets.rightArrow} alt="send" className="w-5" />

                </button>

                {/* Result */}

                {result && (
                    <p className="text-center text-sm text-green-600 mt-4">{result}</p>
                )}

            </form>

        </div>

    );

}

export default Contact