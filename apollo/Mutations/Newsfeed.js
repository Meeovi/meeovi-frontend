import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_NEWSFEED_ITEM{
mutation {
    create_newsfeed_item(data: {}) {
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
      post
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
      owner
      name
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
      reactions(
        filter: {}
        sort: ["string"]
        limit: 1
        offset: 1
        page: 1
        search: "string"
      ) {
        id
      }
      reactions_func {
        count
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
      }
      media_func {
        count
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
    }
  }
}`

export default { mutation }