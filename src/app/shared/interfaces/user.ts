export interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  roles: 'admin' | 'user';
  token: string;
}
