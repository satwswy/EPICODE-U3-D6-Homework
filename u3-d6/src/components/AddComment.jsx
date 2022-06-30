import { Component } from "react";
import {Form, Button} from 'react-bootstrap'

class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
        }
    }

    sendComment = async (e) => {
        e.preventDefault()
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json' ,
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTY0NDYzNDMsImV4cCI6MTY1NzY1NTk0M30.OiPRyJVNQhy2ZtG395nqkETvFxQjEvE1KkKJ1BI9SGE'
                }
            })
            if(response.ok){
            alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        }
        catch(error){
console.log(error)
        }
    }


    render() {
        return (
          <Form onSubmit={this.sendComment}>
            <Form.Group>
                <Form.Label>Comment text</Form.Label>
                <Form.Control
                 type="text" 
                 placeholder="Add comment here" 
                 value={this.state.comment.comment}
                 onChange={e => this.setState({
                    comment:{
                        ...this.state.comment,
                        comment: e.target.value
                    }
                 })}
                 />
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select" value={this.state.comment.rate}
                onChange={e => this.setState({
                    comment:{
                        ...this.state.comment,
                        rate: e.target.value
                    }
                 })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>
        )

    }
}
export default AddComment