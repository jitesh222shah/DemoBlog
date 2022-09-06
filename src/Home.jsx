import { useState } from "react";
import  {UserContext}  from "./App";
const Home = () => {
  const data = [
    {
      name: "jackson",
    },
    {
      name: "asmita",
    },
    {
      name: "sanjog",
    },
    {
      name: "jitesh",
    },
  ];
  const resut = { name: "name", place: "dhankuta" };

  return (
    <>
      <div>
        {
          <UserContext.Consumer>
            {
              user=>{
                return <h2>i am {user}</h2>
              }
            }

          </UserContext.Consumer>
        }
      </div>
    </>
  );
};
export default Home;
