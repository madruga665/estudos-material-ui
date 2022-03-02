import { Typography } from "@mui/material";
import { FooterStyles, SocialIconsContainer } from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <FooterStyles>
      <Typography>Criado com muito 💙 e carinho por @madruga665</Typography>
      <SocialIconsContainer>
        <a href='https://github.com/madruga665' target='_blank' rel='noreferrer'>
          <GitHubIcon fontSize='large' />
        </a>
        <a href='https://www.linkedin.com/in/luciano-amâncio/' target='_blank' rel='noreferrer'>
          <LinkedInIcon fontSize='large' />
        </a>
      </SocialIconsContainer>
    </FooterStyles>
  );
};

export default Footer;
