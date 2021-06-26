import React from 'react';
import { Normalize } from 'styled-normalize';
import { Head } from '@components';
import { GlobalStyle } from '@styles';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="" role="document">
      <Normalize />
      <GlobalStyle />
      <Head />
      <main>{children}</main>
    </div>
  );
};

export default Layout as React.FC<LayoutProps>;
