import React from 'react';
import './BizHaqimizda.css';


import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";


import bino1 from '../../imgs/bino imgs/1.jpg'
import bino2 from '../../imgs/bino imgs/2.jpg'
import bino3 from '../../imgs/bino imgs/3.jpg'
import bino4 from '../../imgs/bino imgs/4.jpg'
import bino5 from '../../imgs/bino imgs/5.jpg'
import bino6 from '../../imgs/bino imgs/6.jpg'
import bino7 from '../../imgs/bino imgs/7.jpg'
import bino8 from '../../imgs/bino imgs/8.jpg'
import bino9 from '../../imgs/bino imgs/9.jpg'



function BizHaqimizda() {



    const { t } = useTranslation();


    return (
      <>
        <div className="banner" id="home">
          <h2> <Link to="/">{t("bosh_sahifa")}</Link> {t("name_univer")}</h2>
          <h1>{t("name_univer")}</h1>
        </div>

        <div className="header">
          <p>{t("biz_haqimizda_p-1")}</p> <br />
          <p>{t("biz_haqimizda_p-2")}</p> <br />
          <p>{t("biz_haqimizda_p-3")}</p> <br />
          <p>{t("biz_haqimizda_p-4")}</p> <br />
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
       
      </>
    );
}

export default BizHaqimizda;