import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from './Search.js';

// import MovieList from "./MovieList";

//import express from "express";
//let express = require('express');
// var cors = require('cors');
//let app = express();
//app.use(cors());

//import proxy from 'http-proxy-middleware';
//app.use('/api/**', proxy({ target: "http://localhost:8082" }));

import './styles';

export const DivRoot = () => (
    <div>
        <Search />
    </div>
)

ReactDOM.render(
    <DivRoot />,
    document.getElementById("root")
);
