import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PaginationMovie } from "./Pagination";

export const MovieCard = ({ moviesData, handlePageChange, pageCount }) => {
  return (
    <Row className="g-2">
      {moviesData.length ? (
        moviesData.map((movie) => {
          return (
            <Col key={movie.id} sm={6} md={4} lg={3}>
              <Link to={`/movie/${movie.id}`}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                    className="mw-100"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="overview-text">{movie.overview}</p>
                    <p className="date-text">{movie.release_date}</p>
                    <p className="vote-text">{movie.vote_average}</p>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })
      ) : (
        <h2 className="text-center mt-4">لا يوجد افلام</h2>
      )}
      {moviesData.length ? (
        <PaginationMovie
          onPageChange={handlePageChange}
          pageCount={pageCount}
        />
      ) : null}
    </Row>
  );
};
