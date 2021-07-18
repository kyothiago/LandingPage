import React from 'react';
import styled from 'styled-components';

export const TextBase = styled.a`
  text-align: center;
  color:#ffffff;
  font-Size: 18px;
  font-weight:500;
  line-height: 1.25;
  `
;

export default function Paragraphy({ children, href }) {
  return (
    <TextBase href={href}>
      {children}
    </TextBase>
  );
}
