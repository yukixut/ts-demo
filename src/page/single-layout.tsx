import React from "react";
export default function SingleLayout() {
  return (
    <div>
      <div>这是单列布局</div>
      <div
        className={"header"}
        style={{
          border: "1px solid red",
          height: 100,
          width: "60%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* 这个是水平垂直居中的方法 position absolute, top,right,bottom,left: 0 , margin: auto*/}
        <div
          style={{
            backgroundColor: "red",
            width: 50,
            height: 50,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        ></div>
      </div>
      <div
        className={"content"}
        style={{
          border: "1px solid red",
          height: 500,
          width: "60%",
          margin: "0 auto",
          marginTop: 20,
        }}
      ></div>
      <div
        className={"footer"}
        style={{
          border: "1px solid red",
          height: 100,
          width: "60%",
          margin: "0 auto",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
}
