import React, { Component } from 'react';
import CountriesFilter from './CountriesFilter';
import YearsFilter from './YearsFilter';
import MonthsFilter from './MonthsFilter';

const URL_API="https://date.nager.at/api/v2/publicholidays"
const PROXY_URL = "https://obscure-citadel-86298.herokuapp.com/"

class Home extends Component {
  constructor(){
    super();

    this.state = ({
      year:2019,
      country: "US"
    })
  }

  onChangeYear = (newyear) => {
    this.setState({year:newyear})
  }

  onChangeCountry = (newcountry) => {
    this.setState({country:newcountry})
  }

  componentDidMount(){
    fetch(`${PROXY_URL}${URL_API}/${this.state.year}/${this.state.country}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":'http://localhost:3000',
        mode:'no-cors'
      },
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    console.log(this.state.country, this.state.year)
    return (
      <React.Fragment>
        <h1>Fechas célebres</h1>
        <div className="home-container">
          <CountriesFilter country={this.state.country} onChangeCountry={this.onChangeCountry}/>
          <YearsFilter year={this.state.year} onChangeCountry={this.state.onChangeYear}/>
          <MonthsFilter />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
