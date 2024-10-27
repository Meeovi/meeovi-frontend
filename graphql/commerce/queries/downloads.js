import gql from 'graphql-tag';

const downloads = gql `
query{
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
`

export default { downloads }