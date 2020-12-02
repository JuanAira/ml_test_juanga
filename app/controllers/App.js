    
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import SearchBar from '../components/SearchBar';
import Items from '../components/ItemsSection';
import Styles from '../components/styles/styles.css';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
          redirectToItems: false,
          search: '',
          items: []
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(query) {
      this.setState({
        redirectToItems: true,
        search: query
      })
    }


    render() {
        const { redirectToItems } = this.state;
        const { search } = this.state;

        if(redirectToItems) {
          return (
            <div>
                <App/>
                <Redirect push to={{ pathname: '/items', search: `search=${search}` }} />
            </div>
          )
        }

        return (
          <div className="App">
            <SearchBar onSubmit={this.handleSubmit} />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/items' component={Items} />
              </Switch>
          </div>
        )
    }
};
  
export default App;