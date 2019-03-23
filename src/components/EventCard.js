import React, { Component } from 'react';

class EventCard extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>EventCard</h2>
        {this.props.festiveDays.map((event, index)  => {
          return(
            <div key={index}>
              <h2>{event.name}</h2>
              <h4>{event.date}</h4>
            </div>
          );
        })
        }
      </React.Fragment>
    );
  }
}

export default EventCard;
