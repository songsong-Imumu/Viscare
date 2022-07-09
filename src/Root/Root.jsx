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
  };
  render() {
    const { Year, Province, Pattern } = this.state;
    return (
      <div id="Root">
        <ControlPanel Year={Year} callback={this.getAttribute}></ControlPanel>
        <Network Year={Year}></Network>
        <Sunburst Year={Year}></Sunburst>
        <NMap Year={Year} Pattern={Pattern}></NMap>
        <TreeMap Year={Year} Province={Province}></TreeMap>
        <Parallel Year={Year} callback={this.getParallelYear}></Parallel>
      </div>
    );
  }
  getAttribute = (d) => {
    const { Year, Province, Pattern } = d;
    this.setState({ Year: Year, Province: Province, Pattern: Pattern });
  };
  getParallelYear = (d) => {
    const { Year } = d;
    this.setState({ Year: Year })
  }
}
