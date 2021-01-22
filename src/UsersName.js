import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const UsersName = (props) => {
    const [user, setUser] = useState({})
    const [post, setPost] = useState([])
    const {id} = props.match.params
   

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const result=response.data
            // console.log(result)
            setPost(result)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])

    
    return(
        <div>
            <h2>User Name: {user.name}</h2>
            <h4>Posts Written By User</h4>
             <ul>
             {
                post.map((user) => {
                    return <li key={user.id}><Link to={`/posts/${user.id}`}>{user.title}</Link></li>
                })
                }
            </ul> 
        </div>
    )
}
export default UsersName