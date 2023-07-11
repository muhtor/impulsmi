import React, { useState , useEffect }from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

import navbar_logo from '../../imgs/logotip imgs/white logotip.png'

import { IoLanguage } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'


import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


import { FaUserGraduate, FaUserTie } from 'react-icons/fa'

import AOS from "aos";
import "aos/dist/aos.css";

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
  const [user, setUser] = useState(true);


  function changeClass() {
    nav ? setNav(false) : setNav(true);
  }

  function changeUserClass() {
    user ? setUser(false) : setUser(true);
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

function changePages(e) {
      nav ? setNav(false) : setNav(true);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  return (
    <>
       <nav>
              <Link className='navbar_logo' onClick={upBtnF} to="/">
                <img src={navbar_logo} alt="" />
              </Link>
            <ul className={nav ? "navigation active" : "navigation"}>
              <li><Link onClick={changePages} to="/">Bosh sahifa</Link></li>
              <li className='dropdown'>
                  <a href="#">{t("tuzilma")} <MdKeyboardArrowDown /></a>
                    <ul className='sub_menu'>
                    <li><Link to="/nizom" onClick={changePages}>{t("imi_nizom")}</Link></li>
                        <li><Link to="/teachers" onClick={changePages}>{t("teachers")}</Link></li>
                        <li><Link to="/rektorat" onClick={changePages}>{t("rektorat")}</Link></li>
                        <li><Link to="/kutubxona" onClick={changePages}>{t("kutibxona")}</Link></li>
                        <li><Link to="/bizhaqimizda" onClick={changePages}>{t("biz_haqimizda")}</Link></li>
                        <li><Link to="/nizom" className='partners_li' onClick={changePages}>{t("imi_nizom")}</Link></li>
                        <li><Link to="/gallery" className='add' onClick={changePages}>Gallery</Link></li>
                    </ul>  
              </li>
                <li><Link to="/bizhaqimizda" onClick={changePages}>{t("biz_haqimizda")}</Link></li>
                <li><Link onClick={changePages} to="/el_kutubxona">{t("el_kutibxona")}</Link></li>
                <li><Link className='faq' onClick={changePages} to="/faq">{t("FAQ")}</Link></li>
                <li><Link to="/aloqa">{t("aloqa")}</Link></li>
              <li className='lng'>
                  <a href="#"><IoLanguage /></a>
                  <ul className='sub_menu'>
                  {languages.map((lng) => (
                    
                    <li className={`lng lng-${lng.language}`}>
                      <span
                      id={lng.language}
                        onClick={(e) => {
                          i18next.changeLanguage(lng.language);
                          changeClass();
                          changeLng(e);
                        }}
                        key={lng.id}
                      >
                        {lng.innerHtml}
                      </span>
                    </li>
                    ))}
                    </ul>  
                </li>
            <a href='#' onClick={changeUserClass} className='login_link'>Login</a>
            
            <div className={user ? "login_platform_box" : "login_platform_box active"}>
                <a target="_blank" href="http://mentor.backoffice.uz"> <FaUserTie /> Mentor</a>
                <a target="_blank" href="http://student.backoffice.uz"> <FaUserGraduate /> Student</a>
              </div>
            </ul>
              <div className={nav ? "menu active" : "menu"}
                   onClick={changeClass}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={user ? "login_platform_box desktop_user" : "login_platform_box active desktop_user"}>
                <a target="_blank" href="http://mentor.backoffice.uz"> <FaUserTie /> Mentor</a>
                <a target="_blank" href="http://student.backoffice.uz"> <FaUserGraduate /> Student</a>
              </div>
       </nav>
    </>
  )
}

export default Navbar
