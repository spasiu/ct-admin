import { gql } from '@apollo/client';

export const GET_SKUS = gql`
  query GetSKUs {
    SKU {
      id
      sku_id
      manufacturer
      brand
      category
      year1
      year2
      product_type
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    Events {
      id
      title
      start_time
      User {
        id
      }
      Breaks {
        id
      }
      Breaks_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query GetEventById($id: uuid!) {
    Events_by_pk(id: $id) {
      id
      title
      start_time
      User {
        id
      }
      Breaks {
        id
        title
        break_type
        price
        spots
      }
    }
  }
`;
