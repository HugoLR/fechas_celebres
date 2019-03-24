import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
const moment = require('moment');

class EventCard extends Component {
  render() {
    const { month, year, country } = this.props

    return (
      <div className="eventcard-main-container">
        <h2 className="event-subheading">{`${country} Events from ${month} in ${year} `}</h2>
        <div className="cards-container">
        {this.props.festiveDays.map((event, index)  => {
          return(
            <Card className={month === moment(event.date).format('MMMM') || month === 'all' ? 'card': 'empty-card'} key={index}>
              {
                month === 'all' &&
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.date}</Card.Text>
                </Card.Body>
              }
              {
                month === moment(event.date).format('MMMM') &&
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.date}</Card.Text>
                </Card.Body>
              }
            </Card>
          );
        })
        }
        </div>
      </div>
    );
  }
}

export default EventCard;
