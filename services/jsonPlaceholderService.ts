import api from './api'

export interface Post {
  id: number
  title: string
  body: string
  userId?: number
}

const jsonPlaceholderService = {
  getPosts: (): Promise<Post[]> => api.get<Post[]>('/posts').then(response => response.data),
  getPost: (id: number): Promise<Post> => api.get<Post>(`/posts/${id}`).then(response => response.data)
}

export default jsonPlaceholderService
