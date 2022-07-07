export interface Member {
  _id: string
  instruments: string
  years: string[]
}

export interface Band {
  _id: string
  name: string
  origin: string
  members: Member[]
  website: string
  genresIds: string[]
}

export interface MemberForBand {
  _id: string,
  firstName: string,
  secondName: string,
  middleName: string,
  birthPlace: string,
  country: string,
  bandsIds: string[],
  instruments: string,
  years: string[]
}