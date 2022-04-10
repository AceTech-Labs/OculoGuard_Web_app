/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord($owner: String) {
    onCreateRecord(owner: $owner) {
      id
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord($owner: String) {
    onUpdateRecord(owner: $owner) {
      id
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord($owner: String) {
    onDeleteRecord(owner: $owner) {
      id
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateOphthalmologist = /* GraphQL */ `
  subscription OnCreateOphthalmologist($owner: String) {
    onCreateOphthalmologist(owner: $owner) {
      id
      name
      Users {
        items {
          id
          name
          ophthalmologistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateOphthalmologist = /* GraphQL */ `
  subscription OnUpdateOphthalmologist($owner: String) {
    onUpdateOphthalmologist(owner: $owner) {
      id
      name
      Users {
        items {
          id
          name
          ophthalmologistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteOphthalmologist = /* GraphQL */ `
  subscription OnDeleteOphthalmologist($owner: String) {
    onDeleteOphthalmologist(owner: $owner) {
      id
      name
      Users {
        items {
          id
          name
          ophthalmologistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
