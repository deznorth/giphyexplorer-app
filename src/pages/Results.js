/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-20 16:34:51  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-20 18:09:44
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/gifActions';
import { setMessage } from '../actions/headerActions';
import { updateQuery } from '../actions/headerActions';
import DisplayCard from '../components/DisplayCard/DisplayCard';

class Results extends Component {

    componentDidMount(){
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
        this.props.fetchSearch(query);
    }

    componentDidUpdate(prevProps){
        if(this.props.query !== prevProps.query){
            const query = this.props.query;
            this.props.setMessage(`Search: ${query}`);
            this.props.fetchSearch(query);
        }
    }

    render(){

        const gifs = this.props.gifs.map(gif => (
            <DisplayCard 
                    key={gif.id} 
                    title={gif.title} 
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

Results.propTypes = {
    updateQuery: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    gifs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    query: state.header.query,
    gifs: state.gifs.items
});

export default connect(mapStateToProps, { fetchSearch, setMessage, updateQuery })(Results);