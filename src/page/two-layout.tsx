import React from "react";

const TwoLayout = React.forwardRef((props: any, ref: any) => {
  React.useImperativeHandle(ref, () => {
    return {
      formatTreeNode: (type?: string, parent_type?: string) => {
        return 111;
      },
    };
  });

  return (
    <div>
      <div>这是两列自适应布局</div>
      {/* float +overflow：hidden 实现， 主要是通过overflow触发bfc 而 bfc不会重叠浮动元素*/}
      <div>
        <div
          className={"parent"}
          style={{
            border: "1px solid red",
            height: 200,
            margin: "0 auto",
            width: "80%",
          }}
        >
          <div
            className={"left"}
            style={{
              float: "left",
              marginRight: 20,
              height: "100%",
              width: 200,
              backgroundColor: "pink",
            }}
          ></div>
          <div
            className={"right"}
            style={{
              overflow: "hidden",
              height: "100%",
              backgroundColor: "yellow",
            }}
          ></div>
        </div>
      </div>

      {/* flex 布局*/}
      <div>
        <div
          style={{
            border: "1px solid red",
            height: 200,
            margin: "0 auto",
            width: "80%",
            display: "flex",
          }}
        >
          <div
            className={"left"}
            style={{
              marginRight: 20,
              height: "100%",
              width: 200,
              backgroundColor: "pink",
            }}
          ></div>
          <div
            className={"right"}
            style={{
              height: "100%",
              backgroundColor: "yellow",
              flex: 1,
            }}
          ></div>
        </div>
      </div>

      {/* grid 布局 : 设置display grid 以及 gridTemplateColumns*/}
      <div>
        <div
          style={{
            border: "1px solid red",
            height: 200,
            margin: "0 auto",
            width: "80%",
            display: "grid",
            gridTemplateColumns: "200px auto",
            gridGap: 20,
          }}
        >
          <div
            className={"left"}
            style={{
              height: "100%",
              backgroundColor: "pink",
            }}
          ></div>
          <div
            className={"right"}
            style={{
              height: "100%",
              backgroundColor: "yellow",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
});
export default TwoLayout;
