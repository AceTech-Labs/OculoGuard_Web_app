/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      ophthalmologistID
      Records {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          ophthalmologistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          ophthalmologistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          ophthalmologistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
