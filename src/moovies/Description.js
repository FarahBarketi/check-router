import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
function Description({ movies }) {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      {movies
        .filter((movie) => movie.id == id)
        .map((el) => (
          <div>
            <span>details: {el.title}</span>
            <Button className="btn" onClick={() => navigate("/movies")}> go back </Button>
            <Card>
              <Card.Body>{el.description}</Card.Body>
            </Card>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UZdJDYSu6nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ))}
    </div>
  );
}

export default Description;