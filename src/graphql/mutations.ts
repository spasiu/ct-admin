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

export const ARCHIVE_EVENTS_AND_BREAKS = gql`
  mutation ArchiveEventsAndBreaksByEventIds($ids: [uuid!]) {
    update_Events(where: { id: { _in: $ids } }, _set: { archived: true }) {
      affected_rows
    }

    update_Breaks(
      where: { Event: { id: { _in: $ids } } }
      _set: { archived: true }
    ) {
      affected_rows
    }

    update_Inventory(
      where: { Break: { Event: { id: { _in: $ids } } } }
      _set: { break_id: null }
    ) {
      affected_rows
    }
  }
`;

/**
 * BREAK MUTATIONS
 */
export const INSERT_BREAK = gql`
  mutation InsertBreak($data: [Breaks_insert_input!]!) {
    insert_Breaks(objects: $data) {
      returning {
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
  }
`;

export const UPDATE_BREAK = gql`
  mutation UpdateBreak($id: uuid!, $data: Breaks_set_input!) {
    update_Breaks_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;

export const FULL_BREAK_UPDATE = gql`
  mutation FullBreakUpdate($id: uuid!, $data: [Breaks_insert_input!]!) {
    delete_break_product (where: {break_id: {_eq: $id}}){
      affected_rows
    }

    insert_Breaks(objects: $data, on_conflict:{
      constraint: Breaks_pkey,
      update_columns: [event_id, title, description, image, spots, teams_per_spot, price, break_type, dataset_id]
    }) {
      returning {
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
  }
`;

export const ARCHIVE_BREAKS = gql`
  mutation ArchiveBreaksById($ids: [uuid!]) {
    update_Inventory(
      where: { break_id: { _in: $ids } }
      _set: { break_id: null }
    ) {
      affected_rows
    }

    update_Breaks(where: { id: { _in: $ids } }, _set: { archived: true }) {
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
      year
      category
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: uuid!, $data: Products_set_input!) {
    update_Products_by_pk(pk_columns: { id: $id }, _set: $data) {
      year
      category
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

export const INSERT_DATASET = gql`
  mutation InsertDataset($data: datasets_insert_input!) {
    insert_datasets_one(object: $data) {
      id
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
      user_id
      player
      published
    }
  }
`;

export const ARCHIVE_HIT = gql`
  mutation ArchiveHitsById($ids: [uuid!]) {
    update_Hits(where: { id: { _in: $ids } }, _set: { archived: true }) {
      affected_rows
    }
  }
`;

/**
 * PROFILE MUTATIONS
 */
export const UPDATE_BREAKER_PROFILE = gql`
  mutation UpdateBreakerProfile(
    $id: String!
    $first_name: String!
    $last_name: String!
    $image: String!
    $profile: BreakerProfiles_insert_input!
  ) {
    update_Users_by_pk(
      pk_columns: { id: $id }
      _set: { first_name: $first_name, last_name: $last_name, image: $image }
    ) {
      first_name
      last_name
      image
    }

    insert_BreakerProfiles_one(
      object: $profile
      on_conflict: {
        constraint: BreakerProfiles_user_id_key
        update_columns: [
          bio
          video
          instagram
          twitter
          facebook
          linkedin
          tiktok
        ]
      }
    ) {
      id
    }
  }
`;
