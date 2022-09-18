export interface IUser {
  email: string
  id: string
  image: string
  name: string
}

export interface ILike {
  userId: string
  postId: string
}

export interface IPost {
  id?: string
  content: string
  likes?: ILike[]
  created_at?: string
  userId?: string
  user?: IUser
}
