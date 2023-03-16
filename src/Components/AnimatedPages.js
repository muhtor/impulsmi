import React from 'react';
import BoshSahifa from "./BoshSahifa/BoshSahifa";
import BizHaqimizda from "./BizHaqimizda/BizHaqimizda";
import Markaz from './Markaz/Markaz';
import Bino from './Bino/Bino';
import Nizom from './Nizom/Nizom';
import Kengash from './Kengash/Kengash';
import Rektorat from './Rektorat/Rektorat';
import Struktura from './Struktura/Struktura';
import Teachers from './Teachers/Teachers';
import USMLE from './USMLE/USMLE';
import Yotoqxona from './Yotoqxona/Yotoqxona';
import Elkutibxona from "./Elkutibxona/Elkutibxona";
import Kutubxona from "./Kutubxona/Kutubxona";
import Fakultet from './Fakultet/Fakultet';
import Aloqa from "./Aloqa/Aloqa";
import Shartnoma from './Shartnoma/Shartnoma';
import Faq from './Faq/Faq';

import { Routes, Route, useLocation } from "react-router-dom";


import { AnimatePresence } from "framer-motion";

function AnimatedPages() {

    const location = useLocation();

    return (
      <>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<BoshSahifa />} />
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
            <Route path="/el_kutubxona" element={<Elkutibxona />} />
            <Route path="/kutubxona" element={<Kutubxona />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aloqa" element={<Aloqa />} />
            <Route path="/shartnoma" element={<Shartnoma />} />
          </Routes>
        </AnimatePresence>
      </>
    );
}

export default AnimatedPages;