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

/**
 * SKU MUTATIONS
 */
export const INSERT_SKU = gql`
  mutation InsertSKU($data: SKU_insert_input!) {
    insert_SKU_one(object: $data) {
      id
    }
  }
`;

export const UPDATE_SKU = gql`
  mutation UpdateSKU($id: uuid!, $data: SKU_set_input!) {
    update_SKU_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;

export const DELETE_SKUS = gql`
  mutation DeleteSKUByIds($ids: [uuid!]) {
    delete_SKU(where: { id: { _in: $ids } }) {
      affected_rows
    }
  }
`;
