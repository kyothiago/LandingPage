import React from 'react';
import styled from 'styled-components';

export const TextBase = styled.h1`
  text-align: center;
  color:#070C0E;
  font-Size: 32px;
  font-weight:700;
  line-height: 1.25;
`;

export default function Title({ children }) {
  return (
    <TextBase>
      {children}
    </TextBase>
  );
}
