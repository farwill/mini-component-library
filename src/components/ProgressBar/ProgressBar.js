/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
     height: 16,
     padding: 4,
     radius: 8
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  small: {
    height: 8,
    padding: 0,
    radius: 4
  }

}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if(!styles) {
    throw new Error('Unkown size passed to ProgressBar: ${size}');
  }

  return (
  <Wrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{
      '--padding': styles.padding + 'px',
      '--radius': styles.radius + 'px'
    }}
  >
  <VisuallyHidden>{value} %</VisuallyHidden>
  <BarWrapper>
    <Bar
      style={{
        '--width': value + '%',
        '--height': styles.height + 'px'
      }}  
    ></Bar>
  </BarWrapper>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
  
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  border=radius: 4px 0px 0px 4px;
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  
`;


export default ProgressBar;
