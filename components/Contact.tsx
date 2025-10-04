import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

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

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2  text-slate-800"
        >

            {/* Header */}

            <div className="text-center mb-12">

                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-green-600 text-lg font-Ovo">Contact Me</motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-2xl sm:text-4xl font-bold mt-2 dark:text-gray-300">Get In Touch</motion.h2>

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 text-base dark:text-gray-300">

                    Have a project or idea in mind? Feel free to reach out - I’d love to hear from you.

                </motion.p>

            </div>

            {/* Contact Form */}

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">

                {/* Name & Email */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-10">

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-600
                                    focus:border-green-500 focus:ring-green-300 focus:outline-none
                                    bg-white/80 dark:bg-slate-800/80 placeholder-gray-500 dark:placeholder-gray-400
                                    dark:text-gray-100 shadow-sm transition-all duration-300"
                        required
                    />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.3 }}
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

                    <motion.textarea
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.3 }}
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-600
                                    focus:border-green-500 focus:ring-green-300 focus:outline-none
                                    bg-white/80 dark:bg-slate-800/80 placeholder-gray-500 dark:placeholder-gray-400
                                    dark:text-gray-100 shadow-sm transition-all duration-300"
                        required
                    >

                    </motion.textarea>

                </div>

                {/* Submit Button */}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type="submit"
                    className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full
                                hover:bg-green-700 transition-all duration-300 shadow-md mx-auto"
                >

                    Submit Now
                    <Image src={assets.rightArrow} alt="send" className="w-5" />

                </motion.button>

                {/* Result */}

                {result && (
                    <p className="text-center text-sm text-green-600 mt-4">{result}</p>
                )}

            </motion.form>

        </motion.div>

    );

}

export default Contact