import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import PageItb from "./Components/Pages/PageItb";
import PageSe from "./Components/Pages/PageSe";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header Title="Grade Calculator" SUBTitle=""/>
      <br />
      <h5 className="title2">@geeth-salindra</h5>

      <div className="style-btn-all-cal">
        <button className="style-btn-main" onClick={() => navigate("/page-itb")}>
          ITB Grade Calculation
        </button>
        <button className="style-btn-main" onClick={() => navigate("/page-se")}>
          SE Grade Calculation
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-itb" element={<PageItb />} />
        <Route path="/page-se" element={<PageSe />} />
      </Routes>
    </Router>
  );
}

export default App;
