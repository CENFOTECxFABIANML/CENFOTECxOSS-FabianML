import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const withProviders = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...props} />
      </ThemeProvider>
    );
  };
};

export default withProviders;
