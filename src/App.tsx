import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <>
      <Header toggleTheme={themeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}
