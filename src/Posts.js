import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'

const Posts = (props) => {
    const [totalPost, setTotalPost] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            const result = response.data
            setTotalPost(result) 
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h2>Total Post- {totalPost.length}</h2>
            <ol>
                {
                    totalPost.map((post) => {
                        return<li key={post.id}><Link to={`posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ol>
        </div>
    )
}

export default Posts