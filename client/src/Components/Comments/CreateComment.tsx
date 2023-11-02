import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SendIcon from "@mui/icons-material/Send";

import "../../Styles/Comments/CreateComment.css";

const CreateComment = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [text, setText] = useState("");
  const [starCount, setStarCount] = useState(0);
  const [starErr, setStarErr] = useState("");
  const [selected, setSelected] = useState(0);
  const [onHover, setOnHover] = useState(false);

  //Створюємо стейти

  const validate = () => {
    if (selected == 0) {
      setStarErr("Oберіть оцінку");
    }
    if (name == "") {
      setNameErr("Введіть ім'я");
    }
    if (name != "" && name.length >= 3 && selected != 0) {
      return true;
    }
  };

  useEffect(() => {
    selected != 0 && setStarErr("");
  }, [selected]);

  //Валідація інпутів

  const submit = async () => {
    if (validate()) {
      await axios
        .post(
          "https://inst-test-9c942bc3025d.herokuapp.com/api/post/create/comment",
          {
            name: name,
            text: text,
            starCount: selected,
          }
        )
        .catch((err) => console.log(err));
      setName("");
      setText("");
      setSelected(0);
      window.location.reload();
    }
  };

  //Відправка данних з коментарію на сервер

  setTimeout(() => {
    const handleStarHover = (starNumber: number) => {
      return () => {
        setStarCount(starNumber);
        setOnHover(true);
      };
    };

    const handleStarMouseOut = (starNumber: number) => {
      return () => {
        if (selected !== starNumber) {
          setStarCount(0);
        }
        setOnHover(false);
      };
    };

    const addStarEventListeners = (starNumber: number) => {
      const star = document.getElementById(`star${starNumber}`) as any;

      star.addEventListener("mouseover", handleStarHover(starNumber));
      star.addEventListener("mouseout", handleStarMouseOut(starNumber));
    };

    for (let i = 1; i <= 5; i++) {
      addStarEventListeners(i);
    }
  }, 1);

  //Додаємо прослуховувачів подій для всіх зірок

  const getStar = (count: number) => {
    if (
      (selected == 0 && starCount > count - 1) ||
      (selected > 0 && selected > count - 1 && onHover == false) ||
      (selected > 0 && starCount > count - 1 && onHover == true)
    ) {
      return (
        <StarIcon
          onClick={() => {
            setStarCount(count);
            setSelected(count);
          }}
          id={"star" + count}
          className="star"
        />
      );
    } else {
      return (
        <StarOutlineIcon
          id={"star" + count}
          className="star"
          onClick={() => {
            setStarCount(count);
            setSelected(count);
          }}
        />
      );
    }
  };

  //Функція для перевірки чи повинна бути зірка активною
  return (
    <div>
      <div id="createComment">
        <h1>Створити коментар</h1>
        {nameErr != "" && <label>{nameErr}</label>}
        <div>
          <p>Ім'я:</p>
          <input
            value={name}
            type="text"
            onChange={(e) => {
              e.target.value.length < 3
                ? setNameErr("Надто коротке ім'я")
                : setNameErr("");
              setName(e.target.value);
            }}
          />
        </div>
        <div id="txtCont">
          <p>Текст коментару:</p>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        {starErr != "" && <label>{starErr}</label>}
        <div className="starCon">
          {getStar(1)}
          {getStar(2)}
          {getStar(3)}
          {getStar(4)}
          {getStar(5)}
        </div>
        <Button onClick={submit}>
          <p>
            Надіслати
            <SendIcon />
          </p>
        </Button>
      </div>
    </div>
  );
};

export default CreateComment;
