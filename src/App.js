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

  render() {

    const filteredMonsters = this.state.originalMonsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });

    return(
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={(event) =>
          {
            const lowerCaseString = event.target.value.toLowerCase();
            this.setState(
              () => {
                return { searchString: lowerCaseString };
              }
            )
          }
        }/>
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
