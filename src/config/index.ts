import devVariables from './development';
import stgVariables from './staging';
import prodVariables from './production';

export type EnvVariables = {
  HOGE: string;
  FUGA: string;
};

const envVariables = (): EnvVariables => {
  if (process.env.FLAVOR === 'production') {
    return prodVariables;
  }
  if (process.env.FLAVOR === 'staging') {
    return stgVariables;
  }
  return devVariables;
};

export default envVariables();