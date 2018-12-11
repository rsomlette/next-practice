import { RouterStore } from "mobx-react-router";

import { ContentfulStore } from "./contentful.store";

export const stores = {
  contentfulStore: new ContentfulStore(),
  routing: new RouterStore()
};
