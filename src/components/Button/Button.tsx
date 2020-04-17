import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

interface IButtonProps {
  /** Component className */
  className?: string;
  /** Click Event Handler */
  onClick?: () => void;
  /** Is Button deactivated? */
  isButtonDeactivated?: boolean;
}

const StyledButton = styled(MuiButton)`
  background-color: ${props => (props.disabled ? props.theme.palette.primary.dark : props.theme.palette.primary.light)};
`;

const StyledSpan = styled.span`
  background-color: blue;
`;

const Button = ({ className, onClick, isButtonDeactivated = false }: IButtonProps): ReactElement => {
  const onClickCallback = useCallback(() => {
    if (!isButtonDeactivated && onClick) {
      onClick();
    }
  }, [isButtonDeactivated, onClick]);
  return (
    <StyledButton className={className} onClick={onClickCallback} disabled={isButtonDeactivated}>
      {isButtonDeactivated && <StyledSpan data-testid="test" />}
      Fisch
    </StyledButton>
  );
};

export default Button;
