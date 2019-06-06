import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentResidents } from "../actions/index";

export class CurrentResidents extends Component {
  componentDidMount() {
    const { urls } = this.props;

    this.props.currentResidents(urls);
  }

  render() {
    return (
      <>
        {!this.props.isLoading && this.props.residents ? (
          this.props.residents.map(({ name }) => name).join(", ")
        ) : (
          <>LOADING...</>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    residents: state.character.currentResidents,
    isLoading: state.isLoading.loadingLocationResidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentResidents: urls => dispatch(getCurrentResidents(urls))
  };
};

export const CurrentResidentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentResidents);
