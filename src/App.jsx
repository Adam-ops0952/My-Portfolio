
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
