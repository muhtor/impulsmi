import React from "react";
import './Rektorat.css';
import {Link} from 'react-router-dom';


import rektor_img from '../../imgs/rektor img.jpg'
import sadirbek from '../../imgs/sadirbe aka.jpg'


import { useTranslation } from "react-i18next";

function Rektorat() {

    
    const { t } = useTranslation();

    return(
        <>
            <div className="rektorat_wrapp">
                <div className="rektorat_banner">
                    <div>
                        <p><Link to="/">{t("bosh_sahifa")}</Link> {t("rektorat")}</p>
                    </div>
                        <h1>{t("rektor")}</h1>
                </div>

                <div className="rektorat">
                    <div className="rektorat_xodimlari">
                         <h1>{t("rektor")}</h1>
                        <div className="retkorat_box">
                            <div className="rektorat-img">
                                <img src={rektor_img} alt="85" />
                            </div>
                            <div className="rektor_info">
                                <h3>{t("rektor-name")}</h3>
                                <h4>{t("rektor_lavozim")}</h4> <br />
                                <h4>{t("rektor-qabul_kunlari")}</h4> <br />
                                <!-- <h4>{t("rektor-tel")}</h4> <br> -->
                                <h4>{t("rektor-email")}</h4> <br />
                            </div>
                        </div>
                        <div className="m_faoliyati">
                            <h1>{t("rektor_mehnat_faoliyati")}</h1> <br />
                            <p>{t("r-mh_1")}</p>
                            <p>{t("r-mh_2")}</p>
                            <p>{t("r-mh_3")}</p>
                            <p>{t("r-mh_4")}</p>
                            <p>{t("r-mh_5")}</p>
                            <p>{t("r-mh_6")}</p>
                            <p>{t("r-mh_7")}</p>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    )
}


export default Rektorat;
