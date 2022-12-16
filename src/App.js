import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AnimatedPages from "./Components/AnimatedPages";



function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedPages />
        <Footer />
        <h1>Adsasdasdsa</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
