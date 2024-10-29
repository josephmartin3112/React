import { useState } from "react";
import MoviePropsComponent from "./MoviePropsComponent";

function ToggleMovieComponent() {
    const [showMovies, setShowMovies] = useState(false); // State to manage toggle

    let allMovies = [
        { title: "Movie1", releaseYear: 2022 },
        { title: "Movie2", releaseYear: 2021 },
        { title: "Movie3", releaseYear: 2020 },
        { title: "Movie4", releaseYear: 2019 },
        { title: "Movie5", releaseYear: 2018 },
    ];

    function toggleMovies() {
        setShowMovies(!showMovies); // Toggle the showMovies state
    }

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3" onClick={toggleMovies}>
                {showMovies ? "Hide Movies" : "Show Movies"}
            </button>
            {showMovies && (
                <div>
                    {allMovies.map((movie, index) => (
                        <MoviePropsComponent 
                            key={index} 
                            title={movie.title} 
                            releaseYear={movie.releaseYear} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ToggleMovieComponent;
