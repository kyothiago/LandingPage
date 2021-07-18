import React from 'react';
import styled from 'styled-components';

export const TextBase = styled.p`
  text-align: center;
  color:#070C0E;
  font-Size: 16px;
  font-weight:400;
  line-height: 1.25;
  padding: 18px 0 18px 0;
`;

export default function Paragraphy({ children }) {
  return (
    <TextBase>
      {children}
    </TextBase>
  );
}
