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
          <Dropdown.Item onClick={() => this.props.onChangeMonth("all")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("January")}>January</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("February")}>February</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("March")}>March</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("April")}>April</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("May")}>May</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("June")}>June</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("July")}>July</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("August")}>August</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("September")}>September</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("October")}>October</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("November")}>November</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeMonth("December")}>December</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default MonthsFilter;
