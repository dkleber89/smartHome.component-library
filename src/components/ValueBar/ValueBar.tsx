import React, { ReactElement } from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';

export interface IValueBarProps {
  /** Component className */
  className?: string;
}

const StyledValueBar = styled.div<IValueBarProps>``;

const ValueBar = ({ className }: IValueBarProps): ReactElement => {
  return (
    <StyledValueBar className={className}>
      <LinearProgress />
    </StyledValueBar>
  );
};

export default ValueBar;
