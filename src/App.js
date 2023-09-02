import { BrowserRouter } from "react-router-dom";
import './App.css'
import Footer from "./Components/Footer/Footer";
import AnimatedPages from "./Components/AnimatedPages";
// import Azizbek from "./Components/Azizbek/Azizbek";
import Navbar from "./Components/Navbar/Navbar";
import { IoIosCloseCircle } from 'react-icons/io'
import { useState } from "react";

function App() {

  const [popup, setPopup] = useState(true);


  function closePopup() {
    setPopup(false);
  }

  return (
    <>
      <div className={popup ? "popup_news" : "popup_news active"}>
          <div className="popup_inner_div">
            <img src="https://aloqaloyiha.uz/uploads/posts/2021-09/1630512111_mustaqillik.jpg" alt="" />
            <p className="news_info_decription">Mustaqiligimizning 32 yilligi munosabati bilan Impuls Instituti rektori Xolmirzayev Orifjon No’monovichdan tabrik xati! <br /> Mustaqillik bu asli erkin fikrlashimiz, o’z taqdir yo’limizni o’zimiz belgilashimiz, istagan kasbimizga ega bo’lishimiz va shu kasbni rivojlantirishga hissa qo’shib, shu kasb orqali tinchlik farovonlikda yashayotgan xalqimizga hizmat qila olishimiz demakdir.Vatanimiz o’zining davlat mustaqilligini qo’lga kiritgani va mustaqil taraqqiyot yo’lini boshlaganiga 32- yil to’ldi. Shu munosabat bilan bo’lajak shifokorlarimizni, ularning ota onalari va barcha yutrdoshlarimizni eng ulug’ bayramimiz Mustaqilligimizning 32-yilligi bilan muborakbod etaman.</p>
            <span className="closeBtn" onClick={closePopup}>
              <IoIosCloseCircle />
            </span>
          </div>
      </div>
      <BrowserRouter>
        <Navbar />
        <AnimatedPages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
