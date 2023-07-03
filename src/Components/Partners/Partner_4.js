import React from 'react'
import './Parners.css';


import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';



function Partner_4() {

  const { t } = useTranslation();


  return (
    <div className='partners'>
      <div className="worker">
      <div className="worker_info">
            <h1>KERALA & TAMILNADU</h1>
            <p>Trias Resources Private Limited</p>
            <p>Address: Capital Heights, Opp: RSP Office, PMG-Plamood Rd, Pattom Post,Thiruvananthapuram, Kerala, India- 695004</p>
            <p>Director: Capt. Rajesh Daniel</p>
            <p>Email address: rajesh3135@gmail.com</p>
            <p>Phone number: +91 9495152066, +91 8281223135 </p>
            <p className='li_links'><a href="http://www.triasresources.com"><AiOutlineGlobal /></a></p>
        </div>
       </div>
    </div>
  )
}

export default Partner_4
