import gql from 'graphql-tag';

const registerUser = gql`
mutation registerUser(
    $username: String!, 
    $lastName: String, 
    $firstName: String, 
    $email: String!, 
    $password: String!
    ) {
        registerUser(
            input: {
            username: $username, 
            email: $email, 
            lastName: $lastName,  
            firstName: $firstName, 
            password: $password
           }) {
             user {
                id
                }
            }
}`

export default registerUser;