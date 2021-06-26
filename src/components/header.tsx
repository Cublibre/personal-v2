import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  background: none;
  margin: 16px 0 32px 0;
  border-top: 1px solid var(--divide);
`;

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <>
      <h2>{text}</h2>
      <StyledDivider />
    </>
  );
};

export default Header as React.FunctionComponent<HeaderProps>;
