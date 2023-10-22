import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SendIcon from "@mui/icons-material/Send";

import "../../Styles/Comments/CreateComment.css";
import axios from "axios";

const CreateComment = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [starCount, setStarCount] = useState(0);
  const [selected, setSelected] = useState(0);
  const [onHover, setOnHover] = useState(false);

  const validate = () => {
    if (name != "" && name.length > 3) {
      return true;
    }
  };

  const submit = async () => {
    if (validate()) {
      await axios
        .post("http://localhost:8080/api/post/menu/item", {
          name: name,
          text: text,
          starCount: starCount,
        })
        .catch((err) => console.log(err));
    }
  };

  setTimeout(() => {
    const star1 = document.getElementById("star1") as Element;

    star1.addEventListener("mouseover", () => {
      setStarCount(1);
      setOnHover(true);
    });

    star1.addEventListener("mouseout", () => {
      if (selected != 1) {
        setStarCount(0);
      }
      setOnHover(false);
    });

    const star2 = document.getElementById("star2") as Element;

    star2.addEventListener("mouseover", () => {
      setStarCount(2);
      setOnHover(true);
    });

    star2.addEventListener("mouseout", () => {
      if (selected != 2) {
        setStarCount(0);
      }
      setOnHover(false);
    });

    const star3 = document.getElementById("star3") as Element;

    star3.addEventListener("mouseover", () => {
      setStarCount(3);
      setOnHover(true);
    });

    star3.addEventListener("mouseout", () => {
      if (selected != 3) {
        setStarCount(0);
      }
      setOnHover(false);
    });

    const star4 = document.getElementById("star4") as Element;

    star4.addEventListener("mouseover", () => {
      setStarCount(4);
      setOnHover(true);
    });

    star4.addEventListener("mouseout", () => {
      if (selected != 4) {
        setStarCount(0);
      }
      setOnHover(false);
    });

    const star5 = document.getElementById("star5") as Element;

    star5.addEventListener("mouseover", () => {
      setStarCount(5);
      setOnHover(true);
    });

    star5.addEventListener("mouseout", () => {
      if (selected != 5) {
        setStarCount(0);
      }
      setOnHover(false);
    });
  }, 1);

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

  return (
    <div>
      <div id="createComment">
        <h1>Створити коментар</h1>
        <div>
          <p>Ім'я:</p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Текст коментару:</p>
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
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
