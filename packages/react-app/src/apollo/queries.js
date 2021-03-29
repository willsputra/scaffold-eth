import { gql } from 'apollo-boost';

export const ARTISTS_QUERY = gql`
  query artists($address: Bytes!) {
    artists(where: { address: $address }) {
      id
      inkCount
      address
      earnings
      inks(orderBy: createdAt, orderDirection: desc) {
        id
        jsonUrl
        limit
        count
        bestPrice
        createdAt
        sales {
          id
          price
        }
      }
    }
  }
`;

export const INKS_QUERY = gql`
  query inks($first: Int, $skip: Int) {
    inks(first: $first, skip: $skip, orderBy: createdAt, orderDirection: desc) {
      id
      inkNumber
      createdAt
      jsonUrl
      artist {
        id
        address
      }
    }
  }
`;

export const FOR_SALE_QUERY = gql`
  query inks($first: Int, $skip: Int, $orderBy: String, $orderDirection: String) {
    inks(first: $first, skip: $skip where: {bestPrice_gt: "0"}, orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      inkNumber
      createdAt
      jsonUrl
      bestPrice
      bestPriceSource
      bestPriceSetAt
      count
      limit
      artist {
        id
        address
      }
    }
  }
`;

export const HOLDINGS_QUERY = gql`
  query tokens($owner: Bytes!) {
    metaData(id: "blockNumber") {
      id
      value
    }
    tokens(where: { owner: $owner }, orderBy: createdAt, orderDirection: desc) {
      owner
      id
      price
      ink {
        id
        jsonUrl
        limit
        count
        artist {
          id
          address
        }
      }
    }
  }
`;

export const INK_QUERY = gql`
query ink($inkUrl: String!) {
  metaData(id: "blockNumber") {
    id
    value
  }
  ink(id: $inkUrl) {
    id
    inkNumber
    jsonUrl
    artist {
      id
    }
    limit
    count
    createdAt
    mintPrice
    mintPriceNonce
    tokens {
      id
      owner
      network
      price
    }
  }
}
`;

export const INK_MAIN_QUERY = gql`
query token($inkUrl: String!) {
  tokens(where: {ink: $inkUrl}) {
    id
    owner
    ink
  }
}`

export const HOLDINGS_MAIN_QUERY = gql`
  query tokens($owner: Bytes!) {
    tokens(where: { owner: $owner }) {
      id
    	owner
     	network
      createdAt
      ink
      jsonUrl
    }
  }
`;

export const HOLDINGS_MAIN_INKS_QUERY = gql`
  query inks($inkList: [String!]) {
    inks(where: {id_in: $inkList}) {
      id
      jsonUrl
      limit
      count
      artist {
        id
        address
      }
    }
  }
`;