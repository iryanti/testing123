import { styled } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

const StyledContainer = styled("div")({
  minWidth: "320px",
  backgroundColor: "#F9FAFB",
});

interface ILayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: ReactNode;
}
function Layout({ header, children, footer }: ILayoutProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <StyledContainer>
        {header}
        <main
          style={{
            minHeight: "100vh",
            paddingBottom: "70px",
          }}
        >
          {children}
        </main>
      </StyledContainer>
      {footer}
    </>
  );
}

export default Layout;
