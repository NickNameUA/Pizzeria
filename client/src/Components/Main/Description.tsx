import React from "react";
import Photo from "../../img/DescPhoto.jpg";
import Logo from "../../img/Logo.png";

import "../../Styles/Main/Desc.css";
import { Button } from "@mui/material";

const Description = () => {
  return (
    <div id="desc">
      <div id="descPhoto">
        <img src={Photo} id="photo" />
      </div>
      <div id="descText">
        <div>
          <img src={Logo} id="logo" />
          <p id="logoText">Fauget Pizzeria - Справжня піцца</p>
        </div>
        <p>
          Fauget Pizzeria - це справжня легенда серед піцерій, і ми служимо
          нашим клієнтам вже з 1984 року. За ці роки ми вдосконалили рецепти і
          створили унікальний смак, який важко забути. Наша піцца - це справжнє
          мистецтво, де найкращі інгредієнти об'єднуються з любов'ю та турботою.
          Ми пропонуємо широкий вибір смачних піц, щоб задовольнити смаки навіть
          найвибагливіших гурманів, і завжди робимо все можливе, щоб забезпечити
          наших клієнтів найвищою якістю обслуговування.
          <br />
          <br />У нашій піцерії Fauget Pizzeria ви можете відчути атмосферу
          тепла та комфорту, яка робить кожен візит незабутнім. Ми пишаємося
          нашими коріннями та традиціями, і завжди раді поділитися цією смачною
          спадщиною з вами. Завітайте до Fauget Pizzeria, щоб відчути дух
          справжньої італійської кухні, яка доводить, що смачна піцца - це
          завжди актуально і завжди у тренді.
        </p>
        <Button variant="outlined" id="menuBtn">
          Меню
        </Button>
      </div>
    </div>
  );
};
export default Description;