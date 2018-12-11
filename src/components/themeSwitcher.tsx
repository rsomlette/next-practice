import * as React from "react";
import { Moon, Sun } from "react-feather";
import styled from "../lib/styled-components";

const NavItem = styled.div`
  position: fixed;

  top: 10px;
  right: 10px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  text-align: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

interface IProps {
  currentTheme: string;
  switchTheme: () => void;
}

export const ThemeSwitcher: React.FunctionComponent<IProps> = ({
  currentTheme,
  switchTheme
}) => (
  <NavItem onClick={switchTheme}>
    {currentTheme === "darkTheme" ? <Sun /> : <Moon />}
  </NavItem>
);
