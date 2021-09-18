import { render } from '@testing-library/react';
import { EmotionCssString } from './StyleDemo';

describe('Style Demo', () => {
  it('renders EmotionCssString', () => {
    render(<EmotionCssString />);
  });
});
