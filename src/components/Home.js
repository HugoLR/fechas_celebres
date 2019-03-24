import React, { Component } from 'react';
import CountriesFilter from './CountriesFilter';
import YearsFilter from './YearsFilter';
import MonthsFilter from './MonthsFilter';
import EventCard from './EventCard';

const URL_API="https://date.nager.at/api/v2/publicholidays"
const PROXY_URL = "https://obscure-citadel-86298.herokuapp.com/"


class Home extends Component {
  constructor(){
    super();

    this.state = ({
      year:2019,
      country: "MX",
      festiveDays:[],
      month: "all"
    })
  }

  onChangeYear = (newyear) => {
    this.setState({year:newyear})
  }

  onChangeCountry = (newcountry) => {
    this.setState({country:newcountry})
  }

  onChangeMonth = (newmonth) => {
    this.setState({month:newmonth})
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
        const festiveDays = data
        this.setState({
          festiveDays:festiveDays
        })
      })
  }

  componentDidUpdate(prevProps,prevState){
    if (this.state.year !== prevState.year || this.state.country !== prevState.country || this.state.month !== prevState.month) {
      fetch(`${PROXY_URL}${URL_API}/${this.state.year}/${this.state.country}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":'http://localhost:3000',
          mode:'no-cors'
        },
      }).then(response => response.json())
        .then(data => {
          const festiveDays = data
          this.setState({
            festiveDays:festiveDays
          })
        })
    }
  }

  render() {
    console.log(this.state.country, this.state.year, this.state.month, this.state.festiveDays)
    return (
      <div className="home-container">
        <h1 className="home-title">Festive Days</h1>
        <div className="filters-cards-container">
          <div className="home-filters-container">
            <CountriesFilter country={this.state.country} onChangeCountry={this.onChangeCountry}/>
            <YearsFilter year={this.state.year} onChangeYear={this.onChangeYear}/>
            <MonthsFilter month={this.state.month} onChangeMonth={this.onChangeMonth} />
          </div>
          <EventCard festiveDays={this.state.festiveDays} month={this.state.month} year={this.state.year} country={this.state.country}/>
        </div>
      </div>
    );
  }
}

export default Home;
