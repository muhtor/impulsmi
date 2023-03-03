import React from "react";
import './Bino.css';
import {Link} from 'react-router-dom';


import chizma from '../../imgs/bino chizmasi.png'
import imgbg from '../../imgs/impuls.jpg'


import bino1 from '../../imgs/bino imgs/1.jpg'
import bino2 from '../../imgs/bino imgs/2.jpg'
import bino3 from '../../imgs/bino imgs/3.jpg'
import bino4 from '../../imgs/bino imgs/4.jpg'
import bino5 from '../../imgs/bino imgs/5.jpg'
import bino6 from '../../imgs/bino imgs/6.jpg'
import bino7 from '../../imgs/bino imgs/7.jpg'
import bino8 from '../../imgs/bino imgs/8.jpg'
import bino9 from '../../imgs/bino imgs/9.jpg'

function Bino(){
    return(
        <>
           <div className="bino_wrapper">
                <div className="bino_banner">
                     <div>
                        <p><Link to="/">BOSH SAHIFA</Link> O'quv binosi</p>
                    </div>
                    <h1>O'quv binosi</h1>
                </div>

                <div className="bino">
                    <div className="bino_chizmasi">
                        <img src={chizma} alt="" />
                    </div>

                    <div className="bino_box">
                        <div>
                            <img src={imgbg} alt="" />
                        </div>
                        <div>
                            <h1>Title</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum minima dolore hic, fugit ex iste similique nihil id voluptatem itaque cumque. Eos optio, inventore sed recusandae laboriosam illo provident doloremque!</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum minima dolore hic, fugit ex iste similique nihil id voluptatem itaque cumque. Eos optio, inventore sed recusandae laboriosam illo provident doloremque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo amet obcaecati iusto, autem minus itaque labore ratione corrupti aperiam molestiae distinctio eius, recusandae pariatur est explicabo, necessitatibus ullam placeat.
                                </p>
                        </div>
                    </div>

                    <div className="bino_malumot">
                        <h1>Title</h1>
                        <h3>Paragraf ipsum, dolor sit amet consectet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci error quaerat expedita magnam totam, molestiae velit delectus voluptatibus reprehenderit quam dolorem libero quos repellendus suscipit consequuntur ad cupiditate provident.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum minima dolore hic, fugit ex iste similique nihil id voluptatem itaque cumque. Eos optio, inventore sed recusandae laboriosam illo provident doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo amet obcaecati iusto, autem minus itaque labore ratione corrupti aperiam molestiae distinctio eius, recusandae pariatur est explicabo, necessitatibus ullam placeat.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum minima dolore hic, fugit ex iste similique nihil id voluptatem itaque cumque. Eos optio, inventore sed recusandae laboriosam illo provident doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo amet obcaecati iusto, autem minus itaque labore ratione corrupti aperiam molestiae distinctio eius, recusandae pariatur est explicabo, necessitatibus ullam placeat.
                        </p>
                    </div>

                    <div className="bino_imgs">
                        <div><img src={bino1} alt="" /></div>
                        <div><img src={bino2} alt="" /></div>
                        <div><img src={bino3} alt="" /></div>
                        <div><img src={bino4} alt="" /></div>
                        <div><img src={bino5} alt="" /></div>
                        <div><img src={bino6} alt="" /></div>
                        <div><img src={bino7} alt="" /></div>
                        <div><img src={bino8} alt="" /></div>
                        <div><img src={bino9} alt="" /></div>
                    </div>

                </div>
           </div>
        </>
    )
}


export default Bino;