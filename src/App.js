import { Routes, Route } from "react-router-dom";

//layout
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

//pages
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
