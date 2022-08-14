import { IPost } from '../types/IPost'

class PostsService {
  baseURL: string

  constructor () {
    this.baseURL = 'http://localhost:3000'
  }

  async getPosts (): Promise<IPost[] | undefined> {
    try {
      const response = await fetch('/api/posts')
      const json = await response.json()
      return json
    } catch (error) { console.log(error) }
  }

  async createPost (content: string, userId: string) {
    try {
      const response = await fetch(`${this.baseURL}/api/posts/create`, {
        method: 'POST',
        body: JSON.stringify({ content, userId }),
        headers: { 'Content-type': 'application/json' }
      })
      const json = await response.json()
    } catch (error) { console.log(error) }
  }
}

export default new PostsService()
