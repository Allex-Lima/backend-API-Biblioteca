import {User} from "../../models/user/User.js"; 

export const createUserRepository = (dataUser) => User.create(dataUser);

export const findAllUserRepository = () => User.find({});

export const findUserByEmail = (email) => User.findOne({email: email}).select("+password");