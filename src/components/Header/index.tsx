import { Typography } from "@mui/material";
import { CustomAppBar } from "./styles";

interface IHeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: IHeaderProps) => {
  return (
    <CustomAppBar position='static'>
      <Typography variant='h5'>{pageTitle}</Typography>
    </CustomAppBar>
  );
};

export default Header;
