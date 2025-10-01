import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie()
    }, []);

    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h2>Loading...</h2> : <div>
                <div><img src={movie.large_cover_image} alt={movie.title} /></div>
                <h2>{movie.title_long}</h2>
                <div>
                    <strong>Genres:</strong>
                    <ul>{movie.genres.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
                <hr />
                <Link to="/">Home</Link>
            </div>}
        </div>
    );
}

export default Detail;