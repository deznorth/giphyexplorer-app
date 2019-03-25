import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePage } from '../../actions/gifActions';
import './Pagination.scss';

class Pagination extends Component {

    handlePageChange = (e) => {
        const clicked = e.target.textContent;
        switch(clicked){
            case '<':
                //console.log('<');
                this.props.updatePage(this.props.currentPage - 1);
                break;
            case '>':
                //console.log('>');
                this.props.updatePage(this.props.currentPage + 1);
                break;
            default:
                //console.log('number');
                this.props.updatePage(parseInt(clicked));
                break;
        }
    }

    render(){
        const current = this.props.currentPage;
        const buttonOffset = 3;
        const maxPages = Math.floor(this.props.totalResults / 25); //Maximum number of pages
        let buttons = []
        let forward, backward;

        if(current > 1){
            backward = <button key={`btnbwrd${current}`} onClick={this.handlePageChange}>{'<'}</button>
        }

        if(current+buttonOffset < maxPages){
            forward = <button key={`btnfwrd${current}`} onClick={this.handlePageChange}>{'>'}</button>
        }

        buttons.push(
            <button key={`btn${current}`} className="current">{current}</button>
        );

        for(let i = current+1; i<=current+buttonOffset && i<maxPages; i++){
            buttons.push(
                <button key={`btn${current+i}`} onClick={this.handlePageChange}>{i}</button>
            );
        }
        for(let i = current-1; i>=current-buttonOffset && i>0; i--){
            buttons.unshift(
                <button key={`btn${current-i}`} onClick={this.handlePageChange}>{i}</button>
            );
        }

        return (
            <div className="pagination">
                <ul>
                    {backward}
                    {buttons}
                    {forward}
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {
    updatePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalResults: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    currentPage: state.gifs.currentPage,
    totalResults: state.gifs.totalResults
});

export default connect(mapStateToProps, { updatePage })(Pagination);