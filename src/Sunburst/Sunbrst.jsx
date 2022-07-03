import React from "react";
import "./Sunburst.css";
import Heading from "../Heading/Heading.jsx";
import data from "../data/onepro.json";
import * as d3 from "d3";
export default class Sunburst extends React.Component {
  state = {
    clusters: [
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        4, 4, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 1, 0, 1, 3, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0, 2, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 1, 1, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
      ],
      [
        2, 2, 2, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1, 0, 1, 1, 1,
        1, 4, 3, 3, 3, 3,
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
  };
  componentDidMount() {}
  componentWillUnmount() {
    this.drawSunburst();
  }
  render() {
    return (
      <div id={`Sunburst`} className={"framework"}>
        <Heading title={`Sunburst View`}></Heading>
      </div>
    );
  }
  drawSunburst = () => {
    const { Year } = this.props;
    const { clusters, colors, provinces } = this.state;
    const scale = d3.scaleLinear().domain([1998, 2017]).range([0, 1]);
    const index = scale(Year);
    const cluster = clusters[index];

    let pieData = [];
    for (let province in data) {
      let value = d3.sum(data[province][index]);
      pieData.push({
        name: province,
        value: value,
      });
    }
    console.log(pieData);

    let dataset = [];
    let flag = [0, 0, 0, 0];
    for (let i = 0; i < cluster.length; i++) {
      if (flag[cluster[i]] == 0) {
        let name = `cluster_${cluster[i]}`;
        dataset.push({
          name: name,
          children: [],
        });
        flag[cluster[i]] = 1;
      } else {
        let name = `cluster_${cluster[i]}`;
        for (let j = 0; j < dataset.length; j++) {
          let d = dataset[j];
          console.log(d);
          if (d[name] == name) {
            dataset[j].children.push(pieData[i]);
          }
        }
      }
    }
    console.log(dataset);
  };
}
