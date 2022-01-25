import React, { useState, useEffect } from "react";
 
import { Loadding } from "./Loadding";
import { NewsItem } from "./NewsItem";

export const News = (props) => {

// capital first letter 
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  // set states
  const [articles, setArtical] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalResult, setTotalResult] = useState(0);
   
 
//  console.log(totalResult);

  // fetch data from news api
  const fetchData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c11489387d6d4f72af370583bddd7c78&category=${props.category}&pageSize=${pageSize}&page=${page}`;
    props.setProgress(30);
    setLoading(true);
    props.setProgress(50);
    let result = await fetch(url);
    props.setProgress(60);
    setLoading(false);
    props.setProgress(70);
    let parseData = await result.json();
    props.setProgress(100);
    setArtical(parseData.articles);
    setTotalResult(parseData.totalResults);
     
  };

  // useEffect

  useEffect(() => {
       
      fetchData();
       
  }, []);

//  handleBack button


const handleBack = ()=>{
    setPage(page-1);
    
    fetchData();
    
    setLoading(true);
}

//  handleNext button

const handleNext =   ()=>{
    setPage(page+1);
    fetchData();
    setLoading(true)
}

  return (
    <>
    
      <div className="row w-100">
         <div>
    

        <h1 className="text-center " style={{paddingTop:"3.5rem"}}>Top Headline-{capitalizeFirstLetter(props.category)}</h1>
         </div>
        {loading && <Loadding />}
         
        {!loading && articles.map((element) => {
          return (
            <div className="col-md-3 my-2" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
            
          );
        
        })}
        <div className="container  d-flex justify-content-evenly ">
          <button type="button" className="btn btn-dark " disabled={page <= 1} onClick={handleBack}>
          &larr; Back 
          </button>
          <button type="button"  disabled={page + 1 > Math.ceil(totalResult / pageSize)}  className="btn btn-dark"   onClick={handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};



