import React from "react";
import {Link} from 'react-router-dom';
import './Nizom.css'

import { FiExternalLink } from 'react-icons/fi';
import nizom_1 from '../../imgs/nizom/1.png'
import nizom_2 from '../../imgs/nizom/2.png'
import nizom_3 from '../../imgs/nizom/3.png'
import { BsFillDiamondFill } from "react-icons/bs";




import { useTranslation } from "react-i18next";

function Nizom(){

    const { t } = useTranslation();

    return(
        <>
            <div className="page_links_box">
                <div className="pages_link">
                    <Link to="/">Main page</Link>
                    <BsFillDiamondFill />
                    Institut nizomi
                </div>
            </div>
            <div className="nizom_wrapper">
                    <h1>Institut nizomi</h1> <br />
                    <div className="nizom_box">
                        <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link"><img src={nizom_1} alt="" /></a>
                        <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link"><img src={nizom_2} alt="" /></a>
                        <a href="https://drive.google.com/file/d/1oAeCZqnAg3otwAOGUDdkISHEpup1j_Qv/view?usp=share_link"><img src={nizom_3} alt="" /></a>
                        {/* <a href="#" className="icon_link"><FiExternalLink /></a> */}
                    </div>
            </div>
        </>
    )
}


export default Nizom;