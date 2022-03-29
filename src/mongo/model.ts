import * as mongoose from 'mongoose';
import config from '../config/env.config';

const { mongo } = config;

const mirrorEntitySchema = new mongoose.Schema(
  {
    goalUserId: { type: String, unique: true, sparse: true },
    personalNumber: { type: String, unique: true, sparse: true },
    identityCard: { type: String, unique: true, sparse: true },
  },
  { versionKey: false, strict: false }
);

const entityMirrorModel = mongoose.model(mongo.collectionName, mirrorEntitySchema);

export default entityMirrorModel;
