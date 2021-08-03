import { gql } from '@apollo/client';

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
    Events(order_by: { start_time: asc }) {
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
      status
      image
      User {
        id
        first_name
        last_name
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
        line_items
        Inventory {
          id
          location
          Product {
            id
            description
          }
        }
        BreakProductItems {
          id
          title
          price
        }
      }
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
        Product {
          id
          description
        }
      }
      BreakProductItems(order_by: { title: asc }) {
        id
        title
        price
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
    ) {
      field
      value
    }
  }
`;

export const GET_ADMIN_MANAGER_USERS = gql`
  query GetAdminManagerUsers {
    Users(where: { role: { _in: [ADMIN, MANAGER] } }) {
      id
      email
      role
      is_breaker
    }
  }
`;
