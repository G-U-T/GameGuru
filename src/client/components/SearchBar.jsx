import React, {useState, useEffect} from "react";
import {FaSearch} from 'react-icons/fa';
import {useNavigate}  from 'react-router-dom';
import './SearchBar.css';






export const SearchBar = () => {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const lowerCaseInput = input.toLowerCase();
        console.log(lowerCaseInput);
        const response = await fetch(`/api/search/${lowerCaseInput}`);
        
        console.log(response);
        const result = await response.json();
        console.log(result);
        
        setSearchResults(result);
        
        navigate(`${input}`);
    }


    const onSearchBarChange = (e) => {
        setInput(e.target.value);
    }
    

        return(
    <>
      <div className="input-container">
      <div className="input-wrapper">
        <FaSearch  id="search-icon"/>
        <input 
        type="text" 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => onSearchBarChange(e)} /> 
      <button className="submit-button" onClick={fetchData}>submit</button>  
      </div>
      </div>
    </>
  );
       
    }