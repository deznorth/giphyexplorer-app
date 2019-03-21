import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMessage } from '../actions/headerActions';
import './About.scss';

class About extends Component {

    componentDidMount(){
        const sideMenu = document.querySelector("ul");
        sideMenu.classList.remove("open");
        this.props.setMessage('');
    }
    
    render(){
        const techs = [
            {
                category: 'Front-end',
                stack: 'React, Redux, React-Router and SCSS'
            },
            {
                category: 'Back-end',
                stack: 'Node.js & Express.js'
            },
            {
                category: 'APIs',
                stack: 'GIPHY API'
            },
        ];

        return (
            <div id="AboutWrapper">
                <h1>About GIPHYExplorer</h1>
                <p><span>Hello, World!</span><br/><br/>I am David Rojas, the developer behind this site. I coded this as a practice project to further my skills working with APIs and front-end technologies such as React.js and SCSS. If you like my work, you can <a href="https://www.davidr.info" rel="noopener noreferrer" target="_blank">see more here</a></p>
                <h2>Tech Stack</h2>
                <ul>
                    {techs.map(tech => <li><span>{`${tech.category}: `}</span>{tech.stack}</li>)}
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    setMessage: PropTypes.func.isRequired
}

export default connect(null, { setMessage })(About);