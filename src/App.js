import { Routes, Route } from "react-router-dom";

//layout
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//pages
import Main from "./pages/Main";
import About from "./pages/About";
import Videos from "./pages/Videos";

export const breakpoint = 768
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <div className="overlay">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
