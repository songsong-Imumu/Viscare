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
      red: [
        '#FFC5AC',
        '#FF895D',
        '#F3470D',
        '#A4300C'
      ],
      // red: [
      //   "rgb(255,197,172)",
      //   "rgb(255,137,93)",
      //   "rgb(243,71,13)",
      //   "rgb(164,48,12)",
      // ],
      green: [
        '#c1e8c5', '#65cf9b', '#16a37e', '#10686c'
      ],
      blue: [
        "rgb(201,233,255)",
        "rgb(138,212,255)",
        "rgb(34,186,237)",
        "rgb(34,123,162)",
      ],
    },
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
    clustersColors: [
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
  };
  componentDidMount() { }
  componentWillUnmount() {
    let map = this.initMap();
    this.setState({ map: map });
    // this.drawLegend();
  }
  componentDidUpdate() {
    this.drawMap();
    // this.drawLine();
  }
  render() {
    const width = 830;
    const height = 655;
    return (
      <div id={`Map`} className={"framework"}>
        <Heading title={`Map View`}></Heading>
        <div id="map" style={{ height: height, width: width }}>
          <div id="MAP_LINE">
            <svg id="MapSvg" style={{ width: 830, height: 655 }}></svg>
          </div>
        </div>

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
    const svg = d3.select('#MapSvg')
    const red = 'rgb(255,46,49)'
    const green = 'rgb(15,140,15)'
    for (let i = 0; i <= 10; i++) {
      svg.append('rect')
        .attr('y', i * 5 + 50)
        .attr('x', 30)
        .attr('width', 5)
        .attr('height', 5)
        .attr('fill', red)
        .attr('fill-opacity', (10 - i) * 10 / 100)
      svg.append('rect')
        .attr('y', i * 5 + 100)
        .attr('x', 30)
        .attr('width', 5)
        .attr('height', 5)
        .attr('fill', green)
        .attr('fill-opacity', i * 10 / 100)
    }
    svg.append('text').attr('x', 30).attr('y', 50).text('max').attr('font-size', 12).attr('dx',8).attr('dy',3)
    svg.append('text').attr('x', 30).attr('y', 100).text('mean').attr('font-size', 12).attr('dx',8).attr('dy',3)
    svg.append('text').attr('x', 30).attr('y', 150).text('min').attr('font-size', 12).attr('dx',8).attr('dy',3)
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
      .range(this.state.colors.green);

    let colorScale_1 = d3
      .scaleLinear()
      .domain([0, 0.33, 0.66, 1])
      // .range([
      //   "rgb(246,239,166)",
      //   "rgb(233,191,143)",
      //   "rgb(213,123,111)",
      //   "rgb(191,68,76)",
      // ]);
      .range(this.state.colors.red);

    let expression = ["match", ["get", "name"]];
    let color_expression = ["match", ["get", "name"]];
    let mean = d3.mean(dataset);
    let x;
    for (let i = 0; i < 30; i++) {
      if (dataset[i] - mean > 0) {
        x = scale_1(dataset[i] - mean);
        color_expression.push(provinces[i], 'rgb(255,46,49)');
        expression.push(provinces[i], 1 * x);
      } else {
        x = scale_2(mean - dataset[i]);
        color_expression.push(provinces[i], 'rgb(15,140,15)');
        expression.push(provinces[i], 1 * x);
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
          'fill-opacity': expression
        },
      });
      // map.on('mouseover', 'fill', e => {
      //   this.props.callback({ Province: e.features[0].properties.name })
      // })
    });
    return map;
  };
  drawMap = () => {
    const { Year, Pattern } = this.props;
    const { provinces, map, clustersColors, clusters } = this.state;
    if (Pattern === "Provinces") {
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
        .range(this.state.colors.blue);

      let colorScale_1 = d3
        .scaleLinear()
        .domain([0, 0.33, 0.66, 1])
        .range(this.state.colors.red);

      let expression = ["match", ["get", "name"]];
      let color_expression = ["match", ["get", "name"]];
      let mean = d3.mean(dataset);
      let x;
      for (let i = 0; i < 30; i++) {
        if (dataset[i] - mean > 0) {
          x = scale_1(dataset[i] - mean);
          color_expression.push(provinces[i], 'rgb(255,46,49)');
          expression.push(provinces[i], 1 * x);
        } else {
          x = scale_2(mean - dataset[i]);
          color_expression.push(provinces[i], 'rgb(15,140,15)');
          expression.push(provinces[i], 1 * x);
        }
      }
      expression.push(0.5);
      color_expression.push("#AAAAAA");
      if (map.getLayer("fill")) {
        map.removeLayer("fill");
        map.addLayer({
          id: "fill",
          type: "fill",
          source: "China",
          paint: {
            "fill-color": color_expression,
            'fill-opacity': expression
          },
        });
      }
    } else {
      const scale = d3.scaleLinear().domain([1998, 2017]).range([0, 19]);
      const index = scale(Year);
      const cluster = clusters[index];
      let expression = ["match", ["get", "name"]];
      for (let i = 0; i < 30; i++) {
        expression.push(provinces[i], clustersColors[cluster[i]]);
      }
      expression.push("#AAAAAA");
      if (map.getLayer("fill")) {
        map.removeLayer("fill");
        map.addLayer({
          id: "fill",
          type: "fill",
          source: "China",
          paint: {
            "fill-color": expression,
            "fill-opacity": 0.5,
          },
        });
      }
    }
  };
  drawLegend = () => {
    const red = this.state.colors.red;
    const blue = this.state.colors.blue;
    let svg = d3.select('#mapsvg')
    d3.selectAll('.red')
      .attr('data', red)
      .append('rect')
      .attr('x', 20)
      .attr('y', (_, i) => i * 20 + 100)
      .attr('width', 20)
      .attr('height', 20)
  }
  drawLine = (angle = 1) => {
    const { Year, DrawLine } = this.props;
    if (DrawLine === false) return
    console.log('drawLine a')
    if (!document.getElementById('MAP_LINE')) {
      var div = document.createElement('div')
      div.setAttribute('id', 'MAP_LINE')
      document.getElementById('map').appendChild(div)
    }
    const width = 830
    const height = 655
    function f(sigma, μ, x, f_x) {
      return f_x * (1 / (Math.pow(2 * Math.PI, 1 / 2) * sigma)) * Math.exp(-Math.pow((x - μ), 2) / 2 * Math.pow(sigma, 2))
    }
    const emissions = require(`../data/province_emissions_apparent/province_emissions_apparent_${Year}.json`)
    const data = require(`../data/China_city_English.json`)
    let flag = 1;
    let roll = 10 * (angle - 1)
    let initial_angle = Math.atan(464.56 / 601.36) * 180 / Math.PI
    let end_angle = roll - initial_angle
    // document.getElementById('range_center').removeAttribute('disabled')
    angle = 1
    // center = document.getElementById('range_center').value
    let σ = 0.1
    let svg = d3.select('#MAP_LINE')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('id', 'LINE')
      .append("g")
    let g = svg.append('g')
    svg.append('line').attr('class', 'Line') //.transition().duration(500)
      .attr('x1', 0)
      .attr('y1', height)
      .attr('x2', width)
      .attr('y2', 0)
      .attr('stroke', 'black')
      .attr('opacity', 0.3)
    let dataset = []
    let position = []
    for (let item in data['features']) {
      if (data['features'][item]['propertise']['name'] == 'Xizang') continue
      dataset.push([
        data['features'][item]['propertise']['name'],
        data['features'][item]['geometry']['coordinates'],
        emissions[data['features'][item]['propertise']['name']],
      ])
      position.push(data['features'][item]['geometry']['coordinates'])

      let b = 655 //两条直角边
      let a = 830
      //y = 36.4/59.52*x + 15.17 - 36.4/59.52 * 73.7
      let k = 36.4 / 59.52
      let m = 15.17 - 36.4 / 59.52 * 73.7
      let xiebian = Math.pow(Math.pow(a, 2) + Math.pow(b, 2), 1 / 2)
      let jidi = [a / xiebian, b / xiebian]
      let position_ = this.reverseMatrix(position)
      position_ = this.get_position(jidi, position_)
      let line_length = Math.pow(Math.pow(133.22 - 73.70, 2) + Math.pow(51.57 - 15.17, 2), 1 / 2)

      let path_1 = []
      let i = 73.70
      while (i < 133.22) {
        let sum = 0
        for (let j = 0; j < dataset.length; j++) {
          let lng = position[j][0]
          let lat = position[j][1]
          if (k * lng + m > lat) continue
          let value = dataset[j][2]
          let sigma = σ * 10.05
          sum += f(sigma, i, lng, value)
        }
        path_1.push([i, sum])
        i += 0.1
      }
      let path_2 = []
      i = 73.70
      while (i < 133.22) {
        let sum = 0
        for (let j = 0; j < dataset.length; j++) {
          let lng = position[j][0]
          let lat = position[j][1]
          if (k * lng + m <= lat) continue
          let value = dataset[j][2]
          let sigma = σ * 10.05
          sum += f(sigma, i, lng, value)
        }
        path_2.push([i, sum])
        i += 0.1
      }
      let path_3 = []
      let path_4 = []
      for (i = 0; i < path_1.length; i++) {
        path_3.push([path_1[i][0], path_1[i][1] + path_2[i][1]])
        path_4.push([path_1[i][0], path_1[i][1] - path_2[i][1]])
      }
      let max1 = d3.max(path_1, d => d[1])
      let min1 = d3.min(path_1, d => d[1])
      let max2 = d3.max(path_2, d => d[1])
      let min2 = d3.min(path_2, d => d[1])
      let max3 = d3.max(path_3, d => d[1])
      let min3 = d3.min(path_3, d => d[1])
      let max4 = d3.max(path_4, d => d[1])
      let min4 = d3.min(path_4, d => d[1])
      let max = Math.max(max1, max2)
      let min = Math.min(min1, min2)
      let line1 = d3.line()
        .x(d => (d[0] - 73.70) / (133.22 - 73.70) * xiebian)
        .y(d => -(d[1] - min) / (max - min) * 100)
        .curve(d3.curveMonotoneX)
      let line2 = d3.line()
        .x(d => (d[0] - 73.70) / (133.22 - 73.70) * xiebian)
        .y(d => (d[1] - min) / (max - min) * 100)
        .curve(d3.curveMonotoneX)
      let line3 = d3.line()
        .x(d => (d[0] - 73.70) / (133.22 - 73.70) * xiebian)
        .y(d => -d[1] / max3 * 80)
        .curve(d3.curveMonotoneX)
      let line4 = d3.line()
        .x(d => (d[0] - 73.70) / (133.22 - 73.70) * xiebian)
        .y(d => -d[1] / max4 * 10)
        .curve(d3.curveMonotoneX)
      // line1 = d3.line()
      //     .x(d => d[0] * xiebian)
      //     .y(d => -(d[1] - min) / (max - min) * 100)
      // line2 = d3.line()
      //     .x(d => d[0] * xiebian)
      //     .y(d => (d[1] - min) / (max - min) * 100)

      svg.append('path').attr('class', 'Path') //.transition().duration(500)
        .attr('d', line1(path_1))
        .attr('fill', 'none')
        .attr('fill-opacity', 0.3)
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.7)
        .attr('transform', function () {
          let x = -(xiebian - a) * (a / xiebian) * 1.15
          let y = (xiebian - a) * (b / xiebian) * 1.15
          // console.log(x, y, xiebian)
          let roll = -Math.atan(b / a) * 180 / Math.PI
          return 'translate(' + x + ',' + y + ')' + 'rotate(' + end_angle + ',' + width + ',0)' // + 'translate(' + x + ',' + y + ')'
        })
      svg.append('path').attr('class', 'Path2')
        .attr('d', line2(path_2))
        .attr('fill', 'none')
        .attr('fill-opacity', 0.3)
        .attr('stroke', 'darkorange')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.7)
        .attr('transform', function () {
          let x = -(xiebian - a) * (a / xiebian) * 1.15
          let y = (xiebian - a) * (b / xiebian) * 1.15
          // console.log(x, y, xiebian)
          let roll = -Math.atan(b / a) * 180 / Math.PI
          return 'translate(' + x + ',' + y + ')' + 'rotate(' + end_angle + ',' + width + ',0)' // + 'translate(' + x + ',' + y + ')'
        })
      svg.append('path').attr('class', 'Path3')
        .attr('d', line3(path_3))
        .attr('opacity', 0)
        .attr('fill', '#87CEFA')
        .attr('fill-opacity', 0.8)
        .attr('stroke', '#87CEFA')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 1)
        .attr('transform', function () {
          let x = -(xiebian - a) * (a / xiebian) * 1.15
          let y = (xiebian - a) * (b / xiebian) * 1.15
          // console.log(x, y, xiebian)
          let roll = -Math.atan(b / a) * 180 / Math.PI
          return 'translate(' + x + ',' + y + ')' + 'rotate(' + end_angle + ',' + width + ',0)' // + 'translate(' + x + ',' + y + ')'
        })
      svg.append('path').attr('class', 'Path4')
        .attr('d', line4(path_4))
        .attr('opacity', 0)
        .attr('fill', '#EE3B3B')
        .attr('fill-opacity', 0.8)
        .attr('stroke', '#EE3B3B')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 1)
        .attr('transform', function () {
          let x = -(xiebian - a) * (a / xiebian) * 1.15
          let y = (xiebian - a) * (b / xiebian) * 1.15
          // console.log(x, y, xiebian)
          let roll = -Math.atan(b / a) * 180 / Math.PI
          return 'translate(' + x + ',' + y + ')' + 'rotate(' + end_angle + ',' + width + ',0)' // + 'translate(' + x + ',' + y + ')'
        })
      d3.select('.Line').remove()
    }
  }
  get_position = (a, matrix) => {
    let result = []
    for (let i = 0; i < matrix[0].length; i++) {
      let x = 0
      for (let j = 0; j < matrix.length; j++) {
        // x += Math.abs(matrix[j][i] * a[j])
        x += matrix[j][i] * a[j]
      }
      result.push(x)
      // result.push(Math.abs(x))
    }
    return result
  }
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
}
