import React from 'react';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {

  render() {   
    return (
      <>
        <h3>Weather:</h3>
        {
          this.props.weather.map((day, index) => (
            <WeatherDay key={index} day={day} />
             ))
        }
      </>
    )
  }
}
export default Weather;