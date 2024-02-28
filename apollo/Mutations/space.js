import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_SPACE_ITEM{
  create_Space_item(data: {}) {
    id
    status
    sort
    user_created
    date_created
    date_created_func {
      year
      month
      week
      day
      weekday
      hour
      minute
      second
    }
    user_updated
    date_updated
    date_updated_func {
      year
      month
      week
      day
      weekday
      hour
      minute
      second
    }
    name
    description
    image(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
      storage
      filename_disk
      filename_download
      title
      type
      uploaded_by
      uploaded_on
      modified_by
      modified_on
      charset
      filesize
      width
      height
      duration
      embed
      description
      location
      tags
      metadata
    }
    media(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
      storage
      filename_disk
      filename_download
      title
      type
      uploaded_by
      uploaded_on
      modified_by
      modified_on
      charset
      filesize
      width
      height
      duration
      embed
      description
      location
      tags
      metadata
    }
    owner
    numberOfMembers
    groupType
    customers(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    customers_func {
      count
    }
    newsfeed(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    newsfeed_func {
      count
    }
    products(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    products_func {
      count
    }
    shorts(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    shorts_func {
      count
    }
  }
}
`

export default { mutation }
