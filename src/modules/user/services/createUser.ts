import { api } from "../../../configs/api";

export const createUser = async (body: {
    username: string
    email: string,
    password: string
}) => {
    try {
        const { data } = await api.post("/user/create", body)
        return data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}