import './dotenv';

import * as env from 'env-var';

export default {
  mongo: {
    uri: env.get('MONGO_URI').required().asString(),
    collectionName: env.get('COLLECTION_NAME').required().asString(),
  },
  systemName: env.get('SYSTEM_NAME').asString(),
  serviceName: env.get('SERVICE_NAME').asString(),
  port: env.get('PORT').required().asInt(),
};
