import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';

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

    return (
      <>
        <footer className="reveal">
         
        <div className='footer_wrapper'>
        <div className="footer_boxs">
            <div className='footer_logo_div'>
              <img src={navbar_brand} alt="" />
              <h3>Impuls Tibbiyot Instituti</h3>
            </div>
            <p>Biz bilan ilmning yuqori cho‘qqilarini egallang va malakali shifokorga aylaning</p>
            <div className="litsenziya">
              <img src={lit1} alt="" />
              <img src={lit2} alt="" />
            </div>
            <p>Litsenziya L-4409568, 09.11.2022y.</p>
          </div>

          <div className="footer_boxs">
            <h2>Biz haqimizda</h2>
            <a href="#">Institut haqida</a>
            <a href="#">Struktura</a>
            <a href="#">Yangiliklar</a>
            <a href="#">Rekvizitlar</a>
            <a href="#">Yotoqxona</a>
            <a href="#">Institut nizomi</a>
          </div>
          
          <div className="footer_boxs">
            <h2>Fakultetlar</h2>
            <a href="#">Davolash ishi fakulteti</a>
          </div>
          
          <div className="footer_boxs aloqa">
              <h2>Aloqa</h2>
              <a target="_blank" href='https://goo.gl/maps/QEviBtDeDuxLpc148'>
                <RiBuilding2Fill />
                {t("navtop_location")}
                </a>

                <a href='mialto:info@impulsmi.uz'>
                <MdMarkEmailUnread />
                impulsedu1@gmail.com
                </a>

                <a href="Tel:+998555105015">
                <FaPhoneAlt className='phone_icon' />
                (55) 510 50 15
                </a>

              <a target="_blank" href="https://t.me/IMI_qabul">
                <BsChatText />
                imi_support
                </a>
              <div>
              <a target="_blank" href="https://t.me/impulsmi_uz">
                <BsTelegram />
                </a>
              <a target="_blank" href="https://www.instagram.com/impuls_mi/">
                <BsInstagram />
                </a>
              <a target="_blank" href="Thttps://www.facebook.com/profile.php?id=100087750432881">
                <BsFacebook />
                </a>
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