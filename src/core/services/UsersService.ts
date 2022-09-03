import { IUser } from '../types/IPost'

class UsersService {
  baseURL: string

  constructor() {
    this.baseURL = 'http://localhost:3000'
  }

  async getUser(userId: string): Promise<IUser | undefined> {
    const response = await fetch(`${this.baseURL}/api/users/${userId}`)

    return response.json()
  }
}

export default new UsersService()
