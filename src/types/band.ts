export interface Member {
  _id: string;
  artist: string;
  instrument: string;
  years: string[];
}

export interface Band {
  _id: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}
