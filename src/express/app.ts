import express from 'express';
import morgan from 'morgan';
import envConfig from '../config/env.config';
import { errorMiddleware } from './error';
import router from './routes';

const initializeServer = () => {
  const app = express();
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/mirror', router);

  app.use('/isAlive', (_req, res) => {
    res.status(200).send('alive');
  });

  app.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
  });

  app.use(errorMiddleware);

  app.listen(envConfig.port, () => {
    console.log('Listening on port: ' + envConfig.port);
  });
};

export default initializeServer;
