import React from "react";
import "./Map.css";
import Heading from "../Heading/Heading.jsx";
import mapboxgl from "mapbox-gl";
import * as d3 from "d3";
import China from "../data/China.json";
import China_city from "../data/China_city.json";

export default class NMap extends React.Component {
  state = {
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
    colors: {
      'red': ['rgb(255,197,172)', 'rgb(255,137,93)', 'rgb(243,71,13)', 'rgb(164,48,12)'],
      'blue': ['rgb(201,233,255)', 'rgb(138,212,255)', 'rgb(34,186,237)', 'rgb(34,123,162)']
    }
  };
  componentDidMount() { }
  componentWillUnmount() {
    let map = this.initMap();
    this.setState({ map: map });
  }
  componentDidUpdate() {
    this.drawMap();
  }
  render() {
    const width = 830;
    const height = 655;
    return (
      <div id={`Map`} className={"framework"}>
        <Heading title={`Map View`}></Heading>
        <div id="map" style={{ height: height, width: width }}></div>
      </div>
    );
  }
  initMap = () => {
    const { Year } = this.props;
    const { provinces } = this.state;
    const data = require(`../data/province_emissions_apparent/province_emissions_apparent_${Year}.json`);
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic29uZ3Nvbmdzb25nc29uZyIsImEiOiJjazc5NWY4MjQwcHB1M2VwNnp2OXhmanNjIn0.FkXJaX3YW602OvwUm9uH1g";
    let map = new mapboxgl.Map({
      container: "map",
      // 灰 黑 蓝
      style: "mapbox://styles/songsongsongsong/cki043mzz1cx519sghufqehoy",
      // style: 'mapbox://styles/songsongsongsong/cka4lyt08098m1imntn7ckjdl',
      // style: 'mapbox://styles/songsongsongsong/ck79xfszr19ku1intafbpd4fv',
      center: [104.2, 37.9],
      zoom: 3.1,
      minZoom: 3.1,
      maxZoom: 3.1,
      // dragPan: true,
    });
    let dataset = [];
    for (let key in data) {
      dataset.push(data[key]);
    }
    let scale_1 = d3
      .scaleLinear()
      .domain([0, d3.max(dataset) - d3.mean(dataset)])
      .range([0, 1]);
    let scale_2 = d3
      .scaleLinear()
      .domain([0, d3.mean(dataset) - d3.min(dataset)])
      .range([0, 1]);

    let colorScale_2 = d3
      .scaleLinear()
      .domain([0, 0.33, 0.66, 1])
      // .range([
      //   "rgb(143,211,185)",
      //   "rgb(83,187,192)",
      //   "rgb(33,109,174)",
      //   "rgb(28,49,133)",
      // ]);
      .range(this.state.colors.blue)

    let colorScale_1 = d3
      .scaleLinear()
      .domain([0, 0.33, 0.66, 1])
      // .range([
      //   "rgb(246,239,166)",
      //   "rgb(233,191,143)",
      //   "rgb(213,123,111)",
      //   "rgb(191,68,76)",
      // ]);
      .range(this.state.colors.red)

    let expression = ["match", ["get", "name"]];
    let color_expression = ["match", ["get", "name"]];
    let mean = d3.mean(dataset);
    let x;
    for (let i = 0; i < 30; i++) {
      if (dataset[i] - mean > 0) {
        x = scale_1(dataset[i] - mean);
        color_expression.push(provinces[i], colorScale_1(x));
        expression.push(provinces[i], 0.8 * x);
      } else {
        x = scale_2(mean - dataset[i]);
        color_expression.push(provinces[i], colorScale_2(x));
        expression.push(provinces[i], 0.8 * x);
      }
    }
    expression.push(0.5);
    color_expression.push("#AAAAAA");
    map.on("load", () => {
      map.addSource("China", {
        type: "geojson",
        data: China,
      });
      map.addSource("China_city", {
        type: "geojson",
        data: China_city,
      });
      map.addLayer({
        id: "fill",
        type: "fill",
        source: "China",
        paint: {
          "fill-color": color_expression,
        },
      });
    });
    return map;
  };
  drawMap = () => {
    const { Year } = this.props;
    const { provinces, map } = this.state;
    const data = require(`../data/province_emissions_apparent/province_emissions_apparent_${Year}.json`);
    let dataset = [];
    for (let key in data) {
      dataset.push(data[key]);
    }
    let scale_1 = d3
      .scaleLinear()
      .domain([0, d3.max(dataset) - d3.mean(dataset)])
      .range([0, 1]);
    let scale_2 = d3
      .scaleLinear()
      .domain([0, d3.mean(dataset) - d3.min(dataset)])
      .range([0, 1]);

    let colorScale_2 = d3
      .scaleLinear()
      .domain([0, 0.33, 0.66, 1])
      .range(this.state.colors.blue)

    let colorScale_1 = d3
      .scaleLinear()
      .domain([0, 0.33, 0.66, 1])
      .range(this.state.colors.red)

    let expression = ["match", ["get", "name"]];
    let color_expression = ["match", ["get", "name"]];
    let mean = d3.mean(dataset);
    let x;
    for (let i = 0; i < 30; i++) {
      if (dataset[i] - mean > 0) {
        x = scale_1(dataset[i] - mean);
        color_expression.push(provinces[i], colorScale_1(x));
        expression.push(provinces[i], 0.8 * x);
      } else {
        x = scale_2(mean - dataset[i]);
        color_expression.push(provinces[i], colorScale_2(x));
        expression.push(provinces[i], 0.8 * x);
      }
    }
    expression.push(0.5);
    color_expression.push("#AAAAAA");
    if (map.getLayer('fill')) {
      map.removeLayer("fill")
      map.addLayer({
        id: "fill",
        type: "fill",
        source: "China",
        paint: {
          "fill-color": color_expression,
        },
      });
    }
  }
}
