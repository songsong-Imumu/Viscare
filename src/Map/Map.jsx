import React from "react";
import "./Map.css";
import Heading from "../Heading/Heading.jsx";
import mapboxgl from "mapbox-gl";

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic29uZ3Nvbmdzb25nc29uZyIsImEiOiJjazc5NWY4MjQwcHB1M2VwNnp2OXhmanNjIn0.FkXJaX3YW602OvwUm9uH1g";
    const map = new mapboxgl.Map({
      container: "map",
      // 灰 黑 蓝
      style: "mapbox://styles/songsongsongsong/cki043mzz1cx519sghufqehoy",
      // style: 'mapbox://styles/songsongsongsong/cka4lyt08098m1imntn7ckjdl',
      // style: 'mapbox://styles/songsongsongsong/ck79xfszr19ku1intafbpd4fv',
      center: [104.2, 37.9],
      zoom: 3.1,
      // minZoom: 3.10,
      // maxZoom: 3.10,
      dragPan: true,
    });
    this.drawMap();
  }
  render() {
    const width = 830;
    const height = 555;
    return (
      <div id={`Map`} className={"framework"}>
        <Heading title={`Map View`}></Heading>
        <div id="map" style={{ height: height, width: width }}></div>
      </div>
    );
  }
  drawMap = () => {
    // this.setState({ map: map });
    // map.on('load', function () {
    // })
    // const marker = new mapboxgl.Marker({
    //   draggable: true
    // }).setLngLat([103.5, 37.9])
    //   .addTo(map)
    // let position = []
    // function ondrag() {
    //   const lngLat = marker.getLngLat();
    //   position.push([lngLat.lng, lngLat.lat])
    //   console.log(position)
    // }
    // marker.on('dragend', ondrag)
  };
}
