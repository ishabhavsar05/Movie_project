import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  const featuredMovie = {
    title: "Inception",
    description: "A mind-bending thriller that blurs the line between dream and reality.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  };

  const categories = [
    { name: "Action", image: "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg" },
    { name: "Comedy", image: "https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_.jpg" },
    { name: "Drama", image: "https://i.ytimg.com/vi/5Ib61nwlGVU/maxresdefault.jpg" },
    { name: "Romance", image: "https://images.moneycontrol.com/static-mcnews/2025/07/20250718081410_saiyaara.jpg?impolicy=website&width=770&height=431" },
    { name: "Thriller", image: "https://hips.hearstapps.com/hmg-prod/images/us-2019-651742026eecf.jpg?crop=1xw:1xh;center,top&resize=980:*" },
    { name: "Western", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOT-ADs-t9sqODJIsgf2Dhts_baHXypWtuQ&s" },
    { name: "Adventure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFDDWS4LXEafFD98lzfngCRqBPKVbKghHvQ&s" },
    { name: "Mystery", image: "https://static.digit.in/OTT/v2/images/enaku-endey-kidaiyaathu-1293610.jpg" },
    { name: "Horror", image: "https://i.ytimg.com/vi/CjAkfFr4Zok/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMZeFjQWOZS6ZR5wRw4EV4ZIBm-Q" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${featuredMovie.image}) center/cover no-repeat`,
          height: "85vh",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        <div>
          <h1 className="display-3 fw-bold mb-3">{featuredMovie.title}</h1>
          <p className="lead mb-4">{featuredMovie.description}</p>
          <Button
            variant="warning"
            size="lg"
            style={{
              borderRadius: "50px",
              fontWeight: "600",
              padding: "10px 30px",
              boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.5)",
            }}
          >
            🎬 Watch Now
          </Button>
        </div>
      </div>

      {/* Categories */}
      <Container className="py-5">
        <h2 className="mb-5 text-center fw-bold" style={{ fontSize: "2.5rem" }}>
          📽️ Explore by Genre
        </h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card
                className="border-0 shadow-lg position-relative genre-card"
                style={{
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 12px 25px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0,0,0,0.1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={cat.image}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    filter: "brightness(0.8)",
                  }}
                />
                <Card.ImgOverlay
                  className="d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                >
                  <Card.Title
                    className="text-white text-center fw-bold"
                    style={{ fontSize: "1.8rem", textShadow: "2px 2px 5px #000" }}
                  >
                    {cat.name}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <Container>
          <p className="mb-0">
            © 2025 <span style={{ color: "#ffc107" }}>🎥 MovieMania</span>. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
