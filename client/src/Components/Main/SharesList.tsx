import React from "react";
import "../../Styles/Main/SharesList.css";
import Share from "./Share";
import Photos from "../photos";

const SharesList = () => {
  return (
    <div id="sharesList">
      <p id="title">Акції</p>
      <Share
        title="Пепероні+"
        img={Photos.peperoni}
        text="Якщо у вашому замовленні більше 2 великих піц, та однією з ниї є пепероні, то ми покладемо у неї на 10% більше начинки"
      />
      <Share
        title="Туса-Джуса+"
        img={Photos.mysteryPizzas}
        text="Ви не можете вирішити які піци замовити? Тоді виберіть їх кількість, а ми покладемо вам випадкові піци з нашого меню, та докладемо 1 в подарунок"
      />
    </div>
  );
};
export default SharesList;
