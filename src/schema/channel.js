export default `
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    maessages: [Message!]!
    users: [User!]!
  }
`