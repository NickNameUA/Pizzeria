import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Styles/Comments/CommentList.css";

import CommentItem from "./CommentItem";

const CommentList = () => {
  const [comments, setComments] = useState("") as any;
  
  //Створюємо стейт для коментарів

  const getComment = async () => {
    await axios
      .get("https://inst-test-9c942bc3025d.herokuapp.com/api/get/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (comments == "") {
      getComment();
    }
  });

  //Отримуємо коментарі з сервера

  return (
    <div id="commentList">
      {comments != "" &&
        comments.map((e: any) => <CommentItem key={e._id} data={e} />)}
    </div>
  );
};

export default CommentList;
