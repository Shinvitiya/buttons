"use client";

import { motion } from 'framer-motion'
import { useState } from 'react';

const Button3 = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className='btn-container'>

            <motion.button 
                className='rounded-lg text-lg relative overflow-hidden uppercase font-bold'
                onClick={()=>setIsClicked((prev) => !prev)}
            >
                <motion.div
                    className='bg-[#433878] px-4 py-2 inset-0 w-full h-full'
                >
                    Click Me
                </motion.div>  

                <motion.div
                    className='bg-[#387478] px-4 py-2 absolute w-full h-full'
                    animate={{y: isClicked? '-100%': '0%'}}
                >
                    <motion.span
                        animate={{y: isClicked? [4, 0] : -10}}
                        transition={{delay: 0.5, ease:[0.85, 0, 0.15, 1]}}
                    >
                        Clicked
                    </motion.span>
                </motion.div> 


            </motion.button>


            <p className=''>Button 3</p>

        </div>
    )
}

export default Button3