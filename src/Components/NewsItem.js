import React, { Component } from 'react';

export default class NewsItem extends Component {

  render() {

    let { title, description, imageUrl, newsUrl, author, time, source } = this.props;

    return (

      <div className="card h-100" > {/* h-100 makes all cards same height if needed */}
        <div className="d-flex justify-content-center position-relative">
          
        </div>


        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="this.title" >{title}</h5>
          <p className="card-text">{description + '...'}</p>
          <p className="card-text">by {author ? author : 'Unknown'} on {time}</p>

          <h6><span className="badge text-bg-danger">{source}</span></h6>

          <a href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>

        </div>
      </div>
    )
  }
}
