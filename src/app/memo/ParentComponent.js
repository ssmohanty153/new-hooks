"use client";
import { useMemo, useState } from "react";

export default function ParentComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  useState;

  const theamStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNum = useMemo(() => showFunction(number), [number]);

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change Theam
      </button>
      <div style={theamStyle}>{doubleNum} </div>
    </>
  );
}

function showFunction(num) {
  console.log("Calling show function");
  for (let i = 0; i < 10000000; i++) {
    return num * 2;
  }
}
