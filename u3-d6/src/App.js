import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import {Container, Row, Col} from "react-bootstrap"

class App extends Component {
  render() {
    return (
    <div className="App">
      <Container>
          <Row className="justify-content-center mt-3 mb-2">
            <Col md={6}>
              
            </Col>
          </Row>
       </Container>   
    </div>
    );
  }
}

export default App;
