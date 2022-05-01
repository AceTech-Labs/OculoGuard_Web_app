import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OphthalmologistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Record {
  readonly id: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Record, RecordMetaData>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record, RecordMetaData>) => MutableModel<Record, RecordMetaData> | void): Record;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly ophthalmologistID?: string | null;
  readonly Records?: (Record | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Ophthalmologist {
  readonly id: string;
  readonly name?: string | null;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ophthalmologist, OphthalmologistMetaData>);
  static copyOf(source: Ophthalmologist, mutator: (draft: MutableModel<Ophthalmologist, OphthalmologistMetaData>) => MutableModel<Ophthalmologist, OphthalmologistMetaData> | void): Ophthalmologist;
}