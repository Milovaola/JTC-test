import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginPlanet } from "../actions/index";
import { OriginResidentsContainer } from "./OriginResidents";
import { Location } from "./Location";

class OriginLocation extends Component {
  componentDidMount() {
    const { dispatch, url } = this.props;
    if (url) {
      dispatch(getOriginPlanet(url));
    }
  }

  render() {
    const { name, origin } = this.props;

    return (
      <Location
        header={this.props.children}
        name={name || "—"}
        typeLocation={origin}
        type={origin.type || "—"}
        dimension={origin.dimension || "—"}
        residents={
          (origin.residents && (
            <OriginResidentsContainer urls={origin.residents} />
          )) ||
          "—"
        }
        created={origin.created || "—"}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    origin: state.character.origin
  };
};

export const OriginLocationContainer = connect(mapStateToProps)(OriginLocation);
