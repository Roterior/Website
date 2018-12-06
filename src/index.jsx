import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";

// var express = require('express');
// var cors = require('cors');
// var app = express();
// app.use(cors());

import "./styles";

class BodyPage extends React.Component {

    render() {
        return ( <div>
                    Some information!
                    <MovieList />
                </div>
            )
    }
}

ReactDOM.render(<BodyPage />, document.getElementById("root"));
