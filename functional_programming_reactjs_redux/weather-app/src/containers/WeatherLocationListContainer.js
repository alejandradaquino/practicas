import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadWeather } from "../actions";
import WeatherLocationList from "../components/weatherLocationList";
import { getCitiesNames, getCitiesWeather } from "../reducers";

class WeatherLocationListContainer extends Component {
  componentDidMount() {
    this.props.citiesNames.forEach((city) => {
      this.props.loadWeather(city);
    });
  }

  render() {
    return (
      <WeatherLocationList citiesNames= {this.props.citiesNames} cities={this.props.cities}></WeatherLocationList>
    );
  }
}

WeatherLocationListContainer.propTypes = {
  cities: PropTypes.object.isRequired,
  loadWeather: PropTypes.func.isRequired,
};

const mapDispatchoProps = (dispatch) => ({
  loadWeather: (city) => dispatch(loadWeather(city)),
});

const mapStateToProps = (state) => {
  return {
    cities: getCitiesWeather(state),
    citiesNames: getCitiesNames(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchoProps
)(WeatherLocationListContainer);
