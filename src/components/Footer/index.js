import React from 'react';
import Link from '../commons/Text/Link';
import { FooterWrapper } from './styles/FooterWrapper';

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <Link>
        Criado por Thiago Oberle para o desafio da Hiring Coders.
      </Link>
    </FooterWrapper>
  );
}
