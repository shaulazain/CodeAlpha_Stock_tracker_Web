import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import News from "./pages/News";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
import Watchlist from "./pages/Watchlist";
import Compare from "./pages/Compare";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/News" element={<News />} />
            <Route path="/comapre" element={<Compare />} />

          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
