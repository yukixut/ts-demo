import echarts, { EChartOption } from "echarts";
import React, { useEffect } from "react";

// enum Enum {
//   test,
//   demo,
//   lucky,
// }

function Test() {
  useEffect(() => {
    renderDemo();
    renderRadar();
  }, []);

  const renderDemo = () => {
    const target_dom = document.getElementById("main") as HTMLDivElement;
    var myChart = echarts.init(target_dom, "dark");
    const option: EChartOption = {
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on("click", function (params: any) {
      console.log(params, "params");
    });
  };

  const renderRadar = () => {
    const target_dom = document.getElementById("radar") as HTMLDivElement;
    var myChart = echarts.init(target_dom);

    const option: EChartOption = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "销售（sales）", max: 6500 },
          { name: "管理（Administration）", max: 16000 },
          { name: "信息技术（Information Techology）", max: 30000 },
          { name: "客服（Customer Support）", max: 38000 },
          { name: "研发（Development）", max: 52000 },
          { name: "市场（Marketing）", max: 25000 },
        ],
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"],
          },
        },
      },
      series: [
        {
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: "预算分配（Allocated Budget）",
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: "实际开销（Actual Spending）",
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on("click", function (params: any) {
      console.log(params, "params");
    });
  };

  return (
    <>
      <div id={"main"} style={{ width: "600px", height: "400px" }}>
        12345
      </div>
      <div id={"radar"} style={{ width: "600px", height: "400px" }}></div>
      <div
        draggable
        style={{ width: 200, height: 200, border: "1px solid red" }}
      ></div>
      <div
        onDrop={() => {
          alert("11");
        }}
        style={{
          width: 200,
          height: 200,
          border: "1px solid red",
          float: "right",
        }}
      ></div>
    </>
  );
}

export default Test;
