import gql from 'graphql-tag';

const outletsmenu = gql`
query ($name: String!){
  outlets (filter: {name: {_eq: $name}}){
    id
    name
    uid
    color
    colortext
    callouts
    description
    date_created
    date_updated
  }
}`

export default outletsmenu;