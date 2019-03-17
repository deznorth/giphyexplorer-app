/*
 * @Author: David M. Rojas Gonzalez // deznorth.com 
 * @Date: 2019-02-19 13:05:49 
 * @Last Modified by: David M. Rojas Gonzalez // deznorth.com
 * @Last Modified time: 2019-02-19 13:23:08
 */
import React from 'react';
import './DisplayCard.scss';

const DisplayCard = (props) => {
    return (
        <div className="displayCard" key={props.id}>
            <div>
                <img src={props.url} alt={props.title}/>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default DisplayCard;