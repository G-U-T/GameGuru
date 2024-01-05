import React, {useState, useEffect} from "react";
import {FaSearch} from 'react-icons/fa';
import {Form, useNavigate}  from 'react-router-dom';
import './SearchBar.css';






export const SearchBar = () => {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const fetchData = async (event) => {
       event.preventDefault();
       
        const lowerCaseInput = input.toLowerCase();
        console.log(lowerCaseInput);
        const response = await fetch(`/api/search/${lowerCaseInput}`);
       
        
        const result = await response.json();
        console.log(result);
       
     
        
        setSearchResults(result);
        
        navigate(`/searchresults`, { state: { result } });
    }


    const onSearchBarChange = (e) => {
        setInput(e.target.value);
    }
    

        return(
    <>
        <div className="input-container">
        <div className="input-wrapper">
         <form className="form" onSubmit={fetchData}>
            <FaSearch  id="search-icon"/>
            <input 
            type="text" 
            placeholder="Type to search..." 
            value={input} 
            onChange={(e) => onSearchBarChange(e)} /> 
        <button className="submit-button" >submit</button>  
     </form> 
     </div>
        </div>
    </>
  );
       
    }