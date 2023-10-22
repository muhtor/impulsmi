import React from 'react';
import { useEffect, useState } from 'react';



import News from '../News/News';

import Marquee from "react-fast-marquee";
import 'lightgallery/css/lightgallery.css'


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
import { HiOutlineClipboardDocument } from 'react-icons/hi2';



import impuls1Img from '../../imgs/111111.jpg';
import impuls2Img from '../../imgs/Medical-Students.jpg';
import impuls3Img from '../../imgs/Which-Type-of-Investment-Has-the-Highest-Risk-900x531.png';

import usmle_img from '../../imgs/usmle_img.jpg'
import logoImg from '../../imgs/new logo.png';
import { BsTelegram, BsInstagram, BsFacebook, BsHeartPulseFill } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi'

 
import { useTranslation } from "react-i18next";

import './BoshSahifa.css'
import { Link } from 'react-router-dom';
import Header from '../Page components/Header/Header';
import Contact from '../Page components/Contact/Contact';











function BoshSahifa() {

  
  



  const { t } = useTranslation();


  const [nav, setNav] = useState(false);
  
  
  
  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  
  const [load, setLoad] = useState(false);
  
  useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 2000);
    }, [])
    



  
  

    return (
      <>


      <div className={!load ? "loader" : "loader active"}>
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>

        <Header />
        {/* <header id="boshSahifa">
          <div className="banner_txt_infos">
            <h1>Impuls Tibbiyot Instituti</h1>
            <p>{t("biz_haqimizda_p-1")}</p>
            <div className='flex'>
              <a target='blank' href="Tel:+998555105015">Qo'ng'iroq <BiPhoneCall /> </a>
              <a target='blank' href="https://t.me/impulsmi_uz">Telegram <BsTelegram /></a>
            </div>
          </div>
        </header> */}

        {/* <div className="exam_results">
          <h1>Kirish imtihonlari narijalari</h1>
          <div className="results_docs">
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1sPPXsNTdCFbE_GvzFJja1T3iRsyPvkWB/view?usp=sharing" target="_blank">12 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1sPPXsNTdCFbE_GvzFJja1T3iRsyPvkWB/view?usp=sharing" target="_blank">13 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1dWOU3_6ycitGGe2YKOzvm1wY8bEIeCCL/view?usp=sharing" target="_blank">15 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1XxeCP_DI_Ifjt9fWin7u2q-tniuKdpoy/view?usp=sharing" target="_blank">17 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/15iOcBIvY8OT4eJc50AmdiJxnk_5BHno9/view?usp=sharing" target="_blank">22 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1nZLybYB4X_1-aVIzetx7GplRBMoHTBY3/view?usp=sharing" target="_blank">25 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1YRvPs6swGgMYlgYGrzlaxkwOP7TMjolJ/view?usp=sharing" target="_blank">28 avgust test natijalari</a>
              </div>
              <div>
                <HiOutlineClipboardDocument className='bg_gradient' />
                <a href="https://drive.google.com/file/d/1sHy93vJAf1xP19fLTXfLa7AA-MfiFF-q/view?usp=sharing" target="_blank">30 avgust test natijalari</a>
              </div>
          </div>
        </div> */}
       

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


        <News />

        <Contact />
  

  





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