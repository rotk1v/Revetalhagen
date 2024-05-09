import { Injectable } from "@angular/core";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FrontPage } from "../models/frontpage";

@Injectable({
  providedIn: "root",
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: createClient({
      projectId: "65nmscqj",
      dataset: "production",
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getFrontPage(): Promise<FrontPage[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "frontPage"]{
        title,
        slug,
        images,
        sections
      }`
    );
  }
  // async getFrontPage(): Promise<FrontPage2[]> {
  //   return await this.sanityClientCredentials.option.fetch(
  //     `*[_type == "frontPage"]{
  //       _id,
  //       title,
  //       slug,
  //       images,
  //       sections
  //     }`
  //   );
  // }

  async getActors(): Promise<any[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "person"]{
        _id,
        name,
        image
      }`
    );
  }
}
