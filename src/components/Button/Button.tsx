import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

export interface IButtonProps {
  /** Component className */
  className?: string;
}

const StyledButton = styled(MuiButton)<IButtonProps>`
  background-color: ${props => props.theme.palette.primary.light};
`;

StyledButton.displayName = 'StyledButton';

const Button = ({ className }: IButtonProps): ReactElement => {
  return <StyledButton className={className}>Fisch</StyledButton>;
};

export { Button };
