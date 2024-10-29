"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


const Button1 = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='btn-container'>

            <button
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                className='flex items-center justify-center'
            >
                <motion.div 
                    className='px-4 py-2 rounded-lg  uppercase text-lg font-semibold'
                    animate={{
                        backgroundColor: isHovered? '#133E87' : '#608BC1',
                        x: isHovered? -8 : 0
                    }}
                    transition={{
                        ease: [0.34, 1.56, 0.64, 1],
                        duration: 1
                    }}
                >
                    Hover me
                </motion.div>

                <AnimatePresence mode='popLayout'>
                { isHovered && (
                    <motion.div 
                        key={isHovered}
                        className='rounded-full aspect-square p-2'
                        animate={{
                            opacity: isHovered? 1 : 0,
                            x: isHovered? 8 : 0,
                            backgroundColor: isHovered? '#133E87' : '#608BC1'
                        }}
                        transition={{
                        ease: [0.34, 1.56, 0.64, 1],
                        duration: 1
                        }}
                        exit={{
                            opacity: 0,
                            backgroundColor: '#608BC1'
                        }}
                    >
                        <FaArrowRight />
                    </motion.div>
                )}
                </AnimatePresence>

            </button>

            <p className=''>Button 2</p>
        </div>
    )
}

export default Button1