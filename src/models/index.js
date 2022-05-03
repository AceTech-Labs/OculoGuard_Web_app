// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PredictionTypes = {
  "PROGNOSIS": "PROGNOSIS",
  "DIABETICRETINOPATHY": "DIABETICRETINOPATHY",
  "MACULOEDEMA": "MACULOEDEMA",
  "GLAUCOMA": "GLAUCOMA"
};

const { S3Object, Record, User, Ophthalmologist } = initSchema(schema);

export {
  S3Object,
  Record,
  User,
  Ophthalmologist,
  PredictionTypes
};