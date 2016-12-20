import React from 'react'
import Profile from './Profile/Profile'
import PhotoGrid from './image-block/image-block'
import { getUserInfo, getPosts } from '../../utils/helpers.js'
import { connect } from 'react-redux'
import { likeBlog, unLikeBlog } from '../../Redux/Like.js'
import './Profile-container.css'

class  ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
            userInfo: {},
        }
    }
    render(){
        return (
            <div>
                <Profile
                    user={this.state.userInfo}
                    like={this.props.like}
                    likeBlog={this.props.likeBlog}
                    unLikeBlog={this.props.unLikeBlog}
                />
                <PhotoGrid cardData={this.state.cardData} />
            </div>
        )
    }
    componentDidMount(){
        getUserInfo(this.props.params.userid).then(function(data){
            this.setState({
                userInfo: data.data
            })
        }.bind(this));

        getPosts().then(function(data){
            this.setState({
                cardData: data.data
            })
        }.bind(this))
    }
}

function stateToProps(state){
    return {
        like: state.like
    }
}

var connectedProfileContainer = connect(stateToProps, {likeBlog: likeBlog, unLikeBlog: unLikeBlog})(ProfileContainer)

export default connectedProfileContainer
