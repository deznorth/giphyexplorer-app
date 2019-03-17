import React from 'react';

const Pagination = (props) => {
    const current = props.current;
    const numberOfBtns = 6;
    let buttons = []

    for(let i = 1; i<=numberOfBtns; i++){
        buttons.push(
            <button key={`btn${current+i}`} onClick={props.switchPage}>{current+i}</button>
        );
    }

    return (
        <div>
            {buttons}
        </div>
    );
}

export default Pagination;