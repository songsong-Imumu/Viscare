import React from 'react'
import './Parallel.css'
import Heading from '../Heading/Heading.jsx'
export default class Parallel extends React.Component {
  render() {
    return (
      <div id={`Parallel`} className={'framework'}>
        <Heading title={`Parallel View`}></Heading>
      </div>
    )
  }
}