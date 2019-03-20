import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';

const ErrorPage = props => {

    props.setMessage('Error');

    return (
        <div id="ContentWrapper">
            ErrorPage
        </div>
    );
}

ErrorPage.propTypes = {
    setMessage: PropTypes.func.isRequired
}

export default connect(null, { setMessage })(ErrorPage);