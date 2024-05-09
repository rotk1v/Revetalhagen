export interface FrontPage {
  images: { images: Image[] };
  sections: Section[];
}

export interface Image {
  caption: string;
  asset: { _ref: string; _type: string };
  sections: Section[];
}

export interface Section {
  title: string;
  content: { children: { text: string }[] }[];
}
