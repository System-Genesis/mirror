import { initializeLogger } from './logger/logger';
import initializeMongo from './mongo/initializeMongo';
import { initializeRabbit } from './rabbit/rabbit';
import initializeServer from './express/app';

(async () => {
  await initializeRabbit();
  await initializeLogger();
  await initializeMongo();

  initializeServer();
})();
