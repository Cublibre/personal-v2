import React from 'react';
import styled from 'styled-components';

const HeroLayout = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  width: min-content;
  justify-content: center;
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex; /* need this otherwise gradient text won't be positioned */
`;

const GradientTextShadow = styled.h1`
  position: absolute;
  left: 4px;
  top: 4px;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: -10;
  user-select: none;
`;

const StyledHello = styled.h2`
  font-size: var(--fz-xl);
  font-weight: var(--fw-medium);
  margin: 0;
`;

const StyledLink = styled.a`
  display: inline-block;
  background: none;
  border: 1px solid;
  border-image: var(--gradient-light) 1;
  padding: 12px 16px;
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: var(--fw-regular);
  line-height: 1.25;
  color: var(--white);
  text-decoration: none;

  &:link,
  &:visited {
    color: white;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--shadow);
  }
  &:hover {
    color: var(--highlight);
    text-decoration: underline;
    text-decoration-color: var(--highlight);
    text-underline-offset: 2px;
  }
  &:focus {
    outline: 0;
    border: var(--border-size) dashed var(--highlight);
    text-decoration: none;
  }
  &:active {
    outline: 0;
    border: var(--border-size) solid var(--background);
  }
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const StyledParagraph = styled.p`
  color: var(--white);
`;

type TitleProps = {
  name: string;
};

const LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Cublibre',
  },
  {
    name: 'Resume',
    url: '/',
  },
];

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  > li {
    display: inline-block;
  }
  > li:not(:last-child) {
    margin-right: 12px;
  }
`;

const Title = ({ name }: TitleProps): JSX.Element => {
  return (
    <TitleContainer>
      <GradientTextShadow>{name}</GradientTextShadow>
      <h1>{name}</h1>
    </TitleContainer>
  );
};

/* TODO: Read data dynamically */
const Hero = () => {
  return (
    <HeroLayout>
      <StyledHello>Hello, I&apos;m</StyledHello>
      <Title name="Christine Chen." />
      <StyledParagraph>
        I’m a rising CS senior at University of Michigan with a passion for web
        and video game development. Currently, I’m expanding my tech stack as a
        software engineering intern at Target.
      </StyledParagraph>
      <LinkList>
        {LINKS.map((link, i) => (
          <li key={`link-${i}`}>
            <StyledLink href={link.url} key={`link-${i}`}>
              {link.name}
            </StyledLink>
          </li>
        ))}
      </LinkList>
    </HeroLayout>
  );
};

export default Hero as React.FunctionComponent;
