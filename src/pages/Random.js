import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';
import { fetchRandom } from '../actions/gifActions';
import RandomDisplay from '../components/RandomDisplay/RandomDisplay';

class Random extends Component {

    componentDidMount(){
        const sideMenu = document.querySelector("ul");
        sideMenu.classList.remove("open");
        this.props.setMessage('Random');
        this.props.fetchRandom();
    }

    render(){        

        return (
            <div id="RandomWrapper">
                <RandomDisplay {...this.props.gif} />
            </div>
        );
    }
}

Random.propTypes = {
    setMessage: PropTypes.func.isRequired,
    fetchRandom: PropTypes.func.isRequired,
    gif: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    gif: state.gifs.item
});

export default connect(mapStateToProps, { setMessage, fetchRandom })(Random);