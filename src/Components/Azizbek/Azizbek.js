import { useState , useEffect} from 'react';
import './Azizbek.css'
import { MdMarkEmailUnread } from 'react-icons/md';
import { Link } from 'react-router-dom';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt , FaUserCircle, FaUserTie, FaUserGraduate, FaRegUser} from 'react-icons/fa';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

import logo_imi from '../../imgs/logotip imgs/logotip_ipmpuls.png'

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
  



function Azizbek() {


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
      <nav className={navbarClass ? "active" : ""}>

        <div className="navbar_top">
            <div className="socials">
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
            </div>
            <a target="_blank" href="https://t.me/impuls_medical_institute">
                <BsChatText />
                {t("imi_support")}
                </a>
                <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                +998 (55) 510 50 15
                </a>
                <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                info@impulsmi.uz
                </a>
                <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                {t("navtop_location")}
                </a>
            <div className="languages">
            <span className="lng-box">
                    {languages.map((lng) => (
                      <a href='#'
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
                      </a>
                    ))}
                </span>
            </div>
        </div>

        <div className="navbar">
            <div className="logo_imi">
                <div className="logo_imi_box">
                  <Link to="/"> <img src={logo_imi} alt="" /></Link>
                </div>
                <div className='logo_txt'>
                  <p><Link to="/">{t("impuls")}</Link></p>
                  <p><Link to="/">{t("impuls_2")}</Link></p>
                </div>
            </div>
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


            <ul className={nav ? "navigation active" : "navigation"}>
                <li>
                <Link className='tuzilma'>
                {t("tuzilma")}
                </Link>

                    <ul className='sub_menu'>
                        <li><Link to="/nizom" onClick={changePages}>{t("imi_nizom")}</Link></li>
                        <li><Link to="/teachers" onClick={changePages}>{t("teachers")}</Link></li>
                        <li><Link to="/kutubxona" onClick={changePages}>{t("kutibxona")}</Link></li>
                        <li>
                            <a href="#">Indian parters</a>

                            <ul className='sub_menu'>
                                <li>
                                    <Link to="/partners">Mayo MD Education Group</Link>
                                </li>
                                <li><Link onClick={() => console.log('Home 2')} to="/partner_3">GoMBBS Professional Educational Consultancy</Link></li>
                                <li><Link onClick={() => console.log('Home 2')} to="/partner_2">RAB MEDICO SERVICE</Link></li>
                            </ul>

                        </li>
                        <li><Link to="/bizhaqimizda" onClick={changePages}>{t("biz_haqimizda")}</Link></li>
                        
                        <li><Link to="/nizom" className='partners_li' onClick={changePages}>{t("imi_nizom")}</Link></li>
                        <li><Link to="/gallery" className='add' onClick={changePages}>Gallery</Link></li>
                    </ul>

                </li>
                <li><Link to="/bizhaqimizda" onClick={changePages}>{t("biz_haqimizda")}</Link></li>

                <li><Link onClick={changePages} to="/el_kutubxona">
                {t("el_kutibxona")}
                </Link></li>
                <li><Link className='faq' onClick={changePages} to="/faq">
                  {t("FAQ")}
                </Link></li>
                <li><Link to="/aloqa">{t("aloqa")}</Link></li>
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
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Azizbek
