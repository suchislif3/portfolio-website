import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globals";
import MyTheme from '../themes/default';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={MyTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
