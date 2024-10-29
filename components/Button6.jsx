"use client";

import {useState} from 'react'
import { motion } from 'framer-motion'

const Button6 = () => {
  return (
    <div className='btn-container'>
        <motion.button
            className='px-4 py-2 font-semibold text-lg uppercase rounded-lg'
            //initial={{backgroundColor: "#007F73"}}
            animate={{backgroundColor: ['#5D0E41', '#007F73','#FF004D', '#5D0E41']}}
            transition={{duration: 6, repeat: Infinity, ease:'easeInOut'}}
        >
            Button
        </motion.button>
        <p>Button 6</p>
    </div>
  )
}

export default Button6