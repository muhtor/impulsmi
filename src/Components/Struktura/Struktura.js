import React from "react";
import './Struktura.css';
import {Link} from 'react-router-dom';

import str_img from '../../imgs/struktura img.png'

function Struktura(){
    return(
        <>
            <div className="struktura_wrapper">
                <div className="struktura_banner">
                    <div>
                        <p><Link to="/">BOSH SAHIFA</Link> Struktura</p>
                    </div>
                    <h1>ITI Strukturasi</h1>
                </div>

                <div className="struktura-img">
                    <img src={str_img} alt="" />
                </div>

            </div>
        </>
    )
}

export default Struktura;
