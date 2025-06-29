import "./searchBar.scss";
import searchicon from "../../assets/icons8-search-48.png";
import { useState } from 'react';

const types = ["buy" , "rent"]


function Searchbar () {

    const[query , setQuery] = useState({
        type: "buy",
        location: "",
        minPrice:0,
        maxPrice:0,
    })

    const switchType = (val) =>{
        setQuery(prev=>({...prev, type:val}));  
    }

    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) =>(
                    <button key = {type} onClick={()=>switchType(type)} className={query.type=== type ? "active": ""}>{type}</button>
                ))}
            </div>
            <form>
                <input type='text'name='location' placeholder='City Location'/>
                <input type='text'name='minPrice' min={0} max= {10000000} placeholder='Min Price'/>
                <input type='text'name='maxPrice' min={0} max= {10000000} placeholder='Max Price'/>
                <button>
                    <img src = {searchicon} alt = "" />
                </button>
            </form>
        </div>
    );
}

export default Searchbar;