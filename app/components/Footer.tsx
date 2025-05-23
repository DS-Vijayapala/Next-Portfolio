import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer() {

    return (

        <div className='mt-20'>

            <div className='text-center sm:flex items-center justify-between border-t
            border-gray-400 mx-[10%] mt-10 py-6'>

                <p>add copy write text</p>

                <div className='w-max flex items-center gap-2 mx-auto'>

                    <Image

                        src={assets.mail_icon}
                        alt="logo"
                        className='w-6 '
                    />
                    example@example.com

                </div>

                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>

                    <li >

                        <a className='w-max flex items-center gap-2 mx-auto' target='_blank' href="#">

                            <Image
                                src={assets.github}
                                alt="logo"
                                className='w-4 bg-white '
                            />Github

                        </a>

                    </li>

                    <li>

                        <a className='w-max flex items-center gap-2 mx-auto' target='_blank' href="#">

                            <Image
                                src={assets.linkedin}
                                alt="logo"
                                className='w-4 '
                            />LinkedIn

                        </a>

                    </li>

                    <li>

                        <a className='w-max flex items-center gap-2 mx-auto' target='_blank' href="#">

                            <Image

                                src={assets.x_logo}
                                alt="logo"
                                className='w-4 '
                            />Twitter

                        </a>

                    </li>

                </ul>

            </div>

        </div>

    )
}

export default Footer