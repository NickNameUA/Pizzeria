import React, { useEffect, useState } from "react";

import "../..//Styles/Cort/cortItemsList.css";
import CortItem from "./CortItem";
import EmptyCort from "./EmptyCort";

const CortItemsList = () => {
  const [list, setList] = useState<string[]>([]);
  const [load, setLoad] = useState(false);

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

  return (
    <div id="cortItemsList">
      {localStorage.length != 0 ? (
        list.map((e: any) => {
          return <CortItem name={e} key={e} />;
        })
      ) : (
        <EmptyCort />
      )}
    </div>
  );
};
export default CortItemsList;
