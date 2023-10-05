import React, { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import './Aloqa.css';
import { MdDone } from 'react-icons/md';  
import { Link } from 'react-router-dom';


import { useTranslation } from "react-i18next";
import { BsFillDiamondFill, BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { MdMarkEmailUnread, MdOutlineLocationOn } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'


function Aloqa() {



  const [sucsess, setSucsess] = useState(false);



  const { t } = useTranslation();

  const form = useRef();


  function PopupF() {
    // !sucsess ? setSucsess(true) : setSucsess(false);
    if (!sucsess) {
      setSucsess(true);
      document.querySelector('.message-ok')
        .innerHTML = t("message-ok")
    } else {
      setSucsess(false);
    }

  }
  const sendEmail = (e) => {
        e.preventDefault();
      
      emailjs
      .sendForm(
          "service_nji9jsn",
          "template_00ukwpv",
          form.current,
          "XKsKC_qLxp__WHsvi"
      )
      .then(
          (result) => {
            if (result.text === 'OK') {
              PopupF();
            }
          },
          (error) => {
          console.log(error.text);
          }
      );

      e.target.reset();
    }


    const [load, setLoad] = useState(false);
  
    useEffect(() => {
          setTimeout(() => {
              setLoad(true);
          }, 2000);
      }, [])
  


    return (
      <div className='container'>
  
        <div className={!load ? "loader" : "loader active"}>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
  
      <div className="pages_link">
          <Link to="/">Main page</Link>
          <BsFillDiamondFill />
          Aloqa
        </div>

        <div className="form-div">

          <form ref={form} onSubmit={sendEmail}>
            <h1>{t("habar")}</h1>
            <div className="">
              <div className="col-8 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("pl_1")}
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("pl_2")}
                  name="email"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("pl_3")}
                  name="phoneNumber"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder={t("textarea")}
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value={t("form_btn")}
                ></input>
              </div>
            </div>
          </form>
          <div className={sucsess ? 'result-popup active' : 'result-popup'}>
              <div className="donebtn-box">
                <MdDone className='donebtn' />
              </div>
              <p className='message-ok'></p>
            <button onClick={PopupF}>Done</button>
          </div>
          <div className="right-form-menu">
              <div className="link_social">
                  <div className="icon_aloqa">
                      <BiPhoneCall   />
                  </div>
                  <div className="aloqa_txt">
                    <a href="Tel:555105015">Telefon raqamimiz</a>
                    <p>(55) 510 50 15</p>
                  </div>
              </div>
              <div className="link_social">
                  <div className="icon_aloqa">
                      <MdOutlineLocationOn   />
                  </div>
                  <div className="aloqa_txt">
                    <a href="https://goo.gl/maps/MkaUDEUSLXJhfVYa6">Manzil</a>
                    <p>Namangan shahar</p>
                  </div>
              </div>
              <div className="link_social">
                  <div className="icon_aloqa">
                      <MdMarkEmailUnread />
                  </div>
                  <div className="aloqa_txt">
                    <a href="mailto:info@impuslmi.uz">Elektron pochta</a>
                    <p>info@impulsmi.uz</p>
                  </div>
              </div>
              <div className="link_social">
                  <div className="icon_aloqa">
                      <BsInstagram />
                  </div>
                  <div className="aloqa_txt">
                    <a href="https://instagram.com/impuls_mi?igshid=MzRlODBiNWFlZA==">Instagram</a>
                    <p>@impulsmi_uz</p>
                  </div>
              </div>
              <div className="link_social">
                  <div className="icon_aloqa">
                      <BsTelegram />
                  </div>
                  <div className="aloqa_txt">
                    <a href="https://t.me/impulsmi_uz">Telegram</a>
                    <p>impulsmi_uz</p>
                  </div>
              </div>
              <div className="link_social">
                  <div className="icon_aloqa">
                      <BsFacebook />
                  </div>
                  <div className="aloqa_txt">
                    <a href="https://m.facebook.com/impuls.medical.institute/">Facebook</a>
                    <p>impulsmi_uz</p>
                  </div>
              </div>
          </div>


        </div>
      </div>
    );
}

export default Aloqa;