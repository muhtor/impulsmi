import React from 'react'
import './Recognition.css'

import { useEffect } from 'react'

import img_1 from '../../imgs/recognition/1.png'
import img_2 from '../../imgs/recognition/2.png'

function Recognition() {





  return (
    <>
       <div className="recognition">

            <h1>Recognition</h1>
            <h3>The Impuls Medical Institute is Listed in The World Directory of Medical Schools  of W.H.O- World Health Organization</h3>
            <img src={img_1} alt="" />
            <ul>
                <li> <b>Program Name:</b> General Medicine</li>
                <li><b>Qualification Title:</b> Physician (General Medicine)</li>
                <li><b>Curriculum Duration:</b> 6 years</li>
                <li><b>Language of Instruction:</b>  English</li>
                <li><b> Prerequisite Education:</b>Admission follows completion of secondary education.</li>
                <li><b>Foreign Students:</b> Foreign students are admitted</li>
            </ul>
            <img src={img_2} alt="" />
            <h3>Advisory for Indian students desirous of pursuing Medicine</h3>
            <h1>Advisory for Indian students desirous of pursuing Medicine Course in the Republic of Uzbekistan</h1>
            <p>On the request of Embassy of India, Tashkent, Ministry of Foreign Affairs of the Republic of Uzbekistan has informed the following in connection with Medical studiesin Higher Medical Institutions/Universities in Uzbekistan:</p>
                <br />
            <ul>
                <b>•	The National Medical Council of India has made a number of changes to the system of recognition of foreign medical qualifications and diplomas of higher medical education. At the same time, the main indicator (by 2022) is “these diplomas and skills must be recognized and valid in the country, where the higher education institution that issued them is located”.</b> <br /> <br />
                <b>•	Hence, as on date, the 5-year MBBS educational program required by India is not included in the classification of higher medical education, and the mechanisms for issuing a diploma in this specialty and its recognition in Uzbekistan have not yet been worked out. </b> <br /> <br />
                <b>•	Moreover, in accordance with the Decree of the President of the Republic of Uzbekistan No.PF-78 dated Feb 24, 2022, the duration of the educational field of General Medicine is set at 6 years.</b> <br /> <br />
                <b>•	Therefore, Indian students are fully enrolled in 6-year “Therapeutic Work” programs. The 6-year program meets all the requirements established by the National Medical Commission of India (duration of training and periods allotted for practice).  After completing this educational program, the graduate will have the right to practice medicine in the territory of the Republic of Uzbekistan.</b> <br /> <br />
                <b>•	Once the 5-year MBBS educational program is included in the classification of higher medical education of the Republic of Uzbekistan, all Indian students will be invited to study under this program.</b>
            </ul>
           
       </div>
    </>
  )
}



export default Recognition

