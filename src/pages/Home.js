import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

export default class HomePage extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Search GitHub Repos to Favorite!</h1>
        <SearchBar />
      </div>
    );
  }
}
