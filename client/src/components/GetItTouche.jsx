import React from 'react'
import styles, {layout} from '../style'
import { monde } from '../assets'
const GetItTouche = () => {
  return (
    <section>
      
         <div className={`flex justify-center items-start py-8 ${layout.sectionReverse}`}>
                <div className={layout.sectionImgReverse}>
                    <img src={monde} alt="billing" className="w-[500px] h-[500px] relative z-[5] " />
                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                    Get In Touch
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
                    A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem 
                    </p>
                  <form action="" className='my-4'>
                    <input type="text"  placeholder='your name' className='p-3 my-3 w-[450px] bg-colorImg rounded-md'/>
                    <input type="email"  placeholder='your email' className='p-3 my-3 w-[450px] bg-colorImg rounded-md'/>
                    <textarea type="text"  placeholder='your email' className='p-3 my-3 w-[450px] bg-colorImg rounded-md'/>
                  </form>

                </div>
            </div>
    </section>
  )
}

export default GetItTouche