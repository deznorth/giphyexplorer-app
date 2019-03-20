/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-02-09 02:18:19 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-20 18:10:26
 */
import  React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuery } from '../../actions/headerActions';
import './SearchBar.scss';

//Come Back to this, functionality is not there yet

class SearchBar extends Component {

    state = {
        query: ''
    }

    handleInput = (e) => {
        const target = e.target;
        this.setState({ [target.name]: target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateQuery(this.state.query);
        this.props.history.replace(`/results/${this.state.query}`);
    }

    render(){
        return (
            <div className="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type="text" placeholder="Search" name="query"/>
                    <button type="submit">Find</button>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    updateQuery: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    query: state.header.query
});

export default connect(mapStateToProps, { updateQuery })(withRouter(SearchBar));