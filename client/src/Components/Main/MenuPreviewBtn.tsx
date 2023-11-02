import React from "react";

import "../../Styles/Main/MenuPreview.css";
import { Button } from "@mui/material";

interface Props {
  name: string;
  img: any;
}

const PreviewBtn = (props: Props) => {
  return (
    <div>
      <Button>
        <img src={props.img} alt="Dessert" />
      </Button>
      <p>{props.name}</p>
    </div>
  );
};
export default PreviewBtn;
