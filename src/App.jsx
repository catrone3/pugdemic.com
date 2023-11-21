import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Footer, About, Contact, Portfolio, Shop, Socials } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <Hero />
          <Navbar />
        </div>
        <Portfolio />
        <About />
        <Shop />
        <Socials />
        <div className="relative z-0">
        <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
