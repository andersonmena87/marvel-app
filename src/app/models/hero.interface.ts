interface iThumbnail {
  extension: string,
  path: string
}

interface iComics {
  items: any[]
}

interface iSeries {
  items: any[]
}

export interface iHero {
  id: number;
  name: string,
  description: string,
  thumbnail: iThumbnail,
  comics: iComics,
  modified: string,
  series: iSeries
}
