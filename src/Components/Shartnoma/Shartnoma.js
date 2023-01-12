import React from 'react';
import './Shartnoma.css';

import Logo from '../../imgs/new logo.png'
import {BiLoaderAlt} from 'react-icons/bi'
import {FiFileText} from 'react-icons/fi'
import {GrView} from 'react-icons/gr'
import {HiDownload} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'


import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function Shartnoma() {

    
    const [shartnoma, setShartnoma] = useState([]);

    useEffect(() => {
        const fetchShartnoma = () => {
            onSnapshot(collection(db, "shartnomalar"), (snapshot) => {
                setShartnoma(snapshot.docs.map((doc) => doc.data()));
            });
        };

        fetchShartnoma();
    }, []);


    function get_shartnoma(e) {
        e.preventDefault();
    }

    function close_file() {
        document.querySelector('.seriya_input').value = '';
        document.querySelectorAll('.shartnoma').forEach((el) => el.classList.remove('active'));
    }

    function getting_file() {
        let seriya = document.querySelector('.seriya_input').value.toUpperCase();
        document.querySelector('.shartnoma_loader').classList.add('active');
        setTimeout(() => {
            document.querySelector('.shartnoma_loader').classList.remove('active');
            document.querySelectorAll('.shartnoma').forEach((el) => {
                if (el.id === seriya) {
                    el.classList.add('active');
                }else{
                    el.classList.remove('active');
                }
            });
        }, 3000);
    }

  return (
    <>
        <div className="shartnoma_box">
            <form onSubmit={get_shartnoma}>
                <img src={Logo} className="shartnoma_logo" alt="" />
                <label className='label'>Pasport seriya raqamingizni kiriting.</label>
                <input type="text" className='seriya_input' placeholder='AC0189784' />
                <button onClick={getting_file}>Qidirish</button>

                {
                    shartnoma.map((el, i) => (
                        <div className="shartnoma" id={el.seriya} key={i}>
                            <h3>Shartnomangiz topildi</h3>
                            <h3>{el.name} {el.lastname} {el.otchestvo}</h3>
                            <a href="#" target="_blank"><FiFileText className='file_icon' /></a>
                            <div className="view_btns">
                                <a href={el.view} target="_blank"><GrView /></a>
                                <a href={el.shartnomasi} target="_blank"><HiDownload /></a>
                                <a href="#" onClick={close_file}><GrClose /></a>
                            </div>
                        </div>
                    ))
                }

            </form>
        </div>
        <div className="shartnoma_loader">
            <BiLoaderAlt className='loader_icon' />
        </div>
    </>
  )
}

export default Shartnoma