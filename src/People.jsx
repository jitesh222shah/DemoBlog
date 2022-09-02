import React, { useState } from "react";
const People = ({ peopleData, result }) => {
  // console.log(peopleData)
  // console.log(result)
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    username: "",
    symbol: "",
    roll_num: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setEmail("");
    setPassowrd("");
    setLoginValue({
      email: email,
      password: password,
    });
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassowrd(e.target.value)}
          type={"password"}
        />
        <button type="submit">Login</button>
      </form>

      <div className="details">
        <h1>Email:{loginValue?.email}</h1>
        <h2>Password:{loginValue?.password}</h2>
      </div>
    </>
  );
};

export default People;
