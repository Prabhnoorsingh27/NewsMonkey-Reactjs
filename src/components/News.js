import React, {useEffect, useState, propTypes} from 'react'
// import {Route} from 'react-router-dom'
// import { PropTypes } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitilizefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // d9856c485e9e446a97a3be0cdfa0dfb0
    const updateNews = async (pageNo)=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        props.setProgress(100);
        setLoading(false)
    }
    useEffect(() => {
        document.title = `${capitilizefirstletter(props.category)} - NewsMonkey `;
        updateNews(); 
        // eslint-disable-next-line 
        // (used for warning coming here)
    }, [])

    // const handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9856c485e9e446a97a3be0cdfa0dfb0&page=${state.page - 1}&pageSize=${props.pageSize}`
        // setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // setState({
        //     page: state.page - 1, 
        //     articles: parsedData.articles,
        //     loading: false
        // })
        // setState({ page: state.page - 1 })
    //     setPage(page - 1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
        // if(!(state.page + 1 > Math.ceil(state.totalResults/props.pageSize))){
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9856c485e9e446a97a3be0cdfa0dfb0&page=${state.page + 1}&pageSize=${props.pageSize}`
        // setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // setState({
        //     page: state.page + 1, 
        //     articles: parsedData.articles,
        //     loading: false
        // })
        // }
        // setState({ page: state.page + 1 })
    //     setPage(page + 1)
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        // setState({ loading: true })
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setLoading(false)
      };
 
        // console.log("render")
        return (
            <>
                <h1 className="text-center" style={{ margin: '33px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitilizefirstletter(props.category)} Headlines</h1>
                {/* neeche wala syntax ka yeh mtlb hai ki agr loading true hai toh spinner dikhade  */}
                {loading && <Spinner/>}
                {/* !loading && articles.map((element))  */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}>
            
                    <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                {/* <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
                            </div>
                        })}
                    </div>
                    </div>

                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

// News.propTypes = {
//     country: propTypes.string,
//     pageSize: propTypes.number,
//     category: propTypes.string,
// }

export default News
