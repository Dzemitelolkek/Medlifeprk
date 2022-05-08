import { Service } from "./service"

export interface Specialization {
    id: number,
    attributes: {
        name: string,
        services: {
            data: Service[]
        }
    }
}