import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Companies from './components/Companies';
import GetItTouche from './components/GetItTouche';
import Footer from './components/footer';
import Social from './components/Social';
import styles from './style'
import { subtract } from './assets';

function App() {


  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg__pattern ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg__pattern ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <img src={subtract} alt="" className="w-[100%] h-[100%] absolute top-3/4 left-0 z-[0]" />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Feature />
        </div>
      </div>
      <div className={`bg-colorCard ${styles.paddingX} ${styles.flexCenter}`}>
        <Companies />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <GetItTouche />

      </div>

      <div className={` bg-colorCard ${styles.paddingX} ${styles.flexCenter}`}>
        <Footer />

      </div>
      <div className={` bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Social />
  </div>
      </div>
    </div>
  )
}

export default App
