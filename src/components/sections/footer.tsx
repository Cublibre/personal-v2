import React from 'react';
import styled from 'styled-components';

const DashedLine = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent 50%, var(--background) 50%),
    var(--gradient);
  background-size: 12px 2px, 100% 1px;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: var(--fz-sm);
`;

const getYear = () => new Date().getFullYear();

/* TODO: Add link */
const Footer = () => {
  return (
    <StyledFooter>
      <span>
        ⚙ Designed & built by <mark>Christine Chen</mark> {getYear()}
      </span>
      <DashedLine />
    </StyledFooter>
  );
};

export default Footer as React.FunctionComponent;
