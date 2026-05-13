import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IvanaDimitrijePage from "./pages/IvanaDimitrijePage";
import WeddingPage from "./pages/WeddingPage";
import TemplateCinematicPage from "./pages/TemplateCinematicPage";
import TemplateEditorialPage from "./pages/TemplateEditorialPage";
import TemplateGatsbyPage from "./pages/TemplateGatsbyPage";
import TemplateWatercolorPage from "./pages/TemplateWatercolorPage";
import TemplateBotanicalPage from "./pages/TemplateBotanicalPage";
import TemplateTypefacePage from "./pages/TemplateTypefacePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ivana-dimitrije" element={<IvanaDimitrijePage />} />
        {/* Wedding invitation templates */}
        <Route path="/template-cinematic" element={<TemplateCinematicPage />} />
        <Route path="/template-editorial" element={<TemplateEditorialPage />} />
        <Route path="/template-gatsby" element={<TemplateGatsbyPage />} />
        <Route path="/template-watercolor" element={<TemplateWatercolorPage />} />
        <Route path="/template-botanical" element={<TemplateBotanicalPage />} />
        <Route path="/template-typeface" element={<TemplateTypefacePage />} />
        {/* Dynamic customer pages */}
        <Route path="/:slug" element={<WeddingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
