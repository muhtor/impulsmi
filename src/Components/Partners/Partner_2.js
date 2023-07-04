import React from 'react'
import bino5 from '../../imgs/pakistam imgs/5.jpg'
import './Partners.css'

import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';




function Partner_2() {

    const { t } = useTranslation();




  return (
    <div className='partner_2'>
         <div className="worker">
            <div className="worker_img">
              <img src={bino5} alt="" />
            </div>
            <div className="worker_info">
                  <h1>{t("india_hamkor_footer_p_1")}</h1>
                  <p>{t("india_hamkor_footer_p_2")}</p>
                  <p>{t("india_hamkor_footer_p_3")}</p>
            </div>
          </div>
    </div>
  )
}

export default Partner_2
