import { gql } from '@apollo/client';

/**
 * EVENT MUTATIONS
 */
export const INSERT_EVENT = gql`
  mutation InsertEvent($data: Events_insert_input!) {
    insert_Events_one(object: $data) {
      id
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent($id: uuid!, $data: Events_set_input!) {
    update_Events_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      description
      image
      user_id
      title
      start_time
    }
  }
`;

export const DELETE_EVENTS = gql`
  mutation DeleteEventByIds($ids: [uuid!]) {
    delete_Events(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;

export const DELETE_EVENTS_AND_BREAKS = gql`
  mutation DeleteEventsAndBreaksByEventIds($ids: [uuid!]) {
    delete_Breaks(where: { Event: { id: { _in: $ids } } }) {
      affected_rows
    }
    delete_Events(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;

/**
 * BREAK MUTATIONS
 */
export const INSERT_BREAK = gql`
  mutation InsertBreak($data: Breaks_insert_input!) {
    insert_Breaks_one(object: $data) {
      id
      event_id
      title
      description
      spots
      teams_per_spot
      break_type
      price
      image
    }
  }
`;

export const UPDATE_BREAK = gql`
  mutation UpdateBreak($id: uuid!, $data: Breaks_set_input!) {
    update_Breaks_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;

export const DELETE_BREAKS = gql`
  mutation DeleteBreakByIds($ids: [uuid!]) {
    delete_Breaks(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;

export const ARCHIVE_BREAKS = gql`
  mutation ArchiveBreaksById($ids: [uuid!]) {
    delete_BreakProductItems(where: { break_id: { _in: $ids } }) {
      affected_rows
    }

    update_Inventory(
      where: { break_id: { _in: $ids } }
      _set: { break_id: null }
    ) {
      affected_rows
    }

    delete_Breaks(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;

/**
 * PRODUCT MUTATIONS
 */
export const INSERT_PRODUCT = gql`
  mutation InsertProduct($data: Products_insert_input!) {
    insert_Products_one(object: $data) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: uuid!, $data: Products_set_input!) {
    update_Products_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation DeleteProductsByIds($ids: [uuid!]) {
    delete_Products(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;

export const ARCHIVE_PRODUCTS = gql`
  mutation ArchiveProductsByIds($ids: [uuid!]) {
    update_Products(where: { id: { _in: $ids } }, _set: { available: false }) {
      affected_rows
    }
  }
`;

export const UNARCHIVE_PRODUCTS = gql`
  mutation UnarchiveProductsByIds($ids: [uuid!]) {
    update_Products(where: { id: { _in: $ids } }, _set: { available: true }) {
      affected_rows
    }
  }
`;

/**
 * INVENTORY MUTATIONS
 */
export const INSERT_INVENTORY = gql`
  mutation InsertInventory($inventory: [Inventory_insert_input!]!) {
    insert_Inventory(objects: $inventory) {
      affected_rows
    }
  }
`;

export const UPDATE_INVENTORY_BREAK = gql`
  mutation UpdateInventoryBreak($ids: [uuid!], $breakId: uuid!) {
    update_Inventory(
      where: { id: { _in: $ids } }
      _set: { break_id: $breakId }
    ) {
      affected_rows
    }
  }
`;

/**
 * SETTINGS MUTATIONS
 */
export const INSERT_EXTENSIBLE_VALUES = gql`
  mutation InsertExtensibleValues($data: [ExtensibleValues_insert_input!]!) {
    insert_ExtensibleValues(objects: $data) {
      affected_rows
    }
  }
`;

/**
 * HITS MUTATIONS
 */
export const INSERT_HIT = gql`
  mutation InsertHit($data: Hits_insert_input!) {
    insert_Hits_one(object: $data) {
      id
    }
  }
`;

export const UPDATE_HIT = gql`
  mutation UpdateHit($id: uuid!, $data: Hits_set_input!) {
    update_Hits_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;
