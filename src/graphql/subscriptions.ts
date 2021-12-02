import { gql } from '@apollo/client';

export const GET_EVENT_BY_ID = gql`
  subscription GetEventById ($id: uuid!) {
    Events_by_pk(id: $id) {
      id
      title
      start_time
      description
      status
      image
      User {
        id
        first_name
        last_name
      }
      Breaks(
        where: { archived: { _eq: false } }
        order_by: { created_at: asc }
      ) {
        id
        title
        break_type
        price
        spots
        description
        teams_per_spot
        image
        line_items
        status
        dataset
        BreakProductItems_aggregate(where: { order_id: { _is_null: true } }) {
          aggregate {
            count
          }
        }
        BreakProductItems(order_by: { title: asc }) {
          id
          title
          price
          Order {
            id
          }
        }
      }
    }
  }
`;