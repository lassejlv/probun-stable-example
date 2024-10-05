import { Probun, logger as httpLogger } from 'probun';
import { env } from './lib/env';
import { logger } from './lib/logger';

Probun({
  port: Number(env.PORT) || 3000,
  routes: 'src/routes',
  onReady: ({ port }) => logger.info(`Listening on port ${port}`),
  middlewares: [httpLogger],
});
