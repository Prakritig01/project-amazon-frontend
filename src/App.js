import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";


function App() {
  return <div className="App">
    <Header/>
    <Navbar/>
    <HomePage/>
    <Footer/>
  </div>;
}

export default App;
