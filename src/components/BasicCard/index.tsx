import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledCard } from "./styles";

interface IBasicCardProps {
  title: string;
  description: string;
}

const BasicCard = ({ title, description }: IBasicCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant='h6'>{title}</Typography>
        <Typography color='text.secondary' variant='body2'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/form'>
          <Button color='primary'>{`Acessar o ${title}`}</Button>
        </Link>
      </CardActions>
    </StyledCard>
  );
};

export default BasicCard;
