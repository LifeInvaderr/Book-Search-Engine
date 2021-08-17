import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!,$email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }`

// refer to "input on typeDefs to fill"

export const SAVE_BOOK = gql`
mutation saveBook($input: bookInput) {
  saveBook(input: $input) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}

`
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    bookCount 
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`
// refer to server/schemas/typeDefs
// refer to graphQL Playground Mutations

/*
//////////////////////////////////////////////
// NOTES ON MUTATION, GRAPHQL, AND STRUCTURE//
//////////////////////////////////////////////
/

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: bookInput): User // use input typeDef
  removeBook(bookId: ID!): User
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book] //input bookInput in graphQL DOCS
}

input bookInput{
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

graphQL removebook DOCS
removeBook(
  bookId: ID!
) User
*/