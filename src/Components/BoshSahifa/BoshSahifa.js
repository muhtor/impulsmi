import React from 'react';
import { useEffect, useState } from 'react';
import Img1 from '../../imgs/1.jpg';
import Img2 from '../../imgs/2.jpg';
import Img3 from '../../imgs/3.jpg';
import Img4 from '../../imgs/4.jpg';
import Img5 from '../../imgs/5.jpg';
import Img6 from '../../imgs/6.jpg';


import impuls1Img from '../../imgs/111111.jpg';
import impuls2Img from '../../imgs/Medical-Students.jpg';
import impuls3Img from '../../imgs/Which-Type-of-Investment-Has-the-Highest-Risk-900x531.png';

import logoImg from '../../imgs/new logo.png';
import impuls_img from '../../imgs/impuls.jpg';
import { FaBookMedical } from 'react-icons/fa'
import { IoMdPaper } from 'react-icons/io'
import { RiDraftLine } from 'react-icons/ri'
import { IoLanguage } from 'react-icons/io5'




import imgbg from '../../imgs/impuls.jpg'


import bino1 from '../../imgs/bino imgs/1.jpg'
import bino2 from '../../imgs/bino imgs/2.jpg'
import bino3 from '../../imgs/bino imgs/3.jpg'
import bino4 from '../../imgs/bino imgs/4.jpg'
import bino5 from '../../imgs/bino imgs/5.jpg'
import bino6 from '../../imgs/bino imgs/6.jpg'
import bino7 from '../../imgs/bino imgs/7.jpg'
import bino8 from '../../imgs/bino imgs/8.jpg'
import bino9 from '../../imgs/bino imgs/9.jpg'

import './BoshSahifa.css'
import { Link } from 'react-router-dom';


import { useTranslation } from "react-i18next";


const TextAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 , duration: 0.7},
  }),
};





function BoshSahifa() {

  const { t } = useTranslation();


  const [nav, setNav] = useState(false);

   
    

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



  

    return (
      <>


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
        </header>
       

        <div className="biz-haqimizda reveal section"
          id="bizHaqimizda"
        >
          
          <div className="bizhaqimizda-text">
            <h1 className="reveal-text" custom={0} variants={TextAnimation}>
              {t("biz_haqimizda")}
            </h1>
            <h3 className="reveal-text" custom={0} variants={TextAnimation}>
              {t("biz_haqimzida_h1")}
            </h3>
            <p custom={1} variants={TextAnimation} className="reveal-text">
              {t("biz_haqimizda_p-1")} <br /> <br />
              {t("biz_haqimizda_p-2")} <br /> <br />
            </p>
            <Link onClick={upBtnF} to="/bizhaqimizda" className="btn">
              {t("biz_haqimizda_btn")}
            </Link>
          </div>
          <div
            className="bizhaqimzida-img"
          >
            <img src={impuls_img} alt="" />
          </div>
        </div>
       

        <div className="avzalliklar">
          <div>
            <FaBookMedical />
            <h4>{t("avzallik_1_1")} azz</h4>
            <p>{t("avzallik_1_2")}</p>
          </div>
          <div>
            <IoMdPaper />
            <h4>{t("avzallik_2_1")}</h4>
            <p>{t("avzallik_2_2")}</p>
          </div>
          <div>
            <RiDraftLine />
            <h4>{t("avzallik_3_1")}</h4>
            <p>{t("avzallik_3_2")}</p>
          </div>
          <div>
            <IoLanguage />
            <h4>{t("avzallik_4_1")}</h4>
            <p>{t("avzallik_4_2")}</p>
          </div>
        </div>


        <div className="usmle">
          <div className="usmle_box">
            <h1>{t("about_usmle")}</h1>
            <h4>{t("about_usmle_text")} </h4>
            <Link onClick={changePages} className="link_usmle" to="/usmle">
              {t("about_usmle_btn")}
            </Link>
          </div>
        </div>



        <div className="impuls">

          <div
            className="impuls-box">
            <div className="img-impuls-box">
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
            <div className="img-impuls-box">
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
            <div className="img-impuls-box">
              <div className="img-logo">
                <img src={logoImg} alt="" />
              </div>
              <img src={impuls3Img} alt="" />
            </div>
            <h1>{t("impuls_box_h1_3")}</h1>
            <p>{t("impuls_box_p_3")}</p>
          </div>

        </div>

        

        <div className="bino_wrapper">

                <div className="bino">

                    <div className="bino_box">
                        <div>
                            <img src={imgbg} alt="" />
                        </div>
                        <div>
                            <h1>{t("name_univer")}</h1>
                            <p>{t("bino_box_p_1")}</p> <br />
                            <h1>{t("bino_box_h1_2")}</h1>
                            <ul>
                              <li>{t("bino_box_li_1")}</li>
                              <li>{t("bino_box_li_2")}</li>
                              <li>{t("bino_box_li_3")}</li>
                              <li>{t("bino_box_li_4")}</li>
                              <li>{t("bino_box_li_5")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bino_imgs">
                        <div><img src={bino1} alt="" /></div>
                        <div><img src={bino2} alt="" /></div>
                        <div><img src={bino3} alt="" /></div>
                        <div><img src={bino4} alt="" /></div>
                        <div><img src={bino5} alt="" /></div>
                        <div><img src={bino6} alt="" /></div>
                        <div><img src={bino7} alt="" /></div>
                        <div><img src={bino8} alt="" /></div>
                        <div><img src={bino9} alt="" /></div>
                    </div>

                </div>
           </div>




      </>
    );
}

export default BoshSahifa;