import React from "react";

import { MenuItem, Select } from "@mui/material";

interface Props {
  state: string;
  setState: any;
}

const SelectComp = (props: Props) => {
  return (
    <div id="select">
      <Select
        value={props.state || "Готівкою"}
        onChange={(e: any) => {
          props.setState(e.target.value);
        }}
      >
        <MenuItem value={"Готівкою"}>Готівкою</MenuItem>
        <MenuItem value={"Карткою"}>Карткою</MenuItem>
        <MenuItem value={"Криптовалютою"}>Криптовалютою</MenuItem>
      </Select>
    </div>
  );
};

export default SelectComp;
