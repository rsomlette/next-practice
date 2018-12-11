import * as React from "react";
import Link from "next/link";

import styled from "../lib/styled-components";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  height: 100px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);

  padding: 0 50px;
`;

const Navigation = styled.div`
  margin-left: auto;
`;

interface IProps {
  currentTheme: string;
  switchTheme: any;
}

export const Header = (props: IProps) => (
  <Wrapper>
    <div>React Practice</div>
    <Navigation>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <ThemeSwitcher {...props} />
    </Navigation>
  </Wrapper>
);
