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
    width: 400,
    height: 380,
    radius: 400 / 6.8
  };
  componentDidMount() { }
  componentWillUnmount() {
    this.drawSunburst();
  }
  componentDidUpdate() {
    this.drawSunburst();
  }
  render() {
    return (
      <div id={`Sunburst`} className={"framework"}>
        <Heading title={`Sunburst View`}></Heading>
        <svg id="sunburst"></svg>
      </div>
    );
  }
  drawSunburst = () => {
    const { Year } = this.props;
    const { clusters, colors, provinces, width, height, radius } = this.state;
    const scale = d3.scaleLinear().domain([1998, 2017]).range([0, 19]);
    const index = scale(Year);
    const cluster = clusters[index];

    let pieData = [];
    let province_count = 0;
    for (let province in data) {
      let value = d3.sum(data[province][index]);
      pieData.push({
        name: province,
        value: value,
        cluster: cluster[province_count],
      });
      province_count++;
    }
    let dataset = [];
    let flag = [0, 0, 0, 0];
    for (let i = 0; i < cluster.length; i++) {
      if (flag[cluster[i]] === 0) {
        let name = `cluster_${cluster[i]}`;
        dataset.push({
          name: name,
          children: [pieData[i]],
          cluster: cluster[i]
        });
        flag[cluster[i]] = 1;
      } else {
        let name = `cluster_${cluster[i]}`;
        for (let j = 0; j < dataset.length; j++) {
          let d = dataset[j];
          if (d.name === name) {
            dataset[j].children.push(pieData[i]);
          }
        }
      }
    }
    dataset = {
      name: 'Root',
      children: dataset
    }
    this.D3_Sunburst_Zoomable(dataset, width, height, colors, radius)
  };

  D3_Sunburst_Zoomable = (data, width, height, color, radius) => {
    let format = d3.format(",d")
    let arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius(d => d.y0 * radius)
      .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

    let partition = data => {
      const root = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
      return d3.partition()
        .size([2 * Math.PI, root.height + 1])
        (root);
    }
    const root = partition(data);

    root.each(d => d.current = d);

    d3.select("#sunburst").remove();
    const svg = d3
      .select("#Sunburst")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "sunburst")
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle");

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${width / 2})`);

    const path = g.append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
      .attr("fill", d => { return color[d.data.cluster] })
      .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
      .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")

      .attr("d", d => arc(d.current));

    path.filter(d => d.children)
      .style("cursor", "pointer")
      .on("click", clicked);

    path.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

    const label = g.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", d => +labelVisible(d.current))
      .attr("transform", d => labelTransform(d.current))
      .text(d => d.data.name);

    const parent = g.append("circle")
      .datum(root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("click", clicked);

    function clicked(event, p) {
      parent.datum(p.parent || root);

      root.each(d => d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth)
      });

      const t = g.transition().duration(750);

      // Transition the data on all arcs, even the ones that aren’t visible,
      // so that if this transition is interrupted, entering arcs will start
      // the next transition from the desired position.
      path.transition(t)
        .tween("data", d => {
          const i = d3.interpolate(d.current, d.target);
          return t => d.current = i(t);
        })
        .filter(function (d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
        .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")

        .attrTween("d", d => () => arc(d.current));

      label.filter(function (d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      }).transition(t)
        .attr("fill-opacity", d => +labelVisible(d.target))
        .attrTween("transform", d => () => labelTransform(d.current));
    }

    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
      const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
      const y = (d.y0 + d.y1) / 2 * radius;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }
  }


  D3_Sunburst = (data, { // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? d => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? d => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a node d, returns the name to display on the rectangle
    title, // given a node d, returns its hover text
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links (if any)
    width = this.state.width, // outer width, in pixels
    height = this.state.height, // outer height, in pixels
    margin = 30, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 1, // separation between arcs
    radius = Math.min(width - marginLeft - marginRight, height - marginTop - marginBottom) / 2, // outer radius
    color = this.state.colors, // color scheme, if any
    fill = "#ccc", // fill for arcs (if no color encoding)
    fillOpacity = 0.6, // fill opacity for arcs
  } = {}) => {

    // If id and parentId options are specified, or the path option, use d3.stratify
    // to convert tabular data to a hierarchy; otherwise we assume that the data is
    // specified as an object {children} with nested objects (a.k.a. the “flare.json”
    // format), and use d3.hierarchy.
    const root = path != null ? d3.stratify().path(path)(data)
      : id != null || parentId != null ? d3.stratify().id(id).parentId(parentId)(data)
        : d3.hierarchy(data, children);

    // Compute the values of internal nodes by aggregating from the leaves.
    value == null ? root.count() : root.sum(d => Math.max(0, value(d)));

    // Sort the leaves (typically by descending value for a pleasing layout).
    if (sort != null) root.sort(sort);

    // Compute the partition layout. Note polar coordinates: x is angle and y is radius.
    d3.partition().size([2 * Math.PI, radius])(root);

    // Construct a color scale.
    // if (color != null) {
    //   color = d3.scaleSequential([0, root.children.length - 1], color).unknown(fill);
    //   root.children.forEach((child, i) => child.index = i);
    // }

    // Construct an arc generator.
    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .padAngle(d => Math.min((d.x1 - d.x0) / 2, 2 * padding / radius))
      .padRadius(radius / 2)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1 - padding);

    d3.select("#sunburst").remove();
    const svg = d3
      .select("#Sunburst")
      .append("svg")
      .attr("viewBox", [
        marginRight - marginLeft - width / 2,
        marginBottom - marginTop - height / 2,
        width,
        height
      ])
      .attr("width", this.state.width)
      .attr("height", this.state.height)
      .attr("id", "sunburst")
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle");


    const cell = svg
      .selectAll("a")
      .data(root.descendants())
      .join("a")
      .attr("xlink:href", link == null ? null : d => link(d.data, d))
      .attr("target", link == null ? null : linkTarget);

    cell.append("path")
      .attr("d", arc)
      .attr("fill", d => {
        return d.data.cluster >= 0 ? color[d.data.cluster] : 'darkgray'
      })
      .attr("fill-opacity", fillOpacity);

    if (label != null) cell
      .filter(d => (d.y0 + d.y1) / 2 * (d.x1 - d.x0) > 10)
      .append("text")
      .attr("transform", d => {
        if (!d.depth) return;
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
      })
      .attr("dy", "0.32em")
      .text(d => label(d.data, d));

    if (title != null) cell.append("title")
      .text(d => title(d.data, d));

    return svg.node();
  }
}
