import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

export interface IButtonProps {
  /** Component className */
  className?: string;
  /** Click Event Handler */
  onClick?: () => void;
}

const StyledButton = styled(MuiButton)<IButtonProps>`
  background-color: ${props => props.theme.palette.primary.light};
`;

const StyledSpan = styled.span`
  background-color: green;
`;

const Button = ({ className, onClick }: IButtonProps): ReactElement => {
  return (
    <StyledButton className={className} onClick={onClick}>
      <StyledSpan />
      Fisch
    </StyledButton>
  );
};

export { Button };
