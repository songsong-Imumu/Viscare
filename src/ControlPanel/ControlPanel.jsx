import React from "react";
import "./ControlPanel.css";
import Heading from "../Heading/Heading.jsx";

import { Button, Row, Col, Slider, InputNumber, Select, Switch } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;

export default class ControlPanel extends React.Component {
  render() {
    return (
      <div id={`ControlPanel`} className={"framework"}>
        <Heading title={`Control Panel`}></Heading>
        <Row style={{ marginTop: 35, marginLeft: 5 }}>
          <Col span={6}>
            <Button type="dashed">Year:</Button>
          </Col>
          <Col span={12}>
            <Slider
              min={1998}
              max={2017}
              // onChange={onChange}
              // value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={6}>
            <InputNumber
              min={1998}
              max={2017}
              defaultValue={1998}
              // onChange={onChange}
            ></InputNumber>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={6}>
            <Button type="dashed">Pattern:</Button>
          </Col>
          <Col span={10}>
            <Select
              defaultValue="Beijing"
              style={{ width: 150 }}
              // onChange={handleChange}
            >
              <Option value="Beijing">Beijing</Option>
              <Option value="Tianjin">Tianjin</Option>
              <Option value="Heibei">Heibei</Option>
              <Option value="Shanxi">Shanxi</Option>
              <Option value="InnerMoglia">InnerMoglia</Option>
              <Option value="Liaonning">Liaonning</Option>
              <Option value="Jilin">Jilin</Option>
              <Option value="Heilongjiang">Heilongjiang</Option>
              <Option value="Shanghai">Shanghai</Option>
              <Option value="Jiangsu">Jiangsu</Option>
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Anhui">Anhui</Option>
              <Option value="Fujian">Fujian</Option>
              <Option value="Jiangxi">Jiangxi</Option>
              <Option value="Shandong">Shandong</Option>
              <Option value="Henan">Henan</Option>
              <Option value="Hubei">Hubei</Option>
              <Option value="Hunan">Hunan</Option>
              <Option value="Guangdong">Guangdong</Option>
              <Option value="Guangxi">Guangxi</Option>
              <Option value="Hainan">Hainan</Option>
              <Option value="Sichuan">Sichuan</Option>
              <Option value="Guizhou">Guizhou</Option>
              <Option value="Chongqin">Chongqin</Option>
              <Option value="Shaanxi">Shaanxi</Option>
              <Option value="Gansu">Gansu</Option>
              <Option value="Qinghai">Qinghai</Option>
              <Option value="Ningxia">Ningxia</Option>
              <Option value="Xinjiang">Xinjiang</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              defaultValue="Provinces"
              style={{ width: 120 }}
              // onChange={handleChange}
            >
              <Option value="Provinces">Provinces</Option>
              <Option value="Areas">Areas</Option>
            </Select>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={12}>
            <Button type="dashed">Distribution Scale:</Button>
          </Col>
          <Col span={6}>
            <Slider
              min={1}
              max={10}
              // onChange={onChange}
              // value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={6}>
            <InputNumber
              min={0.1}
              max={1.0}
              defaultValue={0.1}
              // onChange={onChange}
            ></InputNumber>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={6}>
            <Button type="dashed">Sum:</Button>
          </Col>
          <Col span={4}>
            <Switch></Switch>
          </Col>
          <Col span={9}>
            <Button type="dashed">Difference:</Button>
          </Col>
          <Col span={5}>
            <Switch></Switch>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={12}>
            <Button type="dashed">Projection Axis:</Button>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  }
}
