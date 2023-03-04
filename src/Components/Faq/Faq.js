import React from "react";
import {Link} from 'react-router-dom';
import './Faq.css';


import { useTranslation } from "react-i18next";



function Faq() {

    const { t } = useTranslation();

    
    function accordion(e) {
        document.querySelectorAll('.accordion')
        .forEach(el => el.classList.remove('active'));
        if (e.target.tagName === 'H1') {
            e.target.parentElement.parentElement.classList.add("active");
        }
        e.target.parentElement.classList.add('active');
    }

    return(
        <>

            <div className="bino_banner">
                    <div>
                    <p><Link to="/">{t("bosh_sahifa")}</Link>FAQ</p>
                </div>
                <h1>{t("ko'p_beriladighan_savollar")}</h1>
            </div>

            <div className="savollar">
            <div className="accordion-section">
          <h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="first"
          >
            {t("ko'p_beriladighan_savollar")}
          </h1>
          <div className="accordion-box">
            <div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="left-menu"
            >
              <p>{t("accordion_section_p")}</p>
            </div>
            <div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="right-menu"
              onClick={accordion}
            >
              <div className="accord-box">
                <div className="accordion active">
                  <div className="savol-div">
                    <h1>{t("savol_1")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview ">
                    <p>{t("javob_1")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_2")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_2")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_3")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_3")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_4")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_4")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_5")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>
                      {t("javob_5")}
                      <br />
                      <span>{t("javob_5_span_1")}</span>
                      <br />
                      <span>{t("javob_5_span_2")}</span>
                      <br />
                      {t("javob_5_span_3")}
                    </p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_6")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_6")}</p>
                  </div>
                </div>
                <div className="accordion">
                  <div className="savol-div">
                    <h1>{t("savol_7")}</h1>
                    <div className="plus">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview">
                    <p>{t("javob_7")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>

        </>
    )
}



export default Faq