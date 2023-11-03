import React, { useEffect, useState } from "react";

import "../../Styles/Pizzerias/Map.css";
import { Button } from "@mui/material";

const Map = () => {
  const [map, setMap] = useState("Заводська 13г");
  const [mapSrc, setMapSrc] = useState("");

  //Створення необхідних стейтів

  useEffect(() => {
    switch (map) {
      case "Заводська 13г":
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.335677468955!2d25.91715737594773!3d48.315626871263625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473407cc697ce3b1%3A0xfa45da27ae79b886!2z0JfQsNCy0L7QtNGB0LrQsNGPINGD0LsuLCAxMywg0KfQtdGA0L3QvtCy0YbRiywg0KfQtdGA0L3QvtCy0LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTgwMDA!5e0!3m2!1sru!2sua!4v1698003381092!5m2!1sru!2sua"
        );
        break;
      case "Інтузіастів 71в":
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.3254723531863!2d25.944305175943946!3d48.25811077125708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340f2c05d20423%3A0xf8490d5aad755aec!2z0LLRg9C70LjRhtGPINCV0L3RgtGD0LfRltCw0YHRgtGW0LIsIDcxLCDQp9C10YDQvdGW0LLRhtGWLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1ODAwMA!5e0!3m2!1sru!2sua!4v1698004246692!5m2!1sru!2sua"
        );
        break;
      case "Головна 33а":
        setMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.4883129775435!2d25.93399197594624!3d48.29345917126107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734089a41ce159f%3A0x2204c63ca815ec36!2z0JPQu9Cw0LLQvdCw0Y8g0YPQuy4sIDMzLCDQp9C10YDQvdC-0LLRhtGLLCDQp9C10YDQvdC-0LLQuNGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1ODAwMA!5e0!3m2!1sru!2sua!4v1698004303843!5m2!1sru!2sua"
        );
        break;
    }
  }, [map]);

  //Зміна посилання на карту
  return (
    <main id="map">
      <h1>Вул.{map}</h1>
      <iframe src={mapSrc} loading="lazy"></iframe>
      <div id="mapBtns">
        <Button
          onClick={() => {
            setMap("Заводська 13г");
          }}
        >
          Заводська
        </Button>
        <Button
          onClick={() => {
            setMap("Інтузіастів 71в");
          }}
        >
          Інтузіастів
        </Button>
        <Button
          onClick={() => {
            setMap("Головна 33а");
          }}
        >
          Головна
        </Button>
      </div>
    </main>
  );
};
export default Map;
