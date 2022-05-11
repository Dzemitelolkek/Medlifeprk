import { WeekDays } from "../enums/week-days"
import { MyImageData } from "./image-data"
import { Specialization } from "./specialization"

export interface Doctor {
    id: number,
    attributes: {
        fullName: string,
        description: string,
        doctorPhoto: {
            data: MyImageData
        },
        specializations: {
            data: Specialization[]
        },
        schedule: {
            id: number,
            day: WeekDays,
            time: string
        }[]
    }
}
