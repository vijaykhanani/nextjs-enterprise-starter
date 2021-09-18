import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';
import Image from 'next/image';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const StyledComponent = (): JSX.Element => (
  <Wrapper>
    <Title>StyledComponent Demo!</Title>
  </Wrapper>
);
const Tailwind = (): JSX.Element => (
  <>
    <h1 className='p-20 text-xl text-white bg-black'>Tailwind Demo</h1>
  </>
);
const EmotionCssObject = (): JSX.Element => (
  <div
    css={css({
      backgroundColor: 'hotpink',
      padding: '40px',
      '&:hover': {
        backgroundColor: 'lightgreen',
      },
    })}
  >
    EmotionCssObject Styles
  </div>
);
const EmotionCssString = (): JSX.Element => {
  const color = 'darkgreen';
  return (
    <div
      css={css`
        background-color: green;
        padding: 40px;
        &:hover {
          background-color: ${color};
        }
      `}
    >
      EmotionCssString Styles
      <Image src='/logo.svg' width='20px' height='20px' alt='logo' />
    </div>
  );
};
export { StyledComponent, Tailwind, EmotionCssString, EmotionCssObject };
