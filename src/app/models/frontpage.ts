import { Section } from "./section";
import { Image } from "./image";

export interface FrontPage {
  images: { images: Image[] };
  sections: Section[];
}
