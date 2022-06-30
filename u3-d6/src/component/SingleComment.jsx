import { ListGroup,Button } from "react-bootstrap"

const deleteComment = async (asin) => {
try {
let response = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + asin , {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MDUyZjMzODEzZjAwMTUwZGRkZmMiLCJpYXQiOjE2NTY0NDYzNDMsImV4cCI6MTY1NzY1NTk0M30.OiPRyJVNQhy2ZtG395nqkETvFxQjEvE1KkKJ1BI9SGE'
    }
})
if(response.ok) {
    alert('comment deleted')
}
else {
    alert('comment not deleted')
}
}
catch(error) {
    console.log(error)
}
}


const SingleComment = ({comment}) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
    </ListGroup.Item>

)

export default SingleComment