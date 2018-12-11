import * as React from "react";
import { inject, observer } from "mobx-react";

import Layout from "../src/components/Layout";
import { ContentfulStore } from "../src/stores/contentful.store";

interface IProps {
  contentfulStore?: ContentfulStore;
}

@inject("contentfulStore")
@observer
export default class Blog extends React.Component<IProps> {
  static async getInitialProps() {
    this.props.contentfulStore.fetchBlogPosts();
    return {};
  }

  render() {
    return (
      <Layout title="Blog">
        <h1>Blog</h1>
      </Layout>
    );
  }
}
