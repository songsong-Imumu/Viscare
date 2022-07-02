import React from 'react'
import './Network.css'
import Heading from '../Heading/Heading.jsx'
export default class Network extends React.Component {
  render() {
    return (
      <div id={`Network`} className={'framework'}>
        <Heading title={`Network View`}></Heading>
      </div>
    )
  }
}
