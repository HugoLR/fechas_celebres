import React, { Component } from 'react';
import CountriesFilter from './CountriesFilter';
import YearsFilter from './YearsFilter';
import MonthsFilter from './MonthsFilter';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Fechas célebres</h1>
        <div className="home-container">
          <CountriesFilter />
          <YearsFilter />
          <MonthsFilter />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
