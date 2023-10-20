import React, { useEffect, useState } from "react";

import "../..//Styles/Cort/cortItemsList.css";
import CortItem from "./CortItem";
import EmptyCort from "./EmptyCort";

const CortItemsList = () => {
  const [list, setList] = useState<string[]>([]);
  const [storage, setStorage] = useState(localStorage);

  const arr = [] as any;

  useEffect(() => {
    for (let key in storage) {
      if (storage[key] == "true") {
        if (!arr.includes(key)) {
          arr.push(key);
          setList(arr);
        }
      }
    }
  }, [list]);

  setInterval(() => {
    if (setStorage.length != storage.length) {
      setStorage(localStorage);
    }
  }, 1000);
  return (
    <div id="cortItemsList">
      {storage.length != 0 ? (
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
