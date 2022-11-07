import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ManagerssMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerManagerss = {
  readonly id: string;
  readonly ManagersName?: string | null;
  readonly Assistant?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyManagerss = {
  readonly id: string;
  readonly ManagersName?: string | null;
  readonly Assistant?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Managerss = LazyLoading extends LazyLoadingDisabled ? EagerManagerss : LazyManagerss

export declare const Managerss: (new (init: ModelInit<Managerss, ManagerssMetaData>) => Managerss) & {
  copyOf(source: Managerss, mutator: (draft: MutableModel<Managerss, ManagerssMetaData>) => MutableModel<Managerss, ManagerssMetaData> | void): Managerss;
}

type EagerNote = {
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
}

type LazyNote = {
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
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note, NoteMetaData>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}