import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

export default class Display extends Component {
  render() {
    return (
      <div>
        <Form/>
        <Table />
      </div>
    )
  }
}
