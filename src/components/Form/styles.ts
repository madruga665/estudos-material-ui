import { styled } from "@mui/material";

export const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
  padding: 15px;
`;
