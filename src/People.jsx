import React from "react";
import CustomButton from "./component/CustomButton";
const People = ({ peopleData, result }) => {
  // console.log(peopleData)
  // console.log(result)
  return (
    <>
        <div className="detailsContainer">
          <input placeholder="email address" type={"email"}/>
          <input placeholder="passoword" type={"email"}/>

        </div>
      <div style={{ padding: "1em" }}>
        <CustomButton lable="login"/>
      </div>
    </>
  );
};

export default People;
