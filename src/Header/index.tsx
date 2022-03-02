import { Typography } from "@mui/material"
import { CustomAppBar } from "./styles"


const Header = () => {
  return (
    <CustomAppBar position="static">
      <Typography variant="h5" >
        Meu App de estudos da Material UI
      </Typography>
    </CustomAppBar>
  )
}

export default Header