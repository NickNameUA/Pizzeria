import React, { useEffect, useState } from "react";
import "../../Styles/Cort/PaymentForm.css";
import { IMaskInput } from "react-imask";
import {
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const CardInputs = () => {
  const [address, setAddress] = useState("") as any;
  const [house, setHouse] = useState("") as any;
  const [phoneNumb, setPhoneNumb] = useState("") as any;
  const [payMeth, setPayMeth] = useState("Готівкою") as any;
  const [cost, setCost] = useState(0);
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [hide, setHide] = useState(false);
  const [collection, setCollection] = useState("") as any;
  //Створюємо необхідні стейти

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Функції для роботи з алертом

  const valid = () => {
    if (address != "" && house != "" && phoneNumb != "" && cost != 0) {
      if (
        address.length > 8 &&
        house.length > 0 &&
        phoneNumb.replace(/[^\d]/g, "").length == 12
      ) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };
  //Валідація інпутів

  let cos = 0;
  setInterval(() => {
    setCost(0);
    let collection = document.getElementsByClassName("cortItem");
    cos = 0;
    for (let i = 0; i < collection.length; i++) {
      const val = collection[i].querySelector(".cost")?.innerHTML as any;
      cos += +val;
    }
    setCost(cos);
    //Моніторинг та підрахування ціни заказу

    const navBar = document.querySelector("#NavBar") as any;
    const height = getComputedStyle(navBar, null).height.replace(
      "px",
      ""
    ) as any as number;
    document.documentElement.style.setProperty(
      "--form-height",
      `calc(100% - ${window.scrollY <= height ? height - window.scrollY : 0}px)`
    );
    //Моніторинг висоти навбара та зміна висоти блока інпутів
  }, 1);
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
            autoComplete="off"
            id="street"
            mask="Вул.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            placeholder="Bулиця"
            onChange={(e: any) => {
              valid();
              setAddress(e.target.value);
            }}
          />
          <IMaskInput
            autoComplete="off"
            id="house"
            mask="Буд.0***"
            placeholder="Будинок"
            onChange={(e: any) => {
              valid();
              setHouse(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        Номер телефону:
        <IMaskInput
          autoComplete="off"
          mask="+{380} (00) 000-00-00"
          placeholder="+38"
          onChange={(e: any) => {
            valid();
            setPhoneNumb(e.target.value);
          }}
        />
      </div>
      <div>
        Сопсіб оплати:
        <Select
          id="select"
          value={payMeth || "Готівкою"}
          onChange={(e: any) => {
            valid();
            setPayMeth(e.target.value);
          }}
        >
          <MenuItem value={"Готівкою"}>Готівкою</MenuItem>
          <MenuItem value={"Карткою"}>Карткою</MenuItem>
          <MenuItem value={"Криптовалютою"}>Криптовалютою</MenuItem>
        </Select>
      </div>
      <p>Сумма замовлення: {cost.toFixed(1)}$</p>
      <Button
        id="buyBtn"
        onClick={() => {
          if (isValid) {
            handleClickOpen();
          }
        }}
      >
        Замовити
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Ваше замовленя прийняте на опрацювання"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
              Ваше замовлення на опрацюванні, за декілька хвилин вам зателефонує
              наш оператор на номер: {phoneNumb}
              <br />
              Адреса: {address} {house}
              <br />
              Спосіб оплати замовлення: {payMeth}
              <br />
              Ціна: {cost}$
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Окей</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default CardInputs;
