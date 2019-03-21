import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';

class ErrorPage extends Component {

    componentDidMount(){
        const sideMenu = document.querySelector("ul");
        sideMenu.classList.remove("open");
        this.props.setMessage('Error');
    }

    render(){
        return (
            <div id="ContentWrapper">
                ErrorPage
            </div>
        );
    }
}

ErrorPage.propTypes = {
    setMessage: PropTypes.func.isRequired
}

export default connect(null, { setMessage })(ErrorPage);