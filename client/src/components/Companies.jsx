import React from 'react'
import styles, { layout } from '../style'
import { companies } from '../constants'
import { Frame } from '../assets'

const Companies = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} bg-colorCard`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
                <h1 className="flex-1 font-poppins text-center font-semibold ss:text-[64px] 
            text-[44px] text-white ss:leading-[100.8px] leading-[45px] my-6">Companies we Worked
                    <br />
                    With in Since 2015</h1>
                <div className=' flex items-center justify-between my-5 '>
                    {companies.map((comp, index) => (
                        <div className='bg-black rounded-lg p-4 mx-4'>
                            <p className='text-colorImg text-2xl font-medium '>{comp.title}</p>
                        </div>
                    ))}
                </div>
                <div className='bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-3xl w-[1000px] h-[400px]'>
                    <div className='flex justify-center items-start py-8 '>
                        <div className={`  ${layout.sectionInfo} px-8 `}>
                            <p className={`${styles.paragraph} max-w-[600px] mt-5 text-white`}>
                                Love our Our Tool?
                            </p>
                            <h2 className={styles.heading2}>
                                Fell Free to Join our
                                15 Days Free Trial
                            </h2>

                            <button className='p-3 mt-3 font-poppins font-normal cursor-pointer text-[16px] text-white  bg-black rounded-lg'>
                                Download Template
                            </button>

                        </div>
                        <div className="flex-1 flex justify-end items-end md:mr-10 mr-0 md:mt-0 mt-10 relative">
                            <img src={Frame} alt="billing" className="w-[400px] h-[300px] relative z-[5]" />
                        </div>


                    </div>
                </div>



            </div>
        </section>
    )
}

export default Companies