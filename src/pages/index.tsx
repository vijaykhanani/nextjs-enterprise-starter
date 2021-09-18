import type { NextPage } from 'next';
import {
  StyledComponent,
  Tailwind,
  EmotionCssString,
  EmotionCssObject,
} from '@components/StyleDemo/StyleDemo';

const Home: NextPage = () => (
  <div>
    <StyledComponent />
    <br />
    <Tailwind />
    <br />
    <EmotionCssString />
    <br />
    <EmotionCssObject />
    <br />
  </div>
);

export default Home;
