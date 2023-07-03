import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'




import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt , FaUserCircle, FaUserTie, FaUserGraduate, FaRegUser} from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import navbar_brand from '../../imgs/navbar-brand.png';


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
    const [status, setStatus] = useState(true);

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


    function open_close_platform() {
      status ? setStatus(false) :setStatus(true);
    }

    

    function partners(e) {
        let partners = document.querySelector('.partners_menu')

    



        if (e.target.className === 'partners') {
            partners.className === 'partners_menu' ? partners.className = 'partners_menu active' : partners.className = 'partners_menu' 
        } else{
          partners.className = 'partners_menu';
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
      document.querySelectorAll(".lng-en").forEach(el => el.classList.add('active'));
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
              <a target="_blank" href="https://www.facebook.com/people/Impuls-Medical-Institute/100076602543508/">
                <BsFacebook />
                </a>
                <a target="_blank" href="https://wa.me/message/GYTRCNFXZX6VI1?src=qr">
                <BsWhatsapp />
                </a>
            </span>

            <span className='nav_top_spans'>
              <a target="_blank" href="https://t.me/impuls_medical_institute">
                <BsChatText />
                {t("imi_support")}
                </a>
            </span>

            <span className='nav_top_spans'>
              <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                +998 (55) 510 50 15
                </a>
            </span>

            <span className='nav_top_spans'>
              <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                info@impulsmi.uz
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
                  <p>{t("impuls")}</p>
                  <p>{t("impuls_2")}</p>
                </div>
              </Link>
                  <div className='user_menu'>
                      
                    <div
                      className={nav ? "menu active" : "menu"}
                      onClick={changeClass}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
              
            </div>

            <ul className={nav ? "navigation active" : "navigation"}>
            <li>
              <Link to="/bizhaqimizda" onClick={changePages}>{t("biz_haqimizda")}</Link>
              </li>
              <li className="tuzilma">
                <Link className='tuzilma'>
                {t("tuzilma")}
                </Link>
                <div className="ul_menu_2 ul_menu">
                  <li><Link to="/nizom" onClick={changePages}>{t("imi_nizom")}</Link></li>
                  <li><Link to="/teachers" onClick={changePages}>{t("teachers")}</Link></li>
                  <li><Link to="/kutubxona" onClick={changePages}>{t("kutibxona")}</Link></li>

                  <li>
                    <a href='#' className='partners' onClick={(e) => partners(e)}>Indian parters</a>

                    <ul className='partners_menu'>
                      <li><Link to="/nizom" className='partners_li' onClick={changePages}>{t("imi_nizom")}</Link></li>
                      <li><Link to="/nizom" className='partners_li' onClick={changePages}>{t("imi_nizom")}</Link></li>
                      <li><Link to="/nizom" className='partners_li' onClick={changePages}>{t("imi_nizom")}</Link></li>
                    </ul>
                    

                    </li>
                  <li><Link to="/gallery" className='add' onClick={changePages}>Gallery</Link></li>
                  <li>
              <Link to="/yotoqxona" className='add' onClick={changePages}>{t("Talabalar_turar_joyi")}</Link>
              </li>
                  <li>
              <Link to="/fakultet" onClick={changePages}>{t("fakultet")}</Link>
              </li>
                </div>
              </li>
              

              <li>
                <Link onClick={changePages} to="/el_kutubxona">
                {t("el_kutibxona")}
                </Link>
              </li>
            
              <li>
                <Link className='faq' onClick={changePages} to="/faq">
                  {t("FAQ")}
                </Link>
              </li>
              <li>
                {/* <Link onClick={changePages} to="https://forms.amocrm.ru/rrrrmzl">
                  {t("aloqa")}
                </Link> */}
                <Link to="/aloqa">{t("aloqa")}</Link>
              </li>
              <li>
                {/* <Link onClick={changePages} to="https://forms.amocrm.ru/rrrrmzl">
                  {t("aloqa")}
                </Link> */}
                <a target="_blank" href="https://forms.gle/CUZjePJwmRfhNxgH8">{t("hujjat_topshirish")}</a>
              </li>
              {/* <li>
                <Link onClick={changePages} to="/" className='ariza_btn'>
                  {t("ariza_qoldirish")}
                </Link>
              </li> */}
                <li className="user_link desktop_user_link">
                <Link onClick={()=> {
                  open_close_platform()
                }} >
                  {/* <FaRegUser /> */}
                  {t("Login_portal")}
                </Link>
                <div className={status ? "platform_links" : "platform_links active"}>
                   <a href="http://mentor.backoffice.uz" target="_blank" onClick={open_close_platform}> <FaUserTie />  {t("Mentor")}</a>
                   <a href="http://student.backoffice.uz"  target="_blank" onClick={open_close_platform}><FaUserGraduate />  {t("Student")}</a>
                  </div>
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
