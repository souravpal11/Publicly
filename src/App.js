// import './App.css';
// import Navbar from './Components/Navbar';
// import NewsComp from './Components/NewsComp'; 

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//          <Navbar/>
//          <NewsComp/>
//       </div>
//     )
//   }
// }

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import Footer from "./Components/Footer";


export class App extends Component {

  state = {
    category: "top",
    search: ""
  }
  
  setSearch = (text) => {
    this.setState({
      search: text
    });
  }

  changeCategory = (cat) => {
    this.setState({
      category: cat
    });
  }

  render() {
    return (
      <>
        <Navbar changeCategory={this.changeCategory} search={this.state.search} setSearch={this.setSearch} searchNews={this.searchNews}/>
        <NewsComp category={this.state.category} search={this.state.search}/>
        <Footer/>
      </>
    );
  }
}

export default App;