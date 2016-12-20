import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import './Blog-link.css'


const BlogLink = ({blogInfo}) => {
    let userProfileLink = 'prfolie/' + blogInfo.id;
    return (
        <div className="blog-link-container">
            <Link className="blog-a-tag" to={`/profile/${blogInfo.id}`}>view profile</Link>
        </div>
    )
}

BlogLink.propTypes = {
    blogInfo: React.PropTypes.object.isRequired
}

export default BlogLink
