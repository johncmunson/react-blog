import React from 'react'
import './Home.css'
import BlogIntroContainer from '../Blog-intro-container/Blog-intro-container'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardData: [],
            userInfo: {},
            intro: ''
        }
    }
    render() {
        return (
            <div className='main-home-container'>
                <BlogIntroContainer />
            </div>
        )
    }
}

export default Home
