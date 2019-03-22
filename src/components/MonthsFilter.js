import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class MonthsFilter extends Component {
  render() {
    return (
      <Dropdown as={ButtonGroup} drop={'right'}>
        <Button variant="info">Months</Button>

        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item>January</Dropdown.Item>
          <Dropdown.Item>February</Dropdown.Item>
          <Dropdown.Item>March</Dropdown.Item>
          <Dropdown.Item>April</Dropdown.Item>
          <Dropdown.Item>May</Dropdown.Item>
          <Dropdown.Item>June</Dropdown.Item>
          <Dropdown.Item>July</Dropdown.Item>
          <Dropdown.Item>August</Dropdown.Item>
          <Dropdown.Item>September</Dropdown.Item>
          <Dropdown.Item>October</Dropdown.Item>
          <Dropdown.Item>November</Dropdown.Item>
          <Dropdown.Item>December</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default MonthsFilter;
