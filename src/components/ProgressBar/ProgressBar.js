import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,  // bar height
    radius: 8,   // radius of outer wrapper
    padding: 4,  // padding inside wrapper
  },
};

const ProgressBar = ({ value, size }) => {
  const { height, radius, padding } = SIZES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--radius': radius + 'px',
        '--padding': padding + 'px',
      }}
    >
      <OverflowHider>
        <Bar
          style={{
            '--height': height + 'px',
            '--value': value + '%',
          }}
        />
      </OverflowHider>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const OverflowHider = styled.div`
  border-radius: 4px;
  /* Trim the corners of the bar to fit within the OverflowHider */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--value);
`;

export default ProgressBar;
