import * as React from "react";
import Head from "next/head";

import { withTheme, IWithThemeProps } from "../hoc/withTheme";
import styled from "../lib/styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

interface IProps extends IWithThemeProps {
  title: string;
  children: any;
}

const Layout: React.FunctionComponent<IProps> = ({
  children,
  title = "This is the default title",
  currentTheme,
  switchTheme
}) => (
  <PageWrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/styles/style.css" />
    </Head>
    <Header currentTheme={currentTheme} switchTheme={switchTheme} />
    <main>{children}</main>
    <Footer>I'm here to stay</Footer>
  </PageWrapper>
);

export default withTheme(Layout);
