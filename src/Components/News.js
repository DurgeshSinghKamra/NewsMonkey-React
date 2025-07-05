import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults: 0,
      hasMore: true
    };
  }

    changePages = async (pages) => {
      this.props.changeProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.currentCategory}&apiKey=69bd4876a5b24ef1a4bdd87d45f04ca8&page=${pages}&pageSize=12`;

    this.setState({
      loading: true
    }
    )

    let data = await fetch(url);

    let parsedData = await data.json();

      this.props.changeProgress(70);


    this.setState({
      articles: parsedData.articles,
      loading: false, 
      totalResults: parsedData.totalResults
    });

      this.props.changeProgress(100);

  }

  componentDidMount() {
    this.changePages(this.state.page);

  }

  componentDidUpdate(prevProps) {
  if (this.props.currentCategory !== prevProps.currentCategory) {
    if (this.state.page !== 1) {
      this.setState({
         page: 1 ,
         articles: [],
         totalResults: 0,
         hasMore: true,

        }, () => {
        this.changePages(1);
      });
    } else {
      this.changePages(1);
    }
  }
  document.title=`NewsMonkey - ${this.props.currentCategory}`;
}

fetchMoreData= async ()=>{
  
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.currentCategory}&apiKey=69bd4876a5b24ef1a4bdd87d45f04ca8&page=${this.state.page+1}&pageSize=12`;

    this.setState({
      loading: true,
      page: this.state.page + 1,
    }
    )

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false, 
      totalResults: parsedData.totalResults,
      hasMore: parsedData.articles.length !== 0
    });

    console.log((this.state.articles.length)/(this.state.totalResults))

    console.log("API Total:", parsedData.totalResults);
    console.log("Fetched Articles:", parsedData.articles.length);
}


//   handlePrevClick = () => {
//     this.changePages(this.state.page-1);
    
//     this.setState({
//       page: this.state.page-1
//     })
//     window.scrollTo(0, 0);
// }

// handleNextClick = () => {
//   this.changePages(this.state.page+1);

//   this.setState({
//     page: this.state.page+1
//   })
//   window.scrollTo(0, 0);
// }


  formatTime= (publishedAt)=>{
    
    const time = new Date(publishedAt);

    const formattedTime= time.toLocaleString("en-in", {
      dateStyle: "medium",
      timeStyle: "short",
    })

    return formattedTime;
  }


  render() {
    return (
      <>
          {this.state.loading ? <Spinner/> : '' }
        <div className="container mt-4">
          <h1 className="text-center" style={{margin: '35px',
            marginTop : '90px'
          }}>NewsMonkey-Top {this.props.currentCategory} Headlines</h1>

            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner/>}
        >

          <div className="row">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description ? element.description.slice(0,120) : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.mktw.net/im-51207097/social}"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    time={this.formatTime(element.publishedAt)}

                    source={element.source.name}
                  />
                </div>
              );
            })}
          
          </div>
        </InfiniteScroll>
        </div>

        {/* <div className="container d-flex justify-content-between my-10">
          <button disabled={this.state.page===1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">
            &#8592; Previous
          </button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/12)} onClick={this.handleNextClick} type="button" className="btn btn-dark">
            Next &#8594;
          </button>
        </div> */}
      </>
    );
  }
}

