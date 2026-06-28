import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner';

export class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      nextPage: null
    }
 
  }

  async componentDidMount() {
    try {
      let url =`https://newsdata.io/api/1/latest?apikey=pub_69aea1473ceb4db98bfaf41b7c43f7d3&country=in&category=${this.props.category}&language=en&image=1&removeduplicate=1`;
        
      if (this.props.search && this.props.search.trim() !== "") {
        url += `&q=${encodeURIComponent(this.props.search)}`;
      }
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log(parsedData);

      this.setState({
        articles: parsedData.results || [],
        nextPage: parsedData.nextPage,
        loading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidUpdate(prevProps) {

    if(prevProps.category !== this.props.category || prevProps.search !== this.props.search){

        this.setState({loading:true});

        let url =`https://newsdata.io/api/1/latest?apikey=pub_69aea1473ceb4db98bfaf41b7c43f7d3&country=in&category=${this.props.category}&language=en&image=1&removeduplicate=1`;
        
        if (this.props.search && this.props.search.trim() !== "") {
          url += `&q=${encodeURIComponent(this.props.search)}`;
        }
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: Array.isArray(parsedData.results)
            ? parsedData.results
            : [],
            nextPage: parsedData.nextPage,
            loading:false
        });
    }

  }

  handleNext = async () => {
    if (!this.state.nextPage) return;

    this.setState({ loading: true });

    let url = `https://newsdata.io/api/1/latest?apikey=pub_69aea1473ceb4db98bfaf41b7c43f7d3&page=${this.state.nextPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.results || [],
      nextPage: parsedData.nextPage,
      loading: false
    });
  };

  render() {
    return (
      <div className="container-fluid px-3 px-md-5 my-3">
        <div className="d-flex justify-content-center align-items-center my-4">
          <i className="fa-regular fa-newspaper fs-2 me-3 text-secondary"></i>
          <h2 className="fw-bold mb-0">Top News Headlines</h2>
        </div>
        <div className="row g-4 justify-content-center">
         {this.state.loading && 
         <div className="d-flex justify-content-center my-5">
            <Spinner />
         </div>}
         {!this.state.loading && Array.isArray(this.state.articles) && this.state.articles.length===0 &&
         <h3 className="text-center mt-5">
            No News Found
        </h3>}
         {Array.isArray(this.state.articles) && this.state.articles.map((element) => (
        <div
          className="col-11 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
         key={element.article_id}
        >
          <NewsCard
            title={element.title}
            description={element.description}
            imageUrl={element.image_url}
            newsUrl={element.link}
            source={element.source_name}
            date={element.pubDate}
            author={element.creator}
          />
        </div>
      
))}
      <div className="container d-flex justify-content-between my-4">
        <button
          className="btn btn-dark"
          onClick={this.handleNext}
          disabled={!this.state.nextPage}
        >
          Next →
        </button>
      </div>
        </div>
      </div>
    )
  }
}

export default NewsComp
