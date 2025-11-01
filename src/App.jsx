import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
