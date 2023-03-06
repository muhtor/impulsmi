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
                            <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link" className="desktop-nizom" >{t("nizom")}</a>
                        </div>
                            <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link" className="nizom_text">{t("nizom")}</a>
                            <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link" className="view_btn">{t("nizom-btn")}</a>
                            <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link" className="view_icon"><BsArrowUpRightSquareFill /></a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nizom;