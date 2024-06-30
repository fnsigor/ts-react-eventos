import { api } from "../../../configs/api";
import { IEvent } from "../interfaces/IEvent";

export const getAllEvents = async () => {
    try {
        const { data } = await api.get("/event/getAll")
        return data.events as IEvent[];
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}