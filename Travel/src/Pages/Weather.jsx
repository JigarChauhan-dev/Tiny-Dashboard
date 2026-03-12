import React from 'react';
import { Link } from 'react-router-dom';

function Weather() {
  return (
    <div className="weather-page">
      {/* Banner & Breadcrumbs */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9 sec-img">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home <span className="fa fa-angle-right" /></Link></li>
              <li><a href="#pages">Pages <span className="fa fa-angle-right" /></a></li>
              <li className="active">Site Weather</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="weather-body">
        <div className="wrapper">
          <div className="weather-header-text">
            <h3>Climate & Exploration</h3>
            <p>Plan your journey through time with real-time local updates.</p>
          </div>

          <div className="weather-grid">
            
            {/* Main Current Weather Card (Static Data) */}
            <div className="main-weather-card animate-up">
              <div className="card-top">
                <span className="location-tag"><i className="fa fa-map-marker-alt"></i> Hampi, Ancient Ruins</span>
                <span className="date-tag">Tuesday, Jan 20, 2026</span>
              </div>
              
              <div className="temp-main">
                <i className="fa fa-cloud-sun weather-hero-icon"></i>
                <h1>31°<span>C</span></h1>
                <p>Partly Cloudy</p>
              </div>

              <div className="high-low">
                <span>H: 34°</span>
                <span>L: 24°</span>
              </div>
            </div>

            {/* Details & Tips (Static Data) */}
            <div className="weather-info-group">
              <div className="info-grid">
                <div className="info-box animate-right" style={{animationDelay: '0.2s'}}>
                  <i className="fa fa-tint"></i>
                  <h5>Humidity</h5>
                  <p>42%</p>
                </div>
                <div className="info-box animate-right" style={{animationDelay: '0.3s'}}>
                  <i className="fa fa-sun"></i>
                  <h5>UV Index</h5>
                  <p>High (7)</p>
                </div>
                <div className="info-box animate-right" style={{animationDelay: '0.4s'}}>
                  <i className="fa fa-wind"></i>
                  <h5>Wind</h5>
                  <p>14 km/h</p>
                </div>
                <div className="info-box animate-right" style={{animationDelay: '0.5s'}}>
                  <i className="fa fa-eye"></i>
                  <h5>Visibility</h5>
                  <p>10 km</p>
                </div>
              </div>

              {/* Traveler Recommendation (Static Data) */}
              <div className="recommendation-card animate-up" style={{animationDelay: '0.6s'}}>
                <h4><i className="fa fa-lightbulb"></i> Exploration Tip</h4>
                <p>
                  The UV index is high today. We recommend exploring the indoor museum sections between 
                  12:00 PM and 3:00 PM. Stay hydrated and wear a wide-brimmed hat while visiting the outer temples.
                </p>
              </div>
            </div>
          </div>

          {/* 5-Day Forecast (Static Data) */}
          <div className="forecast-section animate-up" style={{animationDelay: '0.8s'}}>
            <h4>Weekly Outlook</h4>
            <div className="forecast-flex">
              <div className="forecast-item">
                <span className="day">Wed</span>
                <i className="fa fa-sun"></i>
                <span className="temp">32°</span>
              </div>
              <div className="forecast-item">
                <span className="day">Thu</span>
                <i className="fa fa-cloud-sun"></i>
                <span className="temp">29°</span>
              </div>
              <div className="forecast-item">
                <span className="day">Fri</span>
                <i className="fa fa-cloud-rain"></i>
                <span className="temp">28°</span>
              </div>
              <div className="forecast-item">
                <span className="day">Sat</span>
                <i className="fa fa-sun"></i>
                <span className="temp">30°</span>
              </div>
              <div className="forecast-item">
                <span className="day">Sun</span>
                <i className="fa fa-sun"></i>
                <span className="temp">33°</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Weather;