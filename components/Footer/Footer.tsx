import React from 'react';
import { Mail, Github, Linkedin, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {

    return (

        <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">


            {/* Gradient Background Effect */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute bottom-0 left-1/4 w-64 h-64
                 bg-violet-600/10 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-1/4 w-64 h-64
                 bg-purple-600/10 rounded-full blur-3xl" />

            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-10 lg:px-[12%] py-12">

                {/* Main Footer Content */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Left Column - Branding */}

                    <div className="flex flex-col items-center md:items-start space-y-4">

                        <div className="flex items-center gap-2">

                            <Image
                                src="/icon.png"
                                alt="Logo"
                                width={34}
                                height={34}
                                className="rounded-lg"
                            />

                            <span className="text-xl font-bold text-slate-100">Portfolio</span>

                        </div>

                        <p className="text-sm text-slate-400 text-center md:text-left max-w-xs">

                            Building modern, scalable, and user-friendly web applications
                            with passion and precision.

                        </p>

                    </div>

                    {/* Center Column - Contact */}

                    <div className="flex flex-col items-center space-y-4">

                        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">

                            Get in Touch

                        </h3>

                        <a
                            href="mailto:dinethsachintha52@gmail.com"
                            className="group flex items-center gap-2 px-4 py-2 
                            rounded-lg bg-slate-800/50 border border-slate-700
                             hover:border-violet-500/50 hover:bg-violet-500/10 
                             transition-all duration-300">

                            <Mail className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />

                            <span className="text-sm text-slate-300 group-hover:text-violet-300">

                                dinethsachintha52@gmail.com

                            </span>

                        </a>

                    </div>

                    {/* Right Column - Social Links */}

                    <div className="flex flex-col items-center md:items-end space-y-4">

                        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">

                            Connect

                        </h3>

                        <div className="flex items-center gap-3">

                            <a
                                href="https://github.com/DS-Vijayapala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 rounded-lg bg-slate-800/50 border
                                 border-slate-700 hover:border-violet-500/50
                                  hover:bg-violet-500/10 transition-all duration-300"
                                aria-label="GitHub">

                                <Github className="w-5 h-5 text-slate-400 group-hover:text-violet-400 
                                transition-colors duration-300" />

                            </a>

                            <a
                                href="https://www.linkedin.com/in/dineth-sachintha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 rounded-lg bg-slate-800/50 border
                                 border-slate-700 hover:border-purple-500/50
                                  hover:bg-purple-500/10 transition-all duration-300"
                                aria-label="LinkedIn">

                                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-purple-400 
                                transition-colors duration-300" />

                            </a>

                            <Link
                                href="/admin/login"
                                className="group p-3 rounded-lg bg-slate-800/50 border
                                 border-slate-700 hover:border-violet-500/50
                                  hover:bg-violet-500/10 transition-all duration-300"
                                aria-label="Admin Login"
                            >

                                <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-violet-300 
                                transition-colors duration-300" />

                            </Link>

                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div className="w-full h-px bg-gradient-to-r from-transparent 
                via-slate-700 to-transparent mb-6" />

                {/* Bottom Bar - Copyright */}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 
                text-sm text-slate-400">

                    <p className="flex items-center gap-2">

                        &copy; {new Date().getFullYear()} All rights reserved.

                    </p>

                    <p className="flex items-center gap-2">

                        Made with
                        <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                        by Dineth Sachintha

                    </p>

                </div>

            </div>

        </footer>

    );

}


export default Footer;
