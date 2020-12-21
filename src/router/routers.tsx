import DraggableDemo from "@/page/draggable-demo";
import Test from "@/page/echart-demo-1";
import SingleLayout from "@/page/single-layout";
import Test2 from "@/page/test2";
import Test3 from "@/page/test3";
import ThreeLayout from "@/page/three-layout";
import TwoLayout from "@/page/two-layout";

export const routes = {
  test: {
    path: "/test",
    component: Test,
    name: "test",
    exact: true,
  },
  test2: {
    path: "/test2",
    component: Test2,
    name: "test2",
    exact: true,
  },
  test3: {
    path: "/test2/test3",
    component: Test3,
    name: "test3",
    exact: true,
  },
  DraggableDemo: {
    path: "/draggable",
    component: DraggableDemo,
    name: "DraggableDemo",
    exact: true,
  },
  singleLayout: {
    path: "/single-layout",
    component: SingleLayout,
    name: "SingleLayout",
    exact: true,
  },
  TwoLayout: {
    path: "/two-layout",
    component: TwoLayout,
    name: "TwoLayout",
    exact: true,
  },
  ThreeLayout: {
    path: "/three-layout",
    component: ThreeLayout,
    name: "ThreeLayout",
    exact: true,
  },
};

export const main = Object.values(routes);
