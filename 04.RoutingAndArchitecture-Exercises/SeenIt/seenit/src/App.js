import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Comments</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
            <hr/>

            <Route exact path="/" component={Comments}/>
            <Route path="/posts/:post/:postId" component={Posts}/>
        </div>
    </Router>
)

export default BasicExample