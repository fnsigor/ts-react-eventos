import { api } from "../../../configs/api";

export const createEvent = async (body: {
    name: string,
    local: string,
    description: string,
    firstDay: string,
    imageUrl: string,
    idUser: string,
    startTime: string,
    registrationLink: string,
    lastDay: string
}) => {
    try {
        const { data } = await api.post("/event/create", body)
        return data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}