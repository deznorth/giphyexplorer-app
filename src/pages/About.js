import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';

const About = props => {

    props.setMessage('About GIPHYExplorer');

    return (
        <div id="ContentWrapper">
            About
        </div>
    );
}

About.propTypes = {
    setMessage: PropTypes.func.isRequired
}

export default connect(null, { setMessage })(About);