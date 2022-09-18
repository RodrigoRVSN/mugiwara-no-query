import { IPost } from '../types/IPost'

class PostsService {
  baseURL: string

  constructor() {
    this.baseURL = 'http://localhost:3000'
  }

  async getPosts(): Promise<IPost[] | undefined> {
    const response = await fetch('/api/posts')

    return response.json()
  }

  async createPost(content: string, userId: string) {
    const response = await fetch(`${this.baseURL}/api/posts/create`, {
      method: 'POST',
      body: JSON.stringify({ content, userId }),
      headers: { 'Content-type': 'application/json' },
    })

    return response.json()
  }

  async likePost(userId: string, postId: string) {
    const response = await fetch(`${this.baseURL}/api/posts/like/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ userId }),
      headers: { 'Content-type': 'application/json' },
    })

    return response.json()
  }
}

export default new PostsService()
