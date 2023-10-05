import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './Faq.css';


import { useTranslation } from "react-i18next";
import { BsFillDiamondFill } from "react-icons/bs";


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

    const [load, setLoad] = useState(false);
  
    useEffect(() => {
          setTimeout(() => {
              setLoad(true);
          }, 2000);
      }, [])

    return(
        <div className="container">

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
          FAQ
        </div>

            <div className="savollar">
            <div className="accordion-section">
          <h1
            className="first"
          >
            {t("ko'p_beriladighan_savollar")}
          </h1>
          <div className="accordion-box">
            <div
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

        </div>
    )
}



export default Faq