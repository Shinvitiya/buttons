"use client";

import { motion } from 'framer-motion'
import { useState } from 'react';

const Button1 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='btn-container'>

            <motion.button 
                className='rounded-lg text-lg relative overflow-hidden uppercase font-bold'
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
            >
                <motion.div 
                    className='bg-[#B03052] w-full h-full px-4 py-2 absolute'
                    initial={{clipPath: 'inset(0 0 0 0)'}}
                    animate={{clipPath: isHovered?'inset(0 0 0 100%)' : 'inset(0 0 0 0)' }}
                >
                    Hover Me
                </motion.div>

                <div className='bg-[#7AB2D3] w-full h-full px-4 py-2'>Hover Me</div>

            </motion.button>


            <p className=''>Button 1</p>

        </div>
    )
}

export default Button1