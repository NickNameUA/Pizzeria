import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

interface Props {
  key: any;
  data: any;
}

const CommentItem = (props: Props) => {
  const getStars = () => {
    switch (props.data.starCount) {
      case 1:
        return (
          <>
            <StarIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </>
        );
        break;
      case 2:
        return (
          <>
            <StarIcon />
            <StarIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </>
        );
        break;
      case 3:
        return (
          <>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </>
        );
        break;
      case 4:
        return (
          <>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarOutlineIcon />
          </>
        );
        break;
      case 5:
        return (
          <>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </>
        );
        break;
    }
  };
  return (
    <div className="commentItem">
      <p className="name">{props.data.name}</p>
      <p>{props.data.text}</p>
      <div className="starCon">{getStars()}</div>
    </div>
  );
};

export default CommentItem;
