import React from "react";
import './Kengash.css';
import {Link} from 'react-router-dom';


import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";

import { useEffect, useState } from "react";



function Kengash() {
    
    const [kengash, setKengash] = useState([]);

    useEffect(() => {
        const fetchBooks = () => {
            onSnapshot(collection(db, "kengash-en"), (snapshot) => {
                setKengash(snapshot.docs.map((doc) => doc.data()));
            });
        };
        
        fetchBooks();
    }, []);

    console.log(kengash);   
    
    return(
        <>
            <div className="kengash_wrapper">
                <div className="kengash_banner">
                    <div>
                        <p><Link to="/">BOSH SAHIFA</Link> Kengash</p>
                    </div>
                    <h1>Institut kengashi</h1>
                </div>

                <div className="kengash">
                    <h1>IMPULS TIBBIYOT INSTITUTI KENGASHI</h1>
                    <div className="tasdiqlayman">
                        <h2>“TASDIQLAYMAN”</h2>
                        <p>Impuls tibbiyot instituti Kengashi raisi,</p>
                        <p>Rektor Imzolangan Sh.N.Nizomiddinov</p>
                        <p>“10 ” noyabr 2022 yil.</p>
                    </div>
                    <h1>Impuls tibbiyot institute Kengashi to’g’risida Nizom</h1> <br />
                    <p>Mazkur Nizom O’zbekiston Respublikasining “Ta’lim to'g’risida”gi (O’zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 1997 y. 9-son, 225-modda) va “Kadrlar tayyorlash milliy dasturi to’g’risida”gi (O’zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 1997 y. 11-12-son, 295-modda) qonunlariga hamda “Oliy ta’lim to'g'risida”gi Nizomga muvofiq institut Kengashi faoliyatini tashkil etish tartibini belgilaydi.</p>
                    <h1>I. Umumiy qoidalar</h1>
                        <p>1. Institutning faoliyatiga tegishli asosiy masalalarni ko'rib chiqish uchun rektor raisligida institut Kengashi tashkil etiladi.</p> <br />
                        <p>2. Ilmiy kengash tarkibi rektor, prorektorlar, fakultet dekanlari, institut tarkibiga kiruvchi mustaqil tashkilot va tarmoqlar direktorlari, mutaxassis chiqaruvchi kafedralar mudiri, shuningdek, jamoat tashkilotlari rahbarlaridan tashkil etiladi. </p> <br />
                        <p>Kengashning boshqa a’zolari fakultetning umumiy majlisida yashirin ovoz berish yo’li bilan saylanadilar. Professor-o’qituvchilar tarkibidan Kengashga saylanuvchi a’zolarning soni rektorning buyrug’i bilan belgilanadi. Kengash tarkibiga institutning muayyan yo’nalish muammolari bo’yicha ishlayotgan yirik olim va mutaxassislari ham kiritilishi mumkin. Vakolat muddati – 5 yil. </p> <br />
                        <p>3. Kengash tarkibi institut rektorining buyrug’i bilan tasdiqlanadi. Har o’quv yilining boshida, turli sabablarga ko’ra Kengash tarkibidan chiqqanlar o’rniga, yangi a’zolar saylanadi yoki nizom bo’yicha kiritiladi.</p> <br />
                    <h1>II. Kengashning maqsad va vazifalari </h1>
                        <p>4. Kengashning maqsadi – institut jamoasi sa’y-harakatlari, intellektual salohiyati va boshqa barcha imkoniyatlarni O’zbekiston Respublikasining “Ta’lim to’g’risida”gi va “Kadrlar tayyorlash milliy dasturi to’g’risida”gi qonunlarida belgilangan vazifalarning bajarilishini ta’minlash, oliy ta’limning davlat ta’lim standarti talablari darajasida mukammal bilim, malaka, ko’nikmalarga ega bo’lgan professional mutaxassislar tayyorlashga yo’naltirishdan iborat. </p>
                        <p>
                            5. Institut Kengashi:
                            <ul>
                                <li>• kadrlar tayyorlash milliy dasturiga muvofiq davlat ta’lim standartlari, o’quv rejalari va dasturlarining qat’iy bajarilishini o’rganib chiqadi hamda ustuvor masalalar bo’yicha tavsiya va topshiriqlar belgilaydi; </li>
                                <li>• fakultetlarning o’quv, ilmiy-tadqiqot va ma’naviy-ma’rifiy ishlari to’g’risidagi,  qabul komissiyasining qabul natijalari to’g’risidagi, shuningdek, marketing xizmatining xalq xo’jaligining bitiruvchi mutaxassislarga bo’lgan ehtiyoji, buyurtmachi tashkilotlar bilan hamkorlik aloqalari to’g’risidagi hisobotlarini eshitadi hamda tegishli qaror qabul qiladi;</li>
                                <li>• ilmiy-tadqiqot, ma’naviy-ma’rifiy ishlar rejalari ijrosi, professor-o’qituvchilar tarkibining malaka oshirish va qayta tayyorlash masalalarini muhokama qiladi hamda tegishli qarorlarni qabul qiladi; </li>
                                <li>• iqtidorli talabalar safidan va professor-o’qituvchilar tarkibidan nomzodlarni tegishli jamg’armalar orqali xorijiy oliy ta’lim muassasalarida stajirovka o’tishga tavsiya etadi; </li>
                                <li>• institut iqtidorli talabalari safidan O’zbekiston Respublikasi Prezidenti Davlat stipendiyasi va nomli davlat stipendiyalar tanlovida ishtirok etadigan nomzodlarni tavsiya etadi;</li>
                                <li>• asosiy buyurtmachi tashkilot, korxona va muassasalar bilan korporativ hamkorlikni rivojlantirish, moddiy-texnik bazani mustahkamlash hamda talabalarning malakaviy amalyoti samaradorligini oshirish masalalarini muhokama qiladi va ularni yaxshilash bo’yicha tavsiyalar ishlab chiqadi; </li>
                                <li>• xorijiy mamlakatlarning oliy ta’lim muassasalari bilan hamkorlik aloqalarini o’rnatish bo’yicha qarorlar qabul qiladi; </li>
                                <li>• ta’lim xizmatlari bilan shug’ullanuvchi kichik korxonalar, firma va kurslar faoliyati haqida rahbarlarning hisobotlarini eshitadi hamda tegishli qaror qabul qiladi;  </li>
                                <li>• institut talabalari va xodimlarining texnika xavfsizligi va mehnat muhofazasini takomillashtirish bo’yicha tadbirlarni belgilaydi.</li>
                            </ul>
                        </p>
                    <h1>III. Kengash faoliyatini tashkil etish </h1>
                        <p>6. Kengash o’z faoliyatini xar o’quv yili uchun ishlab chiqiladigan rejaga muvofiq amalga oshiradi. Kengash rejasi Kengash tomonidan ko’rib chiqilgandan so’ng institut rektori tomonidan tasdiqlanadi. </p>
                        <p>7.	Institutning o’quv, ilmiy-uslubiy, ilmiy-tadqiqot, ma’naviy-ma’rifiy va tashkiliy ishlarga doir barcha masalalar bo’yicha Kengash qarorlari ochiq ovoz berish tartibida ko’pchilikning ovozi bilan qabul qilinadi. Kengash majlisi uning tarkibidagi a’zolarning 2/3 qismi ishtirok etgandagina haqiqiy hisoblanadi.</p>
                        <p>8.	Kengash qarorlari institut rektori tomonidan tasdiqlanganidan so’ng kuchga kiradi.</p>
                        <p>9.	Kengash majlisi bayonnoma bilan rasmiylashtiriladi. Bayonnomalar Kengash raisi va ilmiy kotibi tomonidan imzolanadi.</p>
                        <p>10.	Kengash raisi muntazam ravishda Kengash qarorlarining bajarilishi bo’yicha tekshiruvlar tashkil etadi va Kengash a’zolariga ularning natijalari haqida axborot beradi.</p>
                    <h1>2022-2023 o‘quv yilida Impuls tibbiyot instituti Kengashining TARKIBI</h1>
                    <div className="table">
                        <table border={1} width="90%">
                            <thead>
                                <tr>
                                    <td width='50px'>№</td>
                                    <td width="350px">F.I.Sh</td>
                                    <td>Ishlab turgan lavozimi</td>
                                    <td width="200px">Lavozimi</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="center" width='50px'>1</td>
                                    <td width="350px">Sh.N.Nizomiddinov</td>
                                    <td className="center">Institut rektori</td>
                                    <td width="200px">Kengash raisi</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>2</td>
                                    <td width="350px">B.S.Qambarov</td>
                                    <td className="center">“IMPULS BSR” MChJ rahbari</td>
                                    <td width="200px">Rais o`rinbosari</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>3</td>
                                    <td width="350px">Z.S.Nazarov</td>
                                    <td className="center">Rektor maslahatchisi</td>
                                    <td width="200px">Rais o`rinbosari</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>4</td>
                                    <td width="350px">Vakant</td>
                                    <td className="center">O`quv ishlari bo`yicha prorektor</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>5</td>
                                    <td width="350px">Vakant</td>
                                    <td className="center">Yoshlar ishlari va ma`naviy-ma`rifiy ishlar bo`yicha prorektor</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>6</td>
                                    <td width="350px">S.A.Adilov</td>
                                    <td className="center">O`quv-uslubiy bo`lim boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>7</td>
                                    <td width="350px">D.Tursunov</td>
                                    <td className="center">Ta`lim sifatini nazorat qilish bo`limi boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>8</td>
                                    <td width="350px">Vakant</td>
                                    <td className="center">Xalqaro aloqalar bo`limi boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>9</td>
                                    <td width="350px">X.Tojiboyev</td>
                                    <td className="center">Huquqshunos</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>10</td>
                                    <td width="350px">U.Axmadajonov</td>
                                    <td className="center">Davolash ishi fakulteti dekani o`rinbosari</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>11</td>
                                    <td width="350px">A.Anvarjanov</td>
                                    <td className="center">Raqamli taʼlim texnologiyalari markazi rahbari</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>12</td>
                                    <td width="350px">Sh.Do’lasheva</td>
                                    <td className="center">ARM direktori</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>13</td>
                                    <td width="350px">O.Xolmirzayev</td>
                                    <td className="center">Tibbiyot fanlari kafedra mudiri</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>14</td>
                                    <td width="350px">M.Abdullayev</td>
                                    <td className="center">Bosh hisobchi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>15</td>
                                    <td width="350px">D.Israilova</td>
                                    <td className="center">Xodimlar bo`limining boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>16</td>
                                    <td width="350px">I.Egamov  </td>
                                    <td className="center">Moliya-reja bo`limi boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>17</td>
                                    <td width="350px">Sh.G’aniyev</td>
                                    <td className="center">Marketing bo`lim boshlig`i</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>18</td>
                                    <td width="350px">N.Asqarova</td>
                                    <td className="center">Xotin-qizlar qo`mitasi raisi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>19</td>
                                    <td width="350px">B.Izzatullaev</td>
                                    <td className="center">Yoshlar ittifoqi yetakchisi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>20</td>
                                    <td width="350px">M.Alimkulova</td>
                                    <td className="center">Kasaba uyushma qo`mitasi raisi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>21</td>
                                    <td width="350px">I.Abdullajonov</td>
                                    <td className="center">Matbuot kotibi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                                <tr>
                                    <td className="center" width='50px'>22</td>
                                    <td width="350px">Vakant</td>
                                    <td className="center">Kengash kotibi</td>
                                    <td width="200px">A’zo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="kengash_footer">
                        <p>Kengash kotibi v.v.b:</p>
                        <p>S.Adilov</p>
                    </div>
                    <p>Izoh: Kengash tarkibidan chiqqanlar o’rniga, yangi saylangan a’zolar nizom bo’yicha shu lavozim bo’yicha ma’sul hisoblanadi</p>
                </div>
            </div>
        </>
    )
}


export default Kengash;