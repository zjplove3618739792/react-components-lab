import React from 'react';
import WeatherForecast from './WeatherForecast';

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast, index) => (
          <WeatherForecast 
            key={index}
            day={forecast.day}
            img={forecast.img}
            imgAlt={forecast.imgAlt}
            conditions={forecast.conditions}
            time={forecast.time}
          />
        ))}
      </section>
    </>
  );
}

export default App;