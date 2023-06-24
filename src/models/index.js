// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Healthcheck } = initSchema(schema);

export {
  Healthcheck
};