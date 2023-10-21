import React, { useEffect, useState } from "react";

import "../..//Styles/Cort/cortItemsList.css";
import CortItem from "./CortItem";
import EmptyCort from "./EmptyCort";

const CortItemsList = () => {
  const [list, setList] = useState<string[]>([]);
  const [load, setLoad] = useState(false);
  const [len, setLen] = useState(document.querySelectorAll(".cortItem").length);

  const arr = [] as any;

  if (!load) {
    for (let key in localStorage) {
      if (localStorage[key] == "true") {
        if (!arr.includes(key)) {
          arr.push(key);
          setList(arr);
        }
      }
    }
    setLoad(true);
  }

  setInterval(() => {
    if (len != document.querySelectorAll(".cortItem").length) {
      setLen(document.querySelectorAll(".cortItem").length);
    }
  });

  return (
    <div id="cortItemsList">
      {list.map((e: any) => {
        return <CortItem name={e} key={e} />;
      })}
      {len == 0 && <EmptyCort />}
    </div>
  );
};
export default CortItemsList;
