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
    Year: 2012
  }
  render() {
    const { Year } = this.state
    return (
      <div id="Root">
        <ControlPanel callback={this.getAttribute}></ControlPanel>
        <Network></Network>
        <Sunburst Year={Year}></Sunburst>
        <NMap Year={Year}></NMap>
        <TreeMap></TreeMap>
        <Parallel></Parallel>
      </div>
    );
  }
  getAttribute = (d) => {
    const { Year } = d;
    this.setState({ Year: Year });
  }
}
