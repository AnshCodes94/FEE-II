import axios from "axios";
import { useEffect, useState } from "react";

const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
    gap: "1rem",
}

export function App() {
    const [movies, setMovies] = useState([]);

    const [title, setTitle] = useState("");
    const filteredMovies = movies.filter((movie) => movie.title?.toLowerCase().includes(title.trim().toLowerCase()));

    useEffect(() => {
        const getMovies = async () => {
            try {
                const apikey = import.meta.env.VITE_TMDB_API_KEY;
                if (!apikey) {
                    throw new Error("Missing VITE_TMDB_API_KEY environment variable.");
                }

                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
                    params: { api_key: apikey }
                });
                setMovies(res.data.results || []);
            }
            catch (err) {
                console.error(err);
            }
        }

        getMovies();
    }, []);

    return (
        <div className="hf bg71">
            <div className="bh5 p2 fxc jsb bg50">
                <h3> Movies App</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Search movies..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w15"
                />
                <button>Logout</button>
            </div>

            <main className="p2 mt2" style={style}>
                {filteredMovies.map((data) => data.poster_path ? (
                    <div key={data.id} >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            style={{ width: "100%" }}
                        />
                    </div>
                ) : null)}
            </main>
        </div>
    );
}