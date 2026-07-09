import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      nextPage: null,
      totalResults: 0,
    };
  }

  // Fetch first page
  fetchNews = async () => {
    try {
      this.setState({ loading: true });

      let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&image=1&removeduplicate=1&size=9`;

      if (this.props.search && this.props.search.trim() !== "") {
        url += `&q=${encodeURIComponent(this.props.search)}`;
      }

      const response = await fetch(url);
      const parsedData = await response.json();

      this.setState({
        articles: parsedData.results || [],
        nextPage: parsedData.nextPage || null,
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country ||
      prevProps.language !== this.props.language ||
      prevProps.search !== this.props.search
    ) {
      this.fetchNews();
    }
  }

  // Infinite Scroll
  fetchMoreData = async () => {
    if (!this.state.nextPage) return;

    try {
      let url = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&image=1&removeduplicate=1&size=9&page=${this.state.nextPage}`;

      if (this.props.search && this.props.search.trim() !== "") {
        url += `&q=${encodeURIComponent(this.props.search)}`;
      }

      const response = await fetch(url);
      const parsedData = await response.json();

      this.setState({
        articles: [
          ...this.state.articles,
          ...(parsedData.results || []),
        ],
        nextPage: parsedData.nextPage || null,
        totalResults: parsedData.totalResults || this.state.totalResults,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
     <>
        <div className="d-flex justify-content-center align-items-center my-4">
          <i className="fa-regular fa-newspaper fs-2 me-3 text-secondary"></i>

          <h2 className="fw-bold mb-0">
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}{" "}
            Headlines
          </h2>
        </div>

        {this.state.loading && this.state.articles.length === 0 ? (
          <div className="d-flex justify-content-center my-5">
            <Spinner />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={!!this.state.nextPage}
            loader={
              <div className="d-flex justify-content-center my-4">
                <Spinner />
              </div>
            }
            endMessage={
              <h5 className="text-center my-4 text-secondary">
                🎉 You've reached the end.
              </h5>
            }
          >
            <div className="container">
            <div className="row g-4 justify-content-center">
              {this.state.articles.length === 0 ? (
                <h3 className="text-center mt-5">No News Found</h3>
              ) : (
                this.state.articles.map((element) => (
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
                ))
              )}
            </div>
            </div>
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default NewsComp;