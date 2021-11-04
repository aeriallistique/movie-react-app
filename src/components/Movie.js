import react from 'react';

const imgURL500 = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote)=>{
    if(vote>= 8){
        return "green"}
    if(vote>=6){ 
        return "orange"
    }else{
        return "red"}
}

const Movie = ({overview, title, poster_path, vote_average})=>(
    <div className="movie">
        <img src={imgURL500 + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setVoteClass(vote_average)}`}>
                {vote_average}
                </span>
        </div>

        <div className="movie-over">
            <h2>overview:</h2>
            <p>{overview}</p>
        </div>
    </div>

    
);

export default Movie;