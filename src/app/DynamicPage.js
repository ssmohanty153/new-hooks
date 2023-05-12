"use client";
import "./styles.css";
import React, { useState } from "react";
const addDetails = { inputValue: "", index: "" };
export default function DynamicPage() {
  const [addInputArray, setAddInputArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addInputValue = (e, index) => {
    let inputinfo = addInputArray;
    if (e.target.value) {
      inputinfo[index].inputValue = e.target.value;
      setAddInputArray([...inputinfo]);
    }
  };

  const addValue = () => {
    setAddInputArray((prevState) => [
      ...prevState,
      { inputValue: "", index: "" },
    ]);
  };

  const addSubmitvalue = () => {
    let str = "";
    console.log(addInputArray);
    addInputArray.map((data) => {
      console.log(data);
      str += data.inputValue;
    });
    setInputValue(str);

    console.log(str);
  };
  return (
    <>
      {addInputArray.map((data, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={data.inputValue}
              onChange={(e) => {
                addInputValue(e, index);
              }}
            ></input>
          </div>
        );
      })}

      <div>
        <button onClick={addValue}>Add inputBox</button>
      </div>
      {addInputArray?.length > 0 ? (
        <div>
          <button onClick={addSubmitvalue}>Add submit</button>
        </div>
      ) : null}
    </>
  );
}
