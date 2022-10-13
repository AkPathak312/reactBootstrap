import React, { Component } from 'react'
import axios from 'axios';
import CardsComponent from './CardsComponent';
const baseUrl = 'https://api.publicapis.org/entries';


export default function SearchInput() {
    //API CALL
    
    const [post, setPost] = React.useState(null);
    const [query,setQuery] = React.useState(null);
    function searchQuery(){
        if(query==null){
            setPost(post);
        }
        let searchResult=[];
        post.map(p=>{
            if(p.Description.includes(query)){
                console.log(p);
                searchResult.push(p);
            }
        });
        setPost(searchResult);
    }
    React.useEffect(() => {
      axios.get(baseUrl).then((response) => {
        setPost(response.data.entries);
        console.log(response.data);
      });
    }, []);
    if (!post) return null;
    return (
      <div className='d-flex justify-content-center' >
      <form className='form-inline'>
      <input onChange={e=>setQuery(e.target.value)} style={{marginTop:10}} className='form-control' type="search" placeholder='Search'></input>
      <button onClick={searchQuery} style={{margin:15}} type="button" className="btn btn-success">Search </button>
      <CardsComponent apiData={post}/>
      </form>

      </div>
    )
    
}
