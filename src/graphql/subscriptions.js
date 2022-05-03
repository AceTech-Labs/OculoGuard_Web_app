/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object {
    onCreateS3Object {
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
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object {
    onUpdateS3Object {
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
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object {
    onDeleteS3Object {
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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOphthalmologist = /* GraphQL */ `
  subscription OnCreateOphthalmologist {
    onCreateOphthalmologist {
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
export const onUpdateOphthalmologist = /* GraphQL */ `
  subscription OnUpdateOphthalmologist {
    onUpdateOphthalmologist {
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
export const onDeleteOphthalmologist = /* GraphQL */ `
  subscription OnDeleteOphthalmologist {
    onDeleteOphthalmologist {
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
