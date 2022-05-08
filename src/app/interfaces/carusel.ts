import { MyImageData } from "./image-data"

export interface Carusel {
    id: number,
    attributes: CaruselAttributes
}

export interface CaruselAttributes {
    description: string,
    image: Image,
}

export interface Image {
    data: MyImageData
}
