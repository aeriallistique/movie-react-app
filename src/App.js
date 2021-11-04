import react, {useEffect, useState} from 'react'
import Movie from './components/Movie';


const APIKEY =  '04c35731a5ee918f014970082a0088b1';
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`;
const API_URL = 'https://api.themoviedb.org/3/';
const imgURL = 'https://image.tmdb.org/t/p/w300';
const apiurl = 'https://api.themoviedb.org/3';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const getMovies = (API)=>{
    fetch(API)
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        setMovies(data.results);
      });
  }


  useEffect(()=>{
    getMovies(FEATURED_API)
      
  
  },[])

  const handleOnSubmit = (e)=>{
    e.preventDefault()

    if(searchTerm){
      getMovies(SEARCH_API+searchTerm)
      
      setSearchTerm('');
    } 
    
  }

  const handleOnChange = (e)=>{
    setSearchTerm(e.target.value);
  }
  

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
        <input className="search" 
            type="search" 
            placeholder="Search..."
            value={searchTerm}
            onChange = {handleOnChange}
            />
        </form>
      </header>
      <div className="movie-container">
        
        {movies.length > 0 && movies.map((movie) =>
          <Movie  {...movie} key={movie.id}/>
        )}
      </div>
    </>
  );
}

export default App;
