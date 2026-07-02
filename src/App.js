import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import Footer from "./Components/Footer";

export class App extends Component {
  state = {
    category: "top",
    search: "",
    searchQuery: "",
    country: "in",
    language: "en",
  };
  
  setSearch = (text) => {
    this.setState({
      search: text,
    });
  };

  searchNews = () => {
    this.setState({
      searchQuery: this.state.search,
    });
  };

  changeCategory = (cat) => {
    this.setState({
      category: cat,
    });
  };

  changeLanguage = (lang) => {
    this.setState({
      language: lang,
    });
  };

  changeCountry = (country) => {
    this.setState({ country });
  };

  render() {
    return (
      <>
        <Navbar changeCategory={this.changeCategory} search={this.state.search} setSearch={this.setSearch} searchNews={this.searchNews}/>
        <NewsComp category={this.state.category} search={this.state.search} language={this.state.language}/>
        <Footer/>
      </>
    );
  }
}

export default App;
