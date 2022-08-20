export interface IUser {
  email: string
  id: 'cl6thkskz000637tgp27h8bbq'
  image: 'https://avatars.githubusercontent.com/u/75763403?v=4'
  name: 'Rodrigo Victor'
}

export interface IPost {
  id?: string;
  content: string;
  likes?: number;
  created_at?: string
  userId?: string
  user?: IUser
}
