import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AnimatedPages from "./Components/AnimatedPages";
import Azizbek from "./Components/Azizbek/Azizbek";


function App() {
  return (
    <>
      <BrowserRouter>
        <Azizbek />
        <AnimatedPages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
