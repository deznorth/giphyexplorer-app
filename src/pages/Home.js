/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-20 16:35:05  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-20 21:30:16
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions/gifActions';
import { setMessage } from '../actions/headerActions';
import DisplayCard from '../components/DisplayCard/DisplayCard';

class Home extends Component {

    componentDidMount(){
        this.props.setMessage('All Gifs!');
        this.props.fetchTrending();
    }

    render () {
        const gifs = this.props.gifs.map(gif => (
            <DisplayCard 
                    key={gif.id} 
                    title={gif.title === '' || gif.title === ' ' ? 'Untitled' : gif.title} 
                    url={gif.images.fixed_width_downsampled.url}
            />
        ));

        return (
        <div id="ContentWrapper">
            {gifs}
        </div>
        );
    }
}

Home.propTypes = {
    setMessage: PropTypes.func.isRequired,
    fetchTrending: PropTypes.func.isRequired,
    gifs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    gifs: state.gifs.items
});

export default connect(mapStateToProps, { fetchTrending, setMessage })(Home);