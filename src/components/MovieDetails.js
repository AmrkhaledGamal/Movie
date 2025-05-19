import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: { language: "ar" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRhY2ZlMGU1MGY3M2UyOGVkM2VlZTdlMmE0OThjNSIsIm5iZiI6MTc0NTQxNDY3Ny43MTcsInN1YiI6IjY4MDhlYTE1MTQyYjA5Y2VjZjg5ZmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qo7UtX_5SQE198ik7j0de714jqD4zs7bQ1ThSSMu34c",
        },
      });
      setmovie(res.data);
    };
    getMovieDetails();
  }, [id]);

  return (
    <div>
      <Row className="justify-content-center bg-dark-subtle">
        <Col md="12" xs="12" sm="12" className="my-2 ">
          <div className="card-detalis  d-flex align-items-center flex-column flex-md-row ">
            <img
              className="rounded-3"
              style={{ width: "300px", height: "400px" }}
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto  mt-2">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم :{movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center bg-dark-subtle mt-1">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};
