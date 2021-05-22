/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    inset: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    inset: 0,
  },
  large: {
    height: 24,
    radius: 8,
    inset: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const { height, radius, inset } = SIZES[size];
  let rightRadius = (value > 99) ? 4 * (value - 99) : 0;
  const barHeight = height - (2 * inset);
  const maxBarLength = 370 - (2 * inset);
  return (
    <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" height={height} radius={radius}>
      <Bar
        length={value * (maxBarLength/100)}
        height={barHeight}
        leftRadius={radius}
        rightRadius={rightRadius}
        inset={inset}
      />
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${p => p.height}px;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: ${p => p.radius}px;
`;

const Bar = styled.div`
  position: relative;
  top: ${p => p.inset}px;
  left: ${p => p.inset}px;
  height:${p => p.height}px;
  width: ${p => p.length}px;
  background-color: ${COLORS.primary};
  border-radius: 4px ${p => p.rightRadius}px ${p => p.rightRadius}px 4px;
`;

export default ProgressBar;
