import React from "react";

export const NewsItem = (props) => {
  const { title, description ,imageUrl ,newsUrl,source,date,author} = props;
  return (
    <>
      <div className=" container mx-4 px-4  ">
     
          <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '80%', zIndex: '1'}}>{source}</span>
            <img style={{height:"180px"}}
              src={imageUrl ? imageUrl :"https://c.ndtvimg.com/2021-12/3pb3dt9s_bengaluru-covid-pti_625x300_07_December_21.jpg"}
              className="card-img-top "
              alt="Image"
            />
            
            <div className="card-body">
              <h5 className="card-title">{title.slice(0,20)}</h5>
              <p className="card-text">{description.slice(0,50)}</p>
              <p className="card-text"><small className="text-muted"><span className="badge bg-secondary">Author</span>{author?author:"Null"} <span className="badge bg-secondary">Date</span> {date?date:"Null"}  </small></p>
              <a href={newsUrl} rel="noreferal" target="_blank" className="btn btn-dark">
                Read More....
              </a> 
          
            </div>
          </div>
        </div>
     
    </>
  );
};
 


 