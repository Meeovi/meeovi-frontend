import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_SHORT_ITEM{
  create_shorts_item(data: {}) {
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
    video(
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
    video_url
    duration
    host
    thumbnail(
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
    dateTime
    dateTime_func {
      year
      month
      week
      day
      weekday
      hour
      minute
      second
    }
    comments(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    comments_func {
      count
    }
    brands(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    brands_func {
      count
    }
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
    Space(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    Space_func {
      count
    }
    departments(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    departments_func {
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
    tags(
      filter: {}
      sort: ["string"]
      limit: 1
      offset: 1
      page: 1
      search: "string"
    ) {
      id
    }
    tags_func {
      count
    }
  }
}
`

export default { mutation }