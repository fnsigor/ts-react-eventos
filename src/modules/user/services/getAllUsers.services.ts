import { api } from "../../../configs/api";
import { IUser } from "../interfaces/IUser";

export const getAllUsers = async () => {
    try {
        const { data } = await api.get("/user/getAll")
        return data.users as IUser[];
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}