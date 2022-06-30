import  {Component} from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {

    state = {
        comments: [],
        isLoading:true,
        isError: false


    }

    componentDidMount = async () => {
try{
 let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin , {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTY0NDYzNDMsImV4cCI6MTY1NzY1NTk0M30.OiPRyJVNQhy2ZtG395nqkETvFxQjEvE1KkKJ1BI9SGE'
    }
 })
 console.log(response)
 if(response.ok){
    let comments= await response.json()
    this.setState({comments: comments , isLoading:false, isError: false})
 }
 else {
    console.log('error')
    this.setState({ isLoading:false , isError: true})
 }


}
catch(error){
console.log(error)
this.setState({ isLoading:false , isError: true})
}
    }
    
    render() {
        return (
        <div style={{color:'black'}}>
            {this.state.isLoading && <Loading />}
            {this.state.isError && <Error />}
            <AddComment asin={this.props.asin}/>
            <CommentList commentsToShow={this.state.comments}/>

        </div>
    )}
}

export default CommentArea