import React, { ReactElement, useCallback } from 'react';
import { LinearProgress as MuiLinearProgress, Box as MuiBox, Typography as MuiTypography } from '@material-ui/core';
import styled from 'styled-components';

export interface IValueBarProps {
  /** Component className */
  className?: string;
  /** Actual Value */
  value?: number;
  /** Max Value */
  max?: number;
  /** Min Value */
  min?: number;
  /** Scale Unit */
  unit?: string;
  /** Primary or Secondary Color */
  color?: 'primary' | 'secondary';
}

const StyledValueBar = styled.div<IValueBarProps>`
  width: 100%;
`;

const StyledLinearProgress = styled(MuiLinearProgress)`
  height: 10px;
`;

const ValueBar = ({ className, value, min = 0, max = 100, unit = '%', color = 'primary' }: IValueBarProps): ReactElement => {
  const normalise = useCallback(
    (progressValue: number | undefined): number | undefined => {
      if (typeof progressValue === 'number') {
        return ((progressValue - min) * 100) / (max - min);
      }

      return undefined;
    },
    [min, max]
  );

  return (
    <StyledValueBar className={className}>
      <MuiBox display="flex" alignItems="center">
        <MuiBox width="100%" mr={1}>
          <StyledLinearProgress color={color} variant={value ? 'determinate' : 'indeterminate'} value={normalise(value)} />
        </MuiBox>
        {value && (
          <MuiBox minWidth={35} data-testid="value-text">
            <MuiTypography variant="body2" color="textSecondary">{`${Math.round(value)}${unit}`}</MuiTypography>
          </MuiBox>
        )}
      </MuiBox>
    </StyledValueBar>
  );
};

export default ValueBar;
