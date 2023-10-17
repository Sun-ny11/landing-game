import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   @font-face {
      font-family: "Qanelas Soft";
      src: url(./assets//fonts/Qanelas-SemiBold.eot?) format("eot"),
      url(./assets//fonts/Qanelas-SemiBold.woff2) format("woff2"),
      url(./assets//fonts/Qanelas-SemiBold.ttf) format("truetype");
      font-weight: bold;
      font-style: normal;
      font-display: swap;
   }
   
   
   body {
      margin: 0;
      font-family: 'Josefin Sans' -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   a {
      text-decoration: none;
   }

   ul {
      list-style: none;
   }
   
   button {
      background-color: unset;
      border: none;
   }

   section {
      background-color: ${theme.colors.bacgroundColor};
   }
`