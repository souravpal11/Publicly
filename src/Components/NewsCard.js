import React, { Component } from 'react'

export class NewsCard extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl,source,date,author} = this.props;
    return (
      <div>
        <div className="card shadow-lg my-3 h-100 position-relative" style={{width: "18rem"}}>
          <span className="badge bg-danger position-absolute top-0 end-0 rounded-pill"
                style={{ zIndex: 1 }}>
              {source}
          </span>
            <img
                className="card-img-top rounded-top"
                src={imageUrl || "https://via.placeholder.com/300x180"}
                alt={title}
                style={{
                height: "200px",
                objectFit: "cover"
                }}
            />
            <div className="card-body">
                <h5 className="card-title">
                  {title ? title.slice(0, 70) + "..." : ""}
                </h5>

                <p className="card-text">
                  {description ? description.slice(0, 120) + "..." : ""}
                </p>

                <small className="text-muted">
                    By {author ? author : "Unknown"}
                </small>

                <p className="card-text">
                  <small className="text-muted">
                    Source: <strong>{source}</strong>
                  </small>
                </p>

                <p className="card-text">
                  <small className="text-muted">
                    Published: {new Date(date).toLocaleString()}
                  </small>
                </p>
                
                <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer">
                    Read Full Article →
                </a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsCard

