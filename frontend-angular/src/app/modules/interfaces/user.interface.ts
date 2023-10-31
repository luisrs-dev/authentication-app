export interface User {
    _id: string; 
    email: string; 
    name: string; 
    password: string; 
    createdAt: string; 
    updatedAt: string; 
  }

  export type NewUser = Omit<User, 'id'>
