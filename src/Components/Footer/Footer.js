import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs';

import lit1 from '../../imgs/lit1.jpg'
import lit2 from '../../imgs/lit2.jpg'
import navbar_brand from '../../imgs/navbar-brand.png'

import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    function upBtnF() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    function view_img_licence(e) {
      // console.log(e.target.src);
      document.querySelector('.licence_img').src = e.target.src;
      document.querySelector('.view_licence_img').classList.add('active');
    }

    function close_img_licence() {
      document.querySelector('.view_licence_img').classList.remove('active');
    }

    return (
      <>
        <footer className="reveal">
         
        <div className='footer_wrapper'>
        <div className="footer_boxs">
            <div className='footer_logo_div'>
              <img src={navbar_brand} alt="" />
              <h3>{t("name_univer")}</h3>
            </div>
            <p>{t("footer_p")}</p>
            <div className="litsenziya" onClick={(e) => view_img_licence(e)}>
              <img src={lit1} alt="" />
              <img src={lit2} alt="" />
            </div>
            <p>{t("fopter_litsenziya")}</p>
            <p>{t("sertficate_link_p")}</p>
            <a href="https://drive.google.com/file/d/1CqPmTI7k321X5kJwZc10LHBIhHNccwFF/view?usp=share_link" className='sertificate_link'>{t("litsenziya_link_a_1")}</a>
            <a href="https://drive.google.com/file/d/1Cpdm_r6cQIwDFjjEN2PW66PDzUIzPfMe/view?usp=share_link" className='litsenziya_link'>{t("litsenziya_link_a_2")}</a>
          </div>

          <div className="footer_boxs">
            <h2>{t("biz_haqimizda")}</h2>
            <Link to="/usmle">{t("usmle")}</Link>
            {/* <a href="#">{t("o'quv_bino")}</a> */}
            <Link to="/nizom">{t("imi_nizom")}</Link>
            {/* <a href="#">{t("tuzilma")}</a> */}
            <Link to="/rektorat">{t("rektorat")}</Link>
            <Link to="/kutubxona">{t("kutibxona")}</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          
          <div className="footer_boxs">
            <h2>{t("fakultetlar")}</h2>
            <a href="#">{t("davolash_ishi_fakulteti")}</a>
          </div>
          
          <div className="footer_boxs aloqa">
              <h2>{t("aloqa")}</h2>
              <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                {t("navtop_location")}
                </a>

                <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                info@impulsmi.uz
                </a>

                <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                +998 (55) 510 50 15
                </a>
                <a href="Tel:+998555105015">
                <BsWhatsapp className='phone_icon' />
                +998 (94) 950 76 97
                </a>

              <a target="_blank" href="https://t.me/impuls_medical_institute">
                <BsChatText />
                {t("imi_support")}
                </a>
              <div>
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
          </div>
        </div>

          <div className="footer-copyryter">
            <div className="btn-up" onClick={upBtnF}>
              <IoIosArrowUp />
            </div>
          </div>

        <div 
          className="view_licence_img" 
          
        >
          <img className='licence_img' src={lit1} alt="" />
          <AiOutlineCloseCircle onClick={close_img_licence} className='close_btn_footer'/>
        </div>


        </footer>
      </>
    );
}

export default Footer;