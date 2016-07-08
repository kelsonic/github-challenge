import React, {Component, PropTypes} from 'react';

export default class SearchResult extends Component {

  constructor() {
    super();

    this.state = {
      favorites: []
    }
  }

  _addFav() {
    this.setState()
  }

  render() {
    if (this.props.searched) {
      return (
        <div>
          <center>
            <h3>{this.props.repo.items[0].full_name}</h3>
            <button onClick={this._addFav.bind(this)} id="add">Add</button>
          </center>
        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      );
    }
  }
}

SearchResult.propTypes = {
  repo: PropTypes.object
}