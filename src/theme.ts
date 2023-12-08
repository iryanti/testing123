/* eslint-disable no-unused-vars */

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#D72631",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["'Open Sans'"].join(","),
    caption: {
      fontFamily: "'Source Sans 3'",
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
    normalRegular: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "18px",
    },
    h1: {
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "38px",
    },
    h1Desk: {
      fontWeight: 700,
      fontSize: 44,
      lineHeight: "52px",
    },
    h2: {
      fontSize: 32,
      lineHeight: "32px",
    },
    h2Bd: {
      fontSize: 32,
      lineHeight: "32px",
      fontWeight: "bold",
    },
    h2Rg: {
      fontSize: 32,
      lineHeight: "32px",
      fontWeight: "normal",
    },
    h3Desk: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "36px",
    },
    h3RegularDesk: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "24px",
    },
    h3: {
      fontWeight: "bold",
      fontSize: 20,
      lineHeight: "20px",
    },
    h4: {
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "18px",
    },
    mediumBold: {
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "20px",
    },
    mediumRegularDesk: {
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "20px",
    },
    mediumRegular: {
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "24px",
    },
    normalBold: {
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "16px",
    },
    smallBold: {
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "16px",
    },
    smallRegular: {
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: "16px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  colors: {
    primary: "#CB1C4F",
    secondary: "#F87500",
    info: "#484FF9",
    link: "#3B95FF",
    success: "#43AC6D",
    error: "#FF695F",
    background: "#141220",
    backgroundTransparent: "rgba(0, 0, 0, 0)",
    surface1: "#1F1D2B",
    surface2: "#2A2936",
    surface3: "#CB1C4F",
    high: "#E1E0E2",
    medium: "#A1A0A6",
    low: "#84858E",
    disable: "#6D6C75",
    gradient1: "linear-gradient(270deg, #CB1C4F 0%, #FF223E 100%)",
    gradient2: "linear-gradient(270deg, #F87500 0%, #FFA235 100%)",
    clean: "#F6F6F6",
  },
});

theme.typography.h1 = {
  fontSize: "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
  },
};

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      info: string;
      link: string;
      success: string;
      error: string;
      background: string;
      backgroundTransparent: string;
      surface1: string;
      surface2: string;
      surface3: string;
      high: string;
      medium: string;
      low: string;
      disable: string;
      gradient1: string;
      gradient2: string;
      clean: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      [key: string]: any;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    normalRegular: React.CSSProperties;
    h1Desk: React.CSSProperties;
    h2Bd: React.CSSProperties;
    h2Rg: React.CSSProperties;
    mediumBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;
    normalBold: React.CSSProperties;
    smallBold: React.CSSProperties;
    smallRegular: React.CSSProperties;
    h3Desk: React.CSSProperties;
    h3RegularDesk: React.CSSProperties;
    mediumRegularDesk: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    normalRegular?: React.CSSProperties;
    h1Desk?: React.CSSProperties;
    h2Bd?: React.CSSProperties;
    h2Rg?: React.CSSProperties;
    mediumBold?: React.CSSProperties;
    mediumRegular?: React.CSSProperties;
    normalBold?: React.CSSProperties;
    smallBold?: React.CSSProperties;
    smallRegular?: React.CSSProperties;
    h3Desk?: React.CSSProperties;
    h3RegularDesk?: React.CSSProperties;
    mediumRegularDesk?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    [key: string]: true;
  }
}

export default theme;
