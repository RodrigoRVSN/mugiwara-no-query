export interface IUser {
  email: string
  id: string
  image: string
  name: string
}

export interface IPost {
  id?: string
  content: string
  likes?: number
  created_at?: string
  userId?: string
  user?: IUser
}
