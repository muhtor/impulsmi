import React from 'react';
import './BizHaqimizda.css';


import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";


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
       
      </>
    );
}

export default BizHaqimizda;