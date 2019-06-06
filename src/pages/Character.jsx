import React, { Component } from "react";
import { connect } from "react-redux";
import { Preloader } from "../components/Preloader";
import { OriginLocationContainer } from "../components/OriginLocation";
import { CurrentLocationContainer } from "../components/CurrentLocation";
import { EpisodesContainer } from "../components/Episodes";
import { getCharacter, clearCharacter } from "../actions/index";
import { Card } from "../components/Card";
import "../css/personalCard.css";

class Character extends Component {
  componentDidMount() {
    const { match } = this.props;

    this.props.loadCharacter(match.params.id);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    return (
      <>
        {!this.props.isLoading ? (
          <>
            <Card
              name={this.props.character.name}
              image={this.props.character.image}
              status={this.props.character.status}
              species={this.props.character.species}
              gender={this.props.character.gender}
              origin={this.props.character.origin}
              location={this.props.character.location}
              classNameCard="personal-card"
              classNameCardInfo="personal-card__info"
            />
            <div className="block-location">
              {this.props.origin && (
                <OriginLocationContainer
                  name={this.props.origin.name}
                  url={this.props.origin.url}
                >
                  ПОДРОБНАЯ ИНФОРМАЦИЯ О МЕСТЕ ПРОИСХОЖДЕНИЯ
                </OriginLocationContainer>
              )}
              {this.props.location && (
                <CurrentLocationContainer
                  name={this.props.location.name}
                  url={this.props.location.url}
                >
                  ПОДРОБНАЯ ИНФОРМАЦИЯ О ТЕКУЩЕМ МЕСТОПОЛОЖЕНИИ
                </CurrentLocationContainer>
              )}
            </div>

            {this.props.character.episode && (
              <EpisodesContainer urls={this.props.character.episode}>
                В КАКИХ ЭПИЗОДАХ ПОЯВЛЯЛСЯ ПЕРСОНАЖ
              </EpisodesContainer>
            )}
          </>
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.character.info,
    origin: state.character.info.origin,
    location: state.character.info.location,
    isLoading: state.isLoading.loadingCharacters
  };
};

const mapDispatchToProps = dispatch => ({
  loadCharacter: id => dispatch(getCharacter(id)),
  clearState: () => dispatch(clearCharacter())
});

export const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
