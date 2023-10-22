import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Styles/Comments/CommentList.css";

import CommentItem from "./CommentItem";

const CommentList = () => {
  const [comments, setComments] = useState("") as any;
  //Створюємо стейт для меню

  const getComment = async () => {
    await axios
      .get("http://localhost:8080/api/get/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  if (comments == "") {
    getComment();
  }
  //Отримуємо коментарі з сервера

  return (
    <div id="commentList">
      {comments != "" &&
        comments.map((e: any) => <CommentItem key={e.id} data={e} />)}
    </div>
  );
};

export default CommentList;
