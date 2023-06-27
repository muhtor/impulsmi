import React from 'react'
import './Admin.css'


function Admin() {



  function password(value) {

    let password_list = document.querySelector('.passowrd');
    let myteast_list = document.querySelector('.mytest');
    let input_value = document.querySelector('.input_value');

    let password = '1111'
    // console.log(value.target.value);
    if (input_value.value === password) {
      console.log('togri');
      password_list.classList.remove('active');
      myteast_list.classList.add('active');
    }else{
      password_list.classList.add('active');
      myteast_list.classList.remove('active');
      alert("notog`ri");
      console.log(input_value);
      console.log('notogri');
    }
  }


  return (
    <div className='admin_page'>
      <div className="passowrd active">
        <h1>Parolni kiriting</h1>
        <input className='input_value' type="text"placeholder='Parolni kiriting' />
        <button onClick={password}>Add</button>
      </div>
      <div className="mytest">
        <a href="https://drive.google.com/file/d/1RC_LtIN-3u_vV2-l0WduA-yd9zQcOjCu/view?usp=sharing">My tests</a>
      </div>
    </div>
  )
}

export default Admin
