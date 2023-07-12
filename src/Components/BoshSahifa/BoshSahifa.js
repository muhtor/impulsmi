import React from 'react';
import { useEffect, useState } from 'react';




import Marquee from "react-fast-marquee";
import 'lightgallery/css/lightgallery.css'



import Img1 from '../../imgs/banner imgs/1.jpg';
import Img2 from '../../imgs/banner imgs/2.jpg';
import Img3 from '../../imgs/banner imgs/3.jpg';
import Img4 from '../../imgs/banner imgs/4.jpg';
import Img5 from '../../imgs/banner imgs/5.jpg';
import Img6 from '../../imgs/banner imgs/6.jpg';
import Img7 from '../../imgs/banner imgs/7.jpg';

import main_img_1 from '../../imgs/main gallery imgs/1.jpg'
import main_img_2 from '../../imgs/main gallery imgs/2.jpg'
import main_img_3 from '../../imgs/main gallery imgs/3.jpg'
import main_img_4 from '../../imgs/main gallery imgs/4.jpg'
import main_img_5 from '../../imgs/main gallery imgs/5.jpg'
import main_img_6 from '../../imgs/main gallery imgs/6.jpg'
import main_img_7 from '../../imgs/main gallery imgs/7.jpg'
import main_img_8 from '../../imgs/main gallery imgs/8.jpg'
import main_img_9 from '../../imgs/main gallery imgs/9.jpg'
import main_img_10 from '../../imgs/main gallery imgs/10.jpg'
import main_img_11 from '../../imgs/main gallery imgs/11.jpg'
import main_img_12 from '../../imgs/main gallery imgs/12.jpg'
import main_img_13 from '../../imgs/main gallery imgs/13.JPG'
import main_img_14 from '../../imgs/main gallery imgs/14.JPG'
import main_img_15 from '../../imgs/main gallery imgs/15.JPG'
import main_img_16 from '../../imgs/main gallery imgs/16.JPG'



import { SiCampaignmonitor } from 'react-icons/si';
import { MdDashboard } from 'react-icons/md';
import { MdCastForEducation } from 'react-icons/md';
import { IoLanguage } from 'react-icons/io5';




import impuls1Img from '../../imgs/111111.jpg';
import impuls2Img from '../../imgs/Medical-Students.jpg';
import impuls3Img from '../../imgs/Which-Type-of-Investment-Has-the-Highest-Risk-900x531.png';

import usmle_img from '../../imgs/usmle_img.jpg'
import logoImg from '../../imgs/new logo.png';
import { BsTelegram, BsInstagram, BsFacebook, BsHeartPulseFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import {IoIosArrowUp,} from 'react-icons/io'
import { ImLocation } from 'react-icons/im'

 
import { useTranslation } from "react-i18next";

import './BoshSahifa.css'
import { Link } from 'react-router-dom';











function BoshSahifa() {

  



  const { t } = useTranslation();


  const [nav, setNav] = useState(false);
  const [minNav, setMinNav] = useState(false);
    

    useEffect(() => {
        let imgs = document.querySelectorAll('.img');

        let currSlide = 0;

        function slider(el) {
            imgs.forEach(el => el.classList.remove('active'));
            imgs[el].classList.add('active');
        }

        setInterval(() => {
            currSlide++
            if (currSlide === imgs.length) {
                currSlide = 0
            }
            slider(currSlide);
        }, 6000);
    }, []);


    function upBtnF() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    function changePages() {
      nav ? setNav(false) : setNav(true);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


    function mini_navbar_function() {
      minNav ? setMinNav(false) : setMinNav(true);
      console.log('aaa');
    }

  
  

    return (
      <>

        <div className="mini_navbar">
          <span onClick={mini_navbar_function}>
    
            {
              minNav ? <AiOutlineClose /> : <IoIosArrowUp />
            }
          </span>
          <a href='https://t.me/impulsmi_uz' target="_blank" onClick={mini_navbar_function}  className={minNav ? "active" : ''}>
            <BsTelegram />
          </a>
          <a href='https://www.instagram.com/impuls_mi/' target="_blank" onClick={mini_navbar_function}  className={minNav ? "active" : ''}>
            <BsInstagram />
          </a>
          <a href='https://www.facebook.com/people/Impuls-Medical-Institute/100076602543508/' target="_blank" onClick={mini_navbar_function}  className={minNav ? "active" : ''}>
            <BsFacebook />
          </a>
          <a href='Tel:+998555105015' onClick={mini_navbar_function}  className={minNav ? "active" : ''}>
            <FaPhoneAlt />
          </a>
          <a href='https://goo.gl/maps/yFinqUo4BTYDMGSU7' target='_blank' onClick={mini_navbar_function} className={minNav ? "active" : ''}>
            <ImLocation />
          </a>
        </div>

        <header id="boshSahifa">
          <div className="img imgs-0 active">
            <img src={Img1} alt=""></img>
          </div>
          <div className="img imgs-1">
            <img src={Img2} alt=""></img>
          </div>
          <div className="img imgs-2">
            <img src={Img3} alt=""></img>
          </div>
          <div className="img imgs-2">
            <img src={Img4} alt=""></img>
          </div>
          <div className="img imgs-2">
            <img src={Img5} alt=""></img>
          </div>
          <div className="img imgs-2">
            <img src={Img6} alt=""></img>
          </div>
          <div className="img imgs-2">
            <img src={Img7} alt=""></img>
          </div>
        </header>
       

        <div className="biz-haqimizda reveal section"
          id="bizHaqimizda"
        >
          <div className="bizhaqimzida">
              <div className='biz_1 biz_1_box'>
                <div className="biz_haqimizda_info_card">
                  {/* <img src={impuls_img} alt="" /> */}
                  <div className="box-info">
                    <h1>{t('biz_haqimizda')}</h1> <br />
                    <p >{t("biz_haqimizda_p-1")}</p> <br />
                    <p >{t("biz_haqimizda_p-3")}</p> <br />
                    <Link onClick={upBtnF} className="bg_gradient" to="/bizhaqimizda">{t("biz_haqimizda_btn")}</Link>
                  </div>
                </div>
              </div>
              <div className='biz_1 biz_2_box'>
                  <div className="avzalliklar_box_">
                    <div className='avzal_box'>
                        <div className="icon_avzal bg_gradient">
                          <SiCampaignmonitor />
                        </div>
                        <div>
                          <h4>{t("avzallik_1_1")}</h4>
                          <p>{t("avzallik_1_2")}</p>
                        </div>
                    </div>

                    <div className='avzal_box'>
                        <div className="icon_avzal bg_gradient">
                          <MdDashboard />
                        </div>
                        <div>
                            <h4>{t("avzallik_2_1")}</h4>
                            <p>{t("avzallik_2_2")}</p>
                        </div>
                    </div>
                    
                    <div className='avzal_box'>
                        <div className="icon_avzal bg_gradient">
                          <MdCastForEducation />
                        </div>
                        <div>
                          <h4>{t("avzallik_3_1")}</h4>
                          <p>{t("avzallik_3_2")}</p>
                        </div>
                    </div>
                    
                    <div className='avzal_box'>
                        <div className="icon_avzal bg_gradient">
                          <IoLanguage />
                        </div>
                        <div>
                          <h4>{t("avzallik_4_1")}</h4>
                          <p>{t("avzallik_4_2")}</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>

  

        <div className="usmle bg_gradient">
          <div className="usmle_box">
            <h1>{t("about_usmle")}</h1>
            <h4>{t("about_usmle_text")} </h4>
            <Link onClick={upBtnF} to="/usmle" className='bg_gradient'>{t("about_usmle_btn")}</Link>
          </div>
          <div className="usmle_box_img">
              <img src={usmle_img} alt="" />
          </div>
        </div>



        <div className="impuls">

          <div
            className="impuls-box">
            <div  className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls1Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_1")}</h1>
            <p>{t("impuls_box_p_1")}</p>
          </div>
          
          <div
            className="impuls-box">
            <div  className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls2Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_2")}</h1>
            <p>{t("impuls_box_p_2")}</p>
          </div>

          <div
            className="impuls-box"
          >
            <div  className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls3Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_3")}</h1>
            <p>{t("impuls_box_p_3")}</p>
          </div>

        </div>

        <div className="main_gallery">
            <Marquee className="main_galler_row">
              <div speed={500} plugins={[]}  className='gallerureact'>
                <div className="main_img_box row"><img src={main_img_1} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_2} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_16} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_4} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_5} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_6} alt="" /></div>
              </div>
            </Marquee>
            <Marquee className="main_galler_row">
              <div className='gallerureact'>
                <div className="main_img_box"><img src={main_img_7} alt="" /></div>
                <div className="main_img_box"><img src={main_img_8} alt="" /></div>
                <div className="main_img_box"><img src={main_img_9} alt="" /></div>
                <div className="main_img_box"><img src={main_img_10} alt="" /></div>
              </div>
            </Marquee>
            <Marquee className="main_galler_row">
              <div className='gallerureact'>
                <div className="main_img_box row"><img src={main_img_11} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_12} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_13} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_14} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_15} alt="" /></div>
                <div className="main_img_box row"><img src={main_img_16} alt="" /></div>
              </div>
            </Marquee>
        </div>

    

        



      </>
    );
}

export default BoshSahifa;