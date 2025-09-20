import type z from "zod";
import * as bcrypt from "bcrypt";
import { CreateUser } from "../schemas/create-user.schemas.js";
import UserModel from "../model.js";

export function validateCreateUser(user: z.infer<typeof CreateUser>) {
    try {
        CreateUser.parse(user);
        return true;
    } catch(e) {
        return false;
    }
}

export async function createUser(user: z.infer<typeof CreateUser>) {
    try {
        user.password = await bcrypt.hash(user.password, 12);
    
        const createUser = await UserModel.upsert(user);
        return createUser;
    } catch(e) {
        throw new Error("User.CreateUser;")
    }
}

export async function validateAndCreateUser(user: any) {
    const isUserValid = validateCreateUser(user);

    if(!isUserValid)
        throw new Error("User.CreateInvalid")

    await createUser(user);
}