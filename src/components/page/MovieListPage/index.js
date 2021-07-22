import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Spin } from "antd";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://my-json-server.typicode.com/ruizhen88/demo/movies"
      );
      setMovies(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Spin />}

      <Row>
        {movies.map((movie) => (
          <Col span={8}>
            <Card>
              <Link key={movie.id} to={`/detail/${movie.id}`}>
                <div>
                  <div>
                    Thumbnail <span>{movie.rating}</span>
                  </div>
                  <h3>{`${movie.title} (${movie.year})`}</h3>
                  <p>{movie.director}</p>
                  {movie.categories.map((category) => (
                    <span key={Math.random()}>{category} </span>
                  ))}
                  <hr />
                </div>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MovieListPage;
