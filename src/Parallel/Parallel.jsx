import React from "react";
import "./Parallel.css";
import Heading from "../Heading/Heading.jsx";
import * as d3 from "d3";
export default class Parallel extends React.Component {
  state = {
    rects_num: {
      1998: [9, 8, 8, 5],
      1999: [9, 6, 7, 2, 6],
      2000: [8, 4, 6, 5, 7],
      2001: [9, 7, 8, 6],
      2002: [9, 6, 4, 7, 4],
      2003: [7, 8, 10, 5],
      2004: [7, 8, 10, 5],
      2005: [8, 6, 4, 8, 4],
      2006: [8, 6, 4, 8, 4],
      2007: [7, 8, 4, 7, 4],
      2008: [9, 6, 3, 8, 4],
      2009: [7, 7, 10, 6],
      2010: [7, 7, 10, 6],
      2011: [7, 7, 10, 6],
      2012: [9, 6, 3, 8, 4],
      2013: [9, 6, 3, 8, 4],
      2014: [9, 6, 3, 8, 4],
      2015: [9, 6, 3, 8, 4],
      2016: [9, 6, 3, 8, 4],
      2017: [9, 6, 4, 7, 4],
    },
    matrix_3D: [
      [
        [8, 9, 10, 11, 12, 13, 14, 16, 15],
        [18, 20, 17, 19, 21, 23, 24, 22],
        [3, 2, 5, 4, 6, 7, 0, 1],
        [33, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [16, 17, 19, 21, 23, 24],
        [15, 3, 2, 5, 4, 6, 7],
        [0, 1],
        [25, 22, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20],
        [16, 15, 3, 25],
        [17, 19, 21, 23, 24, 22],
        [14, 2, 5, 0, 1],
        [4, 6, 7, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 14, 16, 15],
        [18, 20, 17, 19, 21, 23, 24],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [22, 25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 3, 25],
        [2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 16],
        [18, 20, 17, 19, 21, 23, 24, 22],
        [15, 3, 14, 2, 5, 0, 1, 4, 6, 7],
        [25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 16],
        [18, 20, 17, 19, 21, 23, 24, 22],
        [15, 3, 14, 2, 5, 0, 1, 4, 6, 7],
        [25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25, 3],
        [14, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25, 3],
        [14, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 14],
        [18, 20, 17, 19, 21, 23, 24, 22],
        [16, 15, 25, 3],
        [2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 16],
        [18, 20, 17, 19, 21, 23, 24],
        [14, 15, 3, 2, 5, 0, 1, 4, 6, 7],
        [22, 25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 16],
        [18, 20, 17, 19, 21, 23, 24],
        [14, 15, 3, 2, 5, 0, 1, 4, 6, 7],
        [22, 25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 16],
        [18, 20, 17, 19, 21, 23, 24],
        [14, 15, 3, 2, 5, 0, 1, 4, 6, 7],
        [22, 25, 26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25],
        [3, 2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
      [
        [8, 9, 10, 11, 12, 13, 18, 20, 14],
        [17, 19, 21, 23, 24, 22],
        [16, 15, 25, 3],
        [2, 5, 0, 1, 4, 6, 7],
        [26, 27, 28, 29],
      ],
    ],
    matrix: [
      [
        8, 9, 10, 11, 12, 13, 14, 16, 15, 18, 20, 17, 19, 21, 23, 24, 22, 3, 2,
        5, 4, 6, 7, 0, 1, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 16, 17, 19, 21, 23, 24, 15, 3, 2, 5,
        4, 6, 7, 0, 1, 25, 22, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 16, 15, 3, 25, 17, 19, 21, 23, 24, 22, 14,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 14, 16, 15, 18, 20, 17, 19, 21, 23, 24, 3, 2, 5,
        0, 1, 4, 6, 7, 22, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 3, 25,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 16, 18, 20, 17, 19, 21, 23, 24, 22, 15, 3, 14, 2,
        5, 0, 1, 4, 6, 7, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 16, 18, 20, 17, 19, 21, 23, 24, 22, 15, 3, 14, 2,
        5, 0, 1, 4, 6, 7, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3, 14,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3, 14,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 14, 18, 20, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 16, 18, 20, 17, 19, 21, 23, 24, 14, 15, 3, 2, 5,
        0, 1, 4, 6, 7, 22, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 16, 18, 20, 17, 19, 21, 23, 24, 14, 15, 3, 2, 5,
        0, 1, 4, 6, 7, 22, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 16, 18, 20, 17, 19, 21, 23, 24, 14, 15, 3, 2, 5,
        0, 1, 4, 6, 7, 22, 25, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
      [
        8, 9, 10, 11, 12, 13, 18, 20, 14, 17, 19, 21, 23, 24, 22, 16, 15, 25, 3,
        2, 5, 0, 1, 4, 6, 7, 26, 27, 28, 29,
      ],
    ],
    colors: [
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#8E44AD",
      "#8c564b",
      "#9467bd",
      "#7f7f7f",
      "#bcbd22",
      "#17becf",
    ],
    provinces: [
      "Beijing",
      "Tianjin",
      "Hebei",
      "Shanxi",
      "InnerMongolia",
      "Liaoning",
      "Jilin",
      "Heilongjiang",
      "Shanghai",
      "Jiangsu",
      "Zhejiang",
      "Anhui",
      "Fujian",
      "Jiangxi",
      "Shandong",
      "Henan",
      "Hubei",
      "Hunan",
      "Guangdong",
      "Guangxi",
      "Hainan",
      "Chongqing",
      "Sichuan",
      "Guizhou",
      "Yunnan",
      "Shaanxi",
      "Gansu",
      "Qinghai",
      "Ningxia",
      "Xinjiang",
    ],
    width: 1390,
    height: 380,
    Cluster: [
      0, 1, 2, 3, 0, 1, 2, 4, 3, 0, 4, 1, 2, 3, 0, 1, 2, 3, 0, 1, 4, 2, 3, 0, 1,
      2, 3, 0, 1, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2,
      3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2, 3, 0, 1,
      4, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2, 3, 0, 1, 4, 2, 3,
    ],
    leibies: [
      [2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 4, 2, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0],
      [0, 2, 4, 0, 4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4],
      [0, 1, 4, 0, 4, 0, 0, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [3, 3, 4, 3, 4, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ],
    matrix_2D_t: [
      [8, 9, 10, 11, 12, 13, 14, 16, 15, 18, 20],
      [18, 20, 17, 19, 21, 23, 24, 22, 16],
      [3, 2, 5, 4, 6, 7, 0, 1, 15, 14],
      [25, 26, 27, 28, 29, 22, 4, 6, 7],
      [0, 1, 16, 15, 3, 25],
    ],
    Year: 2012,
    Province_Array: new Array(30).fill(0).map((_, i) => i),
    Province: "Beijing",
  };
  componentDidMount() {}
  componentWillUnmount() {
    this.drawParallel();
    // this.draw_P_Legend();
  }
  componentDidUpdate() {
    this.drawParallel();
  }
  render() {
    const width = 1390;
    const height = 380;
    return (
      <div id={`Parallel`} className={"framework"}>
        <Heading title={`Parallel View`}></Heading>
        <svg id={"parallel"} style={{ width: "100%", height: "100%" }}></svg>
      </div>
    );
  }
  drawParallel = () => {
    const {
      rects_num,
      matrix_3D,
      matrix,
      colors,
      provinces,
      width,
      height,
      Cluster,
      leibies,
    } = this.state;
    const { Year, Province, Province_Array } = this.props;

    let nodes = [];
    let count = 0;
    for (let key in rects_num) {
      let list = rects_num[key];
      for (let i = 0; i < list.length; i++) {
        let node = 1998 + count + "_" + i;
        nodes.push({
          name: node,
        });
      }
      count += 1;
    }

    let focus = []; //重心
    let clusters_num = [];
    for (let key in rects_num) {
      let list = rects_num[key];
      let numbers = [];
      let abab = [];
      for (let i = 0; i < list.length; i++) {
        let x = list[i];
        for (let j = 0; j < x; j++) {
          numbers.push(x);
          abab.push(i);
        }
      }
      focus.push(numbers);
      clusters_num.push(abab);
    }

    clusters_num = this.reverseMatrix(clusters_num);
    let list = [];
    for (let i = 0; i < focus.length; i++) {
      let ab = [];
      for (let j = 0; j < focus[i].length; j++) {
        ab.push(focus[i][j]);
      }
      list.push(ab);
    }
    for (let i = 0; i < focus.length; i++) {
      let count1 = 0;
      for (let j = 0; j < focus[i].length; j++) {
        if (j == 0) focus[i][j] = focus[i][j] / 2;
        else if (list[i][j] != list[i][j - 1]) {
          count1 = 0;
          // focus[i][j] = focus[i][j] + focus[i][j - 1]
          focus[i][j] = (j + 1 + j + focus[i][j]) / 2;
        } else if (count1 == list[i][j]) {
          //处理两个相同个数的类出现在一块
          focus[i][j] = (j + 1 + j + focus[i][j]) / 2;
        } else if (list[i][j] == list[i][j - 1]) focus[i][j] = focus[i][j - 1];
        count1 += 1;
      }
    }
    focus = this.reverseMatrix(focus);

    // remove and add svg
    d3.select("#parallel").remove();
    let svg = d3
      .select("#Parallel")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "parallel")
      // .call(d3.zoom().scaleExtent([0.5, 6]).on("zoom", zoomed))
      .append("g");

    svg
      .selectAll(".p_Legend_text")
      .data(d3.range(5))
      .enter()
      .append("text")
      .attr("class", "p_Legend_text")
      .attr("x", (_, i) => i * 150 + 205)
      .attr("y", 25)
      .text((_, i) => {
        let num = i + 1;
        let abs = "Cluster_" + num;
        return abs;
      })
      .attr("font-size", 12);
    svg
      .selectAll(".p_Legend")
      .data(d3.range(5))
      .enter()
      .append("rect")
      .attr("class", "p_Legend")
      .attr("x", (_, i) => i * 150 + 180)
      .attr("y", 13)
      .attr("width", 15)
      .attr("height", 15)
      // .attr('rx', 2)
      // .attr('ry', 2)
      .attr("index", (_, i) => i)
      .attr("fill", (_, i) => colors[i]);

    let g = svg.append("g");
    let rects_number = [];
    for (let key in rects_num) {
      //写矩形的个数
      let sum = 0;
      for (let i = 0; i < rects_num[key].length; i++) {
        sum += rects_num[key][i];
        rects_number.push(sum);
      }
    }

    let y_position = []; //确定位置的类
    for (let key in rects_num) {
      let sum = 0;
      let abababs = [];
      for (let i = 0; i < rects_num[key].length; i++) {
        let ababab = [];
        for (let j = 0; j < rects_num[key][i]; j++) {
          if (i == 0) ababab.push(j);
          else ababab.push(j + sum);
        }
        sum += rects_num[key][i];
        abababs.push(ababab);
      }
      y_position.push(abababs);
    }

    let path = [];
    let total_lines = [];
    for (let i = 0; i < 30; i++) {
      //every province
      let dataset = {};
      let y = []; //y position
      for (let j = 0; j < matrix.length; j++) {
        //number of year
        list = matrix[j];
        y.push(list.indexOf(i)); //位置数组
      }
      let lines = []; // get path postion
      let line = [];
      let jizhunlei = leibies[i][0];
      for (let k = 0; k < 40; k++) {
        if (k % 2 == 0) {
          let block = clusters_num[y[k / 2]][k / 2]; //块外间距
          let head = focus[y[k / 2]][k / 2]; //重心 块内间距
          // y_position[k/2]  位置数组
          // leibie = index_array(y_position[k/2],y[k/2])
          // leibies.push(index_array(y_position[k/2],y[k/2]))
          if (leibies[i][k / 2] == jizhunlei)
            line.push([
              k * 33,
              y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
              colors[0],
            ]);
          else
            line.push([
              k * 33,
              y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
              "darkorange",
            ]);
          if (k !== 0) total_lines.push(line);
          line = [];
          lines.push([
            k * 33,
            y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
          ]);
        } else {
          lines.push([lines[k - 1][0] + 10, lines[k - 1][1]]);
          line.push([lines[k - 1][0] + 10, lines[k - 1][1]]);
        }
      }
      dataset["name"] = provinces[i];
      dataset["value"] = lines;
      path.push(dataset);
    }

    let line = d3
      .line()
      .x((d) => d[0])
      .y((d) => d[1])
      .curve(d3.curveMonotoneX);

    let paths = [];
    for (let key in path) {
      let array = path[key]["value"];
      for (let i = 1; i < array.length; i++) {
        paths.push({
          source: {
            x: array[i - 1][0],
            y: array[i - 1][1],
          },
          target: {
            x: array[i][0],
            y: array[i][1],
          },
          index: key,
        });
      }
    }

    svg
      .selectAll(".paths")
      .data(path)
      .enter()
      .append("path")
      .attr("class", "paths")
      .attr("d", (d) => {
        // var start = { x: d.source.x, y: d.source.y };
        // var end = { x: d.target.x, y: d.target.y };
        // return Bézier_curve_generator({ source: start, target: end });
        return line(d["value"]);
      })
      .attr("fill", "none")
      .attr("stroke", "darkgray")
      .attr("stroke-width", 3)
      .attr("transform", "translate(85,-13)")
      // .attr("opacity", d => {
      //   return d.name === Province ? 1 : 0.2
      // })
      .attr("opacity", 0.5)
      .on("mouseover", function (_, d) {
        d3.select(this).append("title").text(d.name);
      })
      .on("click", (e, d) => {
        // console.log(d, i)

        // this.setState({ Province: d['name'] })
        this.props.callback({
          Province: d["name"],
        });
        // d3.select(this)
        //   .transition()
        //   .duration(1000)
        //   .attr("stroke-width", 5)
        //   .attr("opacity", 1)
        //   .attr("stroke", "darkgray");
        // d3.select(this).append('title').text(function () {
        //     return d['name']
        // })
        // highlightMap2([provinces[i]]);
      });
    let p = this.props.Province;
    d3.selectAll(".paths")
      .transition()
      .duration(500)
      .attr("opacity", (d) => {
        if (p === "") return 1;
        return d.name === p ? 1 : 0.2;
      });

    count = -1;
    let y_count = 0;
    let matrix_2D = [];
    for (let i = 0; i < matrix_3D.length; i++) {
      for (let j = 0; j < matrix_3D[i].length; j++)
        matrix_2D.push(matrix_3D[i][j]);
    }
    for (let i = 0; i < 20; i++) {
      svg
        .append("text")
        .attr("x", i * 66 + 75)
        .attr("y", height - 10)
        .text(i + 1998)
        .attr("stroke", () => {
          // console.log(i + 1998, Year)
          return i + 1998 === Year ? "black" : "darkgray";
        });
    }
    let yearCount = 0;
    svg
      .selectAll(".parallel")
      .data(rects_number)
      .enter()
      .append("rect")
      .attr("class", "parallel")
      .attr("x", (d, i) => {
        if (i != 0) {
          if (d < rects_number[i - 1]) {
            count += 1;
            return count * 66 + 120;
          } else {
            return count * 66 + 120;
          }
        } else {
          return 55;
        }
      })
      .attr("yearCount", (d, i) => {
        if (i != 0) {
          if (d < rects_number[i - 1]) {
            yearCount++;
            return yearCount;
          } else {
            return yearCount;
          }
        } else {
          return 0;
        }
      })
      .attr("y", (d, i) => {
        if (i === 0) {
          y_count = 0;
          return 58;
        }
        if (d < rects_number[i - 1]) {
          y_count = 0;
          // console.log(d)
          return 58 + d / 1.5;
        } else {
          y_count += 1;
          return (
            58 +
            rects_number[i - 1] * 9 +
            10 * y_count +
            (d - rects_number[i - 1]) / 1.5
          );
        }
      })
      .attr("rx", 2)
      .attr("ry", 2)
      .attr("height", (d, i) => {
        if (i !== 0) {
          if (d < rects_number[i - 1]) {
            return (d * 9) / 1.5;
          } else {
            return ((d - rects_number[i - 1]) * 9) / 1.5;
          }
        } else return d * 9;
      })
      .attr("width", 10)
      .attr("fill", (_, i) => {
        return colors[Cluster[i]];
      })
      // .attr('fill-opacity',0.7)
      .attr("stroke", (_, i) => {
        return colors[Cluster[i]];
      })
      .attr("index", (_, i) => i)
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.9)
      .attr("transform", "translate(30,-10)")
      .on("click", (e, d) => {
        // console.log(e, d)
        let index = e.currentTarget.getAttribute("index");
        let array = matrix_2D[index];
        // console.log(array)
        // console.log(this.props.Year)
        // console.log(matrix_3D[this.props.Year - 1998].indexOf(array))
        let Year = e.currentTarget.getAttribute("yearCount");

        d3.selectAll(".paths")
          .attr("opacity", (_, i) => {
            if (array.indexOf(i) !== -1) {
              return 0.8;
            }
            return 0.2;
          })
          .attr("stroke-width", (_, i) => {
            if (array.indexOf(i) !== -1) return 3;
            return 1.5;
          });
        // console.log(this.state.Cluster[index])
        this.props.callback({
          Year: parseInt(Year) + 1998,
          Province_Array: array,
          Cluster: `Cluster_${this.state.Cluster[index] + 1}`,
        });
      });

    let array = Province_Array;

    d3.selectAll(".paths")
      .attr("opacity", (_, i) => {
        if (array.indexOf(i) !== -1) {
          return 0.8;
        }
        return 0.2;
      })
      .attr("stroke-width", (_, i) => {
        if (array.indexOf(i) !== -1) return 3;
        return 1.5;
      });
  };

  highlightlines = (e, d, matrix_2D) => {
    let index = e.currentTarget.getAttribute("index");
    let array = matrix_2D[index];
    d3.selectAll(".paths")
      .transition()
      .duration(500)
      .attr("opacity", (_, i) => {
        if (array.indexOf(i) !== -1) return 0.8;
        return 0.2;
      })
      .attr("stroke-width", (_, i) => {
        if (array.indexOf(i) !== -1) return 2;
        return 1.5;
      });
  };

  reverseMatrix = (sourceArr) => {
    let reversedArr = [];
    for (let n = 0; n < sourceArr[0].length; n++) {
      reversedArr[n] = [];
      for (let j = 0; j < sourceArr.length; j++) {
        reversedArr[n][j] = sourceArr[j][n];
      }
    }
    return reversedArr;
  };

  draw_P_Legend = () => {
    const {
      width,
      height,
      colors,
      leibies,
      matrix_2D_t,
      matrix_2D,
      matrix,
      rects_num,
      Cluster,
    } = this.state;

    d3.select("#p_legend").remove();
    var svg = d3
      .select("#Parallel")
      .append("svg")
      .attr("width", width + 50)
      .attr("height", height)
      .attr("id", "p_legend");

    let svg_ab = d3.select("#parallel");

    svg
      .selectAll(".p_Legend_text")
      .data(d3.range(5))
      .enter()
      .append("text")
      .attr("class", "p_Legend_text")
      .attr("x", (_, i) => i * 150 + 205)
      .attr("y", 25)
      .text((_, i) => {
        let num = i + 1;
        let abs = "Cluster_" + num;
        return abs;
      })
      .attr("font-size", 12);
    svg
      .selectAll(".p_Legend")
      .data(d3.range(5))
      .enter()
      .append("rect")
      .attr("class", "p_Legend")
      .attr("x", (_, i) => i * 150 + 180)
      .attr("y", 13)
      .attr("width", 15)
      .attr("height", 15)
      // .attr('rx', 2)
      // .attr('ry', 2)
      .attr("index", (_, i) => i)
      .attr("fill", (_, i) => colors[i])
      .on("click", (e, i) => {
        let index = e.currentTarget.getAttribute("index");
        // let array = matrix_2D[index]
        // index = i
        d3.selectAll(".paths").transition().duration(500).attr("opacity", 0.1);

        let path = [];
        let total_lines = [];
        let array = matrix_2D_t[index];

        let focus = []; //重心
        let clusters_num = [];
        for (let key in rects_num) {
          let list = rects_num[key];
          let numbers = [];
          let abab = [];
          for (let i = 0; i < list.length; i++) {
            let x = list[i];
            for (let j = 0; j < x; j++) {
              numbers.push(x);
              abab.push(i);
            }
          }
          focus.push(numbers);
          clusters_num.push(abab);
        }

        // focus = reverseMatrix(focus)
        clusters_num = this.reverseMatrix(clusters_num);

        let rects_number = [];
        for (let key in rects_num) {
          //写矩形的个数
          let sum = 0;
          for (let i = 0; i < rects_num[key].length; i++) {
            sum += rects_num[key][i];
            rects_number.push(sum);
          }
        }
        let list = [];
        for (let i = 0; i < focus.length; i++) {
          let ab = [];
          for (let j = 0; j < focus[i].length; j++) {
            ab.push(focus[i][j]);
          }
          list.push(ab);
        }
        for (let i = 0; i < focus.length; i++) {
          let count = 0;
          for (let j = 0; j < focus[i].length; j++) {
            if (j === 0) focus[i][j] = focus[i][j] / 2;
            else if (list[i][j] !== list[i][j - 1]) {
              count = 0;
              // focus[i][j] = focus[i][j] + focus[i][j - 1]
              focus[i][j] = (j + 1 + j + focus[i][j]) / 2;
            } else if (count === list[i][j]) {
              //处理两个相同个数的类出现在一块
              focus[i][j] = (j + 1 + j + focus[i][j]) / 2;
            } else if (list[i][j] === list[i][j - 1])
              focus[i][j] = focus[i][j - 1];
            count += 1;
          }
        }
        focus = this.reverseMatrix(focus);

        let lines = [];
        let line = [];
        let jizhunlei;
        let block;
        let head;
        let aft;
        let pre;
        let y;

        for (let i = 0; i < 30; i++) {
          //every province
          if (array.indexOf(i) === -1) continue;
          y = []; //y position
          for (let j = 0; j < matrix.length; j++) {
            //number of year
            list = matrix[j];
            y.push(list.indexOf(i)); //位置数组
          }
          lines = []; // get path postion
          line = [];
          jizhunlei = parseInt(index);
          // jizhunlei = leibies[i][0]

          for (let k = 0; k < 40; k++) {
            if (k % 2 === 0) {
              block = clusters_num[y[k / 2]][k / 2]; //块外间距
              head = focus[y[k / 2]][k / 2]; //重心 块内间距
              // y_position[k/2]  位置数组
              // leibie = index_array(y_position[k/2],y[k/2])
              // leibies.push(index_array(y_position[k/2],y[k/2]))
              aft = leibies[i][k / 2];
              pre = leibies[i][k / 2 - 1];
              console.log(leibies);
              // console.log(pre, aft, jizhunlei)
              if (
                (pre === aft && pre === jizhunlei) ||
                (pre === aft && aft === jizhunlei) ||
                pre === jizhunlei ||
                aft === jizhunlei
              ) {
                if (pre === aft)
                  line.push([
                    k * 33,
                    y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
                    "#377eb8",
                  ]);
                else if (pre !== jizhunlei)
                  line.push([
                    k * 33,
                    y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
                    "#4daf4a",
                  ]);
                else if (aft !== jizhunlei)
                  line.push([
                    k * 33,
                    y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
                    "#e41a1c",
                  ]);

                if (k != 0) {
                  total_lines.push(line);
                }
              }
              line = [];
              lines.push([
                k * 33,
                y[k / 2] * 9 + 58 + 10 * block + 2.0 * (head - y[k / 2]),
              ]);
            } else {
              lines.push([lines[k - 1][0] + 10, lines[k - 1][1]]);
              line.push([lines[k - 1][0] + 10, lines[k - 1][1]]);
            }
          }
        }
        line = d3
          .line()
          .x((d) => d[0])
          .y((d) => d[1])
          .curve(d3.curveMonotoneX);
        for (let i = 0; i < total_lines.length; i++) {
          total_lines[i].push(total_lines[i][1]);
          total_lines[i][1] = total_lines[i][0];
          total_lines[i][0] = [total_lines[i][1][0] - 10, total_lines[i][1][1]];
          total_lines[i].push([
            total_lines[i][2][0] + 10,
            total_lines[i][2][1],
          ]);
        }
        d3.selectAll(".abab").remove();
        for (let j = 0; j < total_lines.length; j++) {
          svg = d3.select("#parallel");
          svg
            .append("path")
            .attr("class", "abab")
            .attr("d", line(total_lines[j]))
            .attr("fill", "none")
            .attr("stroke", () => total_lines[j][2][2])
            .attr("stroke-width", 2.5)
            .attr("stroke-opacity", 0.5)
            .attr("transform", "translate(85,-13)");
        }
        svg.selectAll(".parallel").remove();
        let count = -1;
        let y_count = 0;

        svg
          .selectAll(".parallel")
          .data(rects_number)
          .enter()
          .append("rect")
          .attr("class", "parallel")
          .attr("x", (d, i) => {
            if (i !== 0) {
              if (d < rects_number[i - 1]) {
                count += 1;
                return count * 66 + 120;
              } else {
                return count * 66 + 120;
              }
            } else {
              return 55;
            }
          })
          .attr("y", (d, i) => {
            if (i === 0) {
              y_count = 0;
              return 58;
            }
            if (d < rects_number[i - 1]) {
              y_count = 0;
              // console.log(d)
              return 58 + d / 1.5;
            } else {
              y_count += 1;
              return (
                58 +
                rects_number[i - 1] * 9 +
                10 * y_count +
                (d - rects_number[i - 1]) / 1.5
              );
            }
          })
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("height", (d, i) => {
            if (i !== 0) {
              if (d < rects_number[i - 1]) {
                return (d * 9) / 1.5;
              } else {
                return ((d - rects_number[i - 1]) * 9) / 1.5;
              }
            } else return d * 9;
          })
          .attr("width", 10)
          .attr("fill", (_, i) => {
            return colors[Cluster[i]];
          })
          // .attr('fill-opacity',0.7)
          .attr("stroke", (_, i) => {
            return colors[Cluster[i]];
          })
          .attr("stroke-width", 1.5)
          .attr("opacity", 0.9)
          .attr("transform", "translate(30,-10)");

        svg = d3.select("#parallel");
        let ab_text = ["Stable", "Aggregate", "Detach"];
        svg
          .selectAll(".p_text")
          .data(ab_text)
          .enter()
          .append("text")
          .attr("class", "p_text")
          .transition()
          .duration(500)
          .attr("x", 10)
          .attr("y", (_, i) => 80 * i + 110)
          .text((d) => d)
          .attr("font-size", 10);
        // abcolors = ['aqua', 'lime', 'red']
        let abcolors = ["#377eb8", "#4daf4a", "#e41a1c"];
        svg
          .selectAll(".p_line")
          .data(abcolors)
          .enter()
          .append("line")
          .attr("class", "p_line")
          .transition()
          .duration(500)
          .attr("x1", 10)
          .attr("x2", 45)
          .attr("y1", (_, i) => 80 * i + 120)
          .attr("y2", (_, i) => 80 * i + 120)
          .attr("stroke", (_, i) => abcolors[i])
          .attr("stroke-width", 3);
      });
  };
}
