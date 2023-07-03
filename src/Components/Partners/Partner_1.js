import React from 'react'
import './Parners.css';

import NORTH_INDIA from '../../imgs/partners/mayo md.png'

import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';


function Partner_1() {

  const { t } = useTranslation();


  return (
    <div className='partners'>
        <div className="worker">
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
    </div>
  )
}

export default Partner_1
