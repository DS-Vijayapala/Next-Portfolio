'use client'

import React from 'react'
import { motion, MotionProps } from 'motion/react'

interface MotionWrapperProps extends MotionProps {
    children: React.ReactNode
    className?: string

}

const Motion = ({ children, ...props }: MotionWrapperProps) => {

    return (

        <motion.section {...props}>

            {children}

        </motion.section>

    )

}

export default Motion


