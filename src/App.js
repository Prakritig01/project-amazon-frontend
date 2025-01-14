import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"; // Assuming you want a Cart page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
