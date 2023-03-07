import React from 'react';
import {Link} from 'react-router-dom';
import './Teachers.css';


import { useTranslation } from "react-i18next";

import teacher_1 from '../../imgs/ustozlar/karimov.jpg'
import teacher_2 from '../../imgs/ustozlar/sapiyev.jpg'
import teacher_3 from '../../imgs/ustozlar/Нодиров Алишер Авазович.jpg'


function Teachers() {

  const { t } = useTranslation();

  return (
    <>
      <div className="teachers_wrapper">
        <div className="rektorat_banner">
          <div>
              <p><Link to="/">{t("bosh_sahifa")}</Link> {t("teachers")}</p>
          </div>
            <h1>{t("teachers")}</h1>  
        </div>

        <div className="teachers">
            <div className="teacher">
            <img src={teacher_1} alt="" />
              <h1 className='teacher_name'>{t("Karimov_Muxammadali")}</h1>
              <p className='teacher_info'>
              {t("Karimov_Muxammadali_info")}
              </p>
              <div className='teacher_mh'>
                  <h1>{t("mh")}</h1>
                  <div>
                    <p>{t("Karimov_Muxammadali-p_1")}</p>
                    <p>{t("Karimov_Muxammadali-p_2")}</p>
                    <p>{t("Karimov_Muxammadali-p_3")}</p>
                    <p>{t("Karimov_Muxammadali-p_4")}</p>
                    <p>{t("Karimov_Muxammadali-p_5")}</p>
                    <p>{t("Karimov_Muxammadali-p_6")}</p>
                  </div>
              </div>
            </div>
            <div className="teacher">
              <img src={teacher_2} alt="" />
              <h1 className='teacher_name'>{t("Sapiyev_Tursunpolot")}</h1>
              <p className='teacher_info'>
              {t("Sapiyev_Tursunpolot_info")}
              </p>
              <div className='teacher_mh'>
                  <h1>{t("mh")}</h1>
                  <div>
                    <p>{t("Sapiyev_Tursunpolot-p_1")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_2")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_3")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_4")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_5")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_6")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_7")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_8")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_9")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_10")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_11")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_12")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_13")}</p>
                    <p>{t("Sapiyev_Tursunpolot-p_14")}</p>
                  </div>
              </div>
            </div>
            <div className="teacher">
            <img src={teacher_3} alt="" />
              <h1 className='teacher_name'>{t("Nodirov_Alisher")}</h1>
              <p className='teacher_info'>
              {t("Nodirov_Alisher_info")}
              </p>
              <div className='teacher_mh'>
                  <h1>{t("mh")}</h1>
                  <div>
                    <p>{t("Nodirov_Alisher-p_1")}</p>
                    <p>{t("Nodirov_Alisher-p_2")}</p>
                    <p>{t("Nodirov_Alisher-p_3")}</p>
                    <p>{t("Nodirov_Alisher-p_4")}</p>
                    <p>{t("Nodirov_Alisher-p_5")}</p>
                    <p>{t("Nodirov_Alisher-p_6")}</p>
                  </div>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Teachers
