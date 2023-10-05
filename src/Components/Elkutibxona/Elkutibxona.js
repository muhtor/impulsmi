import React from 'react';
import './Kutibxona.css';

import db from "../Firebase/Firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GrClose, GrList } from "react-icons/gr";
import { IoGrid } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";



import { useTranslation } from "react-i18next";


function Elkutibxona() {


    const [changed, setChanged] = useState('grid')

    const { t } = useTranslation();


    const [bookdata, setBookData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(1200);
    


    useEffect(() => {
        const fetchBooks = () => {
            onSnapshot(collection(db, "books"), (snapshot) => {
                setBookData(snapshot.docs.map((doc) => doc.data()));
            });
        };
        fetchBooks();
    }, []);




    function getBook(e) {
        let indexBook = e.target.parentElement.parentElement;


        let target_img = indexBook.querySelector('img');
        let target_name = indexBook.querySelector('.title');
        let target_avtor = indexBook.querySelector('.target_avtor');
        let target_year = indexBook.querySelector('.target_year');
        let target_link = indexBook.querySelector('.target_link');


        document.querySelector(".gl-book-img").src = target_img.src;
        document.querySelector(".name").innerHTML = "Kitob: " + target_name.innerHTML;
        document.querySelector(".avtor").innerHTML = "Avtor: " + target_avtor.innerHTML;
        document.querySelector(".year").innerHTML = "Chop etilgan yil: " + target_year.innerHTML;
        document.querySelector('.button').href = target_link.innerHTML;

        let parentBox = document.querySelector(".book-popup");
        parentBox.classList.add('active');
    }

    function removePop() {
        document.querySelector(".book-popup").classList.remove('active');
    }

    const indexOfLastBook = currentPage * postPerPage;
    const indexOfFirstBook = indexOfLastBook - postPerPage;
    const currentBooks = bookdata.slice(indexOfFirstBook, indexOfLastBook);




    function search(e) {

        let items = document.querySelectorAll(".title");


        let searchValue = e.target.value.toLowerCase();


        items.forEach((el) => {
            let item = el.textContent.toLowerCase();

            item.includes(searchValue)
                ? (el.parentElement.parentElement.style.display = "flex")
                : (el.parentElement.parentElement.style.display = "none");
        });

    }


  

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(bookdata.length / postPerPage); i++) {
        pageNumbers.push(i);
    }


    const [load, setLoad] = useState(false);
  
    useEffect(() => {
          setTimeout(() => {
              setLoad(true);
          }, 2000);
      }, [])

    return (
        <>



        <div className={!load ? "loader" : "loader active"}>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
            <div className="banner-books">
                <h1>
                    {t("kutibxona_banner_h1")}
                </h1>
            </div>

            <div className="books_box">
                {/* search books box */}

                <div className="input">
                    <input placeholder='Qidirish...' onInput={search} type="text" />
                    <div className="grid_list">
                        <span onClick={() => setChanged('grid')}  className={ changed === 'grid' ? "active" : "" }><IoGrid /> Grid</span>
                        <span onClick={() => setChanged('list')}  className={ changed === 'list' ? "active" : "" } ><CiCircleList /> List</span>
                    </div>
                </div>

                {/* search books box */}

                {/* Books */}

                <div className={ changed === 'grid' ? "books grid" : "books list" }>
                    <div className={ changed === 'grid' ? "adabiy-kitoblar grid" : "adabiy-kitoblar list" }>
                        {currentBooks.map((el) => (
                            <div
                                key={el.id}
                                id={el.id}
                                className="book"
                            >
                                <div className="book-img">
                                    <img src={el.img} alt="" />
                                </div>
                                <div className="book-title">
                                    <p className="title" onClick={(e) => getBook(e, bookdata)}>
                                        {el.name}
                                    </p>
                                    <p className="target_avtor">{el.avtor}</p>
                                    <p className="target_link">{el.link}</p>
                                    <p className="target_year">{el.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* adabiy kitoblar */}
                </div>

                {/* Books */}
            </div>
            <div className='pagination'>
                {
                    pageNumbers.map(number => (
                        <a 
                        href="#"
                        key={number}
                        onClick={() => paginate(number)}
                        className='page-item'
                        >
                            {number}
                        </a>
                    ))
                }
            </div>

            <div className="book-popup">
                <div className="book-info">
                    <div className="close_popup" onClick={removePop}>
                        <GrClose />
                    </div>

                    <div className="book-info-img">
                        <img className="gl-book-img" src="" alt=''/>
                    </div>
                    <div className="book-infos">
                        <h3 className="name">f</h3>
                        <p className="avtor">f</p>
                        <p className="year">f</p>
                        <a target="_blank" className="button" href="#">
                            O'qish
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Elkutibxona;



