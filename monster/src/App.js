import React,{ Component } from 'react';
import './App.css';
import {CardList} from './../src/components/card-list/card-list.component';
import {SearchBox} from './../src/components/search-box/search-box.component'
class App extends Component{
  constructor(){
    super();
      this.state={
        monsters:[],
        searchInput:''
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(res=>this.setState({monsters:res}))
  }
  handleChange=(e)=>{
    this.setState({searchInput:e.target.value})
  }
 
  render(){
    const {monsters,searchInput} = this.state;
    const filteredMonsters = monsters.filter(item=>item.name.toLowerCase().includes(searchInput.toLowerCase()))
    return (
     
      <div className="App">
          <SearchBox 
          placeholder='Search Monsters' 
          handleChange={this.handleChange}
          />

         <CardList 
         monsters = {filteredMonsters}
         />
      </div>
      
    )
  }
}

export default App;
