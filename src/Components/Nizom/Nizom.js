import React from "react";
import {Link} from 'react-router-dom';
import './Nizom.css'

import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import nizom_img from '../../imgs/nizom img.jpg'


import { useTranslation } from "react-i18next";

function Nizom(){

    const { t } = useTranslation();

    return(
        <>
            <div className="nizom_wrapper">
                <div className="nizom_banner">
                     <div>
                        <p><Link to="/">{t("bosh_sahifa")}</Link> {t("nizom_page_text")}</p>
                    </div>
                    <h1>{t("nizom")}</h1>
                    <div className="nizom">
                        <div>
                            <div className="nizom_img">
                                <img src={nizom_img} alt="" />
                            </div>
                            <a href="#" className="desktop-nizom" >{t("nizom")}</a>
                        </div>
                            <a href="#" className="nizom_text">{t("nizom")}</a>
                            <a href="#" className="view_icon"><BsArrowUpRightSquareFill /></a>
                            <a href="#" className="view_btn">{t("nizom-btn")}</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nizom;