import * as http from './http.js' 
import * as view from './view.js'
const GET_JOKE = `https://api.chucknorris.io/jokes/random`;
const state = [];

const showJoke = async () => { 
    const json = await http.sendGETRequest(GET_JOKE); 
    state.data = json.value; 
    view.theJoke(state);
}

window.start = async () => { 
    showJoke(); 
}

window.addEventListener('load', start);