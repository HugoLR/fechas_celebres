import React, { Component } from 'react';
const moment = require('moment');

class EventCard extends Component {
  render() {
    const month = this.props.month

    return (
      <React.Fragment>
        <h2>EventCard</h2>
        {this.props.festiveDays.map((event, index)  => {
          return(
            <div key={index}>
              {
                month === '' &&
                <React.Fragment>
                  <h3>{event.name}</h3>
                  <h4>{event.date}</h4>
                </React.Fragment>
              }
              {
                month === moment(event.date).format('MMMM') &&
                <React.Fragment>
                  <h3>{event.name}</h3>
                  <h4>{event.date}</h4>
                </React.Fragment>
              }
            </div>
          );
        })
        }
      </React.Fragment>
    );
  }
}

export default EventCard;
