import React from 'react';
import axios from 'axios';

const API_KEY = "76ed94b561961029b9125f97a1441c4a";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            format: null,               // Начальное состояние для фильтра 'Формат'.
            genre: null,                // Начальное состояние для фильтра 'Жанр'.
            year: null,                 // Начальное состояние для фильтра 'Год'.
            searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
            result: []                  // Список отображаемых фильмов.
        }

        //this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    componentDidMount() {
        // Для удобства выносим из стейта в отдельную переменную...
        // const searchInput = this.state.searchInput;

        // ...В ES6 появился специальный синтаксис: деструктуризация. Делаем тоже самое, что закоментированная строка выше.
        const { searchInput } = this.state;

        // Ajax запрос.
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}&page=1&include_adult=false`)
            // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.
            .then((response) => {
                this.setState({
                    result: response.data.results
                });
            })
            .catch((error) => {
                console.log('Что-то пошло не так, а именно ' + error.message);
            });
    }

    // /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

    //componentDidMount() {
        // axios.get('http://localhost:8082/movie/view?title=e', {
        // headers: {
        //     crossorigin : true,
        //     'Access-Control-Allow-Origin' : '*',
        //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //     'Access-Control-Allow-Headers' : 'Origin,Content-Type,Accept,Authorization,X-Request-With',
        //     'Access-Control-Allow-Credentials' : 'true',
        // },
        // // responseType: 'json',
        // }).then(res => {
        //     console.log(res);
        //     this.setState({ movies: res.data });
        // });
    //}

    render() {
        return  <ul>
                    // {this.state.searchInput.map(movie => <li>{movie.title}</li>)}
                    {
                                    this.state.result.map((item, index) => (
                                        <tr key={index}>
                                            <td className="poster-cell"><img src={`http://image.tmdb.org/t/p/w92/${item.poster_path}`} /></td>
                                            <td>{item.title}</td>
                                            <td>Кино</td>
                                            <td>{item.release_date}</td>
                                            <td>{item.vote_average}</td>
                                        </tr>
                                    ))
                                }
                </ul>;
    }
}
