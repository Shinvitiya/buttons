"use client"

import { motion } from "framer-motion";

export const hoverVariants = {
    hover:{
        boxShadow: ["none", 
                "5px 5px 0px 0px #16FF00, 9px 10px 0px 0px #FDFF00 ,13px 15px 0px 0px #FF6464"],
        transition: {duration: 0.4},
        y: -5,
    },
    initial:{
        boxShadow:"0px 0px 0px 0px rgba(0, 0, 0, 0)",
    }
};

const Button7 = () => {
  return (
    <div className="btn-container">
        <motion.button 
            variants={hoverVariants}
            initial="initial"
            whileHover="hover"
            className='border-2 px-4 py-2 rounded-lg font-semibold text-lg uppercase'
        >
            Hover Me
        </motion.button>

        <p>Button 7</p>
    </div>
  )
}

export default Button7