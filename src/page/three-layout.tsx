import React, { RefObject } from "react";
export default function ThreeLayout() {
  const divRef: RefObject<HTMLDivElement> = React.createRef();

  const click = () => {
    console.log(ref.current);
  };

  const ref = React.createRef();

  return (
    <div>
      <div ref={divRef}>这是三栏布局</div>
      <button onClick={click}>测试一下ref功能</button>
      <div>
        {/* <TwoLayout ref={ref}></TwoLayout> */}
        {/* <div className={"left"}></div>
        <div className={"right"}></div>
        <div className={"center"}></div> */}
      </div>
    </div>
  );
}
