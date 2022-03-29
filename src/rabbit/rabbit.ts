import menash from 'menashmq';
import config from '../config/env.config';

/**
 * Initialized the connection to rabbit, declares the queues
 */
export const initializeRabbit = async () => {
  try {
    console.log('Try connect to Rabbit');

    await menash.connect(config.rabbit.uri, config.rabbit.retryOptions);

    console.log('Rabbit connected');
  } catch (error: any) {
    console.log('Unknown Error, on Connect Rabbit', error.message);
  }
};
export default { initializeRabbit };
