import React from 'react'
import {Link} from 'react-router-dom';
import './Fakultet.css'


import img_1 from '../../imgs/fakultet_img.jpg'
import img_2 from '../../imgs/fakultet_img_2.jpg'

import { useTranslation } from "react-i18next";



function Fakultet() {

  const { t } = useTranslation();

  return (
    <>
      <div className="fakultet_wrapper">
            <div className="bino_banner">
                <div>
                    <p><Link to="/">{t("bosh_sahifa")}</Link> {t("fakultet")}</p>
                </div>
                    <h1>{t("fakultet")}</h1>
            </div>
            <div className="fakultet">
                <div className="fakultet_img">
                    <img src={img_1} alt="" />
                </div>
                <h1>{t("fakultet_info_h1")}</h1>
                <div className="fakultet_info">
                    <div className='fakultet_info_img'><img src={img_2} alt="" /></div>
                    <div className='fakultet_info_txt'>
                        <p>{t("fakultet_info_txt_1")}</p>
                    </div>
                </div>
                    <p className='fakultet_txt'>{t("fakultet_info_txt_2")}</p>
            </div>
      </div>
    </>
  )
}

export default Fakultet
