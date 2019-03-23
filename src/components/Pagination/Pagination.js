import React from 'react';
import './Pagination.scss';

const Pagination = (props) => {
    const current = props.current ? props.current : 4;
    const buttonOffset = 3;
    const max = 100;
    let buttons = []
    let forward, backward;

    if(current > 1){
        backward = <button key={`btnbwrd${current}`} onClick={props.switchPage}>{'<'}</button>
    }

    if(current+buttonOffset < max){
        forward = <button key={`btnfwrd${current}`} onClick={props.switchPage}>{'>'}</button>
    }

    buttons.push(
        <button key={`btn${current}`} className="current">{current}</button>
    );

    for(let i = current+1; i<=current+buttonOffset; i++){
        buttons.push(
            <button key={`btn${current+i}`} onClick={props.switchPage}>{i}</button>
        );
    }
    for(let i = current-1; i>=current-buttonOffset && i>0; i--){
        buttons.unshift(
            <button key={`btn${current-i}`} onClick={props.switchPage}>{i}</button>
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

export default Pagination;