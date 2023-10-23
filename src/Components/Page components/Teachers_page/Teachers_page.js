import React from 'react'
import './Teachers_page.css'

import logotip from '../../../imgs/logotip imgs/logotip_ipmpuls.png'

import teacher_1 from '../../../imgs/ustozlar/karimov.jpg'
import teacher_2 from '../../../imgs/ustozlar/sapiyev.jpg'
import teacher_3 from '../../../imgs/ustozlar/Нодиров Алишер Авазович.jpg'

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import {Link} from 'react-router-dom';
import { BsFillDiamondFill } from "react-icons/bs";

function Teachers_page() {

    const { t } = useTranslation();
  return (
    <>
          <div className="page_links_box">
                <div className="pages_link">
                    <Link to="/">Main page</Link>
                    <BsFillDiamondFill />
                    Teachers
                </div>
          </div>

          <div className="teacher_page_box">
            <div className="teachers_divs">
                <div className="teacher_div">
                    <div className="img_box_tr">
                        <img src={teacher_1} alt="" />
                    </div>
                    <div className="tr_infos">
                        <h1>Karimov Muxammadali Abduxoliqovich</h1>
                        <h4>O'qituvchi</h4>
                        <p>31-iyul 1983-yil Namangan viloyati, Kosonsoy tumanida ishchilar oilasida tugʻilgan. 1991-yil Kososnsoy tumanidagi S.Ayniy nomli 36 oʻrta maktabga kirgan.</p>
            
                        <button className='btn'>Mehnat faoliyati</button>
                    </div>
                </div>
                <div className="teacher_div">
                    <div className="img_box_tr">
                        <img src={teacher_2} alt="" />
                    </div>
                    <div className="tr_infos">
                        <h1>Sapiyev Tursunpolot Sobitovich</h1>
                        <h4>O'qituvchi</h4>
                        <p>17-avgust 1975-yil Namangan viloyati, Chortoq tumanida tugʻilgan.</p>
                        <button className='btn'>Mehnat faoliyati</button>
                    </div>
                </div>
                <div className="teacher_div">
                    <div className="img_box_tr">
                        <img src={teacher_3} alt="" />
                    </div>
                    <div className="tr_infos">
                        <h1>Nodirov Alisher Avazovich</h1>
                        <h4>O'qituvchi</h4>
                        <p>18-iyul 1986-yil Namangan viloyati, Chust tumanida tugʻilgan.</p>
                        <button className='btn'>Mehnat faoliyati</button>
                    </div>
                </div>
            </div>
            <div className="links_page_">
                <a className="links_page_logo" href="#"><img src={logotip} alt="" /></a>
                <h1>Raxbariyat</h1>
                <div className='pages_links'>
                  <Link to="/">Bosh sahifa</Link>
                  <Link to="/about">{t("biz_haqimizda")}</Link>
                  <Link to="/nizom">{t("imi_nizom")}</Link>
                  <Link to="/el_kutubxona">{t("el_kutibxona")}</Link>
                  <Link to="/faq">{t("FAQ")}</Link>
                  <Link to="/teachers">{t("teachers")}</Link>
                  <Link to="/rektorat">{t("rektorat")}</Link>
                  <Link to="/kutubxona">{t("kutibxona")}</Link>
                  <Link to="/aloqa">{t("aloqa")}</Link>
                </div>
            </div>
          </div>
    
    
    </>
  )
}

export default Teachers_page