/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-20 16:35:05  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-25 17:11:42
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions/gifActions';
import { setMessage } from '../actions/headerActions';
import DisplayCard from '../components/DisplayCard/DisplayCard';
import Pagination from '../components/Pagination/Pagination';

class Home extends Component {

    componentDidMount(){
        const sideMenu = document.querySelector("ul");
        sideMenu.classList.remove("open");
        this.props.setMessage('All Gifs!');
        this.props.fetchTrending(this.props.currentPage);
    }

    componentDidUpdate(prevProps){
        if(this.props.currentPage !== prevProps.currentPage){
            this.props.fetchTrending(this.props.currentPage);
        }
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
        <div id="HomePage">
            <div id="ContentWrapper">
                {gifs}
            </div>
            <Pagination />
        </div>
        
        );
    }
}

Home.propTypes = {
    setMessage: PropTypes.func.isRequired,
    fetchTrending: PropTypes.func.isRequired,
    gifs: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    gifs: state.gifs.items,
    currentPage: state.gifs.currentPage
});

export default connect(mapStateToProps, { fetchTrending, setMessage })(Home);