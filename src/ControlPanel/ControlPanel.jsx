import React from "react";
import "./ControlPanel.css";
import Heading from "../Heading/Heading.jsx";
import NMap from "../Map/Map";

import { Button, Row, Col, Slider, InputNumber, Select, Switch, Input } from "antd";
import "antd/dist/antd.css";
import { ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, PoweroffOutlined, ReloadOutlined, CloseOutlined } from '@ant-design/icons';
const { Option } = Select;

export default class ControlPanel extends React.Component {
  componentDidMount() {
    const { Year } = this.props
    this.setState({ Year: Year })
  }
  state = {
    Year: 2012,
    Province: "Beijing",
    Pattern: 'Provinces',
    Scale: 4
  };
  render() {
    const { Province, Pattern, Scale } = this.state;
    const { Year } = this.props;
    return (
      <div id={`ControlPanel`} className={"framework"}>
        <Heading title={`Control Panel`}></Heading>
        <Row style={{ marginTop: 35, marginLeft: 5 }}>
          <Col span={5}>
            <Button type="dashed">Year:</Button>
          </Col>
          <Col span={12}>
            <Slider
              min={1998}
              max={2017}
              defaultValue={2012}
              value={Year}
              onChange={this.changeYear}
            // value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={6}>
            <InputNumber
              min={1998}
              max={2017}
              value={Year}
            // defaultValue={2012}
            // onChange={changeYearNumber}
            ></InputNumber>
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={6}>
            <Button type="dashed">Pattern:</Button>
          </Col>
          <Col span={8}>
            <Select
              defaultValue="Provinces"
              style={{ width: 120 }}
              onChange={this.changePattern}
            >
              <Option value="Provinces">Provinces</Option>
              <Option value="Areas">Areas</Option>
            </Select>
          </Col>
          <Col span={10}>
            <Select
              defaultValue="Beijing"
              style={{ width: 150 }}
              onChange={this.changeProvince}
            >
              <Option value="Beijing">Beijing</Option>
              <Option value="Tianjin">Tianjin</Option>
              <Option value="Hebei">Hebei</Option>
              <Option value="Shanxi">Shanxi</Option>
              <Option value="InnerMongolia">InnerMongolia</Option>
              <Option value="Liaoning">Liaoning</Option>
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
              <Option value="Chongqing">Chongqing</Option>
              <Option value="Shaanxi">Shaanxi</Option>
              <Option value="Gansu">Gansu</Option>
              <Option value="Qinghai">Qinghai</Option>
              <Option value="Ningxia">Ningxia</Option>
              <Option value="Xinjiang">Xinjiang</Option>
            </Select>
            {/* <Input value={Province} style={{ width: 150 }}></Input> */}
          </Col>
        </Row>
        <Row style={{ marginTop: 10, marginLeft: 5 }}>
          <Col span={10}>
            <Button type="dashed">Distribution Scale:</Button>
          </Col>
          <Col span={8}>
            <Slider
              min={1}
              max={10}
              defaultValue={4}
              onChange={this.changeScale}
            // value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Col>
          <Col span={6}>
            <Input style={{ width: '85px' }} value={Scale / 10}></Input>
            {/* <InputNumber
              min={1}
              max={10}
              defaultValue={Scale / 10}
            ></InputNumber> */}
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
          <Col span={9}>
            <Button type="dashed">Projection Axis:</Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' icon={<ArrowUpOutlined />}
              onclick="upLine()">
            </Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' icon={<ArrowDownOutlined />}
              onclick="downLine()">
            </Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' onclick="" icon={<ArrowLeftOutlined />}>
            </Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' onclick="" icon={<ArrowRightOutlined />}>
            </Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' icon={<PoweroffOutlined />}
              onClick={this.drawLine}>
            </Button>
          </Col>
          <Col span={2}>
            <Button type="" class='run' icon={<ReloadOutlined />}
              onclick="clockwise2(1)">
            </Button>
          </Col>
          <Col span={1}>
            <Button type="" class='run' icon={<CloseOutlined />}
              onclick="">
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
  changeYear = (Year) => {
    this.setState({ Year: Year });
    this.props.callback({
      Year: Year,
      Province: this.state.Province,
      Pattern: this.state.Pattern,
    });
  };
  changeProvince = (Province) => {
    this.setState({ Province: Province });
    this.props.callback({
      Year: this.state.Year,
      Province: Province,
      Pattern: this.state.Pattern,
    });
  };
  changePattern = (Pattern) => {
    this.setState({ Pattern: Pattern });
    this.props.callback({
      Year: this.state.Year,
      Province: this.state.Province,
      Pattern,
    });
  };
  changeScale = (Scale) => {
    this.setState({ Scale: Scale });
  }
  drawLine = () => {
    this.setState({ DrawLine: false })
    this.props.callback({
      Year: this.state.Year,
      Province: this.state.Province,
      Pattern: this.state.Pattern,
      DrawLine: false
    })
  }
}
