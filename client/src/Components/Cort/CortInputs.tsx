import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import Select from "./SelectComp";
import Alarm from "./Alarm";

import "../../Styles/Cort/PaymentForm.css";

const CardInputs = () => {
  const [address, setAddress] = useState("") as any;
  const [addressErr, setAddressErr] = useState(false);
  const [house, setHouse] = useState("") as any;
  const [houseErr, setHouseErr] = useState(false);
  const [phoneNumb, setPhoneNumb] = useState("") as any;
  const [numberErr, setNumberErr] = useState(false);
  const [payMeth, setPayMeth] = useState("Готівкою") as any;
  const [cost, setCost] = useState(0);
  const [hide, setHide] = useState(false);
  const [collection, setCollection] = useState("") as any;

  //Створюємо необхідні стейти

  useEffect(() => {
    if (phoneNumb.length > 3 && phoneNumb.slice(3, 4) != "0") {
      setPhoneNumb(phoneNumb.slice(0, 3) + "0" + phoneNumb.slice(4, -1));
    }
  }, [phoneNumb]);

  const valid = () => {
    if (phoneNumb != "") {
      if (address != "") {
        if (house != "") {
          return true;
        } else {
          setHouseErr(true);
        }
      } else {
        setAddressErr(true);
      }
    } else {
      setNumberErr(true);
    }
  };

  //Валідація інпутів

  window.onscroll = () => {
    const navBar = document.querySelector("#NavBar") as any;
    const height = getComputedStyle(navBar, null).height.replace(
      "px",
      ""
    ) as any as number;
    document.documentElement.style.setProperty(
      "--form-height",
      `calc(100% - ${window.scrollY <= height ? height - window.scrollY : 0}px)`
    );
  };

  //Моніторинг висоти навбара та зміна висоти блока інпутів

  setInterval(() => {
    const coll = document.getElementsByClassName("cortItem");
    if (coll != collection) {
      let cos = 0;
      for (let i = 0; i < coll.length; i++) {
        const val = coll[i].querySelector(".cost")?.innerHTML as any;
        cos += +val;
      }
      setCollection(coll);
      setCost(cos);
    }
  }, 1);

  //Моніторинг та підрахування ціни заказу
  return (
    <form id="paymentForm" className={hide ? "hide" : "visible"}>
      <div
        className={hide ? "hide" : "visible"}
        id="arrow"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <KeyboardDoubleArrowDownIcon />
      </div>
      <div>
        Адресa:
        <div>
          <IMaskInput
            className={addressErr ? "error" : ""}
            autoComplete="off"
            id="street"
            mask="Вул.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            placeholder="Bулиця"
            onInput={(e: any) => {
              e.target.value.length <= 8
                ? setAddressErr(true)
                : setAddressErr(false);
              setAddress(e.target.value);
            }}
          />
          <IMaskInput
            className={houseErr ? "error" : ""}
            autoComplete="off"
            id="house"
            mask="Буд.0***"
            placeholder="Будинок"
            onInput={(e: any) => {
              e.target.value.length <= 4
                ? setHouseErr(true)
                : setHouseErr(false);
              setHouse(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        Номер телефону:
        <IMaskInput
          className={numberErr ? "error" : ""}
          id="numb"
          value={phoneNumb}
          autoComplete="off"
          mask={"+380 (00) 000-00-00"}
          placeholder="+38"
          onInput={(e: any) => {
            e.target.value.length != 19
              ? setNumberErr(true)
              : setNumberErr(false);
            setPhoneNumb(e.target.value);
          }}
        />
      </div>
      <div>
        Сопсіб оплати:
        <Select state={payMeth} setState={setPayMeth} />
      </div>
      <p>Сумма замовлення: {cost.toFixed(1)}$</p>
      <Alarm
        isValid={valid}
        address={address}
        house={house}
        phoneNumb={phoneNumb}
        payMeth={payMeth}
        cost={cost}
      />
    </form>
  );
};

export default CardInputs;
