import { Observable } from "rxjs";
import { IEntry } from "../../models/entries";
import { BaseService } from "../baseService";
import config from "./config";

class ContentfulService extends BaseService {
  public fetchBlogPosts(): Observable<IEntry<any>> {
    return this.fetch$<IEntry<any>>("/entries", {
      select: "fields.title,fields.content",
      content_type: "blogPost"
    });
  }
}

export const contentfulService = new ContentfulService(
  `https://cdn.contentful.com/spaces/${config.spaceID}/environments/master/`,
  { Authorization: `Bearer ${config.token}` }
);
