import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisodes } from "../actions/index";
import "../css/personalCard.css";

export class Episodes extends Component {
  componentDidMount() {
    const { urls } = this.props;

    this.props.getEpisodes(urls);
  }

  render() {
    return (
      <div className="episode-block">
        <h3>{this.props.children}</h3>
        <ol>
          {!this.props.isLoading && this.props.episodes ? (
            this.props.episodes.map((item, index) => (
              <li key={index}>
                <p>Сезон и номер серии: {item.episode} </p>
                <p>Название эпизода: {item.name}</p>
              </li>
            ))
          ) : (
            <>Идет загрузка...</>
          )}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading.episodeLoader,
    episodes: state.character.episodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEpisodes: urls => dispatch(getEpisodes(urls))
  };
};

export const EpisodesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes);
