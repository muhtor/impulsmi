import React from 'react';
import './NewsBigPage.css'

import NewsData from '../NewsData/NewsData'

import { useParams } from 'react-router-dom';


function NewsBigPage() {

    const { id } = useParams();

    return (
        <>
            <div className="current_news">
                <div className="banner">
                    <h1>Gallery</h1>
                </div>
                <div className="news_big_box">
                    <img src={NewsData[id].news_img} alt="" />
                    <h1>{NewsData[id].news_tite}</h1>
                    <p>{NewsData[id].news_desc_2}</p>
                </div>
            </div>
        </>
    )
}

export default NewsBigPage