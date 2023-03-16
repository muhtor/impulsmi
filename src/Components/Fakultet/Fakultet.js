import React from 'react'
import {Link} from 'react-router-dom';

function Fakultet() {
  return (
    <>
      <div className="fakultet_wrapper">
            <div className="bino_banner">
                <div>
                    <p><Link to="/">BOSH</Link> Fakultet</p>
                </div>
                    <h1>Fakultet</h1>
            </div>
            <div className="fakultet">
                <div className="fakultet_img">
                    <img src="" alt="" />
                </div>
                <h1>General Medicine Faculty</h1>
                <div className="fakultet_info">
                    <div className='fakultet_info_img'><img src="" alt="" /></div>
                    <div className='fakultet_info_txt'>
                        <p>Students are now studying general medicine which involves prevention, diagnosis, and treatment of adult diseases. Currently, students who have enrolled general medicine faculty are being familiarised on an advanced level with the field of medical science, through experimental practice, observation, theoretical and practical knowledge. In addition, students can able to visit once a week to one of the clinics which has been working cooperatively with Impuls Medical Institute and participate general medicine diagnosis and treatments. Plus, live treatment videos will be showing soon so students can watch from Institute itself. </p>
                    </div>
                    <p>From September 2023 another three faculties will be open for students. They are Faculty of Dental Practice, Faculty of Pediatrics and Faculty of Pharmaceutical Sciences. Local and overseas students can study full-time only on these faculties as an undergraduate student. As study structure is based on USMLE system, All lessons are held in English language by high qualified teachers and PhDs whose English levels are above B2 at least.</p>
                </div>
            </div>
      </div>
    </>
  )
}

export default Fakultet
