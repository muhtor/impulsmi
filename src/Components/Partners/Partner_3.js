import React from 'react'
import shuxrat_aka from '../../imgs/pakistam imgs/shuxrat aka.jpg'

import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';




function Partner_3() {

    const { t } = useTranslation();


  return (
    <div className='partner_2'>
         <div className="worker">
            <div className="worker_img">
                <img src={shuxrat_aka} alt="" />
            </div>
            <div className="worker_info">
                <h1>GoMBBS Professional Educational Consultancy</h1>
                <p>Email adress: gombbs.in@gmail.com</p>
                <p>Saudi Sheikh Complex Chanapora Bypass Road, Srinagar Jammu and Kashmir, India, PIN: 190015.</p>
                <p>+998-949883922 (UZ)</p>
                <p>+91-9682557752 (IN)</p>
                <li className='li_links'>
                    <a href="https://instagram.com/gombbs.in?igshid=MzRlODBiNWFlZA=="><BsInstagram /></a>
                    <a href="https://youtube.com/@gombbsprofessionaleducatio1092"><AiFillYoutube /></a>
                </li>
            </div>
            </div>
    </div>
  )
}

export default Partner_3
