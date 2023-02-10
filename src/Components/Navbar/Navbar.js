import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'




import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import navbar_brand from '../../imgs/navbar-brand.png'


const languages = [
  {
    language: 'uz',
    innerHtml: 'Uz',
    id: '1'
  },
  {
    language: 'ru',
    innerHtml: 'Ru',
    id: '2'
  },
  {
    language: 'en',
    innerHtml: 'En',
    id: '3'
  },
]




function Navbar() {

  const { t } = useTranslation();

    const [nav, setNav] = useState(false);
    const [navbarClass, setNavbarClass] = useState(false);
    const [lng, setLng] = useState(false);

    function changeClass() {
        nav ? setNav(false) : setNav(true);
    }
    function chnangeLanguages() {
        lng ? setLng(false) : setLng(true);
    }

    function changePages(e) {
        nav ? setNav(false) : setNav(true);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    function ul_menu(e){
      document.querySelector('.ul_menu_3').classList.remove('active');
      e.target.parentElement.parentElement.classList.remove('active');
      upBtnF();
    }


    function visible_menu(e) {
      let ul_menu_1 = document.querySelector('.ul_menu_1')
      let ul_menu_2 = document.querySelector('.ul_menu_2')
      let ul_menu_3 = document.querySelector('.ul_menu_3')
      if (e.target.parentElement.className === 'imi') {
        ul_menu_1.className === 'ul_menu_1 active' ?
        ul_menu_1.className = "ul_menu_1" : 
        ul_menu_1.className ="ul_menu_1 active";
        ul_menu_2.classList.remove('active');
        ul_menu_3.classList.remove('active');
      } else if(e.target.parentElement.className === 'tuzilma'){
        ul_menu_2.className === 'ul_menu_2 active' ?
        ul_menu_2.className = "ul_menu_2" : 
        ul_menu_2.className ="ul_menu_2 active";
        ul_menu_1.classList.remove('active');
        ul_menu_3.classList.remove('active');
      } else if(e.target.parentElement.className === 'talabalar'){
        ul_menu_3.className === 'ul_menu_3 active' ?
        ul_menu_3.className = "ul_menu_3" : 
        ul_menu_3.className ="ul_menu_3 active";
        ul_menu_1.classList.remove('active');
        ul_menu_2.classList.remove('active');
      } else{
        ul_menu_1.classList.remove('active');
        ul_menu_2.classList.remove('active');
        ul_menu_3.classList.remove('active');
      }
    }




    window.addEventListener('scroll', () => {
       if (window.scrollY >= 100) {
            setNavbarClass(true);
        }else {
            setNavbarClass(false);
        }
    });

    function upBtnF() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
      document.querySelectorAll(".lng-uz").forEach(el => el.classList.add('active'));
    }, []);

    function changeLng(e) {
      document.querySelectorAll('.lng')
      .forEach(el => el.classList.remove('active'));
      if (e.target.id === "uz") {
        document.querySelectorAll('.lng-uz').forEach(el => el.classList.add('active'))
      }else if(e.target.id === "ru") {
        document.querySelectorAll('.lng-ru').forEach(el => el.classList.add('active'))
      } else {
        document.querySelectorAll('.lng-en').forEach(el => el.classList.add('active'))
      }
    }

    return (
      <>
        <div className={navbarClass ? "navbar active" : "navbar"}>

          <div className={navbarClass ? "nav-top-info active" : "nav-top-info"}>
            
            <span className='nav_top_spans'>
              <a target="_blank" href="https://t.me/impulsmi_uz">
                <BsTelegram />
                </a>
              <a target="_blank" href="https://www.instagram.com/impuls_mi/">
                <BsInstagram />
                </a>
              <a target="_blank" href="Thttps://www.facebook.com/profile.php?id=100087750432881">
                <BsFacebook />
                </a>
            </span>

            <span className='nav_top_spans'>
              <a target="_blank" href="https://t.me/IMI_qabul">
                <BsChatText />
                imi_support
                </a>
            </span>

            <span className='nav_top_spans'>
              <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                (55) 510 50 15
                </a>
            </span>

            <span className='nav_top_spans'>
              <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                impulsedu1@gmail.com
                </a>
            </span>

            <span className='nav_top_spans'>
              <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                {t("navtop_location")}
                </a>
            </span>

            <span className='lngs' onClick={chnangeLanguages}>
                <span className="lng-box">
                    {languages.map((lng) => (
                      <span
                      id={lng.language}
                        className={`lng lng-${lng.language}`}
                        onClick={(e) => {
                          i18next.changeLanguage(lng.language);
                          changeClass();
                          changeLng(e);
                        }}
                        key={lng.id}
                      >
                        {lng.innerHtml}
                      </span>
                    ))}
                </span>
              </span>

          </div>


          <div className="nav">
            <div className="navbar-brand">
              <Link onClick={upBtnF} to="/">
                <img src={navbar_brand} alt="" />
                <div>
                  <p>IMPULS</p>
                  <p>TIBBIYOT INSTITUTI</p>
                </div>
              </Link>
              <div
                className={nav ? "menu active" : "menu"}
                onClick={changeClass}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <ul className={nav ? "navigation active" : "navigation"}>
              <li className='imi' onClick={(e) => visible_menu(e)}>
                <Link>
                  {t("bosh_sahifa")}
                  <IoIosArrowDown />
                </Link>
                <div className="ul_menu_1 ul_menu">
                  {/* <li><Link onClick={ul_menu} to="/bizhaqimizda" href="#">IMI haqida</Link></li> */}
                  <li><Link onClick={ul_menu} to="/">IMI haqida</Link></li>
                  <li><Link to="/" onClick={ul_menu}>Struktura</Link></li>
                  <li><a onClick={ul_menu} to="/">O'quv binosi</a></li>
                  <li><a onClick={ul_menu} to="/">Yotoqxona</a></li>
                </div>
              </li>
              <li className="tuzilma" onClick={(e) => visible_menu(e)}>
                <Link>
                  Tuzilma
                  <IoIosArrowDown />
                </Link>
                <div className="ul_menu_2 ul_menu">
                  <li><a onClick={ul_menu} to="/">Institut nizomi</a></li>
                  <li><a onClick={ul_menu} to="/">Rektorat</a></li>
                  <li><a onClick={ul_menu} to="/">Institut kengashi</a></li>
                  <li><a onClick={ul_menu} to="/">Rekvizitlar</a></li>
                  <li><a onClick={ul_menu} to="/">Tuzilma</a></li>
                  <li><a onClick={ul_menu} to="/">Fakultetlar</a></li>
                  {/* <li><Link onClick={ul_menu} to="/markaz">Markaz va Bo'limlar</Link></li> */}
                  <li><Link onClick={ul_menu} to="/">Markaz va Bo'limlar</Link></li>
                </div>
              </li>
              <li className='talabalar' onClick={(e) => visible_menu(e)}>
                <Link>
                  Talabalar
                  <IoIosArrowDown />
                </Link>
                <div className="ul_menu_3 ul_menu">
                  <li><a href="#" onClick={ul_menu}>EVEREST TEAM</a></li>
                  <li><a onClick={ul_menu} href="#">Iqtidorli talabalar</a></li>
                  <li><a onClick={ul_menu} href="#">Dars jadvali</a></li>
                  <li><a onClick={ul_menu} href="#">Online ta'lim</a></li>
                </div>
              </li>
              <li>
                <Link>
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/aloqa">
                  Kutubxona
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/aloqa">
                  {t("aloqa")}
                </Link>
              </li>
              <li>
                <Link className='faq' onClick={changePages} to="/">
                  {t("FAQ")}
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/" className='ariza_btn'>
                  {t("ariza_qoldirish")}
                </Link>
              </li>
              <li className='nav_lng' onClick={chnangeLanguages}>
                <span className="lng-box">
                    {languages.map((lng) => (
                      <span
                      id={lng.language}
                      className={`lng lng-${lng.language}`}
                        onClick={(e) => {
                          i18next.changeLanguage(lng.language);
                          changeClass();
                          changeLng(e);
                        }}
                        key={lng.id}
                      >
                        {lng.innerHtml}
                      </span>
                    ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar;