/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      userID
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        ophthalmologistID
        Records {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
