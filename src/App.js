import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  About,
  Contact,
  Landing,
  Partners,
  Portfolio,
  Services,
  VacancySuggest,
} from "./containers";
import { Vacansy, PortfolioPage, MainPortfolio, NotFound } from "./pages";

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Portfolio />
              <Services />
              <Contact />
              <Partners />
              <VacancySuggest />
            </>
          }
        />
        <Route path="/vacansy/:id" element={<Vacansy />} />
        <Route exact path="/portfolio" element={<MainPortfolio />} />
        <Route path="/portfolio/:type" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/portfolio/:type" element={<PortfolioComponent data={portolioData.portfolio.data} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
