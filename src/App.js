/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-02-09 02:18:16 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-17 14:17:09
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';
import Random from './pages/Random';
import Results from './pages/Results';

class App extends Component {

  state = {
    headerMessage: 'All Gifs!'
  }

  updateMessage = (message) => {
    this.setState({
      headerMessage: message
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header message={this.state.headerMessage} updateMessage={this.updateMessage} />
          <div id="PageWrapper">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/random" component={Random} exact />
              <Route path="/results/:query" component={Results} exact />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
