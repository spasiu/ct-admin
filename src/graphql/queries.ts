import { gql } from '@apollo/client';

export const GET_PRODUCT_ITEMS_WITH_ORDER_ID_BY_BREAK_ID = gql`
  query GetProductIitemsWithOrderIdByBreakId($id: uuid!) {
    BreakProductItems(where: {order_id: {_is_null: false}, Break: {id: {_eq: $id}}}) {
      id
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($unitOfMeasure: [unit_of_measure_enum!], $input: String) {
    Products(
      order_by: { created_at: asc }
      where: {
        unit_of_measure: { _in: $unitOfMeasure }
        available: { _eq: true }
        description: { _ilike: $input }
      }
    ) {
      id
      unit_of_measure
      description
      year
      manufacturer
      brand
      series
      category
      type
      boxes_per_case
      packs_per_box
      cards_per_pack
      card_number
      player
      parallel
      insert
      rookie_card
      memoribillia
      autograph
      numbered
      grader
      grade
      available
      totalCost: Inventory_aggregate {
        aggregate {
          sum {
            cost_basis
          }
        }
      }
      averageCost: Inventory_aggregate {
        aggregate {
          avg {
            cost_basis
          }
        }
      }
      unassignedCount: Inventory_aggregate(
        where: { break_id: { _is_null: true } }
      ) {
        aggregate {
          count
        }
      }
      assignedCount: Inventory_aggregate(
        where: { break_id: { _is_null: false } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: uuid!) {
    Products_by_pk(id: $id) {
      id
      unit_of_measure
      description
      year
      manufacturer
      brand
      series
      category
      type
      boxes_per_case
      packs_per_box
      cards_per_pack
      card_number
      player
      parallel
      insert
      rookie_card
      memoribillia
      autograph
      numbered
      grader
      grade
      available
      Inventory {
        id
        location
        supplier
        purchase_date
        cost_basis
        Break {
          id
          title
        }
      }
      totalCost: Inventory_aggregate {
        aggregate {
          sum {
            cost_basis
          }
        }
      }
      averageCost: Inventory_aggregate {
        aggregate {
          avg {
            cost_basis
          }
        }
      }
      unassignedCount: Inventory_aggregate(
        where: { break_id: { _is_null: true } }
      ) {
        aggregate {
          count
        }
      }
      assignedCount: Inventory_aggregate(
        where: { break_id: { _is_null: false } }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_INVENTORY = gql`
  query GetInventory {
    Inventory {
      id
      location
      break_id
      Product {
        id
        description
        category
        manufacturer
        brand
        type
        year
      }
    }
  }
`;

export const GET_UNASSIGNED_INVENTORY = gql`
  query GetUnassignedInventory {
    Inventory(where: { break_id: { _is_null: true } }) {
      id
      location
      break_id
      Product {
        id
        description
        category
        manufacturer
        brand
        type
        year
      }
    }
  }
`;

export const GET_INVENTORY_BY_PROD_ID = gql`
  query GetInventoryByProdId($prod_id: uuid!) {
    Inventory(where: { product_id: { _eq: $prod_id } }) {
      id
      cost_basis
      Break {
        id
        Event {
          id
        }
      }
      Product {
        id
        unit_of_measure
        category
        manufacturer
        brand
        type
        year
      }
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    Events(where: { archived: { _eq: false } }, order_by: { start_time: asc }) {
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
      Breaks(where: { archived: { _eq: false } }) {
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

export const GET_LIVE_EVENT_BY_ID = gql`
  query GetLiveEventById($id: uuid!) {
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
        result
        BreakProductItems_aggregate(where: { order_id: { _is_null: true } }) {
          aggregate {
            count
          }
        }
        BreakProductItems(order_by: { title: asc }) {
          title
          Order {
            User {
              username
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_EVENTS = gql`
  query SearchEvents($input: String!) {
    Events(where: { title: { _ilike: $input } }) {
      id
      title
    }
  }
`;

export const GET_BREAK_BY_ID = gql`
  query GetBreakById($id: uuid!) {
    Breaks_by_pk(id: $id) {
      id
      image
      break_type
      description
      price
      spots
      status
      teams_per_spot
      title
      dataset
      line_items
      Event {
        id
        title
        start_time
        description
        User {
          id
          first_name
          last_name
        }
      }
      Inventory {
        id
        location
        Product {
          id
          description
        }
      }
      BreakProductItems(order_by: { title: asc }) {
        id
        title
        price
        Order {
          id
          User {
            id
            username
          }
        }
      }
    }
  }
`;

export const GET_BREAK_DATA = gql`
  query GetBreakData($id: uuid!) {
    Breaks_by_pk(id: $id) {
      id
      break_type
      result
      BreakProductItems {
        Order {
          User {
            id
            username
          }
        }
      }
      Inventory {
        Product {
          id
          description
          category
          year
          manufacturer
          brand
          series
        }
      }
    }
  }
`;

export const SEARCH_BREAKS = gql`
  query SearchBreaks($input: String!) {
    Breaks(where: { title: { _ilike: $input } }) {
      id
      title
    }
  }
`;

export const GET_HITS = gql`
  query GetHits {
    Hits(order_by: { created_at: desc }, where: { archived: { _eq: false } }) {
      id
      description
      user_id
      break_id
      Break {
        title
      }
      image_front
      image_back
      year
      category
      manufacturer
      brand
      series
      card_number
      player
      parallel
      insert
      rookie_card
      memoribillia
      autograph
      numbered
      User {
        id
        username
      }
      Break {
        id
        title
        Event {
          start_time
        }
      }
    }
  }
`;

export const GET_EXTENSIBLE_VALUES = gql`
  query GetExtensibleValues {
    ExtensibleValues(order_by: { field: asc, value: asc }) {
      field
      value
    }
  }
`;

export const GET_FILTERED_EXTENSIBLE_VALUES = gql`
  query GetFilteredExtensibleValues($fields: [String!]!) {
    ExtensibleValues(
      where: { field: { _in: $fields } }
      order_by: { value: asc }
    ) {
      value
      field
    }
  }
`;

export const SEARCH_EXTENSIBLE_VALUES = gql`
  query SearchExtensibleValues($input: String!, $field: String!) {
    ExtensibleValues(
      where: { value: { _ilike: $input }, field: { _eq: $field } }
      order_by: { value: asc }
      limit: 20
    ) {
      field
      value
    }
  }
`;

export const GET_ADMIN_MANAGER_USERS = gql`
  query GetAdminManagerUsers {
    Users(
      where: { role: { _in: [ADMIN, MANAGER] } }
      order_by: { email: asc }
    ) {
      id
      email
      role
      is_breaker
    }
  }
`;

export const GET_BREAKER_PROFILE = gql`
  query GetBreakerProfile($id: String!) {
    Users_by_pk(id: $id) {
      first_name
      last_name
      image
      is_breaker
      Stream {
        stream_key
        stream_url
      }
    }

    BreakerProfiles(where: { user_id: { _eq: $id } }, limit: 1) {
      bio
      video
      instagram
      twitter
      facebook
      linkedin
      tiktok
    }
  }
`;

export const GET_CHAT_USER = gql`
  query GetChatUser($id: String!) {
    Users_by_pk(id: $id) {
      first_name
      last_name
      image
      username
    }
  }
`;

export const GET_TEAM_DATA = gql`
  query GetTeamData($year: smallint!, $sport: String!) {
    Teams(
      where: {
        sport: { _eq: $sport }
        _and: [{ start_year: { _lte: $year } }, { end_year: { _gte: $year } }]
      }
    ) {
      name
      city
      color
      color_secondary
      short_code
    }
  }
`;

export const GET_DIVISION_DATA = gql`
  query GetDivisionData($sport: String!) {
    Divisions(where: { sport: { _eq: $sport } }) {
      short_code
      name
      color
      color_secondary
    }
  }
`;

export const SEARCH_PLAYERS = gql`
  query SearchPlayers($input: String!) {
    Players(where: { name: { _ilike: $input } }) {
      id
      name
    }
  }
`;

export const GET_EVENT_RESULTS = gql`
  query GetResults($eventId: uuid!) {
    Breaks(where: { event_id: { _eq: $eventId } }) {
      id
      title
      result
      BreakProductItems {
        Order {
          user_id
          bc_order_id
          User {
            username
            first_name
            last_name
          }
        }
      }
    }
  }
`;
