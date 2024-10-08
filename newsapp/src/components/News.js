import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
export default function News(props) {
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);
    const [totalresult, settotalresult] = useState(0);
    const [article, setarticle] = useState([]);

    const capital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    //all in one function
    async function newsFun() {
        props.setprogress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
        let response = await fetch(url);
        props.setprogress(50);
        let data = await response.json();
        props.setprogress(80);
        setarticle(data.articles);
        settotalresult(data.totalResults);
        setloading(false);
        props.setprogress(100);
        document.title = `SNews-${capital(props.category)}`;
    }

    //called when comoonent load
    useEffect(() => {
        newsFun();
        //  Line 28:8:  React Hook useEffect has a missing dependency: 'newsFun'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        setpage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        setarticle(article.concat(data.articles));
        settotalresult(data.totalResults);
    }

    return (
        <>
            <div className="container">
                {/* top */}
                <div className="text-center" style={{ marginTop: '55px' }}>
                    <h1>S-News - Top {props.category} News</h1>
                </div>
                {/* loading */}
                {loading ?? <div className='text-center'><Loader /></div>}
                {/* scroll effect */}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchData}
                    hasMore={article.length < totalresult}
                    loader={<div className='text-center'><Loader /></div>}
                    endMessage={
                        <p className='text-center'>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container">
                        <div className="row my-3">
                            {
                                // map through article=[]
                                article.map((e) => {
                                    return <div className="col-md-4" key={`${e.url}-${e.publishedAt}-${e.title}`}>
                                        <NewsItem title={e.title} description={e.description} name={e.source.name} author={e.author} time={e.publishedAt} url={e.url} imgurl={e.urlToImage} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
