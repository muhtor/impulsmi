import React from 'react'
import './Parners.css';


import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';


function Partner_3() {

  const { t } = useTranslation();

  return (
    <div className='partners'>
      <div className="worker">
      <div className="worker_info">
            <h1>{t("india_hamkor_footer_p_3_12")}</h1>
            <p>{t("india_hamkor_footer_p_3_13")}</p>
            <p>{t("india_hamkor_footer_p_3_14")}</p>
            <p>{t("india_hamkor_footer_p_3_15")}</p>
            <p>{t("india_hamkor_footer_p_3_16")}</p>
            <p>{t("india_hamkor_footer_p_3_17")}</p>
        </div>
       </div>
    </div>
  )
}

export default Partner_3
