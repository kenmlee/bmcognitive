import { SETTINGS } from './settings';
import * as _ from 'lodash';

export const environment_settings = {
  production: true,
  BASE_API_URL: `${location.protocol}//${location.host}/`,
  CFENV_URL: `${location.protocol}//${location.host}/cfenv`
};

export const environment = _.extend(environment_settings, SETTINGS);
