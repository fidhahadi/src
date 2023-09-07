import React, {useEffect, useState} from 'react'
import "./RowPost.css";
import axios from '../../axios';
import { API_KEY, imgUrl } from '../../constants/constants';
import Youtube from 'react-youtube'

function RowPost(props) {

    const [movies, setMovies] = useState([]);
    const [urlid, seturlId] = useState("");

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
      })
    }, [props.url])

    //youtube react
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovie = (id)  => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
            console.log(response.data);
            if(response.data.results.length !== 0){
                seturlId(response.data.results[0])
            }else {
                alert("no trailer");
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
                movies.map((obj) =>
                <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />
                )
                
            }
        </div>
        {  urlid && <Youtube videoId={urlid.key} opts={opts} /> }

    </div>
  )
}

export default RowPost