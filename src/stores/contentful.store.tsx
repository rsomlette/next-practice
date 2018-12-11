import { contentfulService } from "../services/contentful";
import { BaseStore } from "./BaseStore";
import { IEntry } from "../models/entries";

export class ContentfulStore extends BaseStore<IEntry<any>> {
  public fetchBlogPosts() {
    this.isLoading = true;
    contentfulService
      .fetchBlogPosts()
      .subscribe(
        this.updateDataWithValue("title"),
        this.updateError,
        this.stopLoading
      );
  }
}
