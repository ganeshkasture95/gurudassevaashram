import About from "./components/About"
import DonateUs from "./components/Bottom"
import AshramInfo from "./components/Gal"
import Hero from "./components/Hero"
import Services from "./components/Services"


const HomePage = () => {
  return (
    <div className=" relative min-h-screen w-screen overflow-x-hidden">
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      {/* <History/> */}
      <Services/>
      <AshramInfo/>
      <DonateUs/>
      {/* <DonateUs/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage