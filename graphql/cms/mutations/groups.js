import gql from 'graphql-tag';

const CREATE_GROUP = gql`
mutation CREATE_GROUP($description: String!, $name: String!) {
  createGroup(
    input: {types: DEFAULT, name: $name, description: $description, status: PUBLIC}
  ) {
    group {
      description
      name
      status
    }
  }
}`

const UPDATE_GROUP = gql`
  mutation UPDATE_GROUP($description: String!, $name: String!, $id: ID!) {
    updateGroup(
      input: {types: DEFAULT, name: $name, description: $description, status: PUBLIC, id: $id}
    ) {
      group {
        description
        name
        status
        id
    }
  }
}`

const DELETE_GROUP = gql`
  mutation DELETE_GROUP($id: ID!) {
    deleteGroup(input: {id: $id}) {
      group {
        id
      }
    }
  }`

export { CREATE_GROUP, UPDATE_GROUP, DELETE_GROUP };