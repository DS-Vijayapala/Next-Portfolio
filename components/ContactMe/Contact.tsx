"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MessageSquare, User, Sparkles } from "lucide-react";
import "./Contact.css";

function Contact() {

    const [result, setResult] = useState("");

    const [loading, setLoading] = useState(false);

    const onSubmit = async (event: any) => {

        event.preventDefault();

        setLoading(true);

        try {

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

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

    };

    return (

        <div
            id="contact"
            className="relative w-full px-4 sm:px-10 lg:px-[12%]
             py-20 overflow-hidden bg-gradient-to-br
              from-slate-950 via-slate-900 to-slate-950"
        >

            {/* Animated Waves */}

            <div className="waves-background">

                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>

            </div>

            {/* Floating Orbs */}

            <div className="orbs-background">

                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
                <div className="orb orb-4"></div>

            </div>

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b
             from-slate-900/60 via-transparent to-slate-900/60 
             pointer-events-none"></div>

            {/* Content */}

            <div className="relative z-10">

                {/* Header */}

                <div className="text-center mb-5">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 
                        rounded-full bg-violet-500/10 border border-violet-500/20 mb-4"
                    >

                        <Sparkles className="w-4 h-4 text-violet-400" />

                        <span className="text-violet-400 text-sm font-medium">Contact Me</span>

                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r
                         from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-2"
                    >

                        Get In Touch

                    </motion.h2>

                    <motion.p

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-slate-400 text-base sm:text-sm"
                    >

                        Have a project or idea in mind? Feel free to reach out — I'd love to hear from you.

                    </motion.p>

                </div>

                {/* Contact Form */}

                <motion.form
                    onSubmit={onSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto contact-form-container space-y-6"
                >

                    {/* Name & Email */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="relative">

                            <User className="absolute top-5 left-3 text-violet-400 w-4 
                            h-4 pointer-events-none" />

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="contact-input pl-10 pt-3"
                                required
                            />

                        </div>

                        <div className="relative">

                            <Mail className="absolute top-5 left-3 text-violet-400 w-4 h-4 
                            pointer-events-none" />

                            <label htmlFor="contact-email" className="sr-only">Email</label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="contact-input pl-10 pt-3"
                                required
                            />

                        </div>

                    </div>

                    {/* Message */}

                    <div className="relative">

                        <MessageSquare className="absolute top-6 left-4 text-violet-400
                         w-4 h-4 pointer-events-none" />

                        <textarea
                            rows={6}
                            name="message"
                            placeholder="Your Message"
                            className="contact-textarea pl-10 pt-6"
                            required
                        />

                    </div>

                    {/* Submit Button */}

                    <div className="flex justify-center">

                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600
                             hover:from-violet-700 hover:to-purple-700 text-white mt-4 text-sm
                            rounded-full w-32 h-10 font-medium shadow-md relative overflow-hidden transition-all duration-300
                            ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >

                            {loading ? (

                                <>
                                    <motion.div
                                        className="w-4 h-4 border-2 border-white border-t-transparent 
                                        rounded-full animate-spin"
                                        aria-label="loading"
                                    ></motion.div>

                                    Sending...

                                </>

                            ) : (

                                <>

                                    Submit

                                    <Send className="w-4 h-4 transition-transform duration-300
                                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                </>

                            )}

                        </button>

                    </div>

                    {/* Result Message */}

                    {result && (

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center gap-2 mt-4 text-slate-300"
                        >

                            <Sparkles className="w-4 h-4 text-violet-400" />

                            <p className="text-sm font-medium">{result}</p>

                        </motion.div>

                    )}

                </motion.form>

            </div>

        </div>

    );

}


export default Contact;
