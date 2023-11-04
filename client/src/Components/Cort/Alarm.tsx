import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import "../../Styles/Cort/Alarm.css";

interface Props {
  isValid: Function;
  address: string;
  house: string;
  phoneNumb: string;
  payMeth: string;
  cost: number;
}

const Alarm = (props: Props) => {
  const [open, setOpen] = useState(false);

  //Створюємо стейт для перевірки чи потрібно відкрити повідомлення

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Функції для роботи з відном повідомлення
  return (
    <>
      <Button
        id="buyBtn"
        onClick={() => {
          if (props.isValid()) {
            handleClickOpen();
          }
        }}
      >
        Замовити
      </Button>
      <Dialog open={open} onClose={handleClose} id="message">
        <DialogTitle id="title">
          <p>Ваше замовленя прийняте на опрацювання </p>
        </DialogTitle>
        <div id="text">
          <DialogContent>
            <DialogContentText>
              <>
                <p>
                  Ваше замовлення на опрацюванні, за декілька хвилин вам
                  зателефонує наш оператор
                </p>
                <p>Hа номер: {props.phoneNumb}</p>
                <p>
                  Адреса: {props.address} {props.house}
                </p>
                <p>Спосіб оплати: {props.payMeth}</p>
                <p>Сумма замовлення: {props.cost}$</p>
              </>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Окей</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default Alarm;
