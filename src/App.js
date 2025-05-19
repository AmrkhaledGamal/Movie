import { Container } from "react-bootstrap";
import { NavBar } from "./components/Navbar";
import { MovieCard } from "./components/MovieCard";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails";
// import { useSelector,useDispatch } from "react-redux";
// import { getMovie } from "./redux/slices/MovieSlice";

function App() {
  // const movies = useSelector((state) => state.movie.data);
  // const dispatch = useDispatch();
  const [moviesData, setmovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getPopularMovies();
    // dispatch(getMovie());
    // console.log(movies);
  }, []);

  const getPopularMovies = async (pageNum = 1) => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: { language: "ar", page: pageNum },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRhY2ZlMGU1MGY3M2UyOGVkM2VlZTdlMmE0OThjNSIsIm5iZiI6MTc0NTQxNDY3Ny43MTcsInN1YiI6IjY4MDhlYTE1MTQyYjA5Y2VjZjg5ZmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qo7UtX_5SQE198ik7j0de714jqD4zs7bQ1ThSSMu34c",
      },
    });
    setmovies(res.data.results);
    setPageCount(res.data.total_pages);
    setIsSearching(false);
  };

  const searchMovies = async (letter, pageNum = 1) => {
    if (letter === "") {
      return getPopularMovies();
    }
    const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        query: letter,
        include_adult: "false",
        language: "en-US",
        page: pageNum,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRhY2ZlMGU1MGY3M2UyOGVkM2VlZTdlMmE0OThjNSIsIm5iZiI6MTc0NTQxNDY3Ny43MTcsInN1YiI6IjY4MDhlYTE1MTQyYjA5Y2VjZjg5ZmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qo7UtX_5SQE198ik7j0de714jqD4zs7bQ1ThSSMu34c",
      },
    });
    if (res.data.results.length === 0) {
      <h2 className="mt-5 text-center"> لا يوجد افلام متاحة </h2>;
    }
    setmovies(res.data.results);
    setPageCount(res.data.total_pages);
    setIsSearching(true);
    setSearchQuery(letter);
  };

  const handlePageChange = (pageNum) => {
    if (isSearching) {
      searchMovies(searchQuery, pageNum);
    } else {
      getPopularMovies(pageNum);
    }
  };

  return (
    <div>
      <NavBar searchMovies={searchMovies} />
      <Container>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MovieCard
                  moviesData={moviesData}
                  handlePageChange={handlePageChange}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
