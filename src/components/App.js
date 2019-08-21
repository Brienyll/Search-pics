import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 7fdb4947c7da3e3dd4b93814e0841927b0a9db154aaddc2107279ee91ba492af'
      }
    });
  }
  render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    )
  }
};

export default App;