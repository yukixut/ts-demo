import { AppContext } from "@/App";
import React, { useContext } from "react";
import Test3 from "./test3";

function Test2() {
  const { username } = useContext(AppContext);
  return (
    <>
      <div>我是test2</div>
      <Test3></Test3>
      <span>username</span>
    </>
  );
}

export default Test2;
