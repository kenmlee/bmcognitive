// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { SETTINGS } from './settings';
import * as _ from 'lodash';

const environment_settings = {
  production: false,
  BASE_API_URL: `${location.protocol}//${location.hostname}:3030/`,
  CFENV_URL: `${location.protocol}//${location.hostname}:3030/cfenv`
  // CFENV_URL: 'https://bmcognitive-01.mybluemix.net/cfenv'
};

export const environment = _.extend(environment_settings, SETTINGS);
