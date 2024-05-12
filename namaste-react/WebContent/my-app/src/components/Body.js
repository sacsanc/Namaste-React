import RestuCard from "./RestuCard"
import resList from "../constants/mockdata"
import {useState} from "react"

  
const Body = () => {
	  //let listOfResta = resList;
	  const [listOfResta,setListOfResta] = useState(resList);
	  
	return (
      <div className="body">
	     <div className="filter">
		  <button className="filter-btn" 
		  onClick = {() => {
			        
				     const filterlistOfResta = listOfResta.filter((res) => res.info.avgRating > 4);
		             console.log(filterlistOfResta);
					  setListOfResta(filterlistOfResta);
			        }}>Top Rated Rest</button>
		 </div>
	     <div className="res-container">
		 {
		   listOfResta.map( (restaurent) =>  (<RestuCard key={restaurent.info.id}  resData ={restaurent}/>))
		 }
		 </div>
	  </div> 
)};

export default Body;


