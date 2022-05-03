import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PredictionTypes {
  PROGNOSIS = "PROGNOSIS",
  DIABETICRETINOPATHY = "DIABETICRETINOPATHY",
  MACULOEDEMA = "MACULOEDEMA",
  GLAUCOMA = "GLAUCOMA"
}



type S3ObjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OphthalmologistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class S3Object {
  readonly id: string;
  readonly bucket?: string | null;
  readonly region?: string | null;
  readonly key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<S3Object, S3ObjectMetaData>);
  static copyOf(source: S3Object, mutator: (draft: MutableModel<S3Object, S3ObjectMetaData>) => MutableModel<S3Object, S3ObjectMetaData> | void): S3Object;
}

export declare class Record {
  readonly id: string;
  readonly userID: string;
  readonly details?: string | null;
  readonly diseaseType?: PredictionTypes | keyof typeof PredictionTypes | null;
  readonly isVerified?: boolean | null;
  readonly verifiedBy?: string | null;
  readonly S3Object?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly recordS3ObjectId?: string | null;
  constructor(init: ModelInit<Record, RecordMetaData>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record, RecordMetaData>) => MutableModel<Record, RecordMetaData> | void): Record;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly ophthalmologistID?: string | null;
  readonly Records?: (Record | null)[] | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Ophthalmologist {
  readonly id: string;
  readonly name?: string | null;
  readonly Users?: (User | null)[] | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ophthalmologist, OphthalmologistMetaData>);
  static copyOf(source: Ophthalmologist, mutator: (draft: MutableModel<Ophthalmologist, OphthalmologistMetaData>) => MutableModel<Ophthalmologist, OphthalmologistMetaData> | void): Ophthalmologist;
}