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
// export const SAVE_BOOK = gql`
//     mutation saveBook($authors: [String!], $description: String!, $title: String!, $image: Stringe!, $link: String!) {
//     }
// `

// export const REMOVE_BOOK = gql`
//     mutation removeBook($bookId: String!) {
//         removeBook(bookId: $bookId) {
//             _id
//         }
//     }
// `

// refer to server/schemas/typeDefs
// refer to graphQL Playground Mutations

// type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     saveBook(input: bookInput): User
//     removeBook(bookId: ID!): User
// }
