declare interface GalleryItemProps {
  type: 'image' | 'video'
  url: string
}

declare type GameProps = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number | null
    old?: number | null
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItemProps[]
  }
}
