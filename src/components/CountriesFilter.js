import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class CountriesFilter extends Component {
  render() {
    return (
      <Dropdown as={ButtonGroup}>
        <Button variant="info">Countries</Button>

        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.props.onChangeCountry("MX")}>México-Mx</Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.onChangeCountry("US")}>Estados Unidos-US</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CountriesFilter;
