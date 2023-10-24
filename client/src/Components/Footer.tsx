import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="category">Працюємо</p>
        <p className="text">З 8 по 23 годину</p>
      </div>
      <div>
        <p className="category">Адреса</p>
        <p className="text">м.Чернівці вул.Головна 33а</p>
        <p className="text">м.Чернівці вул.Інтузіастів 71в</p>
        <p className="text">м.Чернівці вул.Заводська 13г</p>
      </div>
      <div>
        <p className="category">Контакти</p>
        <p className="text">+38 (066) 631 85 02</p>
        <p className="text">+38 (066) 311 64 18</p>
      </div>
      <div>
        <p className="category">Гаряча лінія</p>
        <p className="text">+38 (066) 738 65 71</p>
      </div>
      <div>
        <p className="category">Пошта</p>
        <a href="mailto:fauget.pizzeria@gmail.com" className="text">
          fauget.pizzeria@gmail.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
