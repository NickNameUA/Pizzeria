import React from "react";

import { MenuItem, Select } from "@mui/material";

interface Props {
  state: string;
  setState: any;
}

const SelectComp = (props: Props) => {
  return (
    <Select
      id="select"
      value={props.state || "Готівкою"}
      onChange={(e: any) => {
        props.setState(e.target.value);
      }}
    >
      <MenuItem value={"Готівкою"}>Готівкою</MenuItem>
      <MenuItem value={"Карткою"}>Карткою</MenuItem>
      <MenuItem value={"Криптовалютою"}>Криптовалютою</MenuItem>
    </Select>
  );
};

export default SelectComp;
