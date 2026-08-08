import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"


const Feed = () => {

    const [posts, setPosts] = useState([{
        _id : 1,
        image : "https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption : "Beautiful home !"
    }])

    useEffect(  () => {
      axios.get("http://localhost:3000/posts")

      .then((res)=> {
        setPosts( res.data.posts)
      })
    }, [])
    
  return (
    <section className="post-section">
         {
            posts.length > 0 ?
            (posts.map((post) => (
                <div key={post._id} className="post-card">
                    <img src={post.image} alt={post.caption} width="500px"/>
                    <p>{post.caption}</p>
                </div>
            ))) : (
                <h1>No posts available</h1>
            )
         }
    </section>
  )

}

export default Feed
