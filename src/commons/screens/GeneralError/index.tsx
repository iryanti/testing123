import Layout from "@/commons/containers/Layouts";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { redirect } from "@/helpers/redirect";

const StyledContainer = styled("div")({
  padding: "20% 16% 0 16%",
  textAlign: "center",
  color: "black",
  svg: {
    color: "#484FF9",
    fontSize: 50,
  },
});

const StyledBackToHomeBtn = styled(Button)({
  border: "1px solid #CB1C4F",
  borderRadius: "18px",
  color: "black",
  fontWeight: "bold",
  fontSize: 14,
  marginTop: 12,
  width: 159,
});

function GeneralError(): JSX.Element {
  return (
    <Layout>
      <StyledContainer>
        <Typography fontSize="20px" fontWeight="700">
          500 - Server-side error occurred
        </Typography>
        <StyledBackToHomeBtn onClick={() => redirect("/")}>
          Back to Home
        </StyledBackToHomeBtn>
      </StyledContainer>
    </Layout>
  );
}

export default GeneralError;
