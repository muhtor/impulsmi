import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

import { MdMarkEmailUnread } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsChatText, BsTelegram, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs';



import 'lightgallery/css/lightgallery.css'

import logotip from '../../imgs/logotip imgs/logotip_ipmpuls.png'




import i18next from 'i18next';
import { useTranslation } from 'react-i18next';




function Footer() {

  const { t } = useTranslation();

    return (
      <>
          <footer className='padding'>

              <div className='links'>
                  <Link to="/">Bosh sahifa</Link>
                  <Link to="/about">{t("biz_haqimizda")}</Link>
                  <Link to="/nizom">{t("imi_nizom")}</Link>
                  <Link to="/el_kutubxona">{t("el_kutibxona")}</Link>
                  <Link to="/faq">{t("FAQ")}</Link>
                  <Link to="/teachers">{t("teachers")}</Link>
                  <Link to="/rektorat">{t("rektorat")}</Link>
                  <Link to="/kutubxona">{t("kutibxona")}</Link>
                  <Link to="/aloqa">{t("aloqa")}</Link>
              </div>

              <div className='social_links'>
                <div className='sc_link_box'>
                  <div className="social_link">
                    <a href="#"><BsTelegram /></a>
                  </div>
                  <div className="social_link">
                    <a href="#"><BsInstagram /></a>
                  </div>
                  <div className="social_link">
                    <a href="#"><BsFacebook /></a>
                  </div>
                  <div className="social_link">
                    <a href="#"><BsWhatsapp /></a>
                  </div>
                  <div className="social_link">
                    <a href="#"><BsChatText /></a>
                  </div>
                </div>
                <div className='sc_link_box'>
                  <div className="social_link">
                    <a href="#"><MdMarkEmailUnread /></a>
                    info@impulsmi.uz
                  </div>
                  <div className="social_link">
                    <a href="#"><FaPhoneAlt /></a>
                  +998 55 510 50 15
                  </div>
                </div>
                <div className="inner_links">
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/internationalFaculty">International Faculty</Link>
                  <Link to="/recognition">Our Recognition</Link>
                </div>
              </div>

              <div className='footer_down_div'>
                <div>© IMPULSMI 2022 - 2023. Barcha xuquqlar himoyalangan.</div>
                <div className='footer_logo'><Link to="/"><img src={logotip} alt="" /></Link></div>

                <div className='map_link_box'>
                  <div>
                      <GrMapLocation />
                      <p>Namangan shahar, K.Otamirzayev ko'chasi. 1</p>
                  </div>
                  <a href='https://goo.gl/maps/QEviBtDeDuxLpc148' className="map_link">
                    Xarita
                  </a>
                </div>

              </div>

          </footer>
      </>
    );
}

export default Footer;