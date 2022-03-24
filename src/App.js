import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      searchString: "",
      originalMonsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { originalMonsters: users };
          }
        )
      )
  }

  onSearchChange = (event) => {
    const lowerCaseString = event.target.value.toLowerCase();
      this.setState(
        () => {
          return { searchString: lowerCaseString };
        }
      )
  }

  render() {
    const { searchString, originalMonsters } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = originalMonsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return(
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={ onSearchChange }
        />
        {filteredMonsters.map((monster) => {
          return(
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
    </div>
    )
  }
}

export default App;
