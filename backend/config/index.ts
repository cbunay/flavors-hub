import * as dotenv from 'dotenv';

dotenv.config();

enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
  PROD = 'production',
}

interface Env {
  env: NodeEnv;
  port: number;
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  port: Number(process.env.PORT) || 3000,
};
