import { IPost } from '../types/IPost'

class PostsService {
  baseURL: string

  constructor () {
    this.baseURL = 'http://localhost:3000'
  }

  async getPosts ({ pageParam = 0 }): Promise<IPost[] | undefined> {
    try {
      const response = await fetch(`/api/posts?page=${pageParam}`)
      const json = await response.json()

      return json
    } catch (error) {
      console.log(error)
    }
  }

  async createPost (content: string, userId: string) {
    try {
      const response = await fetch(`${this.baseURL}/api/posts/create`, {
        method: 'POST',
        body: JSON.stringify({ content, userId }),
        headers: { 'Content-type': 'application/json' }
      })

      const json = await response.json()
      return json
    } catch (error) {
      console.log(error)
    }
  }
}

export default new PostsService()
