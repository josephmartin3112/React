// MovieComponent.js
import MoviePropsComponent from "./MoviePropsComponent";

function MovieComponent() {
    let allMovies = [
        { title: "Movie1", releaseYear: 2022 },
        { title: "Movie2", releaseYear: 2021 },
        { title: "Movie3", releaseYear: 2020 },
        { title: "Movie4", releaseYear: 2019 },
        { title: "Movie5", releaseYear: 2018 },
    ];

    return (
        <>
            <MoviePropsComponent title={allMovies[0].title} releaseYear={allMovies[0].releaseYear} />
            <MoviePropsComponent title={allMovies[1].title} releaseYear={allMovies[1].releaseYear} />
            <MoviePropsComponent title={allMovies[2].title} releaseYear={allMovies[2].releaseYear} />
            <MoviePropsComponent title={allMovies[3].title} releaseYear={allMovies[3].releaseYear} />
            <MoviePropsComponent title={allMovies[4].title} releaseYear={allMovies[4].releaseYear} />
        </>
    );
}

export default MovieComponent;
