/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-02-09 02:18:19 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-17 14:09:51
 */
import  React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SearchBar.scss';

//Come Back to this, functionality is not there yet

class SearchBar extends Component {

    state = {
        redirect: null
    }


    getSearch = async (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;

        this.props.updateMessage(`Search: ${query}`);

        this.setState({
            redirect: <Redirect to={`/results/${query}`}/>
        });
    }

    render(){
        setTimeout(() => {
            if(this.state.redirect != null){
                this.setState({
                    redirect: null
                });
            }
        }, 200);

        return (
            <div className="searchBar">
                { this.state.redirect}
                <form onSubmit={this.getSearch}>
                    <input type="text" placeholder="Search" name="query"/>
                    <button type="submit" >Find</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;