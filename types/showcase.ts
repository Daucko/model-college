export interface ShowcaseItem {
  id: number
  title: string
  category: string
  image: string
  alt: string
  cols: string
  type: 'image' | 'video'
}

export interface VideoItem {
  id: number
  title: string
  thumbnail: string
  alt: string
}

export interface ShowcaseFilters {
  all: string
  campus: string
  arts: string
  sports: string
  'early-years': string
  video: string
}