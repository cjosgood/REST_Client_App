import Joke from './Joke.js';

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const theJoke = (props) => {
    const {data} = props;
    renderDOM(
        `${Joke(data)}`
    )
}
