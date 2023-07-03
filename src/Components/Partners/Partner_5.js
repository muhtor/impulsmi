import React from 'react'
import './Parners.css';

import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';



function Partner_5() {

  const { t } = useTranslation();

  return (
    <div className='partners'>
      <div className="worker">
      <div className="worker_info">
            <h1>Medicoking Pvt. Ltd.</h1>
            <p>Office- Panipat,Karnal, Rohtak,Noida</p>
            <p>More Querry - 9812000822/8059066000</p>
            <p>Instagram - infomedicoking</p>
            <li className='li_links'>
            <a href="https://medicoking.com/"><AiOutlineGlobal /></a>
            <a href="https://instagram.com/infomedicoking?igshid=MzNlNGNkZWQ4Mg=="><BsInstagram /></a>
            <a href="https://www.facebook.com/Studyabroadmbbs9"><BsFacebook /></a>
            <a href="https://www.youtube.com/@medicoking6707"><AiFillYoutube /></a>
        </li>
    </div>
       </div>
    </div>
  )
}

export default Partner_5
