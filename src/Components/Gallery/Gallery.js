import React from 'react'
import './Gallery.css'
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// gallery imgs
import i_1 from '../../imgs/gallery images/1.jpg'
import i_2 from '../../imgs/gallery images/2.jpg'
import i_3 from '../../imgs/gallery images/3.jpg'
import i_4 from '../../imgs/gallery images/4.jpg'
import i_5 from '../../imgs/gallery images/5.jpg'
import i_6 from '../../imgs/gallery images/6.jpg'
import i_7 from '../../imgs/gallery images/7.jpg'
import i_8 from '../../imgs/gallery images/8.jpg'
import i_9 from '../../imgs/gallery images/9.jpg'
import i_10 from '../../imgs/gallery images/10.jpg'
import i_11 from '../../imgs/gallery images/11.jpg'
import i_12 from '../../imgs/gallery images/12.jpg'
import i_13 from '../../imgs/gallery images/13.jpg'
import i_14 from '../../imgs/gallery images/14.jpg'
import i_15 from '../../imgs/gallery images/15.jpg'
import i_16 from '../../imgs/gallery images/16.jpg'
import i_17 from '../../imgs/gallery images/17.jpg'
import i_18 from '../../imgs/gallery images/18.jpg'
import i_19 from '../../imgs/gallery images/19.jpg'
import i_20 from '../../imgs/gallery images/20.jpg'
import i_21 from '../../imgs/gallery images/21.jpg'
import i_22 from '../../imgs/gallery images/22.jpg'
import i_23 from '../../imgs/gallery images/23.jpg'
import i_24 from '../../imgs/gallery images/24.jpg'







function Gallery() {

    const [img , setImg] = useState(false);

    function true_false() {
        img ? setImg(false) : setImg(true);
    }

    function add_class_preview(el) {
        true_false();
        document.querySelector('.g_prewiew img').src = el.target.src;
        console.log(el.target);
    }



  return (
    <div>
        <div className={img ? "popup_gallery active" : "popup_gallery"}>
            <div className="g_prewiew">
                <img src={i_17} alt="" />
                <span className='close_btnn' onClick={true_false}><AiOutlineCloseCircle /></span>
            </div>
        </div>
        <div className="banner">
        <h1>Gallery</h1>
        </div>
        <div className="gallery" on>
           <div className="col col_1">
                <img src={i_3} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_9} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_1} alt="" onClick={(el) => add_class_preview(el)} />
                <img src={i_22} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_5} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_4} alt="" onClick={(el) => add_class_preview(el)}/>


           </div>
           <div className="col col_2">
                <img src={i_21} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_11} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_17} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_8} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_10} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_24} alt="" onClick={(el) => add_class_preview(el)}/>
           </div>
           <div className="col col_3">
                <img src={i_2} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_12} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_13} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_14} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_15} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_6} alt="" onClick={(el) => add_class_preview(el)}/>
           </div>
           <div className="col col_4">
                <img src={i_16} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_19} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_20} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_23} alt=""onClick={(el) => add_class_preview(el)}/>
                <img src={i_7} alt="" onClick={(el) => add_class_preview(el)}/>
                <img src={i_18} alt="" onClick={(el) => add_class_preview(el)}/>         
           </div>
        </div>
    </div>
  )
}

export default Gallery
