import React from "react";
import "./TreeMap.css";
import Heading from "../Heading/Heading.jsx";
import data from "../data/treemap.json";
import * as d3 from "d3";

export default class TreeMap extends React.Component {
  componentDidMount() { }
  componentWillUnmount() {
    this.drawTreeMap();
  }
  componentDidUpdate() {
    this.drawTreeMap();
  }
  render() {
    return (
      <div id={`TreeMap`} className={"framework"}>
        <Heading title={`TreeMap View`}></Heading>
        <svg id="treeMap"></svg>
      </div>
    );
  }
  drawTreeMap = () => {

    const { Year, Province, Province_Array } = this.props;
    let dataset = [];
    // for (let i = 0; i < data[Year].length; i++) {
    //   let d = data[Year][i];
    //   if (d.name === Province) {
    //     dataset = d;
    //   }
    // }
    Province_Array.forEach(d => {
      dataset.push(data[Year][d])
    })
    let result = this.treeSum(dataset)
    // console.log(result)
    dataset = result
    for (let i = 0; i < 4; i++) {
      let d = dataset.children[i].children;
      let temp = [];
      for (let j = 0; j < d.length; j++) {
        if (d[j].value >= 10) {
          temp.push(d[j]);
        }
      }
      if (temp.length !== 0) dataset.children[i].children = temp;
    }
    let tempData = [];
    for (let i = 0; i < 4; i++) {
      if (dataset.children[i].children.length > 0) {
        tempData.push(dataset.children[i]);
      }
    }
    dataset.children = tempData;

    // console.log(dataset);
    let chart = this.D3_Treemap(dataset, {
      value: (d) => d.value, // size of each node (file); null for internal nodes (folders)
      group: (d, n) => n.ancestors().slice(-2)[0].data.name, // e.g., "animate" in flare/animate/Easing; color
      label: (d, n) =>
        [...d.name.split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join(
          "\n"
        ),
      title: (d, n) =>
        `${n
          .ancestors()
          .reverse()
          .map((d) => d.data.name)
          .join(".")}\n${n.value.toLocaleString("en")}`,
      width: 555,
      height: 655,
    });
  };

  D3_Treemap = (
    data,
    {
      // data is either tabular (array of objects) or hierarchy (nested objects)
      path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
      id = Array.isArray(data) ? (d) => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
      parentId = Array.isArray(data) ? (d) => d.parentId : null, // if tabular data, given a node d, returns its parent???s identifier
      children, // if hierarchical data, given a d in data, returns its children
      value, // given a node d, returns a quantitative value (for area encoding; null for count)
      sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
      label, // given a leaf node d, returns the name to display on the rectangle
      group, // given a leaf node d, returns a categorical value (for color encoding)
      title, // given a leaf node d, returns its hover text
      link, // given a leaf node d, its link (if any)
      linkTarget = "_blank", // the target attribute for links (if any)
      tile = d3.treemapBinary, // treemap strategy
      width = 555, // outer width, in pixels
      height = 655, // outer height, in pixels
      margin = 40, // shorthand for margins
      marginTop = margin, // top margin, in pixels
      marginRight = margin, // right margin, in pixels
      marginBottom = margin, // bottom margin, in pixels
      marginLeft = margin, // left margin, in pixels
      padding = 1, // shorthand for inner and outer padding
      paddingInner = padding, // to separate a node from its adjacent siblings
      paddingOuter = padding, // shorthand for top, right, bottom, and left padding
      paddingTop = paddingOuter, // to separate a node???s top edge from its children
      paddingRight = paddingOuter, // to separate a node???s right edge from its children
      paddingBottom = paddingOuter, // to separate a node???s bottom edge from its children
      paddingLeft = paddingOuter, // to separate a node???s left edge from its children
      round = true, // whether to round to exact pixels
      colors = d3.schemeTableau10, // array of colors
      zDomain, // array of values for the color scale
      fill = "#ccc", // fill for node rects (if no group color encoding)
      fillOpacity = group == null ? null : 0.6, // fill opacity for node rects
      stroke, // stroke for node rects
      strokeWidth, // stroke width for node rects
      strokeOpacity, // stroke opacity for node rects
      strokeLinejoin, // stroke line join for node rects
    } = {}
  ) => {
    // If id and parentId options are specified, or the path option, use d3.stratify
    // to convert tabular data to a hierarchy; otherwise we assume that the data is
    // specified as an object {children} with nested objects (a.k.a. the ???flare.json???
    // format), and use d3.hierarchy.
    const root =
      path != null
        ? d3.stratify().path(path)(data)
        : id != null || parentId != null
          ? d3.stratify().id(id).parentId(parentId)(data)
          : d3.hierarchy(data, children);

    // Compute the values of internal nodes by aggregating from the leaves.
    value == null ? root.count() : root.sum((d) => Math.max(0, value(d)));

    // Prior to sorting, if a group channel is specified, construct an ordinal color scale.
    const leaves = root.leaves();
    const G = group == null ? null : leaves.map((d) => group(d.data, d));
    if (zDomain === undefined) zDomain = G;
    zDomain = new d3.InternSet(zDomain);
    const color = group == null ? null : d3.scaleOrdinal(zDomain, colors);

    // Compute labels and titles.
    const L = label == null ? null : leaves.map((d) => label(d.data, d));
    const T =
      title === undefined
        ? L
        : title == null
          ? null
          : leaves.map((d) => title(d.data, d));

    // Sort the leaves (typically by descending value for a pleasing layout).
    if (sort != null) root.sort(sort);

    // Compute the treemap layout.
    d3
      .treemap()
      .tile(tile)
      .size([
        width - marginLeft - marginRight,
        height - marginTop - marginBottom,
      ])
      .paddingInner(paddingInner)
      .paddingTop(paddingTop)
      .paddingRight(paddingRight)
      .paddingBottom(paddingBottom)
      .paddingLeft(paddingLeft)
      .round(round)(root);

    d3.select("#treeMap").remove();
    const svg = d3
      .select("#TreeMap")
      .append("svg")
      .attr("viewBox", [-marginLeft, -marginTop, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("id", "treeMap")
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 16)
    // .attr("transform", "translate(0,10)");
    svg.selectAll('.c_Legend_text').data(['Raw Coal', 'Crude Oil', 'Natural Gas', 'Process']).enter().append('text').attr('class', 'c_Legend_text')
      .attr('x', (_, i) => i * 90 + 140)
      .attr('y', -15)
      .text(d => d)
      .attr('font-size', 12)
    svg.selectAll('.c_Legend').data(d3.range(4)).enter().append('rect').attr('class', 'c_Legend')
      .attr('x', (_, i) => i * 90 + 120)
      .attr('y', -27)
      .attr('width', 15)
      .attr('height', 15)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('index', (_, i) => i)
      .attr('fill', (_, i) => colors[i])
      .attr('opacity', 0.9)

    const g = svg.append('g').attr('transform', 'translate(0,10)')
    const node = g
      .selectAll("a")
      .data(leaves)
      .join("a")
      .attr("xlink:href", link == null ? null : (d, i) => link(d.data, d))
      .attr("target", link == null ? null : linkTarget)
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    node
      .append("rect")
      .attr("fill", (d, i) => {
        // console.log(d.parent.data.name)
        let index = ['Raw Coal', 'Crude Oil', 'Natural Gas', 'Process'].indexOf(d.parent.data.name)
        return colors[index]
      })
      .attr("fill-opacity", 0.9)
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .attr("stroke-linejoin", strokeLinejoin)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    if (T) {
      node.append("title").text((d, i) => T[i]);
    }

    if (L) {
      // A unique identifier for clip paths (to avoid conflicts).
      const uid = `O-${Math.random().toString(16).slice(2)}`;

      node
        .append("clipPath")
        .attr("id", (d, i) => `${uid}-clip-${i}`)
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0);

      // node
      //   .append("text")
      //   .selectAll("tspan")
      //   .data((d, i) => `${L[i]}`.split(/\n/g))
      //   .join("tspan")
      //   .attr("x", 3)
      //   .attr(
      //     "y",
      //     (d, i, D) => `${(i === D.length - 1) * 0.3 + 1.1 + i * 0.9}em`
      //   )
      //   .attr("fill-opacity", (d, i, D) => {
      //     return i === D.length - 1 ? 0.7 : null;
      //   })
      //   .text((d) => {
      //     console.log(d)
      //     return d.x1 - d.x0 <= 10 ? '' : d
      //   });
      node.append('text')
        .attr('x', 3)
        .attr('y', 15)
        .text(d => d.x1 - d.x0 <= 70 ? '' : d.data.name === 'Move out (-)' ? 'Move out' : d.data.name.substring(0, 10))

      node.append('text')
        .attr('x', 2)
        .attr('y', 35)
        .text(d => d.x1 - d.x0 <= 70 ? "" : d.value.toFixed(2))


    }

    return Object.assign(svg.node(), { scales: { color } });
  };

  treeSum = (data) => {
    let raw_children = [0, 0, 0, 0, 0, 0, 0, 0]
    let crude_children = [0, 0, 0, 0, 0, 0, 0, 0]
    let natural_children = [0, 0, 0, 0, 0, 0, 0, 0]
    let process_children = 0
    for (let i = 0; i < data.length; i++) {
      const rootChildren = data[i].children
      const Raw_Coal_Children = rootChildren[3].children
      const Crude_Oil_Children = rootChildren[0].children
      const Natural_Gas_Children = rootChildren[1].children
      const Process_Children = rootChildren[2].children
      // console.log(rootChildren[0], rootChildren[1], rootChildren[2], rootChildren[3])
      for (let j = 0; j < 8; j++) {
        raw_children[j] += Raw_Coal_Children[j].value
        crude_children[j] += Crude_Oil_Children[j].value
        natural_children[j] += Natural_Gas_Children[j].value
      }
      process_children += Process_Children[0].value
    }
    for (let j = 0; j < 8; j++) {
      raw_children[j] = raw_children[j] / data.length
      crude_children[j] = crude_children[j] / data.length
      natural_children[j] = natural_children[j] / data.length
    }
    process_children = process_children / data.length
    return {
      'name': '',
      'children': [
        {
          'name': 'Raw Coal', 'children': [
            {
              "name": "Indigenous production",
              "value": raw_children[0]
            },
            {
              "name": "Import",
              "value": raw_children[1]
            },
            {
              "name": "Export (-)",
              "value": raw_children[2]
            },
            {
              "name": "Move in",
              "value": raw_children[3]
            },
            {
              "name": "Move out (-)",
              "value": raw_children[4]
            },
            {
              "name": "Stock decrease",
              "value": raw_children[5]
            },
            {
              "name": "Loss",
              "value": raw_children[6]
            },
            {
              "name": "Non-energy use",
              "value": raw_children[7]
            }
          ]
        },
        {
          'name': 'Crude Oil', 'children': [
            {
              "name": "Indigenous production",
              "value": crude_children[0]
            },
            {
              "name": "Import",
              "value": crude_children[1]
            },
            {
              "name": "Export (-)",
              "value": crude_children[2]
            },
            {
              "name": "Move in",
              "value": crude_children[3]
            },
            {
              "name": "Move out (-)",
              "value": crude_children[4]
            },
            {
              "name": "Stock decrease",
              "value": crude_children[5]
            },
            {
              "name": "Loss",
              "value": crude_children[6]
            },
            {
              "name": "Non-energy use",
              "value": crude_children[7]
            }
          ]
        },
        {
          'name': 'Natural Gas', 'children': [
            {
              "name": "Indigenous production",
              "value": natural_children[0]
            },
            {
              "name": "Import",
              "value": natural_children[1]
            },
            {
              "name": "Export (-)",
              "value": natural_children[2]
            },
            {
              "name": "Move in",
              "value": natural_children[3]
            },
            {
              "name": "Move out (-)",
              "value": natural_children[4]
            },
            {
              "name": "Stock decrease",
              "value": natural_children[5]
            },
            {
              "name": "Loss",
              "value": natural_children[6]
            },
            {
              "name": "Non-energy use",
              "value": natural_children[7]
            }
          ]
        },
        { 'name': 'Process', 'children': [{ 'name': 'Cement', 'value': process_children }] }
      ]
    }
  }

  route = (parent, root) => {
    let temp = root;
    if (temp.children) {
      for (let i = 0; i < temp.children.length; i++) {
        let r = temp.children[i];
        this.route(temp, r);
      }
    } else {
      // console.log(parent, temp);
      if (temp.value <= 5) {
        const index = parent.children.indexOf(temp);
        return parent.children.splice(index, 1);
      }
    }
  };
}
