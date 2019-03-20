/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-02-09 02:18:13 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-20 17:10:23
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.scss';
import '../searchBar/SearchBar';
import SearchBar from '../searchBar/SearchBar';

const toggleSideMenu = () => {
    const sideMenu = document.querySelector("ul");
    sideMenu.classList.toggle("open");
}

const Header = (props) => {
    return (
        <div className="header">
            <div className="upper">
                <span className="sideMenuToggle" onClick={toggleSideMenu}>
                    <svg width='30' height='30'>
                        <path stroke='white' strokeWidth='5' d='M0 7 H 30' />
                        <path stroke='white' strokeWidth='5' d='M0 16 H 30' />
                        <path stroke='white' strokeWidth='5' d='M0 25 H 30' />
                    </svg>
                </span>
                <h1>GIPHYExplorer</h1>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/Random">Random</NavLink>
                    <a className="devlink" href="https://www.linkedin.com/in/davidrojas-dev/" target="_blank" rel="noopener noreferrer">DEV</a>
                </ul>
            </div>
            <hr/>
            <div className="lower">
                <h2>{props.message}</h2>
                <SearchBar />
            </div>
        </div>
    );
}

Header.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    message: state.header.message
});

export default connect(mapStateToProps)(Header);