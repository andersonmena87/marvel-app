interface iThumbnail {
  extension: string,
  path: string
}

export interface iComic {
  id: number;
  title: string,
  description: string,
  thumbnail: iThumbnail
}
