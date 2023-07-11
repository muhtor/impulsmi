import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AnimatedPages from "./Components/AnimatedPages";
// import Azizbek from "./Components/Azizbek/Azizbek";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedPages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
