import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { Navbar, Nav, NavItem, Grid, Row, Col, FormGroup, InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const API_KEY = "76ed94b561961029b9125f97a1441c4a";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: null,
            genre: null,
            year: null,
            searchInput: null,
            result: []
        }
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    handleYearChange(selectedOption) {
        // const { result } = this.state;
        const resultArray = this.state.result.filter(
            (item) => item.release_date.indexOf(selectedOption.value) !== -1
        );
        // let opt = selectedOption;
        // const { year } = this.state;
        // year = selectedOption;
        this.setState({
            year: selectedOption,
            result: resultArray
        });
        // const { year } = this.state;
        // year = selectedOption;
        // this.props.handleYearChange(selectedOption);
    }

    handleSearchInputChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSearchButtonClick() {
        const { searchInput } = this.state;
        const { year } = this.state;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}&page=1&include_adult=false`;
        if (year != null) {
            url += `&primary_release_year=${year}`
        }
        axios.get(url)
            .then((response) => {
                this.setState({
                    result: response.data.results
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    componentDidMount() {
        const { searchInput } = this.state;
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}&page=1&include_adult=false`)
        .then((response) => {
            this.setState({
                result: response.data.results
            });
        })
        .catch((error) => {
            console.log('Что-то пошло не так, а именно ' + error.message);
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={3}>
                        <Select
                            placeholder="Select Type"
                            name="format"
                            value={this.state.format}
                            onChange={this.handleFormatChange}
                            clearable={false}
                            options={[
                                { value: 'movie', label: 'Фильм' },
                                { value: 'tvseries', label: 'Сериал' },
                            ]}
                        />
                    </Col>
                    <Col xs={3}>
                        <Select
                            placeholder="Select Genre"
                            name="genre"
                            value={this.state.genre}
                            onChange={this.handleGenreChange}
                            clearable={false}
                            options={[
                                { value: 12, label: 'Приключения' },
                                { value: 16, label: 'Мультфильм' },
                                { value: 35, label: 'Комедия' },
                                { value: 53, label: 'Триллер' }
                                // При желании можете добавить и остальные жанры...
                                // 28	боевик
                                // 12	приключения
                                // 16	мультфильм
                                // 35	комедия
                                // 80	криминал
                                // 99	документальный
                                // 18	драма
                                // 10751	семейный
                                // 14	фэнтези
                                // 36	история
                                // 27	ужасы
                                // 10402	музыка
                                // 9648	детектив
                                // 10749	мелодрама
                                // 878	фантастика
                                // 10770	телевизионный фильм
                                // 53	триллер
                                // 10752	военный
                                // 37	вестерн
                            ]}
                        />
                    </Col>
                    <Col xs={3}>
                        <Select
                            placeholder="Select Year"
                            name="year"
                            value={this.state.year}
                            onChange={this.handleYearChange}
                            clearable={false}
                            options={[
                                { value: '2010', label: '2010' },
                                { value: '2011', label: '2011' },
                                { value: '2012', label: '2012' },
                                { value: '2013', label: '2013' },
                                { value: '2014', label: '2014' },
                                { value: '2015', label: '2015' },
                                { value: '2016', label: '2016' },
                                { value: '2017', label: '2017' },
                                { value: '2018', label: '2018' },
                            ]}
                        />
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" onChange={this.handleSearchInputChange} />
                                <InputGroup.Button>
                                    <Button onClick={this.handleSearchButtonClick}>Search</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Table className="movies" bordered condensed hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.result.map( (item,index) => (
                        <tr key={index}>
                            <td><img src={`http://image.tmdb.org/t/p/w92/${item.poster_path}`} /></td>
                            <td>{item.title}</td>
                            <td>Movie</td>
                            <td>{item.genre_ids}</td>
                            <td>{item.release_date}</td>
                            <td>{item.vote_average}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Grid>
        )
    }
}
