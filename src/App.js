import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Startup } from "./components/Pages/Startup";
import { Login } from "./components/Pages/Login";
import { AddListing } from "./components/Pages/AddListing";

function App() {
  return (
    <>
      <Router>
        <Home />

        <div className="pages">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/Startup" element={<Startup/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AddListing" element={<AddListing />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
