import * as React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { Subtract } from "../lib/themeUtils";

export interface IWithThemeProps {
  currentTheme: string;
  switchTheme: () => void;
}

interface IState {
  currentTheme: string | null;
}

export const withTheme = <P extends IWithThemeProps>(
  ComposedComponent: React.ComponentType<P>
) =>
  class WrapperComponent extends React.Component<
    Subtract<P, IWithThemeProps>,
    IState
  > {
    public state = {
      currentTheme: ""
    };

    componentDidMount() {
      this.setState({ currentTheme: localStorage.getItem("@theme:current") });
    }

    public switchTheme = () => {
      const currentTheme = localStorage.getItem("@theme:current");
      if (currentTheme === "darkTheme") {
        this.setState({ currentTheme: "lightTheme" });
        localStorage.setItem("@theme:current", "lightTheme");
      } else {
        this.setState({ currentTheme: "darkTheme" });
        localStorage.setItem("@theme:current", "darkTheme");
      }
    };

    public render() {
      const { currentTheme } = this.state;
      const theme = currentTheme === "darkTheme" ? darkTheme : lightTheme;

      return (
        <ThemeProvider theme={theme}>
          <ComposedComponent
            switchTheme={this.switchTheme}
            currentTheme={this.state.currentTheme}
            {...this.props}
          />
        </ThemeProvider>
      );
    }
  };
