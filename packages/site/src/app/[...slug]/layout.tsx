import classnames from 'classnames';
import { headers } from 'next/headers';
import {
  BaseUrlProvider,
  ImageProvider,
  LinkProvider,
  Metadata,
  SessionProvider,
  StoreProvider,
  ThemeProvider
} from '@jpmorganchase/mosaic-site-components';
import { LayoutProvider } from '@jpmorganchase/mosaic-layouts';
import { themeClassName } from '@jpmorganchase/mosaic-theme';
import { loadPage } from '@jpmorganchase/mosaic-site-loaders';

import fontClassNames from './fonts';

export default async function Layout({ children }) {
  const pathname = headers().get('x-next-pathname') as string;
  if (!pathname) {
    return null;
  }
  const { data = {} } = await loadPage(pathname);
  return (
    <SessionProvider>
      <StoreProvider value={data}>
        <Metadata />
        <BaseUrlProvider>
          <LinkProvider>
            <ThemeProvider className={classnames(themeClassName, ...fontClassNames)}>
              <ImageProvider>
                <LayoutProvider>{children}</LayoutProvider>
              </ImageProvider>
            </ThemeProvider>
          </LinkProvider>
        </BaseUrlProvider>
      </StoreProvider>
    </SessionProvider>
  );
}