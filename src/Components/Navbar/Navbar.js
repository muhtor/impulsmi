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

    function changePages() {
        nav ? setNav(false) : setNav(true);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                <h1>{t("name_univer")}</h1>
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
              <li className='imi'>
                <Link className='desktop_item'>
                  {t("bosh_sahifa")}
                  <IoIosArrowDown />
                </Link>
                  <div className="ul_pages">
                      <Link onClick={changePages} to="/bizhaqimizda" href="#">{t("bosh_sahifa")}</Link>
                      <Link className='yangi' to="/" onClick={changePages} href="#">Struktura</Link>
                      <Link className='yangi' to="/" onClick={changePages} href="#">O'quv binosi</Link>
                  </div>
              </li>
              <li>
                <Link onClick={changePages} to="/usmle">
                  {t("usmle")}
                </Link>
              </li>
              <li>
                <Link onClick={changePages} to="/kutubxona">
                  {t("kutibxona")}
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