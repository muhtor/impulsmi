import React from "react";
import './InternationalFaculty.css';
import {Link} from 'react-router-dom';

import islom_aka from '../../imgs/internationalFaculty/islom aka.jpg'
import shuxrat_aka from '../../imgs/internationalFaculty/shuxrat aka.jpg'
import ayubxon_aka from '../../imgs/internationalFaculty/ayubxon aka.jpg'



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
                            </div>
                        </div>
                        <br /><br />
                        <div className="retkorat_box">
                            <div className="rektorat-img">
                                <img src={shuxrat_aka} alt="85" />
                            </div>
                            <div className="rektor_info">
                                <h3>Nizmiddinov Shuxratjon</h3>
                                <h4>International Relations Department Speccialist</h4> <br />
                            </div>
                        </div>
                        <br /><br />
                        <div className="retkorat_box">
                            <div className="rektorat-img">
                                <img src={ayubxon_aka} alt="85" />
                            </div>
                            <div className="rektor_info">
                                <h3>Qutbitdinov Ayubxon</h3>
                                <h4>International Relations Department Speccialist</h4> <br />
                            </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default InternationalFaculty;