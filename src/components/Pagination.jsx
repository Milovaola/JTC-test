import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/characters.css";
import { getCharacters } from "../actions/index";

export class Pagination extends Component {
  componentDidMount() {
    this.props.uploadCharacters();
  }

  getPage = url => {
    this.props.uploadCharacters(url);
  };

  handleClickPrevPage = () => {
    const { paginator } = this.props;

    if (paginator.prev) {
      this.getPage(paginator.prev);
    }
  };

  handleClickNextPage = () => {
    const { paginator } = this.props;

    if (paginator.next) {
      this.getPage(paginator.next);
    }
  };

  render() {
    return (
      <div className="pagination">
        <div className="pagination-buttons">
          <button
            disabled={
              this.props.paginator && this.props.paginator.prev === ""
            }
            onClick={this.handleClickPrevPage}
          >
            Предыдущая страница
          </button>
          <button
            onClick={this.handleClickNextPage}
            disabled={
              this.props.paginator && this.props.paginator.next === ""
            }
          >
            Следующая страница
          </button>
        </div>
        <p>
          Total characters:{" "}
          {this.props.paginator && this.props.paginator.count}
        </p>
        <p>
          Total pages: {this.props.paginator && this.props.paginator.pages}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    paginator: state.characters.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadCharacters: url => dispatch(getCharacters(url))
  };
};

export const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
