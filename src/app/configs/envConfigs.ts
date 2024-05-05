import env from '../../public/env';
export const baseApiUrl = `${env.APP_ROOT_DOMAIN}/api${env.API_VERSION ?? ''}`;
export const baseDeploymentUrl = env.APP_VERSION;
export const devUserName = env.APP_USER_NAME;

export const devPassword = env.APP_PWD;
export const envName = env.APP_ENV;
