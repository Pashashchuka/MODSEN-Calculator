import { FC } from 'react';

import { PATHS } from './paths';

import { SettingsPage } from 'pages/SettingsPage';
import { ErrorPage } from 'pages/ErrorPage';
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
    path: PATHS.ERROR,
    component: ErrorPage
  },
  {
    path: PATHS.HOME,
    component: HomePage
  }
];
