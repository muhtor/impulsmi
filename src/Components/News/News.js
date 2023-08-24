import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";



import NewsData from "../NewsData/NewsData";



function News() {


  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="news_section section">
      
        <div  className="news_box">
          {NewsData.map((el, i) => (
            <div key={i} id={i} className="news_card">
              <img src={el.news_img} alt="" />
              <h1>{el.news_tite}</h1>
              <p>{el.news_desc}</p>
              <div className="button-date">
                <Link onClick={upBtnF} to={`/news/${i}`} className="btn">
                  Batafsil o'qing              </Link>
                <p>{el.news_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
