import React, { useEffect, useState } from 'react'
import jsonPlaceholderService, { Post } from '../../../services/jsonPlaceholderService'

const JsonPlaceholderPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    jsonPlaceholderService.getPosts()
      .then(data => {
        setPosts(data)
      })
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default JsonPlaceholderPosts
