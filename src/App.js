import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComp from "./Components/NewsComp";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Navbar
            category={this.state.category}
            changeCategory={this.changeCategory}
            language={this.state.language}
            changeLanguage={this.changeLanguage}
            country={this.state.country}
            changeCountry={this.changeCountry}
            search={this.state.search}
            setSearch={this.setSearch}
            searchNews={this.searchNews}
          />
          <Routes>
            <Route
              path="/"
              element={
                <NewsComp
                  category={this.state.category}
                  search={this.state.search}
                  language={this.state.language}
                  country={this.state.country}
                />
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
