export interface MyImageData {
    id: number,
    attributes: ImageAttributes
}

export interface ImageAttributes {
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: Formats,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
}

export interface Formats {
    thumbnail: ImageFormat,
    large: ImageFormat,
    medium: ImageFormat,
    small: ImageFormat,
}

export interface ImageFormat {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: string,
    width: number,
    height: number,
    size: number,
    url: string,
}