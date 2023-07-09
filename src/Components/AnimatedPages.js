import React from 'react';
import Admin from "./Admin/Admin";
import BoshSahifa from "./BoshSahifa/BoshSahifa";
import BizHaqimizda from "./BizHaqimizda/BizHaqimizda";
import Markaz from './Markaz/Markaz';
import Bino from './Bino/Bino';
import Nizom from './Nizom/Nizom';
import Kengash from './Kengash/Kengash';
import Rektorat from './Rektorat/Rektorat';
import Struktura from './Struktura/Struktura';
import Gallery from './Gallery/Gallery';
import Teachers from './Teachers/Teachers';
import USMLE from './USMLE/USMLE';
import Yotoqxona from './Yotoqxona/Yotoqxona';
import Elkutibxona from "./Elkutibxona/Elkutibxona";
import Kutubxona from "./Kutubxona/Kutubxona";
import Fakultet from './Fakultet/Fakultet';
import Aloqa from "./Aloqa/Aloqa";
import Hujjat from './Hujjat/Hujjat';
import Shartnoma from './Shartnoma/Shartnoma';
import Faq from './Faq/Faq';
import Partner_1 from './Partners/Partner_1';
import Partner_2 from './Partners/Partner_2';
import Partner_3 from './Partners/Partner_3';
import Partner_4 from './Partners/Partner_4';


import { Routes, Route, useLocation } from "react-router-dom";


import { AnimatePresence } from "framer-motion";
import Navbar from './Navbar/Navbar';

function AnimatedPages() {

    const location = useLocation();

    return (
      <>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<BoshSahifa />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/bizhaqimizda" element={<BizHaqimizda />} />
            <Route path="/markaz" element={<Markaz />} />
            <Route path="/bino" element={<Bino />} />
            <Route path="/nizom" element={<Nizom />} />
            <Route path="/struktura" element={<Struktura />} />
            <Route path="/rektorat" element={<Rektorat />} />
            <Route path="/kengash" element={<Kengash />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/fakultet" element={<Fakultet />} />
            <Route path="/usmle" element={<USMLE />} />
            <Route path="/yotoqxona" element={<Yotoqxona />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/hujjat" element={<Hujjat />} />
            <Route path="/el_kutubxona" element={<Elkutibxona />} />
            <Route path="/kutubxona" element={<Kutubxona />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aloqa" element={<Aloqa />} />
            <Route path="/shartnoma" element={<Shartnoma />} />
            <Route path="/partners" element={<Partner_1 />} />
            <Route path="/partner_2" element={<Partner_2 />} />
            <Route path="/partner_3" element={<Partner_3 />} />
            <Route path="/partner_4" element={<Partner_4 />} />
          </Routes>
        </AnimatePresence>
      </>
    );
}

export default AnimatedPages;