import React from 'react';
import axios from 'axios';

export default class MovieList extends React.Component {
    state = {
        movie: [],
    };

    componentDidMount() {
        axios.get(`http://localhost:8082/movie/view?title=e`).then(res => {
            console.log(res);
            this.setState({ movie: res.data });
        });
    }

    render() {
        return <ul>{this.state.movie.map(movie => <li>{movie.title}</li>)}
        </ul>;
    }
}
