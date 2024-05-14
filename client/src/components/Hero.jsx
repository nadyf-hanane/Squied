import React from 'react'
import styles from '../style'
import { group, subtract } from '../assets'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="absolute z-[0] w-[130px] h-[130px] left-[10%] rounded-full black__radial bottom-44 sm:block hidden" />
      <div className="absolute z-[0] w-[96px] h-[96px] right-[8%] rounded-full black__radial top-44 sm:block hidden" />
      <div className="absolute z-[0] w-[64px] h-[64px] left-[50%] rounded-full black__radial top-20 sm:block hidden" />
      <div className="absolute z-[0] w-[500px] h-[500px] right-[400px] rounded-full black__radialCercle top-[-30px] sm:block hidden" />
      
      
      
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 `}>

        <h1 className="flex-1 font-poppins text-center font-semibold ss:text-[72px] 
            text-[64px] text-white ss:leading-[100.8px] leading-[75px] z-0 pg-select">Beautiful Landing Page<br />Design for You</h1>
        <p className={`${styles.paragraph} max-w-[490px] text-center mt-5 z-0`}>
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>
        <button className='p-3 mt-3 mb-9 font-poppins font-normal cursor-pointer text-[16px] z-0 text-white  bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-lg'>
          Download Template
        </button>
        <div className={`flex-1 flex ${styles.flexCenter} my-2 relative bottom-20`}>
          <img src={group} alt="" className="w-[90%] h-[90%] relative z-[5]" />

        </div>



      </div>
    </section>
  )
}

export default Hero
