import React from 'react'
import './Kutubxona.css'
import {Link} from 'react-router-dom';

import KutubxonaImg1 from '../../imgs/kutubxona img 1.jpg'
import KutubxonaImg2 from '../../imgs/kutubxona img 2.jpg'
import imi_img from '../../imgs/imi.png'



import { useTranslation } from "react-i18next";



function Kutubxona() {

    const { t } = useTranslation();


  return (
   <>   
     <div className="kutubxona_wrapper">
        <div className="bino_banner">
                <div>
                    <p><Link to="/">{t("bosh_sahifa")}</Link> {t("kutibxona")}</p>
                </div>
            <h1>{t("kutibxona")}</h1>
        </div>
        <div className="kutubxona">
            <div className="library_img">
                <img src={KutubxonaImg1} alt="" />
            </div>
            <div className="kutubxona_info">
                <div className='kutubxona_logo'>
                    <img src={imi_img} alt="" />
                </div>
                <div className='kutubxona_info_text'>
                    <p>{t("kutubxona_info_text_p_1")}</p>
                    <p>{t("kutubxona_info_text_p_2")}</p>
                    <p>{t("kutubxona_info_text_p_3")}</p>
                    <p>{t("kutubxona_info_text_p_4")}</p>
                </div>
            </div>
            <div className="kutubxona_contact">
                <div className='contact_div'>
                    <h1>{t("kutibxona")}</h1>
                    <div>
                        <h4>{t("Librarian")}</h4>
                        <em className='italic'>{t("Shoira_Do'lasheva")}</em>
                    </div>
                    <div>
                        <h4>{t("Contact_details")}</h4>
                        <em className='italic'>impuls.med_library@inbox.ru</em> <br />
                        <em className='italic'>+998 94 950 76 97</em>
                    </div>
                    <div>
                        <h4>{t("for_more")}</h4>
                        <em className='italic'>www.impulsmi.uz</em>
                    </div>
                </div>
                <div className='contact_div_img'>
                    <img src={KutubxonaImg2} alt="" />
                </div>
            </div>
        </div>
     </div>
   </>
  )
}

export default Kutubxona
