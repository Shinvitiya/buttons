'use client';

import {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Button5 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='btn-container'>

            <motion.button 
                className='rounded-lg text-lg relative overflow-hidden uppercase font-bold flex bg-[#836FFF] items-center justify-center px-4 py-2 w-[150px]'
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                animate={{
                    scale: isHovered? 1.05 : 1
                }}
            >
                <motion.div 
                    className=' w-full h-full'
                    animate={{
                        x: isHovered? -3: 3,
                    }}
                >
                    Hover Me
                </motion.div>

                <motion.div 
                    key={isHovered}
                    className=' w-2 h-2 bg-[#EBF400] rounded-full aspect-square'
                    initial={{opacity:0}}
                    animate={{opacity: isHovered? 1 : 0}}
                    exit={{opacity: 0}}        
                />

            </motion.button>


            <p className=''>Button 5</p>

        </div>
    )
}

export default Button5