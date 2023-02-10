import React from 'react';
import './BizHaqimizda.css';


import { RiHomeLine } from 'react-icons/ri'
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";


function BizHaqimizda() {



    const { t } = useTranslation();
 
 



    return (
      <>
        <div className="banner" id="home">
          <h2> <Link to="/">BOSH SAHIFA</Link> IMPULS TIBBIYOT INSTITUTI</h2>
          <h1>IMPULS TIBBIYOT INSTITUTI</h1>
        </div>

        <div className="header">
          <p>Impuls tibbiyot instituti oʻz oldiga mintaqadagi yetakchi oliy taʼlim muassasasi boʻlish maqsadini amalga oshirish va Oʻzbekiston taraqqiyotiga hissa qoʻshishni maqsad qilgan.</p> <br />
          <p>Institutning vazifasi: Mamlakatning tibbiyot hodimlariga boʻlgan talabini hisobga olib, yetarli miqdordagi talabalarni oʻqitish, professional kadrlar tayyorlash boʻyicha yechimlar taklif qilish, yangi taʼlim texnologiyalarini ishlab chiqarish va taʼlim-tarbiya tamoyillarini ishlab chiqish. Impuls tibbiyot instituti turli mamlakatlardan kelgan talabalarga xalqaro miqyosda tan olingan standartlarda ta’lim beradi.</p> <br />
          <p>O‘quv jarayoni yetakchi xalqaro ilmiy-tadqiqot muassasalari jumladan tibbiyot yo‘nalishidagi va xorijda mehnat qilayotgan yurtdoshlarimiz bilan hamkorlikda olib borilmoqda. O‘qish ingliz va oʻzbek tilida bo‘lib, 6 yil davom etadi. Bitiruvchilarga oliy ma’lumot toʻgʻrisidagi diplom beriladi. Impuls instituti mas’uliyatni yaxshi biladi, oʻz kuchi va imkoniyatini talabalar va professor-o‘qituvchilar birgalikda samarali tadqiqot olib borishlari mumkin bo‘lgan intellektual muhitni yaratishga bag‘ishlaydi. Institut oʻz talabalariga eng zamonaviy va eng sifatli taʻlimni taklif qilishni maqsad qilgan. Institutni ushbu uzoq ta’lim yo‘liga qadam qo‘ygan har bir talaba o‘z bilimlari bilan to‘liq ta’minlangan shaxs sifatida bitiradi.</p> <br />
          <p>O‘quv jarayoni yetakchi xalqaro ilmiy-tadqiqot muassasalari, jumladan, tibbiyot yo‘nalishidagi va xorijda mehnat qilayotgan yurtdoshlarimiz bilan hamkorlikda olib borilmoqda. O‘qish ingliz va o'zbek tilida bo‘lib, 6 yil davom etadi. Bitiruvchilarga oliy ma'lumot to'g'risidagi diplom beriladi. Tadqiqot, kashfiyot va haqiqatni izlash institutning muhim xususiyatlari hisoblanadi.</p> <br />
          <p>Impuls instituti bu mas’uliyatni yaxshi biladi va o‘zini talabalar va professor-o‘qituvchilar birgalikda samarali va samarali tadqiqot olib borishlari mumkin bo‘lgan intellektual muhitni yaratishga bag‘ishlaydi. Institut o'z talabalariga eng zamonaviy va eng sifatli ta'limni taklif qilishni maqsad qilgan. Institutimizda ushbu uzoq ta’lim yo‘liga qadam qo‘ygan har bir talaba o‘z bilimlari bilan to‘liq ta’minlangan va to‘liq ta’minlangan shaxs sifatida bitiradi.</p>
        </div>
       
      </>
    );
}

export default BizHaqimizda;