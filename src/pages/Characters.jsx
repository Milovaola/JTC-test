import React, { Component } from "react";
import "../css/characters.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Card } from "../components/Card";
import { PaginationContainer } from "../components/Pagination";
import { Preloader } from "../components/Preloader";

class Characters extends Component {
  render() {
    return (
      <main className="characters">
        <PaginationContainer url={this.props.characters} />
        {!this.props.isLoading && this.props.characters ? (
          this.props.characters.map((item, index) => (
            <div key={index}>
              <Link to={`/characters/${item.id}`}>
                <Card
                  {...item}
                  classNameCard="character-card"
                  classNameCardInfo="character-card__info"
                />
              </Link>
            </div>
          ))
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters.results,
    isLoading: state.isLoading.loadingCharacters
  };
};

export const CharactersContainer = connect(mapStateToProps)(Characters);
