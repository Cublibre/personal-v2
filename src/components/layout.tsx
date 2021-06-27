import React from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Head } from '@components';
import { GlobalStyle } from '@styles';
import { device } from '@styles';

const StyledLayout = styled.div`
  max-width: 95%;
  @media screen and (min-width: ${device.mobile}) {
    max-width: 90%;
  }
  @media screen and (min-width: ${device.tablet}) {
    max-width: 65%;
  }
  @media screen and (min-width: ${device.desktop}) {
    max-width: 50%;
  }
  @media screen and (min-width: ${device.tv}) {
    max-width: 40%;
  }
  margin: auto;
`;

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout id="" role="document">
      <Normalize />
      <GlobalStyle />
      <Head />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout as React.FC<LayoutProps>;
