import gql from 'graphql-tag'

export const query = gql`
query {
    customers{
        id
        name_prefix
        first_name
        middle_name
        last_name
        name_suffix
        username
        email
        phone
        zipcode
        websites {
          websites_id {
            id
            name
            url
            image {
              filename_disk
            }
          }
        }
        tax_vat_number
        description
        Address
        password
        payment
        dateofbirth
        image {
        filename_disk
        }
        gender
        type
      products {
        products_id {
          id
          name
          price
          image {
            filename_disk
          }
          content
        }
      }
    }
  }
`