import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';

const Random = props => {

    props.setMessage('Random');

    return (
        <div id="ContentWrapper">
            Random
        </div>
    );
}

Random.propTypes = {
    setMessage: PropTypes.func.isRequired
}

export default connect(null, { setMessage })(Random);