import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

interface Props {
  key: any;
  data: any;
}

const CommentItem = (props: Props) => {
  const getStars = () => {
    switch (props.data.StarCount) {
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
    }

    //Отримуємо елемент із зірками
  };
  return (
    <div className="commentItem">
      <p className="name">{props.data.Name}</p>
      <p>{props.data.Text}</p>
      <div className="starCon">{getStars()}</div>
    </div>
  );
};

export default CommentItem;
