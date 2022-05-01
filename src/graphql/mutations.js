/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOphthalmologist = /* GraphQL */ `
  mutation CreateOphthalmologist(
    $input: CreateOphthalmologistInput!
    $condition: ModelOphthalmologistConditionInput
  ) {
    createOphthalmologist(input: $input, condition: $condition) {
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
export const updateOphthalmologist = /* GraphQL */ `
  mutation UpdateOphthalmologist(
    $input: UpdateOphthalmologistInput!
    $condition: ModelOphthalmologistConditionInput
  ) {
    updateOphthalmologist(input: $input, condition: $condition) {
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
export const deleteOphthalmologist = /* GraphQL */ `
  mutation DeleteOphthalmologist(
    $input: DeleteOphthalmologistInput!
    $condition: ModelOphthalmologistConditionInput
  ) {
    deleteOphthalmologist(input: $input, condition: $condition) {
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
