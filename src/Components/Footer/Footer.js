import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs';



import 'lightgallery/css/lightgallery.css'
import LightGallery from 'lightgallery/react/Lightgallery.es5'

/////////// social 3d icons 

import location from '../../imgs/social media 3d/location.png'
import instagram from '../../imgs/social media 3d/instagram.png'
import telegram from '../../imgs/social media 3d/telegram.png'
import phone from '../../imgs/social media 3d/phone.png'
import email from '../../imgs/social media 3d/email.png'
import whatsUp from '../../imgs/social media 3d/whatsUp.png'
import youtube from '../../imgs/social media 3d/youtube.png'
import facebook from '../../imgs/social media 3d/facebook.png'



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
            <LightGallery speed={500} plugins={[]} className="litsenziya" >
              <img className='lit_img' src={lit1} alt="" />
              <img className='lit_img' src={lit2} alt="" />
            </LightGallery>
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
                {/* <RiBuilding2Fill /> */}
                <img src={location} alt="" />
                {t("navtop_location")}
                </a>

                <a href='mialto:info@impulsmi.uz'>
                  <img src={email} alt="" />
                {/* <MdMarkEmailUnread /> */}
                info@impulsmi.uz
                </a>

                <a href="Tel:+998555105015">
                  <img src={phone} alt="" />
                {/* <FaPhoneAlt className='phone_icon' /> */}
                +998 (55) 510 50 15
                </a>
                {/* <a href="Tel:+998949507697">
                <BsWhatsapp className='phone_icon' />
                +998 (94) 950 76 97
                </a> */}

              {/* <a target="_blank" href="https://t.me/impuls_medical_institute">
                <BsChatText />
                {t("imi_support")}
                </a> */}
              <div>
              <a target="_blank" href="https://t.me/impulsmi_uz">
                {/* <BsTelegram /> */}
                <img src={telegram} alt="" />
                </a>
              <a target="_blank" href="https://www.instagram.com/impuls_mi/">
                {/* <BsInstagram /> */}
                <img src={instagram} alt="" />
                </a>
              <a target="_blank" href="https://www.facebook.com/people/Impuls-Medical-Institute/100076602543508/">
                {/* <BsFacebook /> */}
                <img src={facebook} alt="" />
                </a>
              {/* <a target="_blank" href="https://wa.me/message/GYTRCNFXZX6VI1?src=qr">
                <BsWhatsapp />
                </a> */}
              </div>
          </div>
        </div>

          <div className="footer-copyryter">
            <div className="btn-up" onClick={upBtnF}>
              <IoIosArrowUp />
            </div>
          </div>



        </footer>
      </>
    );
}

export default Footer;