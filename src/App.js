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
import Vacansy from "./pages/Vacansy/Vacansy";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
