import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import useDarkMode from "./hooks/useDarkMode";
import Flashscore from "./pages/Flashscore";

export default function App() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <>
      <Header toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:code" element={<Flashscore />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}
