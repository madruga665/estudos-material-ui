import { styled } from "@mui/material";

export const FooterStyles = styled("footer")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  height: 100px;
`;

export const SocialIconsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary.contrastText};
    margin-right: 10px;
  }
`;