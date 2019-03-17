import React from 'react';
import DisplayCard from '../components/DisplayCard/DisplayCard';
import Pagination from '../components/Pagination/Pagination';

class Home extends React.Component {

    state = {
        initialized: false,
        data: {},
        pageNumber: 0
    }

    getHome = async () => {
        const api_call = await fetch(`/api/getTrending?pageNumber=${this.state.pageNumber}`);
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

    HandlePageSwitch = (e) => {
        console.log(`clicked button # ${e.target.textContent}`);
    }

    render () {
        let gifs = (<div>Loading...</div>);
        if(this.state.initialized === false){
            this.getHome();
        } else {
            gifs = this.state.data;
        }        

        return (
        <div id="ContentWrapper">
            {gifs}
            <Pagination current={this.state.pageNumber} pageSwitch={this.HandlePageSwitch}/>
        </div>
        );
    }
}

export default Home;