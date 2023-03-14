import React from 'react'
import './Yotoqxona.css'


import yt_img1 from '../../imgs/yt_img1.jpg'
import yt_img2 from '../../imgs/yt_img2.jpg'
import yt_img3 from '../../imgs/yt_img3.jpg'

import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Yotoqxona() {

    const { t } = useTranslation();


  return (
    <>
        <div className="yt_wrapper">
                <div className="bino_banner">
                    <div>
                        <p><Link to="/">{t("bosh_sahifa")}</Link> {t("Talabalar_turar_joyi")}</p>
                    </div>
                    <h1>{t("Talabalar_turar_joyi")}</h1>
                </div>
                <div className="yt">
                    <div className="yt_img">
                        <img src={yt_img3} alt="" />
                    </div>

                    <div className="yt_info">
                       <div className='yt_info_column_1'>
                            <div>
                                <p>{t("yt_info_column_1_txt_1")}</p>
                            </div>
                            <div>
                                <h1>{t("student")} <br /> {t("ACCOMMODATION")}</h1>
                            </div>
                            <div>
                                <p>{t("yt_info_column_1_txt_2")}</p>
                            </div>
                            <div>
                                <p>{t("yt_info_column_1_txt_3")}</p>
                            </div>
                       </div>
                       <div className='yt_info_column_2'>
                        <div>
                            <img src={yt_img2} alt="" />
                            <h1>{t("rooms")}</h1>
                            <img src={yt_img1} alt="" />
                        </div>
                       </div>
                    </div>

                </div>
        </div>
    </>
  )
}

export default Yotoqxona
