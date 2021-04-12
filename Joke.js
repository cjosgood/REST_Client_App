import Refresh from "./Refresh.js";

const Joke = (data) => (
    `<h3>
        <img src="assets/chucknorris.png">
        <div>Random Fact from the Chuck Norris API:</div>
    </h3>
    <h4></h4>
    <p>${data}</p>
    ${Refresh(data)}`
)

export default Joke;