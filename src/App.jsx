import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Presentation from "./pages/Presentation/Presentation";
import Office from "./pages/Office/Office";
import Work from "./pages/Work/Work";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="/accueil" element={<Homepage />} />
          <Route path="/qui-suis-je" element={<Presentation />} />
          <Route path="/le-cabinet" element={<Office />} />
          <Route path="/ma-pratique" element={<Work />} />
          <Route path="/prendre-rendez-vous" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
