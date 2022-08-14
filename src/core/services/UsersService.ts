import { IUser } from '../types/IPost'

class UsersService {
  baseURL: string

  constructor () {
    this.baseURL = 'http://localhost:3000'
  }

  async getUser (userId: string): Promise<IUser | undefined> {
    try {
      const response = await fetch(`${this.baseURL}/api/users/${userId}`)

      const json = await response.json()
      return json
    } catch (error) {
      console.error(error)
    }
  }
}

export default new UsersService()
