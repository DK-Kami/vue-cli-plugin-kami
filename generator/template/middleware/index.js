/**
 * Инициализация сервисов
 */

import inject from './injectServices';
import WebClient from './WebClient';
import services from './services';

Object.keys(services).forEach(module => inject(WebClient, services[module]));

export default services;
