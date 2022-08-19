import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Landing } from "./containers";

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
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
