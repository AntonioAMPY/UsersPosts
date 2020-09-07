export interface User {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface UserPosts {
  body: string;
  id?: number;
  title: string;
  userId?: number;
}

export interface MyState {
  users: User[];
  userDetail: User | undefined;
  userPosts: UserPosts[];
  getUsers: () => void;
  getUserDetail: (userId: string | number) => void;
  getUserPosts: (userId: string | number) => void;
  isLoading: boolean;
}
