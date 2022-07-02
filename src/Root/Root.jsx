import React from "react";
import ControlPanel from "../ControlPanel/ControlPanel.jsx";
import Network from "../Network/Network.jsx";
import Sunburst from "../Sunburst/Sunbrst.jsx";
import Map from "../Map/Map.jsx";
import TreeMap from "../TreeMap/TreeMap.jsx";
import Parallel from "../Parallel/Parallel.jsx";
import { Header } from "antd/lib/layout/layout.js";

export default class Root extends React.Component {
  render() {
    return (
      <div id="Root">
        <ControlPanel></ControlPanel>
        <Network></Network>
        <Sunburst></Sunburst>
        <Map></Map>
        <TreeMap></TreeMap>
        <Parallel></Parallel>
      </div>
    );
  }
}