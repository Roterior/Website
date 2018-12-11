import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { Navbar, Nav, NavItem, Grid, Row, Col, FormGroup, InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-modal';

const API_KEY = "76ed94b561961029b9125f97a1441c4a";
const options = [
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' }
];
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: null,
            genre: null,
            year: null,
            searchInput: null,
            result: [],
            resultGenres: [],
            modalIsOpen: false,
            currentMovie: {}
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleWindow = this.handleWindow.bind(this);
    }

    openModal = (val) => {
      this.setState({modalIsOpen: true});
      const { result } = this.state;
      for (let i = 0; i < result.length; i++) {
          if (result[i].imdbId == val.target.parentNode.id) {
              // console.log(result[i]);
              this.setState({
                  currentMovie: {
                      imdbId: result[i].imdbId,
                      title: result[i].title,
                      mType: result[i].mType,
                      genre: result[i].genre,
                      releaseYear: result[i].releaseYear,
                      rating: result[i].rating,
                      isAdult: result[i].isAdult,
                      mDescription: result[i].mDescription
                  }
              });
          }
      }
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#000';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    handleWindow = val => {
        // const { result } = this.state;
        // for (let i = 0; i < result.length; i++) {
        //     if (result[i].imdbId == val.target.parentNode.id) {
        //         console.log(result[i]);
        //     }
        // }
    }

    handleFormatChange = typeSelected => {
        this.setState({
            format: typeSelected
        });
    }

    handleGenreChange = genreSelected => {
        this.setState({
            genre: genreSelected
        });
    }

    handleYearChange = (yearSelected) => {
        this.setState({
            year: yearSelected
        });
    }

    handleSearchInputChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    handleSearchButtonClick() {
        const { searchInput } = this.state;
        const { year } = this.state;
        const { genre } = this.state;
        const { format } = this.state;
        // const { resultGenres } = this.state;
        let url = `http://localhost:8082/movie/view?`;
        if (searchInput != null) url += `&title=${searchInput}`;
        if (year != null) url += `&year=${year.value}`;
        if (genre != null) url += `&genre=${genre.value}`;
        if (format != null) url += `&mType=${format.value}`;
        axios.get(url)
        .then((response) => {
            // console.log(response);
            // for (let i = 0; i < response.data.results.length; i++) {
            //     for (let j = 0; j < response.data.results[i].genre_ids.length; j++) {
            //         for (let g = 0; g < resultGenres.length; g++) {
            //             // if (genre != null && response.data.results[i].genre_ids[j] == genre.value) {
            //             //     filterGenre.push(response.data.results[i]);
            //             // }
            //             if (response.data.results[i].genre_ids[j] == resultGenres[g].value) {
            //                 response.data.results[i].genre_ids[j] = resultGenres[g].label + ". ";
            //             }
            //         }
            //     }
            // }
            // filterGenre = response.data.results.filter(
            //     item => item.genre_ids.indexOf(genre.value) !== -1
            // );
            this.setState({
                result: response.data
            });
        })
        .catch((error) => {
            console.log('Что-то пошло не так, а именно ' + error.message);
        });
        //console.log(filterGenre);
        // const { result } = this.state;
        // const { resultGenres } = this.state;
        // console.log(result);
        // console.log(resultGenres);
        //
        // // console.log(result[0].genre_ids.length);
        // for (let i = 0; i < result.length; i++) {
        //     for (let j = 0; j < result[i].genre_ids.length; j++) {
        //         for (let g = 0; g < resultGenres.length; g++) {
        //             if (result[i].genre_ids[j] == resultGenres[g].value) {
        //                 result[i].genre_ids[j] = resultGenres[g].label;
        //             }
        //         }
        //     }
        // }
        // for (var i = 0; i < result.length; i++) {
        //     result.genre_ids.forEach(function(val) {
        //         console.log(result[i].genre_ids);
        //     });
        // }
            // if (result[i].genre_ids != undefined) {
            // }
            //for (var j = 0; j < result.genre_ids; j++) {
                // console.log(result[i].genre_ids[j] == 18 ? "Cool" : "Bad");
                // if (result.genre_ids[0] == 18) {
                //     console.log( result.genre_ids[i] );
                // }
                // if (result.genre_ids[i] == resultGenres[j].value) {
                //     // result.genre_ids[i] = resultGenres.label[j];
                // }
            //}
        //}
        // console.log(result[0].genre_ids[1] == 18 ? "Cool" : "Bad");
        // console.log(result);
        // console.log(genre);
        // console.log(resultGenres[2].name);
        // let genreName = {};
        // let genreId = {};
        // genreName.forEach(function() {
        //     let singleObj = {}
        //     singleObj['value'] = resultGenres.id;
        //     singleObj['label'] = resultGenres.name;
        //     listOfObjects.push(singleObj);
        // });
        // const { resultGenres } = this.state;
        // let resultG = [];
        // resultGenres.forEach(function(val) {
        //     let singleObj = {};
        //     singleObj['value'] = val.id;
        //     singleObj['label'] = val.name;
        //     resultG.push(singleObj);
        // });
        // for (let i = 0; i < resultGenres.length; i++) {
        //     let singleObj = {};
        //     singleObj['value'] = resultGenres[i].id;
        //     singleObj['label'] = resultGenres[i].name;
        //     resultG.push(singleObj);
        // }
        // const { resultG } = this.state;
        // console.log(resultG);
        // var listOfObjects = [];
        // var a = ["car", "bike", "scooter"];
        // a.forEach(function(entry) {
        //     var singleObj = {}
        //     singleObj['type'] = 'vehicle';
        //     singleObj['value'] = entry;
        //     listOfObjects.push(singleObj);
        // });
        // const { resultG } = this.state;
        // const { resultGenres } = this.state;
        // resultGenres.forEach(function(val) {
        //     let singleObj = {};
        //     singleObj['value'] = val.id;
        //     singleObj['label'] = val.name;
        //     resultG.push(singleObj);
        // });
        // console.log(resultG);
    }

    componentDidMount() {
        // let urlGenres = `https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=${API_KEY}`;
        // axios.get(urlGenres)
        // .then((response) => {
        //     let resultG = [];
        //     response.data.genres.forEach(function(val) {
        //         let singleObj = {};
        //         singleObj['value'] = val.id;
        //         singleObj['label'] = val.name[0].toUpperCase() + val.name.slice(1);
        //         resultG.push(singleObj);
        //     });
        //     this.setState({
        //         resultGenres: resultG
        //     });
        // })
        // .catch((error) => {
        //     console.log('Что-то пошло не так, а именно ' + error.message);
        // });
        // const { searchInput } = this.state;
        // const { resultGenres } = this.state;
        // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}&page=1&include_adult=false`)
        // .then((response) => {
        //     console.log(response);
        //     for (let i = 0; i < response.data.results.length; i++) {
        //         for (let j = 0; j < response.data.results[i].genre_ids.length; j++) {
        //             for (let g = 0; g < resultGenres.length; g++) {
        //                 if (response.data.results[i].genre_ids[j] == resultGenres[g].value) {
        //                     response.data.results[i].genre_ids[j] = resultGenres[g].label + ". ";
        //                 }
        //             }
        //         }
        //     }
        //     this.setState({
        //         result: response.data.results
        //     });
        // })
        // .catch((error) => {
        //     console.log('Что-то пошло не так, а именно ' + error.message);
        // });
    }

    render() {
        const { year } = this.state;
        const { resultGenres } = this.state;

        return (
            <Grid>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                <div>
                    <button className="btn" onClick={this.closeModal}>close</button>
                    <h2 className="label" ref={subtitle => this.subtitle = subtitle}>Movie Details</h2>
                </div>
                  <div className="decor">
                        <div>ImdbId: {this.state.currentMovie.imdbId}</div>
                        <div>Title: {this.state.currentMovie.title}</div>
                        <div>Type: {this.state.currentMovie.mType}</div>
                        <div>Genre: {this.state.currentMovie.genre}</div>
                        <div>Year: {this.state.currentMovie.releaseYear}</div>
                        <div>Rating: {this.state.currentMovie.rating}</div>
                        <div>isAdult: {this.state.currentMovie.isAdult}</div>
                        <div>Description: {this.state.currentMovie.mDescription}</div>
                  </div>
                </Modal>
                <Row>
                    <Col xs={3}>
                        <Select
                            placeholder="Select Type"
                            name="format"
                            value={this.state.format}
                            onChange={this.handleFormatChange}
                            clearable={false}
                            options={[
                                { value: 'Movie', label: 'Movie' },
                                { value: 'TV Series', label: 'TV Series' }
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
                                { value: 'Action', label: 'Action' },
                                { value: 'Adventure', label: 'Adventure' },
                                { value: 'Apocalypse', label: 'Apocalypse' },
                                { value: 'Drama', label: 'Drama' },
                                { value: 'Thriller', label: 'Thriller' }
                            ]}
                        />
                    </Col>
                    <Col xs={3}>
                        <Select
                            placeholder="Select Year"
                            name="year"
                            value={year}
                            onChange={this.handleYearChange}
                            clearable={false}
                            options={options}
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
                        <tr key={index} onClick={this.openModal} id={item.imdbId}>
                            <td><img alt=" "/></td>
                            <td>{item.title}</td>
                            <td>{item.mType}</td>
                            <td>{item.genre}</td>
                            <td>{item.releaseYear}</td>
                            <td>{item.rating}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Grid>
        )
    }
}
// {this.state.result.map( (item,index) => (
// <tr key={index}>
//     <td><img src={`http://image.tmdb.org/t/p/w92/${item.poster_path}`} /></td>
//     <td>{item.title}</td>
//     <td>Movie</td>
//     <td>{item.genre_ids}</td>
//     <td>{item.release_date}</td>
//     <td>{item.vote_average}</td>
// </tr>
// ))}
// {this.state.resultGenres.map( (item,index) => (
// <tr key={index}>
//     <td>{item.value}</td>
//     <td>{item.label}</td>
//     <td>gg</td>
//     <td>gg</td>
//     <td>gg</td>
//     <td>gg</td>
// </tr>
// ))}
