import React, { Component } from 'react';
import DisplayCard from '../components/DisplayCard/DisplayCard';

class Results extends Component {

    state = {
        initialized: false,
        data: {},
        pageNumber: 0
    }

    getSearch = async () => {
        const query = window.location.pathname.replace('/results/', '');
        const api_call = await fetch(`/api/getSearch?search=${query}`);
        const data = await api_call.json();

        const gifs = [];

        data.data.forEach(element => {
            gifs.push(
                <DisplayCard 
                    key={element.id} 
                    title={element.title} 
                    url={element.images.fixed_width_downsampled.url}
                />
                );
        });

        //console.log(data);
        this.setState(() => ({ initialized: true, data: gifs}));
    }

    render(){

        /*
            Need to fix the 'initialized' check
        */

        let gifs = (<div>Loading...</div>);
        if(!this.state.initialized){
            this.getSearch();
        } else {
            gifs = this.state.data;
        }

        return (
            <div id="ContentWrapper">
                {gifs}
            </div>
        );
    }
}

export default Results;