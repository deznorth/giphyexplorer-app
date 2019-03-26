/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-02-09 02:18:16 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-25 17:42:49
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/Header';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Random from './pages/Random';
import Results from './pages/Results';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
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
      </Provider>
    );
  }
}

export default App;
