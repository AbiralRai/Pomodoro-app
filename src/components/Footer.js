import React from 'react';
import styled from 'styled-components';

import { Container } from '../elements';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 30px 0;
  color: hsl(357, 12%, 42%);
`;

const Link = styled.a`
  text-decoration: none !important;
  color: hsl(357, 74%, 67%);
  font-weight: bold;
`;

const FooterContent = styled.div`
  font-size: 16px;
`;

const FooterEnd = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <p>
            You can see the source code at
            <Link href="https://github.com/AbiralRai/Pomodoro-app" target="_blank" rel="noopener">
              {' '}
              Github
            </Link>
          </p>
        </FooterContent>
        <FooterEnd>
          This is a clone of
          <Link href="https://pomofocus.io/" target="_blank" rel="noopener">
            {' '}
            Pomofocus
          </Link>
        </FooterEnd>
      </Container>
    </FooterContainer>
  );
}
