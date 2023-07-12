import React from "react";
import './InternationalFaculty.css';
import {Link} from 'react-router-dom';

import islom_aka from '../../imgs/internationalFaculty/islom aka.jpg'
import hind from '../../imgs/internationalFaculty/hind.png'



function InternationalFaculty() {
    return(
        <>
              <div className="rektorat_wrapp">
                <div className="rektorat_banner">
                    <div>
                        <p><Link to="/">Bosh sahifa</Link> International Faculty</p>
                    </div>
                        <h1>International Faculty</h1>
                </div>

                <div className="rektorat">
                    <div className="rektorat_xodimlari">
                        <div className="retkorat_box">
                            <div className="rektorat-img">
                                <img src={islom_aka} alt="85" />
                            </div>
                            <div className="rektor_info">
                                <h3>Islomjon Nurmukhammadov</h3>
                                <h4>International Relations Department Director</h4> <br />
                                <h4>Reception Days Monday-Saturday 09:00 - 17:00</h4> <br />
                                <h4>Phone number: +998949507697</h4> <br />
                                <h4>WhatsApp +998949507697</h4> <br />
                                <h4>Email: auditor.islam@bk.ru</h4> <br />
                            </div>
                        </div>
                        <br /><br />
                        {/* <div className="retkorat_box">
                            <div className="rektorat-img">
                                <img src={hind} alt="85" />
                            </div>
                            <div className="rektor_info">
                                <h3>Dr Jagpreet Singh Kahlon</h3>
                                <h4>MBBS MD Oncologist and Radiologist with Radiation Medicine PGDCC</h4> <br />
                                <h4>Registration Number PMC 51101</h4> <br />
                                <h4>Email:- DRKAHLON84@GMAIL.COM - mayomd123@gmail.com</h4> <br />
                                <h4>Ph No & Whatsaap No. +918837629089</h4> <br />
                                <h4>Telegram :- +998 91-774-83-95</h4> <br />
                            </div>
                        </div> */}
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default InternationalFaculty;