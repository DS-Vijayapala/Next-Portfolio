import React from 'react'
import { assets, serviceData, Projects } from '@/assets/assets'
import Image from 'next/image'

function Project() {

    return (

        <div
            id="Projects"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2 text-slate-800"
        >

            {/* Header */}

            <div className="text-center mb-12">

                <h4 className="text-green-600 text-lg font-Ovo">My Latest Works</h4>

                <h2 className="text-2xl sm:text-4xl font-bold mt-2">Projects</h2>

                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 text-base">

                    I provide a wide range of modern development services, focusing on performance,
                    accessibility, and design excellence.
                </p>

            </div>

            {/* Project Cards Grid */}

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 my-10">

                {Projects.map(({ title, description, bgImage }, index) => (

                    <div
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl shadow-sm relative overflow-hidden group"
                    >

                        <div>

                            <Image src={bgImage} alt={title} className="w-full h-full object-cover" />

                        </div>

                        <div
                            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-xl
                                        p-4 rounded-lg flex items-center justify-between shadow-md transition-all duration-300
                                        group-hover:bottom-7 hover:bg-green-200"
                        >
                            <div>

                                <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
                                <p className="text-sm text-gray-600">{description}</p>

                            </div>

                            <div className="w-9 h-9 flex items-center justify-center">

                                <Image src={assets.sendicon} alt="send icon" className="w-4" />

                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Show All Button */}

            <a
                href=""
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 border border-slate-400
                    rounded-full py-3 px-8 mx-auto mt-16 hover:bg-green-100 hover:text-gray-700 transition duration-300 w-max"
            >
                Show All
                <Image src={assets.rightArrow} alt="right arrow" className="w-4" />
            </a>

        </div>

    );

}


export default Project;