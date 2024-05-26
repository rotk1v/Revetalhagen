import { Injectable } from "@angular/core";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FrontPage } from "../models/frontpage";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Observable, defer, filter, map } from "rxjs";
import { Event, Image, Section } from "../models";

@Injectable({
  providedIn: "root",
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: createClient({
      projectId: "65nmscqj",
      dataset: "production",
      useCdn: true,
      apiVersion: "2024-05-10",
    }),
  };

  imgUrlFor(source: SanityImageSource): ImageUrlBuilder {
    return imageUrlBuilder(this.sanityClientCredentials.option).image(source);
  }

  getFrontPageImages(): Observable<Image[]> {
    return defer(() =>
      this.sanityClientCredentials.option.fetch(
        `*[_type == "frontPage"]{
        'images': images.images[]{caption,asset}
      }`
      )
    ).pipe(map((x) => x[0].images));
  }

  getFrontPageSections(): Observable<Section[]> {
    return defer(() =>
      this.sanityClientCredentials.option.fetch(
        `*[_type == "frontPage"]{
        'sections': sections[]{title,content}
      }`
      )
    ).pipe(map((x) => x[0].sections));
  }

  getEvents(): Observable<Event[]> {
    return defer(() =>
      this.sanityClientCredentials.option.fetch(
        `*[_type == "event"]{
        title,
        'createdAt': _createdAt,
        'updatedAt': _updatedAt,
        expiresAt,
        'content': text.content[]{style, 'type': _type, 'text': children[]{'type':_type, marks, 'value': text}},
        'markDefinitions': text.content[].markDefs[]{'markId': _key, 'type': _type, 'target': href}
      }`
      )
    );
  }

  getSectionContent(section: Section): string {
    return section.content
      .flatMap((x) => x.children?.map((t) => t.text))
      .join("");
  }
}
