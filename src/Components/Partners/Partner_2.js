import React from 'react'
import './Parners.css';


import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';


function Partner_2() {
  const { t } = useTranslation();

  return (
    <div className='partners'>
      <div className="worker">
      <div className="worker_info">
            <h1>{t("india_hamkor_footer_p_3_7")}</h1>
            <p>{t("india_hamkor_footer_p_3_8")}</p>
            <p>{t("india_hamkor_footer_p_3_9")}</p>
            <p>{t("india_hamkor_footer_p_3_10")}</p>
            <p>{t("india_hamkor_footer_p_3_11")}</p>
            <p>{t("india_hamkor_footer_p_3_11")}</p>
            <li className='li_links'>
                <a href="http://www.mahaveereducation.com"><AiOutlineGlobal /></a>
                <a href="https://youtube.com/@Mahaveer-education"><AiFillYoutube /></a>
                <a href="https://instagram.com/mahaveereducation?igshid=YmMyMTA2M2Y="><BsInstagram /></a>
            </li>
        </div>
       </div>
    </div>
  )
}

export default Partner_2
