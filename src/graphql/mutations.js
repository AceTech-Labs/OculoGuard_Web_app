/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      id
      bucket
      region
      key
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
      id
      userID
      details
      diseaseType
      isVerified
      verifiedBy
      S3Object {
        id
        bucket
        region
        key
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recordS3ObjectId
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
      details
      diseaseType
      isVerified
      verifiedBy
      S3Object {
        id
        bucket
        region
        key
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recordS3ObjectId
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
      details
      diseaseType
      isVerified
      verifiedBy
      S3Object {
        id
        bucket
        region
        key
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      recordS3ObjectId
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
      age
      ophthalmologistID
      Records {
        items {
          id
          userID
          details
          diseaseType
          isVerified
          verifiedBy
          S3Object {
            id
            bucket
            region
            key
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recordS3ObjectId
        }
        nextToken
        startedAt
      }
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      age
      ophthalmologistID
      Records {
        items {
          id
          userID
          details
          diseaseType
          isVerified
          verifiedBy
          S3Object {
            id
            bucket
            region
            key
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recordS3ObjectId
        }
        nextToken
        startedAt
      }
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      age
      ophthalmologistID
      Records {
        items {
          id
          userID
          details
          diseaseType
          isVerified
          verifiedBy
          S3Object {
            id
            bucket
            region
            key
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          recordS3ObjectId
        }
        nextToken
        startedAt
      }
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          age
          ophthalmologistID
          Records {
            nextToken
            startedAt
          }
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          age
          ophthalmologistID
          Records {
            nextToken
            startedAt
          }
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          age
          ophthalmologistID
          Records {
            nextToken
            startedAt
          }
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
