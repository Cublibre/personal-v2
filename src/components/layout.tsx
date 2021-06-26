import React from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Head } from '@components';
import { GlobalStyle } from '@styles';

const StyledLayout = styled.div`
  max-width: 1000px;
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
