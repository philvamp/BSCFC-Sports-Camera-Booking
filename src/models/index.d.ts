import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ManagerssMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Managerss {
  readonly id: string;
  readonly ManagersName?: string | null;
  readonly Assistant?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Managerss, ManagerssMetaData>);
  static copyOf(source: Managerss, mutator: (draft: MutableModel<Managerss, ManagerssMetaData>) => MutableModel<Managerss, ManagerssMetaData> | void): Managerss;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly agegroup?: string | null;
  readonly gender?: string | null;
  readonly location?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly isdeleted?: string | null;
  readonly realdate?: string | null;
  readonly realtime?: string | null;
  readonly contact?: string | null;
  readonly pitch?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}