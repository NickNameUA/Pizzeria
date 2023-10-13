import React from "react";

interface Props {
  img: any;
  title: string;
  text: string;
}

const Share = (props: Props) => {
  return (
    <div className="share">
      <p className="title">{props.title}</p>
      <div>
        <img src={props.img} />
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};
export default Share;
