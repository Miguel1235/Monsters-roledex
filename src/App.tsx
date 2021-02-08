import { Component } from "react";
import CardList from './Components/CardList/CardList';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'

interface Monster {
  id: string;
  name: string;
  email: string;
  address: {
    city: string
  };
}
interface State {
  monsters: Array<Monster>;
  filteredMonsters: Array<Monster>;
  loading: boolean;
}
interface Props { }
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      monsters: [],
      filteredMonsters: [],
      loading: true,
    };
  }
  fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    this.setState({ loading: false })
    return await data.json();
  };
  componentDidMount() {
    this.fetchData().then((monsters) => this.setState({ monsters }));
  }
  render() {
    const filterMonsters = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState((state) => ({
        filteredMonsters: state.monsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))
      }))
    }
    return (
      <div>
        <h1 className="center">Monsters Roledex</h1>
        <SearchBar handleText={filterMonsters} />
        {
          this.state.loading ? <h1>LOADING</h1> :
            <CardList monsters={this.state.filteredMonsters.length?this.state.filteredMonsters:this.state.monsters} />
        }
      </div>
    );
  }
}

export default App;
