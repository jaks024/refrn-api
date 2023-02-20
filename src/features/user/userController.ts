import { User } from '../../database/models/User';
import { UserDto } from './types';

export const getUser = async (userId: string) => {
  const user = await User.findById(userId);
  return user;
};

export const updateUser = async (userId: string, userDto: UserDto) => {
  const updatedUser = await User.findOneAndUpdate({ _id: userId }, userDto);
  return updatedUser;
};

export const deleteUser = async (userId: string) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  return deletedUser;
};

export const createUser = async (userDto: UserDto) => {
  const newUser = await User.create(userDto);
  console.log(newUser);
  return { id: newUser._id };
};
