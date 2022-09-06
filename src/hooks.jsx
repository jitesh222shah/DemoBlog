import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Hooks = () => {
  const [postValue, setPostValue] = useState([]);
  const [commentValue, setCommentValue] = useState();
  const [currentData, setCurrentData] = useState([])

  console.log(currentData);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${postValue}`)
      .then((response) => response.json())
      .then((json) => setCurrentData(json));
  }, [postValue]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5em" }}
    >
      {/* 
      <span>{currentValue}</span>
      <button onClick={() => setCurrentValue(currentValue + 1)}>+</button> */}
      {/* <button onClick={() => setCurrentValue("post")}>Post</button>
      <button onClick={() => setCurrentValue("comment")}>comment</button> */}
      <button onClick={() => setPostValue("posts")}>Fetch postData</button>
      {currentData?.map((each,index)=>(
            <h6>{each?.id}</h6>
      ))}
    </div>
  );
};

export default Hooks;
