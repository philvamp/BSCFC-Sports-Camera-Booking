/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getManagerss = /* GraphQL */ `
  query GetManagerss($id: ID!) {
    getManagerss(id: $id) {
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
export const listManagersses = /* GraphQL */ `
  query ListManagersses(
    $filter: ModelManagerssFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagersses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ManagersName
        Assistant
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncManagersses = /* GraphQL */ `
  query SyncManagersses(
    $filter: ModelManagerssFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManagersses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ManagersName
        Assistant
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
