export default `
  type User {
    id: Int!
    username: String!
    email: String!
    messages: Message!
    teams: [Team!]!
  }

  // type Query {
  //   getUser(username: String!, email: String!, password: String!): User!
  // }

  // type Mutation {
  //   createUser(username: String!, email: String!, password: String!): User!
  // }

`
