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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
