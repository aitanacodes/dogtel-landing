export interface SiteData {
  appTitle: string
  subtitle: string
  sections: Section[]
  footer: Footer
}

export interface Footer {
  text: string
  linkedin: string
  github: string
}

export interface Section {
  title: string
  titleImg: string
  article?: Article
  anchor?: Anchor
  gallery?: string[]
  contact?: Contact
}

export interface Contact {
  address: string
  googleMaps: string
  schedule: string
  phone: string
  email: string
}

export interface Anchor {
  name: string
  id: string
  hidden: boolean
}

export interface Article {
  bodyImgs: string[]
  paragraphs: string[]
}
