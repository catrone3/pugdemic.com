import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Footer, About, Contact, Portfolio, Shop } from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="max-w-7xl mx-auto relative z-0 pt-7">
          <Hero />
          
        </div>
        <Navbar />
        <Portfolio />
        <About />
        <Shop />
        <div className="relative z-0">
        <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
