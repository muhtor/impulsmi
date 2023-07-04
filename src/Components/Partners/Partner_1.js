import React from 'react'
import './Partners.css'

import { useTranslation } from "react-i18next";
import {AiOutlineClose, AiFillYoutube, AiOutlineGlobal} from 'react-icons/ai'
import { BsTelegram, BsInstagram, BsFacebook } from 'react-icons/bs';


import Peeyoosh_Saini from '../../imgs/partners/Peeyoosh_Saini.png'
import NORTH_INDIA from '../../imgs/partners/mayo md.png'
import Kerala_Tamilnadu from '../../imgs/partners/Kerala Tamilnadu.jpg'
import Medicoking_PvtLtd from '../../imgs/partners/Medicoking Pvt. Ltd.jpg'
import UNIVERSITY_FLY_GLOBAL from '../../imgs/partners/UNIVERSITY FLY GLOBAL.png'
import Med_World from '../../imgs/partners/Med_World.png'
import Doctors_Query from '../../imgs/partners/Doctors_Query.png'


import bino1 from '../../imgs/pakistam imgs/1.jpg'
import bino2 from '../../imgs/pakistam imgs/2.jpg'
import bino3 from '../../imgs/pakistam imgs/3.jpg'
import bino4 from '../../imgs/pakistam imgs/4.jpg'
import bino5 from '../../imgs/pakistam imgs/5.jpg'
import bino6 from '../../imgs/pakistam imgs/6.jpg'


function Partner_1() {

  const { t } = useTranslation();


  return (
    <>
          <div className="bino_wrapper">
                <div className="bino">
                    
                    <div className="team">
                      <div className='team_box'>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={NORTH_INDIA} alt="" />
                            </div>
                            <div className="worker_info">
                                <h1>{t("india_hamkor_footer_h1_2")}</h1>
                                <p>{t("india_hamkor_footer_p_1_2")}</p>
                                <p>{t("india_hamkor_footer_p_2_2")}</p>
                                <p>{t("india_hamkor_footer_p_3_4")}</p>
                                <p>{t("india_hamkor_footer_p_3_5")}</p>
                                <p>{t("india_hamkor_footer_p_3_6")}</p>
                                <li className='li_links'>
                                  <a href="http://www.mbbsmayomd.com"><AiOutlineGlobal /></a>
                                  <a href="http://httwww.youtube.com/channel/ps://UCs5cRzJpjsPFolnDHNQDHkQ"><AiFillYoutube /></a>
                                  <a href="https://www.facebook.com/mayomdukraine/"><BsFacebook /></a>
                                </li>
                            </div>
                          </div>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={bino1} alt="" />
                            </div>
                            <div className="worker_info">
                                <h1>{t("india_hamkor_footer_p_3_7")}</h1>
                                <p>{t("india_hamkor_footer_p_3_8")}</p>
                                <p>{t("india_hamkor_footer_p_3_9")}</p>
                                <p>{t("india_hamkor_footer_p_3_10")}</p>
                                <p>{t("india_hamkor_footer_p_3_11")}</p>
                                <p>{t("india_hamkor_footer_p_3_11")}</p>
                                <li className='li_links'>
                                  <a href="http://www.mahaveereducation.com"><AiOutlineGlobal /></a>
                                  <a href="https://youtube.com/@Mahaveer-education"><AiFillYoutube /></a>
                                  <a href="https://instagram.com/mahaveereducation?igshid=YmMyMTA2M2Y="><BsInstagram /></a>
                                </li>
                            </div>
                          </div>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={bino2} alt="" />
                            </div>
                            <div className="worker_info">
                                <h1>{t("india_hamkor_footer_p_3_12")}</h1>
                                <p>{t("india_hamkor_footer_p_3_13")}</p>
                                <p>{t("india_hamkor_footer_p_3_14")}</p>
                                <p>{t("india_hamkor_footer_p_3_15")}</p>
                                <p>{t("india_hamkor_footer_p_3_16")}</p>
                                <p>{t("india_hamkor_footer_p_3_17")}</p>
                            </div>
                          </div>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={Kerala_Tamilnadu} alt="" />
                            </div>
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
                          <div className="worker">
                            <div className="worker_img">
                              <img src={bino5} alt="" />
                            </div>
                            <div className="worker_info">
                                  <h1>{t("india_hamkor_footer_p_1")}</h1>
                                  <p>{t("india_hamkor_footer_p_2")}</p>
                                  <p>{t("india_hamkor_footer_p_3")}</p>
                            </div>
                          </div>
                          {/*  */}
                          <div className="worker">
                            <div className="worker_img">
                              <img src={Medicoking_PvtLtd} alt="" />
                            </div>
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
                          <div className="worker">
                            <div className="worker_img">
                              <img src={Peeyoosh_Saini} alt="" />
                            </div>
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
                          <div className="worker">
                            <div className="worker_img">
                              <img src={UNIVERSITY_FLY_GLOBAL} alt="" />
                            </div>
                            <div className="worker_info">
                                  <h1>University Fly Global Education Consultant Pvt Ltd</h1>
                                  <p>Plot No. 8, 1st Floor, Vipin Garden, Metro Pillar 801, Dwarka Mor New Delhi 110059</p>
                                  <p>Phone number: +917903149721 </p>
                                  <p>Email address: universityfly@gmail.com</p>
                                  <li className='li_links'>
                                  <a href="http://www.universityfly.com"><AiOutlineGlobal /></a>
                                </li>
                            </div>
                          </div>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={Med_World} alt="" />
                            </div>
                            <div className="worker_info">
                                  <h1>Med World Educations India Private Limited</h1>
                                  <p>No. 12/705, Avaneeshwaram, RSPO Thalavoor, Kollam, Kerala, India </p>
                                  <p>Contact: +91 8547139340, +34 670901398 </p>
                                  <p>Email address: medworld313@gmail.com</p>
                                  <li className='li_links'>
                                  <a href="http://www.medworld.co.in"><AiOutlineGlobal /></a>
                                </li>
                            </div>
                          </div>
                          <div className="worker">
                            <div className="worker_img">
                              <img src={Doctors_Query} alt="" />
                            </div>
                            <div className="worker_info">
                                  <h1>Doctors Query Private Limited </h1>
                                  <p>Director: Dr Sudhir Mittan </p>
                                  <p>Address: SCO 207, 2nd Floor, Town Center Sector 39, TDI city, Panipat, Haryana 132103</p>
                                  <p>Contact: +918059440003, +919817634007 </p>
                                  <p>Email address: info@doctorsquery.com</p>
                                  <li className='li_links'>
                                  <a href="http://www.doctorsquery.com"><AiOutlineGlobal /></a>
                                  <a href="https://www.instagram.com/invites/contact/?i=b1x8pj520z55&utm_content=3uf6bfn"><BsInstagram /></a>
                                  <a href="https://youtube.com/@DoctorsQuery"><AiFillYoutube /></a>
                                </li>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
        </div>
      
    </>
  )
}

export default Partner_1
