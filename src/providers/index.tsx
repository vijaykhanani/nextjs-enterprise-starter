import { StoreProvider } from '@store';
// import { I18nextProvider } from 'react-i18next';
// import i18next from './i8n';

type Props = {
  children: JSX.Element;
};

const AllProviders = ({ children }: Props): JSX.Element => (
  // <I18nextProvider i18n={i18next}>
  <StoreProvider>{children}</StoreProvider>
  // </I18nextProvider>
);

export default AllProviders;
