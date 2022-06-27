import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import {Container, Row, Col} from "react-bootstrap"
import MovieList from "./component/MovieList";

class App extends Component {
  state = {
    movies: null
  }
  
  changeState = (data) => {
    this.setState({
      movies: data
    })
  }

  render() {
    return (
    <div className="App">
      <Container>
          <Row className="justify-content-center mt-3 mb-2">
            <Col md={6}>
              <MovieList changeState = {this.changeState}/>
            </Col>
          </Row>
       </Container>   
    </div>
    );
  }
}

export default App;
