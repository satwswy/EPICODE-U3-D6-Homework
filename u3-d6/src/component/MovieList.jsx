import React, { Component } from 'react'
import {Card, Spinner} from 'react-bootstrap'

export default class MovieList extends Component {
    state = {
        movies: null
    }
    componentDidMount = () => {
      this.fetchMovies()
    }
    fetchMovies = async () => {
        try{
let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=Batman')
let data = await response.json()
this.setState({movies: data})
console.log(data)
        }
        catch(err) {
console.log(err)
        }
    }
  render() {
    return (
      <>
      {this.state.movies ? (
        <Card>
          <Card.Img
            variant="top"
            src={this.state.movies.Poster}
          />
          <Card.Body className="text-dark">
            <Card.Title>{this.state.movies.Title}</Card.Title>
            <Card.Text>
              {this.state.movies.Year} -{' '}
              {this.state.movies.imdbID}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner variant="warning" animation="border" />
      )}
    </>
    )
  }
}
