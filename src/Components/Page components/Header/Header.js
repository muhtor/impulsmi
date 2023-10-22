import React from 'react'
import './Header.css'


import logo from '../../../imgs/logo_bg.png'






function Header() {
  return (
    <>

      <div className="header_boxx">
        <img src={logo} className='bg_img_logo' alt="" />
        <div>
          <div className='impuls_txt2'>IMPULSMI</div>
          <p>Impuls tibbiyot instituti oʻz oldiga mintaqadagi yetakchi oliy taʼlim muassasasi boʻlish maqsadini amalga oshirish va Oʻzbekiston taraqqiyotiga hissa qoʻshishni maqsad qilgan.</p>
          <div className="buttons_banner">
            <a target='_blank' className='btn' href="Tel:+998555105015">Qo'ng'iroq</a>
            <a target='_blank' className='btn' href="https://t.me/impulsmi_uz">Telegram</a>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header