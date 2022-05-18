import { MyImageData } from "./image-data"
import { Service } from "./service"
import { Specialization } from "./specialization";

export interface ServiceCategory {
    id: number,
    attributes: {
        name: string,
        favorite: boolean;
        description: string;
        services: {
            data: Service[]
        },
        categoryPhoto: {
            data: MyImageData
        },
        specialization: {
            data: Specialization
        }
    }
}