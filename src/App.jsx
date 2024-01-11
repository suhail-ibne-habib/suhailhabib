import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>        
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
      </Routes>
    </Router>
);
}

export default App;
