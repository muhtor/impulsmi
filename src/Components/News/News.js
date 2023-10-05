import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";



import NewsData from "../NewsData/NewsData";
import { BsArrowRight } from 'react-icons/bs'



function News() {


  function upBtnF() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="news_section section">
          <h1>Yangiliklar</h1>
        <div  className="news_box">
          {NewsData.map((el, i) => (
            <div key={i} id={i} className="news_card">
              <img src={el.news_img} alt="" />
              <div className="news_inner_div">
                <p>{el.news_date}</p>
                <Link onClick={upBtnF} to={`/news/${i}`} className="title_news">{el.news_tite}</Link>
                <p>{el.news_desc}</p>
                <div className="button-date">
                  <Link onClick={upBtnF} to={`/news/${i}`} className="more_link">
                    Batafsil o'qing
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
