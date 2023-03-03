import React from 'react';
import BoshSahifa from "./BoshSahifa/BoshSahifa";
import BizHaqimizda from "./BizHaqimizda/BizHaqimizda";
import Markaz from './Markaz/Markaz';
import Bino from './Bino/Bino';
import Nizom from './Nizom/Nizom';
import Kengash from './Kengash/Kengash';
import Rektorat from './Rektorat/Rektorat';
import Struktura from './Struktura/Struktura';
import USMLE from './USMLE/USMLE';
import Kutibxona from "./Kutibxona/Kutibxona";
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
            <Route path="/usmle" element={<USMLE />} />
            <Route path="/kutubxona" element={<Kutibxona />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aloqa" element={<Aloqa />} />
            <Route path="/shartnoma" element={<Shartnoma />} />
          </Routes>
        </AnimatePresence>
      </>
    );
}

export default AnimatedPages;