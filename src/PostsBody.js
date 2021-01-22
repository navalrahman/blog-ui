import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PostsBody = (props) => {
    const [user, setUser] = useState([])
    const [title, setTitle] = useState([])
    const [comments, setComments] = useState([])
    const {id} = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const result = response.data
            setTitle(result)
            axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
            .then((response) => {
                const result = response.data
                setUser(result)                
            })
            .catch((error) => {
                alert(error.message);
            })

            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${response.data.userId}`)
            .then((response) => {
                const result=response.data
                setComments(result)
            })
            .catch((error) => {
                alert(error.message);
            })
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    return (
        <div>
            <h2>USER NAME :{user.name}</h2>
            <h3>Title: {title.title}</h3>
            <h3>Body : {title.body}</h3>
            <hr/>  
            <h3>COMMENTS</h3>
            <ul>
                {
                    comments.map((ele) => {
                        return <li key={ele.id}>{ele.body}</li>
                    })
                }
            </ul>
            <hr/>
            <Link to={`/users/${user.id}`}>More posts of author:{user.name}</Link>
        </div>
    )
}

export default PostsBody