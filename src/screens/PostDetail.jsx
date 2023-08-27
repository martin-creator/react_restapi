import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config/constant'

function PostDetail() {
    const [post, setPost] = useState([]); // store all posts
    const [user, setUser] = useState([]); // store all posts
    const {postId, userId } = useParams() // get params from url using object destructuring

    const getPostAndUser = ()=>{
        console.log("Post Id is", postId)
        console.log(`${API_BASE_URL}/posts/${postId}`)
        axios.get(`${API_BASE_URL}/posts/${postId}`)
        .then((response) => {
            console.log(response.data)
            setPost(response.data)
            axios.get(`${API_BASE_URL}/users/${userId}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            }
            )
            .catch((error) => {
                console.log(error)
            
            }
            )
        })
        .catch((error) => {
            console.log(error)
        
        }
        )
    }


// we want to load data on page load of this component
    useEffect(() => {
        getPostAndUser()
    }, [])


  return (
    <div>PostDetail Post-{postId}, User-{userId} </div>
  )
}

export default PostDetail