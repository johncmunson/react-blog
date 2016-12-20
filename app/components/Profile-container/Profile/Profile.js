import React from 'react'

const Profile = ({user, like, likeBlog, unLikeBlog}) => {
    return (
        <div>
            <div>
                <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                    <h1>{user.likeCount}</h1>
                    <h3>Like : {like}</h3>
                    <button onClick={()=>likeBlog()}> LIKE </button>
                    <button onClick={()=>unLikeBlog()}> UNLIKE </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
