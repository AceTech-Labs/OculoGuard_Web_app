/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
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
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncS3Objects = /* GraphQL */ `
  query SyncS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncS3Objects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
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
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncRecords = /* GraphQL */ `
  query SyncRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOphthalmologist = /* GraphQL */ `
  query GetOphthalmologist($id: ID!) {
    getOphthalmologist(id: $id) {
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
export const listOphthalmologists = /* GraphQL */ `
  query ListOphthalmologists(
    $filter: ModelOphthalmologistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOphthalmologists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        Users {
          items {
            id
            name
            age
            ophthalmologistID
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
      nextToken
      startedAt
    }
  }
`;
export const syncOphthalmologists = /* GraphQL */ `
  query SyncOphthalmologists(
    $filter: ModelOphthalmologistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOphthalmologists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Users {
          items {
            id
            name
            age
            ophthalmologistID
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
      nextToken
      startedAt
    }
  }
`;
