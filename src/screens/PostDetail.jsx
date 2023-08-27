import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
    const {postId, userId } = useParams() // get params from url using object destructuring
  return (
    <div>PostDetail Post-{postId}, User-{userId} </div>
  )
}

export default PostDetail