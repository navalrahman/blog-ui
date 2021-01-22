import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'
import Users from './Users'
import UsersName from './UsersName'
import PostsBody from './PostsBody'

const App = (props) => {

    return (
        <div>
            <Link to="/">Home</Link>|
            <Link to="/users">Users</Link>|
            <Link to="/posts">Posts</Link>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/users/:id" component={UsersName}/>
            <Route path="/posts/:id" component={PostsBody}/>
        </div>
    )
}

export default App