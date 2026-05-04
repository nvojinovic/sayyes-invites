import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IvanaDimitrijePage from "./pages/IvanaDimitrijePage";
import WeddingPage from "./pages/WeddingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ivana-dimitrije" element={<IvanaDimitrijePage />} />
        <Route path="/:slug" element={<WeddingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
