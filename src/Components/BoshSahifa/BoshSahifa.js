import React from 'react';
import { useEffect, useState } from 'react';
import Img1 from '../../imgs/banner imgs/1.jpg';
import Img2 from '../../imgs/banner imgs/2.jpg';
import Img3 from '../../imgs/banner imgs/3.jpg';
import Img4 from '../../imgs/banner imgs/4.jpg';
import Img5 from '../../imgs/banner imgs/5.jpg';
import Img6 from '../../imgs/banner imgs/6.jpg';
import Img7 from '../../imgs/banner imgs/7.jpg';



import Peeyoosh_Saini from '../../imgs/partners/Peeyoosh_Saini.png'
import NORTH_INDIA from '../../imgs/partners/mayo md.png'
import Kerala_Tamilnadu from '../../imgs/partners/Kerala Tamilnadu.jpg'
import Medicoking_PvtLtd from '../../imgs/partners/Medicoking Pvt. Ltd.jpg'
import UNIVERSITY_FLY_GLOBAL from '../../imgs/partners/UNIVERSITY FLY GLOBAL.png'
import Med_World from '../../imgs/partners/Med_World.png'
import Doctors_Query from '../../imgs/partners/Doctors_Query.png'

import impuls1Img from '../../imgs/111111.jpg';
import impuls2Img from '../../imgs/Medical-Students.jpg';
import impuls3Img from '../../imgs/Which-Type-of-Investment-Has-the-Highest-Risk-900x531.png';

import logoImg from '../../imgs/new logo.png';
import { FaBookMedical } from 'react-icons/fa'
import { IoMdPaper } from 'react-icons/io'
import { RiDraftLine } from 'react-icons/ri'
import { IoLanguage } from 'react-icons/io5'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'
import { ImLocation } from 'react-icons/im'








import bino1 from '../../imgs/pakistam imgs/1.jpg'
import bino2 from '../../imgs/pakistam imgs/2.jpg'
import bino3 from '../../imgs/pakistam imgs/3.jpg'
import bino4 from '../../imgs/pakistam imgs/4.jpg'
import bino5 from '../../imgs/pakistam imgs/5.jpg'
import bino6 from '../../imgs/pakistam imgs/6.jpg'

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
            <iframe width="885" height="498" src="https://www.youtube.com/embed/_b7lGFky4_g" title="Impuls Tibbiyot Instituti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="avzalliklar">
          <div>
            <FaBookMedical />
            <h4>{t("avzallik_1_1")}</h4>
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
                  <br /><br />
                    <h1 className='india_hamkor'>{t("india_hamkor_footer_h1")}</h1>
                    <center>{t('india_hamkor_footer_p')}</center>
                    <center>{t('india_hamkor_footer_p_w')}</center>
                    <div className="bino_imgs">
                        <div><img src={bino1} alt="" /></div>
                        <div><img src={bino2} alt="" /></div>
                        <div><img src={bino3} alt="" /></div>
                        <div><img src={bino4} alt="" /></div>
                        <div><img src={bino5} alt="" /></div>
                        <div><img src={bino6} alt="" /></div>
                    </div>
                    <div className="team">
            <div className='team_box'>
                <div className="worker">
                   <div className="worker_img">
                    <img src={NORTH_INDIA} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>{t("india_hamkor_footer_h1_2")}</h1>
                      <p>{t("india_hamkor_footer_p_1_2")}</p>
                      <p>{t("india_hamkor_footer_p_2_2")}</p>
                      <p>{t("india_hamkor_footer_p_3_4")}</p>
                      <p>{t("india_hamkor_footer_p_3_5")}</p>
                      <p>{t("india_hamkor_footer_p_3_6")}</p>
                      <li className='li_links'>
                        <a href="http://www.mbbsmayomd.com"><AiOutlineGlobal /></a>
                        <a href="http://httwww.youtube.com/channel/ps://UCs5cRzJpjsPFolnDHNQDHkQ"><AiFillYoutube /></a>
                        <a href="https://www.facebook.com/mayomdukraine/"><BsFacebook /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={bino1} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>{t("india_hamkor_footer_p_3_7")}</h1>
                      <p>{t("india_hamkor_footer_p_3_8")}</p>
                      <p>{t("india_hamkor_footer_p_3_9")}</p>
                      <p>{t("india_hamkor_footer_p_3_10")}</p>
                      <p>{t("india_hamkor_footer_p_3_11")}</p>
                      <p>{t("india_hamkor_footer_p_3_11")}</p>
                      <li className='li_links'>
                        <a href="http://www.mahaveereducation.com"><AiOutlineGlobal /></a>
                        <a href="https://youtube.com/@Mahaveer-education"><AiFillYoutube /></a>
                        <a href="https://instagram.com/mahaveereducation?igshid=YmMyMTA2M2Y="><BsInstagram /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={bino2} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>{t("india_hamkor_footer_p_3_12")}</h1>
                      <p>{t("india_hamkor_footer_p_3_13")}</p>
                      <p>{t("india_hamkor_footer_p_3_14")}</p>
                      <p>{t("india_hamkor_footer_p_3_15")}</p>
                      <p>{t("india_hamkor_footer_p_3_16")}</p>
                      <p>{t("india_hamkor_footer_p_3_17")}</p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={Kerala_Tamilnadu} alt="" />
                   </div>
                   <div className="worker_info">
                      <h1>KERALA & TAMILNADU</h1>
                      <p>Trias Resources Private Limited</p>
                      <p>Address: Capital Heights, Opp: RSP Office, PMG-Plamood Rd, Pattom Post,Thiruvananthapuram, Kerala, India- 695004</p>
                      <p>Director: Capt. Rajesh Daniel</p>
                      <p>Email address: rajesh3135@gmail.com</p>
                      <p>Phone number: +91 9495152066, +91 8281223135 </p>
                      <p className='li_links'><a href="http://www.triasresources.com"><AiOutlineGlobal /></a></p>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={bino5} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>{t("india_hamkor_footer_p_1")}</h1>
                        <p>{t("india_hamkor_footer_p_2")}</p>
                        <p>{t("india_hamkor_footer_p_3")}</p>
                   </div>
                </div>
                {/*  */}
                <div className="worker">
                   <div className="worker_img">
                    <img src={Medicoking_PvtLtd} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>Medicoking Pvt. Ltd.</h1>
                        <p>Office- Panipat,Karnal, Rohtak,Noida</p>
                        <p>More Querry - 9812000822/8059066000</p>
                        <p>Instagram - infomedicoking</p>
                        <li className='li_links'>
                        <a href="https://medicoking.com/"><AiOutlineGlobal /></a>
                        <a href="https://instagram.com/infomedicoking?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram /></a>
                        <a href="https://www.facebook.com/Studyabroadmbbs9"><BsFacebook /></a>
                        <a href="https://www.youtube.com/@medicoking6707"><AiFillYoutube /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={Peeyoosh_Saini} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>Medical Academy</h1>
                        <p>Director: Peeyoosh Saini</p>
                        <p>GF 32, Kirti Sikhar Building District Centre, Janakpuri, New Delhi - 110058</p>
                        <p>Phone number: +919582474764, +998942579763 </p>
                        <p>+917045535113, +919582474664 </p>
                        <p>Email address: pbsmedicalacademy@gmail.com</p>
                        <li className='li_links'>
                        <a href="http://www.pbsmedicalacademy.in"><AiOutlineGlobal /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={UNIVERSITY_FLY_GLOBAL} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>University Fly Global Education Consultant Pvt Ltd</h1>
                        <p>Plot No. 8, 1st Floor, Vipin Garden, Metro Pillar 801, Dwarka Mor New Delhi 110059</p>
                        <p>Phone number: +917903149721 </p>
                        <p>Email address: universityfly@gmail.com</p>
                        <li className='li_links'>
                        <a href="http://www.universityfly.com"><AiOutlineGlobal /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={Med_World} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>Med World Educations India Private Limited</h1>
                        <p>No. 12/705, Avaneeshwaram, RSPO Thalavoor, Kollam, Kerala, India </p>
                        <p>Contact: +91 8547139340, +34 670901398 </p>
                        <p>Email address: medworld313@gmail.com</p>
                        <li className='li_links'>
                        <a href="http://www.medworld.co.in"><AiOutlineGlobal /></a>
                      </li>
                   </div>
                </div>
                <div className="worker">
                   <div className="worker_img">
                    <img src={Doctors_Query} alt="" />
                   </div>
                   <div className="worker_info">
                        <h1>Doctors Query Private Limited </h1>
                        <p>Director: Dr Sudhir Mittan </p>
                        <p>Address: SCO 207, 2nd Floor, Town Center Sector 39, TDI city, Panipat, Haryana 132103</p>
                        <p>Contact: +918059440003, +919817634007 </p>
                        <p>Email address: medworld313@gmail.com</p>
                        <li className='li_links'>
                        <a href="http://www.doctorsquery.com"><AiOutlineGlobal /></a>
                        <a href="https://www.instagram.com/invites/contact/?i=b1x8pj520z55&utm_content=3uf6bfn"><BsInstagram /></a>
                        <a href="https://youtube.com/@DoctorsQuery"><AiFillYoutube /></a>
                      </li>
                   </div>
                </div>
            </div>
        </div>
                </div>
        </div>

        



      </>
    );
}

export default BoshSahifa;