import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  isValid: boolean;
  address: string;
  house: string;
  phoneNumb: string;
  payMeth: string;
  cost: number;
}

const Alarm = (props: Props) => {
  const [open, setOpen] = useState(false);
  //Створюємо необхідні стейти

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Функції для роботи з алертом

  return (
    <>
      <Button
        id="buyBtn"
        onClick={() => {
          if (props.isValid) {
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
              наш оператор на номер: {props.phoneNumb}
              <br />
              Адреса: {props.address} {props.house}
              <br />
              Спосіб оплати замовлення: {props.payMeth}
              <br />
              Ціна: {props.cost}$
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Окей</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Alarm;