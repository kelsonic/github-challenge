import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import SearchResult from './SearchResult';

export default class SearchBar extends Component {

  constructor() {
    super();

    this.state = {
      searched: false,
      repo: {}
    };
  }

  _findRepo() {
    const owner = $('#owner').val();
    const repo = $('#repo').val();
    const requestedUrl = "https://api.github.com/search/repositories?q=" + repo + '+user:' + owner;

    $.ajax({
      method: "GET",
      url: requestedUrl,
      dataType: "json",
      cache: false,
      success: function(res) {
        console.log(res);
        this.setState({
          searched: true,
          repo: res
        });
      }.bind(this),
      error: function(url, status, err) {
        console.error(url, status, err.toString());
      }
    });
  }


  render () {
    return(
      <div>
        {console.log('searches component mounted!')}
        <input id="owner" type="text" placeholder="ie. kelsonic"></input>
        <input id="repo" type="text" placeholder="ie. example.js"></input>
        <br/>
        <button onClick={this._findRepo.bind(this)}>Find Repository</button>
        <hr />
        <SearchResult 
          searched={this.state.searched}
          repo={this.state.repo}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  repo: PropTypes.object
}