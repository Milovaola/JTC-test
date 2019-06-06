import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentPlanet } from "../actions/index";
import { Location } from "./Location";
import { CurrentResidentsContainer } from "./CurrentResidents";

class CurrentLocation extends Component {
  componentDidMount() {
    const { dispatch, url } = this.props;
    if (url) {
      dispatch(getCurrentPlanet(url));
    }
  }

  render() {
    const { name, location } = this.props;

    return (
      <Location
        header={this.props.children}
        name={name || "—"}
        typeLocation={location}
        type={location.type || "—"}
        dimension={location.dimension || "—"}
        residents={
          (location.residents && (
            <CurrentResidentsContainer urls={location.residents} />
          )) ||
          "—"
        }
        created={location.created || "—"}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.character.location
  };
};

export const CurrentLocationContainer = connect(mapStateToProps)(
  CurrentLocation
);
