import React, { useState } from "react";

import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "../Styles/ScrollTopBtn.css";

const ScrollTopBtn = () => {
  const [visiblity, setVisiblity] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 400 && !visiblity) {
      setVisiblity(true);
    } else if (window.scrollY < 400 && visiblity) {
      setVisiblity(false);
    }
  };

  //Перевірка розміщення скрола

  const scrollToTop = () => {
    let i = window.scrollY;
    const time = i / 80;
    setInterval(() => {
      if (i > -100) {
        window.scroll(0, i);
        i -= time;
      }
    }, 1);
  };

  //Функція скрола до 0 за одинаковий відрізок часу для любого значення

  return (
    <Button
      id="ScrollTopBtn"
      className={visiblity ? "visible" : "hiden"}
      onClick={() => {
        scrollToTop();
      }}
    >
      <ArrowUpwardIcon />
    </Button>
  );
};
export default ScrollTopBtn;
