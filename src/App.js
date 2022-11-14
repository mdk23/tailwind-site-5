
 import styles from "./styles";
 import {Navbar,Hero,Billing,
  Stats,Bussiness,CardDeal,Testimonials,Clients,CTA ,Footer } from "./components/index"; 

function App() {
  
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
      </div>

      {/**Hero Section Inicio **/}

      <div className={`bg-primary ${styles.flexStart }`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>  
      </div>
      {/**Hero Section Inicio **/}

      {/**Inicio Other Components **/}

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Bussiness/>
          <Billing/>  
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
      {/**Fim Other Components  **/}



    </div>
  );
}

export default App;
