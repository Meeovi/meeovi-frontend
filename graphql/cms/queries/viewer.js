import gql from 'graphql-tag';

const viewer = gql`
query viewer {
    firstName
    email
    lastName
    name
    nicename
    nickname
    registeredDate
    username
}`

export default viewer;