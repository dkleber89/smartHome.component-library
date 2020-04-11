import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IButtonProps {
  /** Component className */
  className?: string;
}

const StyledButton = styled.div``;

StyledButton.displayName = 'StyledButton';

const Button = ({ className }: IButtonProps): ReactElement => {
  return <StyledButton className={className} />;
};

export { Button };
