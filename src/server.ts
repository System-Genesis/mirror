import initializeMongo from './mongo/initializeMongo';
import initializeServer from './express/app';

(async () => {
  await initializeMongo();

  initializeServer();
  
})();
