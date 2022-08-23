import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Contact, Landing, Portfolio, Services } from "./containers";

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
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
