/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManagerss = /* GraphQL */ `
  mutation CreateManagerss(
    $input: CreateManagerssInput!
    $condition: ModelManagerssConditionInput
  ) {
    createManagerss(input: $input, condition: $condition) {
      id
      ManagersName
      Assistant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateManagerss = /* GraphQL */ `
  mutation UpdateManagerss(
    $input: UpdateManagerssInput!
    $condition: ModelManagerssConditionInput
  ) {
    updateManagerss(input: $input, condition: $condition) {
      id
      ManagersName
      Assistant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteManagerss = /* GraphQL */ `
  mutation DeleteManagerss(
    $input: DeleteManagerssInput!
    $condition: ModelManagerssConditionInput
  ) {
    deleteManagerss(input: $input, condition: $condition) {
      id
      ManagersName
      Assistant
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      agegroup
      gender
      location
      date
      time
      isdeleted
      realdate
      realtime
      contact
      pitch
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      agegroup
      gender
      location
      date
      time
      isdeleted
      realdate
      realtime
      contact
      pitch
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      agegroup
      gender
      location
      date
      time
      isdeleted
      realdate
      realtime
      contact
      pitch
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
