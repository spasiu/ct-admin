import { gql } from '@apollo/client';

export const GET_PRODUCT_ITEMS_WITH_ORDER_ID_BY_BREAK_ID = gql`
  query GetProductIitemsWithOrderIdByBreakId($id: uuid!) {
    BreakProductItems(
      where: { order_id: { _is_null: false }, Break: { id: { _eq: $id } } }
    ) {
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
      subcategory
      type
      boxes_per_case
      packs_per_box
      cards_per_pack
      card_number
      player
      parallel
      insert
      rookie_card
      memorabilia
      autograph
      numbered
      grader
      grade
      available
      break_products {
        Break {
          id
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
      subcategory
      type
      boxes_per_case
      packs_per_box
      cards_per_pack
      card_number
      player
      parallel
      insert
      rookie_card
      memorabilia
      autograph
      numbered
      grader
      grade
      available
      break_products {
        Break {
          id
          title
        }
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
      video_url
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
      datasets {
        data
      }
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
      break_products {
        Product {
          id
          description
        }
      }
      BreakProductItems(order_by: { title: asc }) {
        id
        title
        price
        bc_product_id
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
      break_products {
        Product {
          id
          description
          year
          category
          manufacturer
          brand
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
      product_id
      image_front
      image_back
      card_number
      player
      parallel
      insert
      rookie_card
      memorabilia
      autograph
      numbered
      published
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
      Product {
        id
        description
        year
        category
        manufacturer
        brand
        series
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

export const GET_DATASETS = gql`
  query GetDatasets(
    $year: smallint!
    $category: String!
    $subcategory: String_comparison_exp
    $type: dataset_type_enum_comparison_exp
  ) {
    datasets(
      where: {
        _and: [
          { year: { _eq: $year } }
          { category: { _eq: $category } }
          { subcategory: $subcategory }
          { type: $type }
        ]
      }
    ) {
      id
      data
    }
  }
`;

export const GET_PRODUCT_OPTIONS = gql`
  query getProductOptions {
    Products(
      distinct_on: [
        year
        subcategory
        manufacturer
        brand
        series
        type
        parallel
        insert
        memorabilia
      ]
    ) {
      year
      subcategory
      manufacturer
      brand
      series
      type
      parallel
      insert
      memorabilia
    }
  }
`;

export const GET_HIT_OPTIONS = gql`
  query getHitOptions {
    Hits (
      distinct_on: [
        parallel
        memorabilia
        insert
      ]
    ) {
      parallel
      memorabilia
      insert
    }
  }
`;

