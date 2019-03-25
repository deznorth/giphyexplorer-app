const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();
const dev = app.get('env') !== 'production';

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

// The Development environment requires a valid svars.json file
const svars = dev ? require('./svars.json') : {};
const API_KEY = dev ? svars.giphyapi.api_key : process.env.API_KEY;

if(!dev){
    app.disable('x-powered-by');
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(compression());
    app.use(morgan('common'));
}

if(dev){
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.use(morgan('dev'));
}

//GET Routes

app.get('/api/getTrending', async (req,res) => {

    const pageOffset = req.query.pageNumber ? req.query.pageNumber : 1;
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=${pageOffset*25}`);
    const data = await api_call.json();

    res.json(data);
});

app.get('/api/getSearch', async (req,res) => {
    const pageOffset = req.query.pageNumber ? req.query.pageNumber : 1;
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${req.query.search}&offset=${pageOffset*25}`);
    const data = await api_call.json();

    res.json(data);
});

app.get('/api/getRandom', async (req,res) => {
    const api_call = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const data = await api_call.json();

    res.json(data);
});

//Global Route

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log('Server successfully started');
});