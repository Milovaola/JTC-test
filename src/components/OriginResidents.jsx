import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginalResidents } from "../actions/index";

export class OriginResidents extends Component {
  componentDidMount() {
    const { urls } = this.props;

    this.props.originalResidents(urls);
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
    residents: state.character.originalResidents,
    isLoading: state.isLoading.loadingOriginResidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    originalResidents: urls => dispatch(getOriginalResidents(urls))
  };
};

export const OriginResidentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OriginResidents);
