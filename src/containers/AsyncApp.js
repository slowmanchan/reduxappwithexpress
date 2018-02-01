import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  todoActions
} from '../actions/todoActions'
import Posts from '../components/Posts'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestTodos())
  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(AsyncApp)
