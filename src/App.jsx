import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPg from "./pages/MainPg";
import AnimalPg from "./pages/AnimalPg";
import HistoryPg from "./pages/HistoryPg";
import EnvironmentPg from "./pages/EnvironmentPg";
import SciencePg from "./pages/SciencePg";
import TravelPg from "./pages/TravelPg";
import NotFoundPg from "./pages/NotFoundPg";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header></header> */}
        <HeaderCp />
        <main>
          <Routes>
            <Route path="/" element={<MainPg />} />
            <Route path="/animal" element={<AnimalPg />} />
            <Route path="/history" element={<HistoryPg />} />
            <Route path="/environment" element={<EnvironmentPg />} />
            <Route path="/science" element={<SciencePg />} />
            <Route path="/travel" element={<TravelPg />} />
            <Route path="*" element={<NotFoundPg />} />
          </Routes>
        </main>
        {/* <footer></footer> */}
        <FooterCp />
      </BrowserRouter>
    </div>
  );
}

export default App;
