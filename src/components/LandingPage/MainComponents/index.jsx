import React from 'react'
import './styles.css'
import Button from "../../Common/Button";
import iphone from '../../../assets/iphone.png';
import Gradient from '../../../assets/gradient.png';
import { motion } from 'framer-motion'


const MainComponents = () => {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 
            initial={{opacity:0, scale:0}}
            animate={{opacity:1, scale: 1}}
            transition={{ duration: 1 }}
            
            className='track-crypto-heading'>Track Crypto</motion.h1>
            <motion.h1 
             initial={{opacity:0, scale:0}}
            animate={{opacity:1.5, scale: 1}}
            transition={{ duration: 1.5 }}
            className='real-time-heading'>Real Time .</motion.h1>
            <motion.p
             initial={{opacity:0, scale:0}}
            animate={{opacity:1, scale: 1}}
            transition={{ duration: 1.75 }}
            className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <div className='btn-flex'>
           <Button text={"Dashboaard"}/>
           <Button text={"Share Now"} outline={true}/>
        </div>
        </div>
       
        <div className='phone-container'>
            <motion.img 
            initial={{y: -10}}
            animate={{y: 10}}
            transition={{type: "smooth", repeatType:"mirror", repeat:Infinity, duration:2}}
            src={iphone} alt="" className='iphone' />
            <img src={Gradient} alt="" className='gradient' />
        </div>

    </div>
  )
}

export default MainComponents