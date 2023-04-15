import { FC } from 'react';

import { PATHS } from './paths';

import { SettingsPage } from 'pages/SettingsPage';
import { HomePage } from 'pages/HomePage';

interface Routes {
  path: string;
  component: FC;
}

export const ROUTES: Routes[] = [
  {
    path: PATHS.SETTINGS,
    component: SettingsPage
  },
  {
    path: PATHS.HOME,
    component: HomePage
  }
];
