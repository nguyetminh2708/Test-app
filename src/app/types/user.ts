import { Entity } from './entity';

export interface SelectOptions<T = any> {
  value: T;
  label: string;
}

export interface UserResponse extends Entity {
  userName: string;
  email: string;
  fullName: string;
  roles: string[];
  engagementNames?: string[];
}

export interface UserModel {
  userName: string;
  email: string;
  fullName: string;
  roles: string[];
  engagementNames?: string[];
}

export interface NewUserModel extends UserModel {
  password: string;
}

export interface RoleResponse {
  name: string;
  displayName: string;
}

export interface ChangePasswordModel {
  newPassword: string;
}

export type UserRole = 'admin' | 'user' | 'capg';

export interface IUserClaims {
  fullName: string;
  userName?: string;
  email?: string;
  id: string | number;
  roles: UserRole[];
  isAdmin: boolean;
}
