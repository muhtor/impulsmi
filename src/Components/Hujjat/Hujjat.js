import React from 'react'
import './Hujjat.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Hujjat() {

    const [image, setimage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");


    
  return (
    <>
        <div className='file_wrapper'>
            <div>
                <form>
                    <input type="file" />
                </form>
            </div>
        </div>
    </>
  )
}

export default Hujjat
