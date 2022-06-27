import React, { Component } from 'react'
import { Card, Spinner } from 'react-bootstrap'

export default class MovieList extends Component {
  state = {
    movies: null
  }
  componentDidMount = () => {
    this.fetchMovies()
  }
  fetchMovies = async () => {
    try {
      let response = await fetch('http://www.omdbapi.com/?apikey=1116749d&s=Batman')
      let data = await response.json()
      this.setState({ movies: data.Search })
      console.log(data.Search)
    }
    catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <>
        {this.state.movies ? (
          this.state.movies.map((element)=>(<Card key={element.imdbID}>
            <Card.Img 
            onClick={(e)=>{
              this.props.changeState(element.imdbID)
            }}
              variant="top"
              src={element.Poster}
            />
            <Card.Body className="text-dark">
              <Card.Title>{element.Title}</Card.Title>
              <Card.Text>
                {element.Year} -{' '}
                {element.imdbID}
              </Card.Text>
            </Card.Body>
          </Card>))
          
        ) : (
          <Spinner variant="warning" animation="border" />
        )}
      </>
    )
  }
}
