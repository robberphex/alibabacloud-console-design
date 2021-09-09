import { ApiType as IApiType, IOptions } from './types';

export * from './hooks/useService';
export { default as useService } from './hooks/useService';
export { default as createService, request as defaultAxiosRequest } from './service';
export { setGetRegionIdFn } from './utils/index';
export { default as globalConfig } from './configuration/config';

export type ApiType = IApiType;
export type ServiceOption = IOptions;