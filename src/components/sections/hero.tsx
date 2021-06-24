import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: relative;
  display: flex; /* need this otherwise gradient text won't be positioned */
  width: min-content;
`;

const GradientTextShadow = styled.h1`
  position: absolute;
  left: 4px;
  top: 4px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: -10;
`;
type TitleProps = {
  name: string;
};

const Title = ({ name }: TitleProps): JSX.Element => {
  return (
    <TitleContainer>
      <GradientTextShadow>{name}</GradientTextShadow>
      <h1>{name}</h1>
    </TitleContainer>
  );
};

const Hero = () => {
  return (
    <>
      <Title name="Christine Chen" />
    </>
  );
};

export default Hero as React.FunctionComponent;
