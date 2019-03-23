import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class YearsFilter extends Component {
  render() {
    return (
      <Dropdown as={ButtonGroup}>
        <Button variant="info">Years</Button>

        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.props.onChangeYear(2019)}>2019</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeYear(2020)}>2020</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeYear(2021)}>2021</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default YearsFilter;
