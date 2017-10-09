// @flow
import React, { Component } from 'react';

import {Button, Row, Col} from 'antd';

export default class App extends Component {
  render() {
    return (
      <div>
      <Row>
    <Col xs={10}>Col</Col>
    <Col xs={10}>
      <Button>Run</Button>
    </Col>
  </Row>
      </div>
    );
  }
}
