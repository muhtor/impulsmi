import React from 'react'
import './Parners.css';


import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';



function Partner_6() {
  const { t } = useTranslation();

  return (
    <div className='partners'>
      <div className="worker">
      <div className="worker_info">
            <h1>Medical Academy</h1>
            <p>Director: Peeyoosh Saini</p>
            <p>GF 32, Kirti Sikhar Building District Centre, Janakpuri, New Delhi - 110058</p>
            <p>Phone number: +919582474764, +998942579763 </p>
            <p>+917045535113, +919582474664 </p>
            <p>Email address: pbsmedicalacademy@gmail.com</p>
            <li className='li_links'>
            <a href="http://www.pbsmedicalacademy.in"><AiOutlineGlobal /></a>
        </li>
    </div>
       </div>
    </div>
  )
}

export default Partner_6
