/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-20 16:34:51  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-25 17:35:48
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/gifActions';
import { setMessage } from '../actions/headerActions';
import { updateQuery } from '../actions/headerActions';
import DisplayCard from '../components/DisplayCard/DisplayCard';
import Pagination from '../components/Pagination/Pagination';

class Results extends Component {

    componentDidMount(){
        const sideMenu = document.querySelector("ul");
        sideMenu.classList.remove("open");
        const windowQuery = window.location.pathname.replace('/results/', '');
        
        /*
            This checks that the path matches the query so people can reach the results by
            writing the path instead of using the search bar
        */
        if(this.props.query !== windowQuery){
            this.props.updateQuery(windowQuery);
        }
        
        const query = this.props.query;

        this.props.setMessage(`Search: ${query}`);
        this.props.fetchSearch(query, this.props.currentPage);
    }

    componentDidUpdate(prevProps){
        if(this.props.query !== prevProps.query){
            const query = this.props.query;
            this.props.setMessage(`Search: ${query}`);
            this.props.fetchSearch(query, this.props.currentPage);
        }
        if(this.props.currentPage !== prevProps.currentPage){
            this.props.fetchSearch(this.props.query, this.props.currentPage);;
        }
    }

    render(){

        const gifs = this.props.gifs.map(gif => (
            <DisplayCard 
                    key={gif.id} 
                    title={gif.title === '' || gif.title === ' ' ? 'Untitled' : gif.title} 
                    url={gif.images.fixed_width_downsampled.url}
            />
        ));

        return (
            <div id="ResultsPage">
                <div id="ContentWrapper">
                    {gifs}
                </div>
                <Pagination />
            </div>
        );
    }
}

Results.propTypes = {
    updateQuery: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    gifs: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalResults: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    query: state.header.query,
    gifs: state.gifs.items,
    currentPage: state.gifs.currentPage,
    totalResults: state.gifs.totalResults
});

export default connect(mapStateToProps, { fetchSearch, setMessage, updateQuery })(Results);