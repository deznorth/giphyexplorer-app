/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-20 21:08:21  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-20 21:28:39
*/

import React from 'react';
import './RandomDisplay.scss';

const RandomDisplay = props => {

    const gif = {
        title: 'Loading...',
        image: ''
    }
    
    if(props.title !== undefined && props.images !== undefined){
        gif.title = props.title === '' || props.title === ' ' ? 'Untitled' : props.title;
        gif.image = props.images.original.url;
    }

    return (
        <div className="RandomDisplay">
            <h2>{gif.title}</h2>
            <img src={gif.image} alt={gif.title}/>
        </div>
    )
}

export default RandomDisplay;
