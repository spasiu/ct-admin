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
    Events(order_by: { start_time: asc }) {
      id
      title
      start_time
      description
      User {
        id
        Profile {
          first_name
          last_name
        }
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
      description
      User {
        id
        Profile {
          first_name
          last_name
        }
      }
      Breaks(order_by: { created_at: asc }) {
        id
        title
        break_type
        price
        spots
        description
        teams_per_spot
        image
      }
    }
  }
`;
