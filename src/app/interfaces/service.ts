import { MyImageData } from "./image-data"

export interface Service {
    id: number,
    attributes: {
        name: string,
        description: string,
        price: number,
        servicePhoto: {
            data: MyImageData
        }
    }
}
