import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import Cards from './cards'
import { imgSection } from '../assets'

const Feature = () => {
    return (
        <section className={`${styles.paddingY}  flex-col relative `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 `}>
                <h1 className="flex-1 font-poppins  font-semibold ss:text-[72px] text-[64px] text-white 
                ss:leading-[100.8px] leading-[75px]">Feature Boxes</h1>
                <p className={`${styles.paragraph} max-w-[500px] text-dimWhite mt-5`}>
                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                </p>
            </div>
            
            <div className={`${styles.flexCenter} flex flex-wrap sm:justify-center items-center  w-full  relative z-[1]`}>
                {features.map((card) => <Cards key={card.id} {...card} />)}
            </div>
            <div className={`flex justify-center items-start py-8 ${layout.sectionReverse}`}>
                <div className={layout.sectionImgReverse}>
                    <img src={imgSection} alt="billing" className="w-[500px] h-[500px] relative z-[5] object-contain cursor-pointer" />
                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        We're here to guide
                        <br className="sm:block hidden" />
                        and help you at all times
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                    </p>
                    <button className='p-3 mt-3 font-poppins font-normal cursor-pointer text-[16px] text-white  bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-lg'>
                        Download Template
                    </button>

                </div>
            </div>

        </section>
    )
}

export default Feature
