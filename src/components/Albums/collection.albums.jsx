import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ButtonGroup, Button } from "react-bootstrap";
import Loader from "../Util/Loader";


const Collection = () => {
const [datas, setDatas] = useState([]);
const [limit,setLimit] = useState(3)
const [loading,setLoading] = useState(true)

const handleLimit = (props) => {
	console.log("click ", props);
	
	if(limit === 1 || limit === 10){
		return
	} else{	
		if(props === "+"){
			setLimit(prev => prev+=1)
		}else if(props === "-"){
			setLimit((prev) => prev-=1);
		}
	}
}

  useEffect(() => {
		setLoading(true);

	let isCencal = false
	if (isCencal === false)
    //  console.log(`${process.env.REACT_APP_BASEURL}`);
    axios({
      method: "GET",
      url: `https://picsum.photos/v2/list?limit=${limit}`,
    }).then((res) => {
		 setDatas(res.data)
		}
		
	).catch((err) => console.log(err)).finally(()=>{
		setLoading(false)
		
	});
	 
	 return () => { isCencal = true } //clean up render
  
	}, [limit]);

//   console.log(datas);

	if(loading) return <Loader />

  return (
    <React.Fragment>
		<h2>{limit} Collection</h2>
      <Carousel data-bs-theme="dark">
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.download_url}
                alt={data.author}
              />
              <Carousel.Caption>
                <h5 className="text-light">{data.author}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <center className="mt-2">
        <ButtonGroup>
          <Button onClick={() => handleLimit("+")} className="btn btn-success">
            +
          </Button>
			 {limit > 1 && 
          <Button onClick={() => handleLimit("-")} className="btn btn-danger">
            -
          </Button>
			}
        </ButtonGroup>
      </center>
    </React.Fragment>
  );
};

export default Collection;
