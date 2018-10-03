import Vue from 'vue';
import ConfigManager from 'seng-config';
import * as axios from 'axios';
import { CONFIG_MANAGER, GATEWAY } from '../data/Injectables';
import config from '../config/config';
import { URLNames } from '../data/enum/configNames';

import { setValue } from './injector';
import { responseFormatter, errorFormatter } from './gatewayFormatter';

const setupInjects = () => {
  const configManager = new ConfigManager();
  configManager.init(config.config, config.environment);

  const gateway = axios.create({
    baseURL: configManager.getURL(URLNames.API),
    headers: {
      Accept: 'application/json',
    },
    responseType: 'json',
  });

  gateway.interceptors.request.use(cfg => {
    // Do something before request is sent
    const accessToken = Vue.localStorage.get('access_token');
    if (accessToken) cfg.headers.Authorization = `Bearer ${accessToken}`;
    cfg.validateStatus = status => status < 500; // Reject only if the status code is greater than or equal to 500
    return cfg;
  });

  gateway.interceptors.response.use(
    response => responseFormatter(response),
    error => {
      throw errorFormatter(error);
    },
  );

  setValue(CONFIG_MANAGER, configManager);
  setValue(GATEWAY, gateway);
};

export default setupInjects;
