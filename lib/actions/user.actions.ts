"use server";

import { userList } from "../db";
import { User } from "../models/user.model";

export async function fetchUsers(): Promise<User[]> {
  return await userList;
}

export async function fetchUser(id: string): Promise<User | undefined> {
  // Introduce a 2-second delay before returning the result
  return userList.find((user) => user.id === id);
}
