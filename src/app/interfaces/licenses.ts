import { MyImageData } from "./image-data"

export interface Licenses {
    id: number,
      attributes: {
        name: string,
        description: string,
        photo: {
          data: MyImageData
        }
    }
}