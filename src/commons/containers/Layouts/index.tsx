import { styled } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

const StyledContainer = styled("div")({
  minWidth: "320px",
  backgroundColor: "#F9FAFB",
});

const StyledContent = styled("div")({
  padding: "24px",
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
