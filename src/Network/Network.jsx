import React from "react";
import "./Network.css";
import Heading from "../Heading/Heading.jsx";
import * as d3 from "d3";
export default class Network extends React.Component {
  state = {
    width: 400,
    height: 400,
    city: {
      Beijing: [116.28, 39.6],
      Shanghai: [121.29, 31.14],
      Tianjin: [117.11, 39.09],
      Chongqing: [106.32, 29.32],
      Heilongjiang: [126.41, 45.45],
      Jilin: [125.19, 43.52],
      Liaoning: [123.24, 41.5],
      InnerMongolia: [111.48, 40.49],
      Hebei: [114.28, 38.02],
      Shanxi: [112.34, 37.52],
      Shandong: [117, 36.38],
      Henan: [113.42, 34.48],
      Shaanxi: [108.54, 34.16],
      Gansu: [103.49, 36.03],
      Ningxia: [106.16, 38.2],
      Qinghai: [101.45, 36.38],
      Xinjiang: [87.36, 43.48],
      Anhui: [117.18, 31.51],
      Jiangsu: [118.5, 32.02],
      Zhejiang: [120.09, 30.14],
      Hunan: [113, 28.11],
      Jiangxi: [115.52, 28.41],
      Hubei: [114.21, 30.37],
      Sichuan: [102.41, 25],
      Guizhou: [106.42, 26.35],
      Fujian: [119.18, 26.05],
      Guangdong: [113.15, 23.08],
      Hainan: [110.2, 20.02],
      Guangxi: [108.2, 22.48],
      Yunnan: [102, 24],
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
  };
  componentDidMount() { }
  componentWillUnmount() {
    this.drawNetwork();
  }
  componentDidUpdate() {
    this.drawNetwork();
  }
  render() {
    return (
      <div id={`Network`} className={"framework"}>
        <Heading title={`Network View`}></Heading>
        <svg id="network"></svg>
      </div>
    );
  }
  drawNetwork = () => {
    const { Year } = this.props;
    const { width, height, city, clusters, colors } = this.state;
    const scale = d3.scaleLinear().domain([1998, 2017]).range([0, 19]);
    const index = scale(Year);
    const cluster = clusters[index];

    const matrix = require(`../data/Network_apparent/Network_apparent_${Year}.json`);
    const pollution = require(`../data/province_emissions_apparent/province_emissions_apparent_${Year}.json`);
    let nodes = [];
    let edges = [];
    for (let name in pollution) {
      nodes.push({
        name: name,
        value: pollution[name],
      });
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > 0) {
          edges.push({
            source: i,
            target: j,
            value: matrix[i][j],
          });
        }
      }
    }
    d3.select("#network").remove();
    const svg = d3
      .select("#Network")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "network")
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif");

    // svg.selectAll('.c_Legend_text').data(d3.range(d3.max(cluster) + 1)).enter().append('text').attr('class', 'c_Legend_text')
    //   .attr('x', (_, i) => i * 65 + 155)
    //   .attr('y', 25)
    //   .text((_, i) => {
    //     let num = i + 1
    //     let abs = 'Cluster_' + num
    //     return abs
    //   })
    //   .attr('font-size', 10)
    svg.append('text').attr('x', 5).attr('y', height - 5).text('Clusters:')
    svg.selectAll('.c_Legend').data(d3.range(d3.max(cluster) + 1)).enter().append('rect').attr('class', 'c_Legend')
      .attr('x', (_, i) => i * 12 + 70)
      .attr('y', height - 15)
      .attr('width', 12)
      .attr('height', 12)
      // .attr('rx', 2)
      // .attr('ry', 2)
      .attr('index', (_, i) => i)
      .attr('fill', (_, i) => colors[i])

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(edges).strength((d) => d.value)
      )
      .force("charge", d3.forceManyBody().strength(-350))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX())
      .force("y", d3.forceY())
      .on("tick", ticked);
    // console.log(nodes, edges);
    const link = svg
      .append("g")
      .attr("stroke", "lightgray")
      .attr("stroke-width", 1)
      .selectAll("line")
      .data(edges)
      .join("line");

    const node = svg
      .append("g")
      .attr("stroke", "white")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("stroke", "white")
      .attr("fill", (d, i) => {
        return colors[cluster[i]];
      })
      .attr("r", (d) => {
        // return 4;
        return (
          7 * Math.sqrt(Math.sqrt(d.value / d3.max(nodes, (d) => d.value)))
        );
      })
      .attr("opacity", (d) => (d.name === "" ? 0 : 1))
      .on("mouseover", function (e, d) {
        d3.select(this).append("title").text(d.name);
      })
      .call(drag(simulation));

    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    }

    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }
  };
}
