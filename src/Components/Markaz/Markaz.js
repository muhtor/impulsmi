import React from "react";
import './Markaz.css';
import {Link} from 'react-router-dom';


function Markaz() {
    return(
        <>
            <div className="struktura_wrapper">
                <div className="str_banner">
                    <div>
                        <p><Link to="/">BOSH SAHIFA</Link> ITT VA BV</p>
                    </div>
                    <h1>INSTITUT TASHKILIY TUZILISHI VA BO‘LINMALARNING VAZIFALARI</h1>
                </div>
                <div className="struktura">
                    <div>
                        <h3>Huquqiy taʼminot bo‘limi</h3>
                        <p>Universitetda qonun ustuvorligi va qonuniylikni taʼminlash, normativ-huquqiy hujjatlar bilan taʼminlash, tayyorlanayotgan hujjatlarning qonunchilikka muvofiqligi ustidan huquqiy nazoratni o‘rnatish hamda shartnomaviy-huquqiy va talabnoma-daʼvo ishlarini yuritish</p>
                    </div>
                    <div>
                        <h3>Devonxona va murojaatlar bo‘limi</h3>
                        <p>Devonxona faoliyatini tashkil etish, tushadigan xat-xabarlarni qabul qilish, ro‘yxatdan o‘tkazish, hisobga olish, taqsimlash va mansubligiga ko‘ra yuborishni, chiquvchi xat-xabarlarni qabul qilish va jo‘natishni tashkil qiladi.</p>
                    </div>
                    <div>
                        <h3>Inson resurslarini boshqarish bo‘limi</h3>
                        <p>Xodimlar bilan ishlashda mehnat to‘g‘risidagi qonun hujjatlarining meʼyorlariga rioya etilishini taʼminlash, xodimlarga bo‘lgan talablarni aniqlash, tanlash va tayyorlash, kadrlar zahirasini yaratish, kadrlar hisobini yuritish, xodimlarning shaxsiy yig‘ma jildlarini yuritish va saqlash.</p>
                    </div>
                    <div>
                        <h3>Buxgalteriya va moliya bo‘limi</h3>
                        <p>Universitet budjetini rejalashtirish, moddiy-texnika taʼminoti va mablag‘larning samarali ishlatilishini taʼminlash, buxgalteriya hisobi va hisobotini yuritish, moliyalashtirishga doir hisob-kitoblarni amalga oshirish, shartnoma va oylik maosh to‘lovlarini amalga oshirish va nazorat qilish</p>
                    </div>
                    <div>
                        <h3>Marketing va jamoatchilik bilan ishlash bo‘limi</h3>
                        <p>Universitetning keng jamoatchilik oldidagi imidjini yuritish, universitet faoliyatini keng tanishtirish, kadrlar isteʼmolchilari bilan hamkorlik aloqalarini yo‘lga qo‘yish, talabalarning amaliyotlarini tashkil etishda ko‘maklashish, buyurtmachilar bilan shartnomaviy munosabatlarni o‘rnatish</p>
                    </div>
                    <div>
                        <h3>O‘quv-uslubiy bo‘lim</h3>
                        <p>O‘quv jarayonining normativ-huquqiy bazasini shakllantirish, taʼlim yo‘nalishlari va mutaxassisliklarining malaka talablari, o‘quv va ishchi o‘quv rejalarini ishlab chiqish hamda o‘quv yuklamalarni rejalashtirish, fanlarning o‘quv dasturlari va sillabuslarining ishlab chiqilishi ustidan nazoratni o‘rnatish, ishchi o‘quv rejalarining bajarilishini nazorat qilish, fanlar bo‘yicha o‘quv-uslubiy taʼminotning holatini o‘rganib borish</p>
                    </div>
                    <div>
                        <h3>Axborot-resurs taʼminot bo‘limi</h3>
                        <p>Universitet o‘quv va badiiy adabiyotlar fondini shakllantirish va rivojlantirib borish, elektron axborot resurslar katalogini va bazasini yaratish, talabalarning adabiyotlardan va elektron resurslardan foydalanishlari uchun zaruriy shart sharoitlarni yaratish, tezkor va sifatli axborot-kutubxona xizmatini ko‘rsatish, axborot-kutubxona faoliyatini boshqarish, nazorat qilish va muvofiqlashtirish.</p>
                    </div>
                    <div>
                        <h3>Xo‘jalik va xavfsizlik bo‘limi</h3>
                        <p>Universitetning moddiy-texnika bazasini mustahkamlash, kafedra, laboratoriya, maʼruza xonalarida bilim olish uchun shart-sharoitlar yaratish, universitet mulkini qo‘riqlash, asrab avaylash va saqlash, universitet hududi va o‘quv binosini tiklash-taʼmirlash, toza va ozoda saqlash, obodonlashtirish ishlarini olib borish, mehnatni muhofaza qilishni tashkil etish, maʼmuriy-xo‘jalik faoliyatini yuritish, zarur asbob-uskunalar, mebel jihozlari, orgtexnika, kanselyariya va xo‘jalik mollari bilan taʼminlash.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Markaz;