import React from "react";
import ControlPanel from "../ControlPanel/ControlPanel.jsx";
import Network from "../Network/Network.jsx";
import Sunburst from "../Sunburst/Sunbrst.jsx";
import NMap from "../Map/Map.jsx";
import TreeMap from "../TreeMap/TreeMap.jsx";
import Parallel from "../Parallel/Parallel.jsx";
import { Header } from "antd/lib/layout/layout.js";

export default class Root extends React.Component {
  state = {
    Year: 2012,
    Province: "Beijing",
    Pattern: "Provinces",
    Province_Array: new Array(30).fill(0).map((_, i) => i),
    // Province_Array: [
    //   8,
    //   9,
    //   10,
    //   11,
    //   12,
    //   13,
    //   14,
    //   16,
    //   15
    // ]
  };
  render() {
    const { Year, Province, Pattern, Province_Array } = this.state;
    return (
      <div id="Root">
        <ControlPanel Year={Year} callback={this.getAttribute}></ControlPanel>
        <Network Year={Year}></Network>
        <Sunburst Year={Year}></Sunburst>
        <NMap Year={Year} Pattern={Pattern} callback={this.getProvince}></NMap>
        <TreeMap Year={Year} Province_Array={Province_Array} Province={Province}></TreeMap>
        <Parallel Year={Year} Province={Province} Province_Array={Province_Array} callback={this.getParallelYear}></Parallel>
      </div>
    );
  }
  getAttribute = (d) => {
    const { Year, Province, Pattern } = d;
    this.setState({ Year: Year, Province: Province, Pattern: Pattern });
  };
  getParallelYear = (d) => {
    const { Year, Province_Array } = d;
    this.setState({ Year: Year, Province_Array: Province_Array })
  }
  getProvince = (d) => {
    const { Province } = d;
    this.setState({ Province: Province })
  }
}
