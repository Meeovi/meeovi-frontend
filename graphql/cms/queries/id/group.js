import gql from 'graphql-tag';

const group = gql`
query NewQuery ($id: ID!) {
group(id: $id){
    creator {
      avatar {
        url
      }
      username
    }
    dateCreated
    description
    id
    lastActivity
    name
    slug
    status
    totalMemberCount
    mods {
      avatar {
        url
      }
      username
      description
    }
    members {
      nodes {
        avatar {
          url
        }
        username
        description
      }
    }
    attachmentCover {
      full
    }
    attachmentAvatar {
      full
    }
    admins {
      avatar {
        url
      }
      username
      description
    }
    activities {
      nodes {
        content
        creator {
          avatar {
            url
          }
          username
        }
        date
        id
        status
        title
        type
      }
    }
  }
}`

export default group;