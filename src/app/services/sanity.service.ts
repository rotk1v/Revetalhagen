import { Injectable } from "@angular/core";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FrontPage } from "../models/frontpage";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Observable, defer } from "rxjs";
import { Event } from "../models";

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

  urlFor(source: SanityImageSource): ImageUrlBuilder {
    return imageUrlBuilder(this.sanityClientCredentials.option).image(source);
  }

  getFrontPage(): Observable<FrontPage[]> {
    return defer(() =>
      this.sanityClientCredentials.option.fetch(
        `*[_type == "frontPage"]{
        title,
        'images': images.images[]{caption,asset},
        'sections': sections[]{title,content}
      }`
      )
    );
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
}
