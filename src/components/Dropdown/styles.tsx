import { styled } from "@mui/material";
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, { optionUnstyledClasses } from "@mui/base/OptionUnstyled";
import { PopperUnstyled } from "@mui/base";
import * as React from "react";

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 0 0.5rem 0 0;
  background: #fff;
  border: none;
  border-bottom: 1px solid #A0AAB4;
  text-align: left;
  margin-top: 2.5rem;
  color: #1A2027;

  &:hover {
    cursor: pointer;
    border-color: ${theme.palette.primary.main};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid #DAECFF;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
      color: ${theme.palette.primary.main};
    }
  }

  &::after {
    content: '▾';
    float: right;
    color: ${theme.palette.primary.main};

  }

  & img {
    margin-right: 10px;
  }
  `
);

const StyledListbox = styled("ul")`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  max-height: 400px;
  background: #fff;
  border: 1px solid #CDD2D7;
  color: #1A2027;
  overflow: auto;
  outline: 0px;
`;

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color: #003A75;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #E7EBF0;
    color: $#1A2027;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color: #003A75;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #B2BAC2;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #E7EBF0;
    color: $#1A2027;
  }

  & img {
    margin-right: 10px;
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect(
  props: SelectUnstyledProps<number>,
  ref: React.ForwardedRef<any>
) {
  const components: SelectUnstyledProps<number>["components"] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});