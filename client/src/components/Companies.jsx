import React from 'react';
import styles, { layout } from '../style';
import { companies } from '../constants';
import { Frame } from '../assets';

const Companies = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} bg-colorCard`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
                <h1 className="flex-1 font-poppins text-center font-semibold ss:text-[64px] text-[44px] text-white ss:leading-[100.8px] leading-[45px] my-6">
                    Companies we Worked With Since 2015
                </h1>
                <div className="flex flex-wrap justify-center my-5">
                    {companies.map((comp, index) => (
                        <div key={index} className="bg-black rounded-lg p-4 mx-4 my-2">
                            <p className="text-colorImg text-2xl font-medium">{comp.title}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-3xl px-4 py-8 sm:px-8 sm:py-12 md:w-[1000px] md:h-[400px] w-full h-auto">
                    <div className="flex flex-col sm:flex-row justify-center items-start">
                        <div className={`${layout.sectionInfo} sm:pr-0 sm:w-[600px] w-full`}>
                            <p className={`${styles.paragraph} mt-5 text-white`}>
                                Love our Tool?
                            </p>
                            <h2 className={styles.heading2}>
                                Feel Free to Join our 15 Days Free Trial
                            </h2>
                            <button className="p-3 mt-3 font-poppins font-normal cursor-pointer text-[16px] text-white bg-black rounded-lg">
                                Download Template
                            </button>
                        </div>
                        <div className="sm:w-[400px] w-full flex justify-center items-end sm:items-center mt-6 sm:mt-0">
                            <img src={Frame} alt="billing" className="w-full sm:max-w-none sm:w-[400px] h-auto" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Companies;
