import { MyImageData } from "./image-data"
import { Specialization } from "./specialization"

export interface Doctor {
    id: number,
    attributes: {
        fullName: string,
        specialization: string,
        description: string,
        doctorPhoto: {
            data: MyImageData
        },
        specializations: {
            data: Specialization[]
        }
    }
}