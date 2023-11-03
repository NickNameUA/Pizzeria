import React from "react";

import "../../Styles/Main/MenuPreview.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  img: any;
  link: string;
}

const PreviewBtn = (props: Props) => {
  return (
    <div>
      <Button>
        <Link to={`/menu${props.link}`}>
          <img src={props.img} alt={props.name} />
        </Link>
      </Button>
      <p>{props.name}</p>
    </div>
  );
};
export default PreviewBtn;
