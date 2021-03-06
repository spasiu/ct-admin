import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  bpchar: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};


/** columns and relationships of "Addresses" */
export type Addresses = {
  __typename?: 'Addresses';
  /** An object relationship */
  User: Users;
  city: Scalars['String'];
  country: Scalars['String'];
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  is_default: Scalars['Boolean'];
  last_name: Scalars['String'];
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  postal_zip_code: Scalars['String'];
  state_province_region: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Addresses" */
export type Addresses_Aggregate = {
  __typename?: 'Addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "Addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'Addresses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
};


/** aggregate fields of "Addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Addresses" */
export type Addresses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Addresses_Max_Order_By>;
  min?: Maybe<Addresses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Addresses_Bool_Exp>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Addresses_Bool_Exp>>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_default?: Maybe<Boolean_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  line1?: Maybe<String_Comparison_Exp>;
  line2?: Maybe<String_Comparison_Exp>;
  postal_zip_code?: Maybe<String_Comparison_Exp>;
  state_province_region?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'Addresses_pkey'
}

/** input type for inserting data into table "Addresses" */
export type Addresses_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_default?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_zip_code?: Maybe<Scalars['String']>;
  state_province_region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'Addresses_max_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_zip_code?: Maybe<Scalars['String']>;
  state_province_region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Addresses" */
export type Addresses_Max_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  line1?: Maybe<Order_By>;
  line2?: Maybe<Order_By>;
  postal_zip_code?: Maybe<Order_By>;
  state_province_region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'Addresses_min_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_zip_code?: Maybe<Scalars['String']>;
  state_province_region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Addresses" */
export type Addresses_Min_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  line1?: Maybe<Order_By>;
  line2?: Maybe<Order_By>;
  postal_zip_code?: Maybe<Order_By>;
  state_province_region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'Addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** on_conflict condition type for table "Addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns?: Array<Addresses_Update_Column>;
  where?: Maybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "Addresses". */
export type Addresses_Order_By = {
  User?: Maybe<Users_Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_default?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  line1?: Maybe<Order_By>;
  line2?: Maybe<Order_By>;
  postal_zip_code?: Maybe<Order_By>;
  state_province_region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: Addresses */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Addresses" */
export enum Addresses_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  PostalZipCode = 'postal_zip_code',
  /** column name */
  StateProvinceRegion = 'state_province_region',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Addresses" */
export type Addresses_Set_Input = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_default?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_zip_code?: Maybe<Scalars['String']>;
  state_province_region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "Addresses" */
export enum Addresses_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  PostalZipCode = 'postal_zip_code',
  /** column name */
  StateProvinceRegion = 'state_province_region',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "BreakProductItems" */
export type BreakProductItems = {
  __typename?: 'BreakProductItems';
  /** An object relationship */
  Break: Breaks;
  /** An object relationship */
  Order?: Maybe<Orders>;
  bc_product_id: Scalars['Int'];
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  order_id?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "BreakProductItems" */
export type BreakProductItems_Aggregate = {
  __typename?: 'BreakProductItems_aggregate';
  aggregate?: Maybe<BreakProductItems_Aggregate_Fields>;
  nodes: Array<BreakProductItems>;
};

/** aggregate fields of "BreakProductItems" */
export type BreakProductItems_Aggregate_Fields = {
  __typename?: 'BreakProductItems_aggregate_fields';
  avg?: Maybe<BreakProductItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<BreakProductItems_Max_Fields>;
  min?: Maybe<BreakProductItems_Min_Fields>;
  stddev?: Maybe<BreakProductItems_Stddev_Fields>;
  stddev_pop?: Maybe<BreakProductItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<BreakProductItems_Stddev_Samp_Fields>;
  sum?: Maybe<BreakProductItems_Sum_Fields>;
  var_pop?: Maybe<BreakProductItems_Var_Pop_Fields>;
  var_samp?: Maybe<BreakProductItems_Var_Samp_Fields>;
  variance?: Maybe<BreakProductItems_Variance_Fields>;
};


/** aggregate fields of "BreakProductItems" */
export type BreakProductItems_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<BreakProductItems_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "BreakProductItems" */
export type BreakProductItems_Aggregate_Order_By = {
  avg?: Maybe<BreakProductItems_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<BreakProductItems_Max_Order_By>;
  min?: Maybe<BreakProductItems_Min_Order_By>;
  stddev?: Maybe<BreakProductItems_Stddev_Order_By>;
  stddev_pop?: Maybe<BreakProductItems_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<BreakProductItems_Stddev_Samp_Order_By>;
  sum?: Maybe<BreakProductItems_Sum_Order_By>;
  var_pop?: Maybe<BreakProductItems_Var_Pop_Order_By>;
  var_samp?: Maybe<BreakProductItems_Var_Samp_Order_By>;
  variance?: Maybe<BreakProductItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "BreakProductItems" */
export type BreakProductItems_Arr_Rel_Insert_Input = {
  data: Array<BreakProductItems_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<BreakProductItems_On_Conflict>;
};

/** aggregate avg on columns */
export type BreakProductItems_Avg_Fields = {
  __typename?: 'BreakProductItems_avg_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "BreakProductItems" */
export type BreakProductItems_Avg_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "BreakProductItems". All fields are combined with a logical 'AND'. */
export type BreakProductItems_Bool_Exp = {
  Break?: Maybe<Breaks_Bool_Exp>;
  Order?: Maybe<Orders_Bool_Exp>;
  _and?: Maybe<Array<BreakProductItems_Bool_Exp>>;
  _not?: Maybe<BreakProductItems_Bool_Exp>;
  _or?: Maybe<Array<BreakProductItems_Bool_Exp>>;
  bc_product_id?: Maybe<Int_Comparison_Exp>;
  bc_variant_id?: Maybe<Int_Comparison_Exp>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "BreakProductItems" */
export enum BreakProductItems_Constraint {
  /** unique or primary key constraint */
  BreakProductItemsPkey = 'BreakProductItems_pkey'
}

/** input type for incrementing numeric columns in table "BreakProductItems" */
export type BreakProductItems_Inc_Input = {
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "BreakProductItems" */
export type BreakProductItems_Insert_Input = {
  Break?: Maybe<Breaks_Obj_Rel_Insert_Input>;
  Order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type BreakProductItems_Max_Fields = {
  __typename?: 'BreakProductItems_max_fields';
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "BreakProductItems" */
export type BreakProductItems_Max_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type BreakProductItems_Min_Fields = {
  __typename?: 'BreakProductItems_min_fields';
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "BreakProductItems" */
export type BreakProductItems_Min_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "BreakProductItems" */
export type BreakProductItems_Mutation_Response = {
  __typename?: 'BreakProductItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BreakProductItems>;
};

/** input type for inserting object relation for remote table "BreakProductItems" */
export type BreakProductItems_Obj_Rel_Insert_Input = {
  data: BreakProductItems_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<BreakProductItems_On_Conflict>;
};

/** on_conflict condition type for table "BreakProductItems" */
export type BreakProductItems_On_Conflict = {
  constraint: BreakProductItems_Constraint;
  update_columns?: Array<BreakProductItems_Update_Column>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};

/** Ordering options when selecting data from "BreakProductItems". */
export type BreakProductItems_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  Order?: Maybe<Orders_Order_By>;
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: BreakProductItems */
export type BreakProductItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "BreakProductItems" */
export enum BreakProductItems_Select_Column {
  /** column name */
  BcProductId = 'bc_product_id',
  /** column name */
  BcVariantId = 'bc_variant_id',
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "BreakProductItems" */
export type BreakProductItems_Set_Input = {
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type BreakProductItems_Stddev_Fields = {
  __typename?: 'BreakProductItems_stddev_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "BreakProductItems" */
export type BreakProductItems_Stddev_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type BreakProductItems_Stddev_Pop_Fields = {
  __typename?: 'BreakProductItems_stddev_pop_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "BreakProductItems" */
export type BreakProductItems_Stddev_Pop_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type BreakProductItems_Stddev_Samp_Fields = {
  __typename?: 'BreakProductItems_stddev_samp_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "BreakProductItems" */
export type BreakProductItems_Stddev_Samp_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type BreakProductItems_Sum_Fields = {
  __typename?: 'BreakProductItems_sum_fields';
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "BreakProductItems" */
export type BreakProductItems_Sum_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "BreakProductItems" */
export enum BreakProductItems_Update_Column {
  /** column name */
  BcProductId = 'bc_product_id',
  /** column name */
  BcVariantId = 'bc_variant_id',
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type BreakProductItems_Var_Pop_Fields = {
  __typename?: 'BreakProductItems_var_pop_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "BreakProductItems" */
export type BreakProductItems_Var_Pop_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type BreakProductItems_Var_Samp_Fields = {
  __typename?: 'BreakProductItems_var_samp_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "BreakProductItems" */
export type BreakProductItems_Var_Samp_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type BreakProductItems_Variance_Fields = {
  __typename?: 'BreakProductItems_variance_fields';
  bc_product_id?: Maybe<Scalars['Float']>;
  bc_variant_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "BreakProductItems" */
export type BreakProductItems_Variance_Order_By = {
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "BreakerProfiles" */
export type BreakerProfiles = {
  __typename?: 'BreakerProfiles';
  /** An object relationship */
  User: Users;
  bio: Scalars['String'];
  created_at: Scalars['timestamptz'];
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  video: Scalars['String'];
};

/** aggregated selection of "BreakerProfiles" */
export type BreakerProfiles_Aggregate = {
  __typename?: 'BreakerProfiles_aggregate';
  aggregate?: Maybe<BreakerProfiles_Aggregate_Fields>;
  nodes: Array<BreakerProfiles>;
};

/** aggregate fields of "BreakerProfiles" */
export type BreakerProfiles_Aggregate_Fields = {
  __typename?: 'BreakerProfiles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BreakerProfiles_Max_Fields>;
  min?: Maybe<BreakerProfiles_Min_Fields>;
};


/** aggregate fields of "BreakerProfiles" */
export type BreakerProfiles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<BreakerProfiles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "BreakerProfiles". All fields are combined with a logical 'AND'. */
export type BreakerProfiles_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<BreakerProfiles_Bool_Exp>>;
  _not?: Maybe<BreakerProfiles_Bool_Exp>;
  _or?: Maybe<Array<BreakerProfiles_Bool_Exp>>;
  bio?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  facebook?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  instagram?: Maybe<String_Comparison_Exp>;
  linkedin?: Maybe<String_Comparison_Exp>;
  tiktok?: Maybe<String_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  video?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "BreakerProfiles" */
export enum BreakerProfiles_Constraint {
  /** unique or primary key constraint */
  BreakerProfilesPkey = 'BreakerProfiles_pkey',
  /** unique or primary key constraint */
  BreakerProfilesUserIdKey = 'BreakerProfiles_user_id_key'
}

/** input type for inserting data into table "BreakerProfiles" */
export type BreakerProfiles_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BreakerProfiles_Max_Fields = {
  __typename?: 'BreakerProfiles_max_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type BreakerProfiles_Min_Fields = {
  __typename?: 'BreakerProfiles_min_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "BreakerProfiles" */
export type BreakerProfiles_Mutation_Response = {
  __typename?: 'BreakerProfiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BreakerProfiles>;
};

/** input type for inserting object relation for remote table "BreakerProfiles" */
export type BreakerProfiles_Obj_Rel_Insert_Input = {
  data: BreakerProfiles_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<BreakerProfiles_On_Conflict>;
};

/** on_conflict condition type for table "BreakerProfiles" */
export type BreakerProfiles_On_Conflict = {
  constraint: BreakerProfiles_Constraint;
  update_columns?: Array<BreakerProfiles_Update_Column>;
  where?: Maybe<BreakerProfiles_Bool_Exp>;
};

/** Ordering options when selecting data from "BreakerProfiles". */
export type BreakerProfiles_Order_By = {
  User?: Maybe<Users_Order_By>;
  bio?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  linkedin?: Maybe<Order_By>;
  tiktok?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  video?: Maybe<Order_By>;
};

/** primary key columns input for table: BreakerProfiles */
export type BreakerProfiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "BreakerProfiles" */
export enum BreakerProfiles_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Tiktok = 'tiktok',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Video = 'video'
}

/** input type for updating data in table "BreakerProfiles" */
export type BreakerProfiles_Set_Input = {
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

/** update columns of table "BreakerProfiles" */
export enum BreakerProfiles_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Tiktok = 'tiktok',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Video = 'video'
}

/** columns and relationships of "Breaks" */
export type Breaks = {
  __typename?: 'Breaks';
  /** An array relationship */
  BreakProductItems: Array<BreakProductItems>;
  /** An aggregate relationship */
  BreakProductItems_aggregate: BreakProductItems_Aggregate;
  /** An object relationship */
  Event: Events;
  /** An array relationship */
  Hits: Array<Hits>;
  /** An aggregate relationship */
  Hits_aggregate: Hits_Aggregate;
  /** An array relationship */
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** An array relationship */
  Saves: Array<SaveBreak>;
  /** An aggregate relationship */
  Saves_aggregate: SaveBreak_Aggregate;
  archived: Scalars['Boolean'];
  /** An array relationship */
  break_products: Array<Break_Product>;
  /** An aggregate relationship */
  break_products_aggregate: Break_Product_Aggregate;
  /** An object relationship */
  break_status: Break_Status;
  break_type: Break_Type_Enum;
  created_at: Scalars['timestamptz'];
  dataset?: Maybe<Scalars['jsonb']>;
  dataset_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  datasets?: Maybe<Datasets>;
  description: Scalars['String'];
  event_id: Scalars['uuid'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
  result?: Maybe<Scalars['jsonb']>;
  spots: Scalars['Int'];
  status: Break_Status_Enum;
  teams_per_spot?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  /** An object relationship */
  type: Break_Type;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "Breaks" */
export type BreaksBreakProductItemsArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksBreakProductItems_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksHitsArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksHits_AggregateArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksSavesArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksBreak_ProductsArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksBreak_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


/** columns and relationships of "Breaks" */
export type BreaksDatasetArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Breaks" */
export type BreaksLine_ItemsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Breaks" */
export type BreaksResultArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Breaks" */
export type Breaks_Aggregate = {
  __typename?: 'Breaks_aggregate';
  aggregate?: Maybe<Breaks_Aggregate_Fields>;
  nodes: Array<Breaks>;
};

/** aggregate fields of "Breaks" */
export type Breaks_Aggregate_Fields = {
  __typename?: 'Breaks_aggregate_fields';
  avg?: Maybe<Breaks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Breaks_Max_Fields>;
  min?: Maybe<Breaks_Min_Fields>;
  stddev?: Maybe<Breaks_Stddev_Fields>;
  stddev_pop?: Maybe<Breaks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Breaks_Stddev_Samp_Fields>;
  sum?: Maybe<Breaks_Sum_Fields>;
  var_pop?: Maybe<Breaks_Var_Pop_Fields>;
  var_samp?: Maybe<Breaks_Var_Samp_Fields>;
  variance?: Maybe<Breaks_Variance_Fields>;
};


/** aggregate fields of "Breaks" */
export type Breaks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Breaks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Breaks" */
export type Breaks_Aggregate_Order_By = {
  avg?: Maybe<Breaks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Breaks_Max_Order_By>;
  min?: Maybe<Breaks_Min_Order_By>;
  stddev?: Maybe<Breaks_Stddev_Order_By>;
  stddev_pop?: Maybe<Breaks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Breaks_Stddev_Samp_Order_By>;
  sum?: Maybe<Breaks_Sum_Order_By>;
  var_pop?: Maybe<Breaks_Var_Pop_Order_By>;
  var_samp?: Maybe<Breaks_Var_Samp_Order_By>;
  variance?: Maybe<Breaks_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Breaks_Append_Input = {
  dataset?: Maybe<Scalars['jsonb']>;
  line_items?: Maybe<Scalars['jsonb']>;
  result?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Breaks" */
export type Breaks_Arr_Rel_Insert_Input = {
  data: Array<Breaks_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Breaks_On_Conflict>;
};

/** aggregate avg on columns */
export type Breaks_Avg_Fields = {
  __typename?: 'Breaks_avg_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Breaks" */
export type Breaks_Avg_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Breaks". All fields are combined with a logical 'AND'. */
export type Breaks_Bool_Exp = {
  BreakProductItems?: Maybe<BreakProductItems_Bool_Exp>;
  Event?: Maybe<Events_Bool_Exp>;
  Hits?: Maybe<Hits_Bool_Exp>;
  Inventory?: Maybe<Inventory_Bool_Exp>;
  Saves?: Maybe<SaveBreak_Bool_Exp>;
  _and?: Maybe<Array<Breaks_Bool_Exp>>;
  _not?: Maybe<Breaks_Bool_Exp>;
  _or?: Maybe<Array<Breaks_Bool_Exp>>;
  archived?: Maybe<Boolean_Comparison_Exp>;
  break_products?: Maybe<Break_Product_Bool_Exp>;
  break_status?: Maybe<Break_Status_Bool_Exp>;
  break_type?: Maybe<Break_Type_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dataset?: Maybe<Jsonb_Comparison_Exp>;
  dataset_id?: Maybe<Uuid_Comparison_Exp>;
  datasets?: Maybe<Datasets_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  event_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  line_items?: Maybe<Jsonb_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  result?: Maybe<Jsonb_Comparison_Exp>;
  spots?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Break_Status_Enum_Comparison_Exp>;
  teams_per_spot?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Break_Type_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Breaks" */
export enum Breaks_Constraint {
  /** unique or primary key constraint */
  BreaksPkey = 'Breaks_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Breaks_Delete_At_Path_Input = {
  dataset?: Maybe<Array<Scalars['String']>>;
  line_items?: Maybe<Array<Scalars['String']>>;
  result?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Breaks_Delete_Elem_Input = {
  dataset?: Maybe<Scalars['Int']>;
  line_items?: Maybe<Scalars['Int']>;
  result?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Breaks_Delete_Key_Input = {
  dataset?: Maybe<Scalars['String']>;
  line_items?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "Breaks" */
export type Breaks_Inc_Input = {
  price?: Maybe<Scalars['numeric']>;
  spots?: Maybe<Scalars['Int']>;
  teams_per_spot?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Breaks" */
export type Breaks_Insert_Input = {
  BreakProductItems?: Maybe<BreakProductItems_Arr_Rel_Insert_Input>;
  Event?: Maybe<Events_Obj_Rel_Insert_Input>;
  Hits?: Maybe<Hits_Arr_Rel_Insert_Input>;
  Inventory?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  Saves?: Maybe<SaveBreak_Arr_Rel_Insert_Input>;
  archived?: Maybe<Scalars['Boolean']>;
  break_products?: Maybe<Break_Product_Arr_Rel_Insert_Input>;
  break_status?: Maybe<Break_Status_Obj_Rel_Insert_Input>;
  break_type?: Maybe<Break_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dataset?: Maybe<Scalars['jsonb']>;
  dataset_id?: Maybe<Scalars['uuid']>;
  datasets?: Maybe<Datasets_Obj_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
  result?: Maybe<Scalars['jsonb']>;
  spots?: Maybe<Scalars['Int']>;
  status?: Maybe<Break_Status_Enum>;
  teams_per_spot?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Break_Type_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Breaks_Max_Fields = {
  __typename?: 'Breaks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dataset_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  spots?: Maybe<Scalars['Int']>;
  teams_per_spot?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Breaks" */
export type Breaks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dataset_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Breaks_Min_Fields = {
  __typename?: 'Breaks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dataset_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  spots?: Maybe<Scalars['Int']>;
  teams_per_spot?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Breaks" */
export type Breaks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dataset_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "Breaks" */
export type Breaks_Mutation_Response = {
  __typename?: 'Breaks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Breaks>;
};

/** input type for inserting object relation for remote table "Breaks" */
export type Breaks_Obj_Rel_Insert_Input = {
  data: Breaks_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Breaks_On_Conflict>;
};

/** on_conflict condition type for table "Breaks" */
export type Breaks_On_Conflict = {
  constraint: Breaks_Constraint;
  update_columns?: Array<Breaks_Update_Column>;
  where?: Maybe<Breaks_Bool_Exp>;
};

/** Ordering options when selecting data from "Breaks". */
export type Breaks_Order_By = {
  BreakProductItems_aggregate?: Maybe<BreakProductItems_Aggregate_Order_By>;
  Event?: Maybe<Events_Order_By>;
  Hits_aggregate?: Maybe<Hits_Aggregate_Order_By>;
  Inventory_aggregate?: Maybe<Inventory_Aggregate_Order_By>;
  Saves_aggregate?: Maybe<SaveBreak_Aggregate_Order_By>;
  archived?: Maybe<Order_By>;
  break_products_aggregate?: Maybe<Break_Product_Aggregate_Order_By>;
  break_status?: Maybe<Break_Status_Order_By>;
  break_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dataset?: Maybe<Order_By>;
  dataset_id?: Maybe<Order_By>;
  datasets?: Maybe<Datasets_Order_By>;
  description?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  line_items?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  result?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Break_Type_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: Breaks */
export type Breaks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Breaks_Prepend_Input = {
  dataset?: Maybe<Scalars['jsonb']>;
  line_items?: Maybe<Scalars['jsonb']>;
  result?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "Breaks" */
export enum Breaks_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dataset = 'dataset',
  /** column name */
  DatasetId = 'dataset_id',
  /** column name */
  Description = 'description',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LineItems = 'line_items',
  /** column name */
  Price = 'price',
  /** column name */
  Result = 'result',
  /** column name */
  Spots = 'spots',
  /** column name */
  Status = 'status',
  /** column name */
  TeamsPerSpot = 'teams_per_spot',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Breaks" */
export type Breaks_Set_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  break_type?: Maybe<Break_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dataset?: Maybe<Scalars['jsonb']>;
  dataset_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
  result?: Maybe<Scalars['jsonb']>;
  spots?: Maybe<Scalars['Int']>;
  status?: Maybe<Break_Status_Enum>;
  teams_per_spot?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Breaks_Stddev_Fields = {
  __typename?: 'Breaks_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Breaks" */
export type Breaks_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Breaks_Stddev_Pop_Fields = {
  __typename?: 'Breaks_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Breaks" */
export type Breaks_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Breaks_Stddev_Samp_Fields = {
  __typename?: 'Breaks_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Breaks" */
export type Breaks_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Breaks_Sum_Fields = {
  __typename?: 'Breaks_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  spots?: Maybe<Scalars['Int']>;
  teams_per_spot?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Breaks" */
export type Breaks_Sum_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** update columns of table "Breaks" */
export enum Breaks_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dataset = 'dataset',
  /** column name */
  DatasetId = 'dataset_id',
  /** column name */
  Description = 'description',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LineItems = 'line_items',
  /** column name */
  Price = 'price',
  /** column name */
  Result = 'result',
  /** column name */
  Spots = 'spots',
  /** column name */
  Status = 'status',
  /** column name */
  TeamsPerSpot = 'teams_per_spot',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Breaks_Var_Pop_Fields = {
  __typename?: 'Breaks_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Breaks" */
export type Breaks_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Breaks_Var_Samp_Fields = {
  __typename?: 'Breaks_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Breaks" */
export type Breaks_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Breaks_Variance_Fields = {
  __typename?: 'Breaks_variance_fields';
  price?: Maybe<Scalars['Float']>;
  spots?: Maybe<Scalars['Float']>;
  teams_per_spot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Breaks" */
export type Breaks_Variance_Order_By = {
  price?: Maybe<Order_By>;
  spots?: Maybe<Order_By>;
  teams_per_spot?: Maybe<Order_By>;
};

/** columns and relationships of "Divisions" */
export type Divisions = {
  __typename?: 'Divisions';
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  short_code: Scalars['String'];
  sport: Scalars['String'];
};

/** aggregated selection of "Divisions" */
export type Divisions_Aggregate = {
  __typename?: 'Divisions_aggregate';
  aggregate?: Maybe<Divisions_Aggregate_Fields>;
  nodes: Array<Divisions>;
};

/** aggregate fields of "Divisions" */
export type Divisions_Aggregate_Fields = {
  __typename?: 'Divisions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Divisions_Max_Fields>;
  min?: Maybe<Divisions_Min_Fields>;
};


/** aggregate fields of "Divisions" */
export type Divisions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Divisions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Divisions". All fields are combined with a logical 'AND'. */
export type Divisions_Bool_Exp = {
  _and?: Maybe<Array<Divisions_Bool_Exp>>;
  _not?: Maybe<Divisions_Bool_Exp>;
  _or?: Maybe<Array<Divisions_Bool_Exp>>;
  color?: Maybe<Bpchar_Comparison_Exp>;
  color_secondary?: Maybe<Bpchar_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  short_code?: Maybe<String_Comparison_Exp>;
  sport?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Divisions" */
export enum Divisions_Constraint {
  /** unique or primary key constraint */
  DivisionsPkey = 'Divisions_pkey'
}

/** input type for inserting data into table "Divisions" */
export type Divisions_Insert_Input = {
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Divisions_Max_Fields = {
  __typename?: 'Divisions_max_fields';
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Divisions_Min_Fields = {
  __typename?: 'Divisions_min_fields';
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Divisions" */
export type Divisions_Mutation_Response = {
  __typename?: 'Divisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Divisions>;
};

/** on_conflict condition type for table "Divisions" */
export type Divisions_On_Conflict = {
  constraint: Divisions_Constraint;
  update_columns?: Array<Divisions_Update_Column>;
  where?: Maybe<Divisions_Bool_Exp>;
};

/** Ordering options when selecting data from "Divisions". */
export type Divisions_Order_By = {
  color?: Maybe<Order_By>;
  color_secondary?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  sport?: Maybe<Order_By>;
};

/** primary key columns input for table: Divisions */
export type Divisions_Pk_Columns_Input = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
};

/** select columns of table "Divisions" */
export enum Divisions_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  ColorSecondary = 'color_secondary',
  /** column name */
  Name = 'name',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Sport = 'sport'
}

/** input type for updating data in table "Divisions" */
export type Divisions_Set_Input = {
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** update columns of table "Divisions" */
export enum Divisions_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  ColorSecondary = 'color_secondary',
  /** column name */
  Name = 'name',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Sport = 'sport'
}

/** columns and relationships of "Events" */
export type Events = {
  __typename?: 'Events';
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  /** An array relationship */
  Saves: Array<SaveEvent>;
  /** An aggregate relationship */
  Saves_aggregate: SaveEvent_Aggregate;
  /** An object relationship */
  User: Users;
  archived: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  event_status: Event_Status;
  id: Scalars['uuid'];
  image: Scalars['String'];
  publishing_token?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status: Event_Status_Enum;
  stream_name?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  video_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Events" */
export type EventsBreaksArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


/** columns and relationships of "Events" */
export type EventsBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


/** columns and relationships of "Events" */
export type EventsSavesArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


/** columns and relationships of "Events" */
export type EventsSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};

/** aggregated selection of "Events" */
export type Events_Aggregate = {
  __typename?: 'Events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "Events" */
export type Events_Aggregate_Fields = {
  __typename?: 'Events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
};


/** aggregate fields of "Events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Events_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Events" */
export type Events_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Events_Max_Order_By>;
  min?: Maybe<Events_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Events" */
export type Events_Arr_Rel_Insert_Input = {
  data: Array<Events_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  Breaks?: Maybe<Breaks_Bool_Exp>;
  Saves?: Maybe<SaveEvent_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Events_Bool_Exp>>;
  _not?: Maybe<Events_Bool_Exp>;
  _or?: Maybe<Array<Events_Bool_Exp>>;
  archived?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  event_status?: Maybe<Event_Status_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  publishing_token?: Maybe<String_Comparison_Exp>;
  start_time?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<Event_Status_Enum_Comparison_Exp>;
  stream_name?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  video_url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Events" */
export enum Events_Constraint {
  /** unique or primary key constraint */
  EventsPkey = 'Events_pkey'
}

/** input type for inserting data into table "Events" */
export type Events_Insert_Input = {
  Breaks?: Maybe<Breaks_Arr_Rel_Insert_Input>;
  Saves?: Maybe<SaveEvent_Arr_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  archived?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_status?: Maybe<Event_Status_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  publishing_token?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Event_Status_Enum>;
  stream_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'Events_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  publishing_token?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  stream_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Events" */
export type Events_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  publishing_token?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  stream_name?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'Events_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  publishing_token?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  stream_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Events" */
export type Events_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  publishing_token?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  stream_name?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "Events" */
export type Events_Mutation_Response = {
  __typename?: 'Events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "Events" */
export type Events_Obj_Rel_Insert_Input = {
  data: Events_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** on_conflict condition type for table "Events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: Maybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "Events". */
export type Events_Order_By = {
  Breaks_aggregate?: Maybe<Breaks_Aggregate_Order_By>;
  Saves_aggregate?: Maybe<SaveEvent_Aggregate_Order_By>;
  User?: Maybe<Users_Order_By>;
  archived?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event_status?: Maybe<Event_Status_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  publishing_token?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  stream_name?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** primary key columns input for table: Events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Events" */
export enum Events_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  PublishingToken = 'publishing_token',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  StreamName = 'stream_name',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoUrl = 'video_url'
}

/** input type for updating data in table "Events" */
export type Events_Set_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  publishing_token?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Event_Status_Enum>;
  stream_name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
};

/** update columns of table "Events" */
export enum Events_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  PublishingToken = 'publishing_token',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  StreamName = 'stream_name',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoUrl = 'video_url'
}

/** columns and relationships of "ExtensibleValues" */
export type ExtensibleValues = {
  __typename?: 'ExtensibleValues';
  field: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "ExtensibleValues" */
export type ExtensibleValues_Aggregate = {
  __typename?: 'ExtensibleValues_aggregate';
  aggregate?: Maybe<ExtensibleValues_Aggregate_Fields>;
  nodes: Array<ExtensibleValues>;
};

/** aggregate fields of "ExtensibleValues" */
export type ExtensibleValues_Aggregate_Fields = {
  __typename?: 'ExtensibleValues_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ExtensibleValues_Max_Fields>;
  min?: Maybe<ExtensibleValues_Min_Fields>;
};


/** aggregate fields of "ExtensibleValues" */
export type ExtensibleValues_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExtensibleValues_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ExtensibleValues". All fields are combined with a logical 'AND'. */
export type ExtensibleValues_Bool_Exp = {
  _and?: Maybe<Array<ExtensibleValues_Bool_Exp>>;
  _not?: Maybe<ExtensibleValues_Bool_Exp>;
  _or?: Maybe<Array<ExtensibleValues_Bool_Exp>>;
  field?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ExtensibleValues" */
export enum ExtensibleValues_Constraint {
  /** unique or primary key constraint */
  ExtensibleValuesPkey = 'ExtensibleValues_pkey'
}

/** input type for inserting data into table "ExtensibleValues" */
export type ExtensibleValues_Insert_Input = {
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ExtensibleValues_Max_Fields = {
  __typename?: 'ExtensibleValues_max_fields';
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ExtensibleValues_Min_Fields = {
  __typename?: 'ExtensibleValues_min_fields';
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ExtensibleValues" */
export type ExtensibleValues_Mutation_Response = {
  __typename?: 'ExtensibleValues_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ExtensibleValues>;
};

/** on_conflict condition type for table "ExtensibleValues" */
export type ExtensibleValues_On_Conflict = {
  constraint: ExtensibleValues_Constraint;
  update_columns?: Array<ExtensibleValues_Update_Column>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};

/** Ordering options when selecting data from "ExtensibleValues". */
export type ExtensibleValues_Order_By = {
  field?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: ExtensibleValues */
export type ExtensibleValues_Pk_Columns_Input = {
  field: Scalars['String'];
  value: Scalars['String'];
};

/** select columns of table "ExtensibleValues" */
export enum ExtensibleValues_Select_Column {
  /** column name */
  Field = 'field',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "ExtensibleValues" */
export type ExtensibleValues_Set_Input = {
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "ExtensibleValues" */
export enum ExtensibleValues_Update_Column {
  /** column name */
  Field = 'field',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "Hits" */
export type Hits = {
  __typename?: 'Hits';
  /** An object relationship */
  Break: Breaks;
  /** An object relationship */
  Product: Products;
  /** An object relationship */
  User: Users;
  archived: Scalars['Boolean'];
  autograph?: Maybe<Scalars['Boolean']>;
  break_id: Scalars['uuid'];
  card_number: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image_back?: Maybe<Scalars['String']>;
  image_front: Scalars['String'];
  insert?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player: Scalars['String'];
  product_id: Scalars['uuid'];
  published: Scalars['Boolean'];
  rookie_card?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Hits" */
export type Hits_Aggregate = {
  __typename?: 'Hits_aggregate';
  aggregate?: Maybe<Hits_Aggregate_Fields>;
  nodes: Array<Hits>;
};

/** aggregate fields of "Hits" */
export type Hits_Aggregate_Fields = {
  __typename?: 'Hits_aggregate_fields';
  avg?: Maybe<Hits_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hits_Max_Fields>;
  min?: Maybe<Hits_Min_Fields>;
  stddev?: Maybe<Hits_Stddev_Fields>;
  stddev_pop?: Maybe<Hits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hits_Stddev_Samp_Fields>;
  sum?: Maybe<Hits_Sum_Fields>;
  var_pop?: Maybe<Hits_Var_Pop_Fields>;
  var_samp?: Maybe<Hits_Var_Samp_Fields>;
  variance?: Maybe<Hits_Variance_Fields>;
};


/** aggregate fields of "Hits" */
export type Hits_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hits_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Hits" */
export type Hits_Aggregate_Order_By = {
  avg?: Maybe<Hits_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Hits_Max_Order_By>;
  min?: Maybe<Hits_Min_Order_By>;
  stddev?: Maybe<Hits_Stddev_Order_By>;
  stddev_pop?: Maybe<Hits_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Hits_Stddev_Samp_Order_By>;
  sum?: Maybe<Hits_Sum_Order_By>;
  var_pop?: Maybe<Hits_Var_Pop_Order_By>;
  var_samp?: Maybe<Hits_Var_Samp_Order_By>;
  variance?: Maybe<Hits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Hits" */
export type Hits_Arr_Rel_Insert_Input = {
  data: Array<Hits_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Hits_On_Conflict>;
};

/** aggregate avg on columns */
export type Hits_Avg_Fields = {
  __typename?: 'Hits_avg_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Hits" */
export type Hits_Avg_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Hits". All fields are combined with a logical 'AND'. */
export type Hits_Bool_Exp = {
  Break?: Maybe<Breaks_Bool_Exp>;
  Product?: Maybe<Products_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Hits_Bool_Exp>>;
  _not?: Maybe<Hits_Bool_Exp>;
  _or?: Maybe<Array<Hits_Bool_Exp>>;
  archived?: Maybe<Boolean_Comparison_Exp>;
  autograph?: Maybe<Boolean_Comparison_Exp>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  card_number?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_back?: Maybe<String_Comparison_Exp>;
  image_front?: Maybe<String_Comparison_Exp>;
  insert?: Maybe<String_Comparison_Exp>;
  memorabilia?: Maybe<String_Comparison_Exp>;
  numbered?: Maybe<Int_Comparison_Exp>;
  parallel?: Maybe<String_Comparison_Exp>;
  player?: Maybe<String_Comparison_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  published?: Maybe<Boolean_Comparison_Exp>;
  rookie_card?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Hits" */
export enum Hits_Constraint {
  /** unique or primary key constraint */
  HitsPkey = 'Hits_pkey'
}

/** input type for incrementing numeric columns in table "Hits" */
export type Hits_Inc_Input = {
  numbered?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Hits" */
export type Hits_Insert_Input = {
  Break?: Maybe<Breaks_Obj_Rel_Insert_Input>;
  Product?: Maybe<Products_Obj_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  archived?: Maybe<Scalars['Boolean']>;
  autograph?: Maybe<Scalars['Boolean']>;
  break_id?: Maybe<Scalars['uuid']>;
  card_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_back?: Maybe<Scalars['String']>;
  image_front?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  published?: Maybe<Scalars['Boolean']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hits_Max_Fields = {
  __typename?: 'Hits_max_fields';
  break_id?: Maybe<Scalars['uuid']>;
  card_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_back?: Maybe<Scalars['String']>;
  image_front?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Hits" */
export type Hits_Max_Order_By = {
  break_id?: Maybe<Order_By>;
  card_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_back?: Maybe<Order_By>;
  image_front?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Hits_Min_Fields = {
  __typename?: 'Hits_min_fields';
  break_id?: Maybe<Scalars['uuid']>;
  card_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_back?: Maybe<Scalars['String']>;
  image_front?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Hits" */
export type Hits_Min_Order_By = {
  break_id?: Maybe<Order_By>;
  card_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_back?: Maybe<Order_By>;
  image_front?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Hits" */
export type Hits_Mutation_Response = {
  __typename?: 'Hits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hits>;
};

/** on_conflict condition type for table "Hits" */
export type Hits_On_Conflict = {
  constraint: Hits_Constraint;
  update_columns?: Array<Hits_Update_Column>;
  where?: Maybe<Hits_Bool_Exp>;
};

/** Ordering options when selecting data from "Hits". */
export type Hits_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  Product?: Maybe<Products_Order_By>;
  User?: Maybe<Users_Order_By>;
  archived?: Maybe<Order_By>;
  autograph?: Maybe<Order_By>;
  break_id?: Maybe<Order_By>;
  card_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_back?: Maybe<Order_By>;
  image_front?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  published?: Maybe<Order_By>;
  rookie_card?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: Hits */
export type Hits_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Hits" */
export enum Hits_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Autograph = 'autograph',
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CardNumber = 'card_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageBack = 'image_back',
  /** column name */
  ImageFront = 'image_front',
  /** column name */
  Insert = 'insert',
  /** column name */
  Memorabilia = 'memorabilia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  Parallel = 'parallel',
  /** column name */
  Player = 'player',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Published = 'published',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Hits" */
export type Hits_Set_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  autograph?: Maybe<Scalars['Boolean']>;
  break_id?: Maybe<Scalars['uuid']>;
  card_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_back?: Maybe<Scalars['String']>;
  image_front?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  published?: Maybe<Scalars['Boolean']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Hits_Stddev_Fields = {
  __typename?: 'Hits_stddev_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Hits" */
export type Hits_Stddev_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hits_Stddev_Pop_Fields = {
  __typename?: 'Hits_stddev_pop_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Hits" */
export type Hits_Stddev_Pop_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hits_Stddev_Samp_Fields = {
  __typename?: 'Hits_stddev_samp_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Hits" */
export type Hits_Stddev_Samp_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Hits_Sum_Fields = {
  __typename?: 'Hits_sum_fields';
  numbered?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Hits" */
export type Hits_Sum_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** update columns of table "Hits" */
export enum Hits_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Autograph = 'autograph',
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CardNumber = 'card_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageBack = 'image_back',
  /** column name */
  ImageFront = 'image_front',
  /** column name */
  Insert = 'insert',
  /** column name */
  Memorabilia = 'memorabilia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  Parallel = 'parallel',
  /** column name */
  Player = 'player',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Published = 'published',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Hits_Var_Pop_Fields = {
  __typename?: 'Hits_var_pop_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Hits" */
export type Hits_Var_Pop_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hits_Var_Samp_Fields = {
  __typename?: 'Hits_var_samp_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Hits" */
export type Hits_Var_Samp_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Hits_Variance_Fields = {
  __typename?: 'Hits_variance_fields';
  numbered?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Hits" */
export type Hits_Variance_Order_By = {
  numbered?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Inventory" */
export type Inventory = {
  __typename?: 'Inventory';
  /** An object relationship */
  Break?: Maybe<Breaks>;
  /** An object relationship */
  Product: Products;
  break_id?: Maybe<Scalars['uuid']>;
  cost_basis: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  location: Scalars['String'];
  product_id: Scalars['uuid'];
  purchase_date: Scalars['timestamptz'];
  supplier: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "Inventory" */
export type Inventory_Aggregate = {
  __typename?: 'Inventory_aggregate';
  aggregate?: Maybe<Inventory_Aggregate_Fields>;
  nodes: Array<Inventory>;
};

/** aggregate fields of "Inventory" */
export type Inventory_Aggregate_Fields = {
  __typename?: 'Inventory_aggregate_fields';
  avg?: Maybe<Inventory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Max_Fields>;
  min?: Maybe<Inventory_Min_Fields>;
  stddev?: Maybe<Inventory_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Sum_Fields>;
  var_pop?: Maybe<Inventory_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Variance_Fields>;
};


/** aggregate fields of "Inventory" */
export type Inventory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inventory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Inventory" */
export type Inventory_Aggregate_Order_By = {
  avg?: Maybe<Inventory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Inventory_Max_Order_By>;
  min?: Maybe<Inventory_Min_Order_By>;
  stddev?: Maybe<Inventory_Stddev_Order_By>;
  stddev_pop?: Maybe<Inventory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Inventory_Stddev_Samp_Order_By>;
  sum?: Maybe<Inventory_Sum_Order_By>;
  var_pop?: Maybe<Inventory_Var_Pop_Order_By>;
  var_samp?: Maybe<Inventory_Var_Samp_Order_By>;
  variance?: Maybe<Inventory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Inventory" */
export type Inventory_Arr_Rel_Insert_Input = {
  data: Array<Inventory_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Inventory_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventory_Avg_Fields = {
  __typename?: 'Inventory_avg_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Inventory" */
export type Inventory_Avg_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Inventory". All fields are combined with a logical 'AND'. */
export type Inventory_Bool_Exp = {
  Break?: Maybe<Breaks_Bool_Exp>;
  Product?: Maybe<Products_Bool_Exp>;
  _and?: Maybe<Array<Inventory_Bool_Exp>>;
  _not?: Maybe<Inventory_Bool_Exp>;
  _or?: Maybe<Array<Inventory_Bool_Exp>>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  cost_basis?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  purchase_date?: Maybe<Timestamptz_Comparison_Exp>;
  supplier?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Inventory" */
export enum Inventory_Constraint {
  /** unique or primary key constraint */
  InventoryPkey = 'Inventory_pkey'
}

/** input type for incrementing numeric columns in table "Inventory" */
export type Inventory_Inc_Input = {
  cost_basis?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Inventory" */
export type Inventory_Insert_Input = {
  Break?: Maybe<Breaks_Obj_Rel_Insert_Input>;
  Product?: Maybe<Products_Obj_Rel_Insert_Input>;
  break_id?: Maybe<Scalars['uuid']>;
  cost_basis?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  purchase_date?: Maybe<Scalars['timestamptz']>;
  supplier?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Inventory_Max_Fields = {
  __typename?: 'Inventory_max_fields';
  break_id?: Maybe<Scalars['uuid']>;
  cost_basis?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  purchase_date?: Maybe<Scalars['timestamptz']>;
  supplier?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Inventory" */
export type Inventory_Max_Order_By = {
  break_id?: Maybe<Order_By>;
  cost_basis?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  purchase_date?: Maybe<Order_By>;
  supplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inventory_Min_Fields = {
  __typename?: 'Inventory_min_fields';
  break_id?: Maybe<Scalars['uuid']>;
  cost_basis?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  purchase_date?: Maybe<Scalars['timestamptz']>;
  supplier?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Inventory" */
export type Inventory_Min_Order_By = {
  break_id?: Maybe<Order_By>;
  cost_basis?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  purchase_date?: Maybe<Order_By>;
  supplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "Inventory" */
export type Inventory_Mutation_Response = {
  __typename?: 'Inventory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory>;
};

/** on_conflict condition type for table "Inventory" */
export type Inventory_On_Conflict = {
  constraint: Inventory_Constraint;
  update_columns?: Array<Inventory_Update_Column>;
  where?: Maybe<Inventory_Bool_Exp>;
};

/** Ordering options when selecting data from "Inventory". */
export type Inventory_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  Product?: Maybe<Products_Order_By>;
  break_id?: Maybe<Order_By>;
  cost_basis?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  purchase_date?: Maybe<Order_By>;
  supplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: Inventory */
export type Inventory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Inventory" */
export enum Inventory_Select_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CostBasis = 'cost_basis',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  Supplier = 'supplier',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Inventory" */
export type Inventory_Set_Input = {
  break_id?: Maybe<Scalars['uuid']>;
  cost_basis?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['uuid']>;
  purchase_date?: Maybe<Scalars['timestamptz']>;
  supplier?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Inventory_Stddev_Fields = {
  __typename?: 'Inventory_stddev_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Inventory" */
export type Inventory_Stddev_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Stddev_Pop_Fields = {
  __typename?: 'Inventory_stddev_pop_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Inventory" */
export type Inventory_Stddev_Pop_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Stddev_Samp_Fields = {
  __typename?: 'Inventory_stddev_samp_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Inventory" */
export type Inventory_Stddev_Samp_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventory_Sum_Fields = {
  __typename?: 'Inventory_sum_fields';
  cost_basis?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Inventory" */
export type Inventory_Sum_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** update columns of table "Inventory" */
export enum Inventory_Update_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CostBasis = 'cost_basis',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  Supplier = 'supplier',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Inventory_Var_Pop_Fields = {
  __typename?: 'Inventory_var_pop_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Inventory" */
export type Inventory_Var_Pop_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventory_Var_Samp_Fields = {
  __typename?: 'Inventory_var_samp_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Inventory" */
export type Inventory_Var_Samp_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventory_Variance_Fields = {
  __typename?: 'Inventory_variance_fields';
  cost_basis?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Inventory" */
export type Inventory_Variance_Order_By = {
  cost_basis?: Maybe<Order_By>;
};

/** columns and relationships of "NotificationSettings" */
export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  /** An object relationship */
  User: Users;
  breakers: Scalars['Boolean'];
  breaks: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  events: Scalars['Boolean'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "NotificationSettings" */
export type NotificationSettings_Aggregate = {
  __typename?: 'NotificationSettings_aggregate';
  aggregate?: Maybe<NotificationSettings_Aggregate_Fields>;
  nodes: Array<NotificationSettings>;
};

/** aggregate fields of "NotificationSettings" */
export type NotificationSettings_Aggregate_Fields = {
  __typename?: 'NotificationSettings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<NotificationSettings_Max_Fields>;
  min?: Maybe<NotificationSettings_Min_Fields>;
};


/** aggregate fields of "NotificationSettings" */
export type NotificationSettings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<NotificationSettings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "NotificationSettings". All fields are combined with a logical 'AND'. */
export type NotificationSettings_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<NotificationSettings_Bool_Exp>>;
  _not?: Maybe<NotificationSettings_Bool_Exp>;
  _or?: Maybe<Array<NotificationSettings_Bool_Exp>>;
  breakers?: Maybe<Boolean_Comparison_Exp>;
  breaks?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  events?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "NotificationSettings" */
export enum NotificationSettings_Constraint {
  /** unique or primary key constraint */
  NotificationSettingsPkey = 'NotificationSettings_pkey',
  /** unique or primary key constraint */
  NotificationSettingsUserIdUniqueKey = 'NotificationSettings_user_id_unique_key'
}

/** input type for inserting data into table "NotificationSettings" */
export type NotificationSettings_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  breakers?: Maybe<Scalars['Boolean']>;
  breaks?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  events?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NotificationSettings_Max_Fields = {
  __typename?: 'NotificationSettings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type NotificationSettings_Min_Fields = {
  __typename?: 'NotificationSettings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "NotificationSettings" */
export type NotificationSettings_Mutation_Response = {
  __typename?: 'NotificationSettings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<NotificationSettings>;
};

/** input type for inserting object relation for remote table "NotificationSettings" */
export type NotificationSettings_Obj_Rel_Insert_Input = {
  data: NotificationSettings_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<NotificationSettings_On_Conflict>;
};

/** on_conflict condition type for table "NotificationSettings" */
export type NotificationSettings_On_Conflict = {
  constraint: NotificationSettings_Constraint;
  update_columns?: Array<NotificationSettings_Update_Column>;
  where?: Maybe<NotificationSettings_Bool_Exp>;
};

/** Ordering options when selecting data from "NotificationSettings". */
export type NotificationSettings_Order_By = {
  User?: Maybe<Users_Order_By>;
  breakers?: Maybe<Order_By>;
  breaks?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  events?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: NotificationSettings */
export type NotificationSettings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "NotificationSettings" */
export enum NotificationSettings_Select_Column {
  /** column name */
  Breakers = 'breakers',
  /** column name */
  Breaks = 'breaks',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Events = 'events',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "NotificationSettings" */
export type NotificationSettings_Set_Input = {
  breakers?: Maybe<Scalars['Boolean']>;
  breaks?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  events?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "NotificationSettings" */
export enum NotificationSettings_Update_Column {
  /** column name */
  Breakers = 'breakers',
  /** column name */
  Breaks = 'breaks',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Events = 'events',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "Notifications" */
export type Notifications = {
  __typename?: 'Notifications';
  /** An object relationship */
  User: Users;
  before_15_min: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  when_live: Scalars['Boolean'];
};

/** aggregated selection of "Notifications" */
export type Notifications_Aggregate = {
  __typename?: 'Notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "Notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'Notifications_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "Notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notifications_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Notifications_Bool_Exp>>;
  _not?: Maybe<Notifications_Bool_Exp>;
  _or?: Maybe<Array<Notifications_Bool_Exp>>;
  before_15_min?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  when_live?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "Notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'Notifications_pkey',
  /** unique or primary key constraint */
  NotificationsUserIdKey = 'Notifications_user_id_key'
}

/** input type for inserting data into table "Notifications" */
export type Notifications_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  before_15_min?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  when_live?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'Notifications_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'Notifications_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'Notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** input type for inserting object relation for remote table "Notifications" */
export type Notifications_Obj_Rel_Insert_Input = {
  data: Notifications_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Notifications_On_Conflict>;
};

/** on_conflict condition type for table "Notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: Maybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "Notifications". */
export type Notifications_Order_By = {
  User?: Maybe<Users_Order_By>;
  before_15_min?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  when_live?: Maybe<Order_By>;
};

/** primary key columns input for table: Notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Notifications" */
export enum Notifications_Select_Column {
  /** column name */
  Before_15Min = 'before_15_min',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WhenLive = 'when_live'
}

/** input type for updating data in table "Notifications" */
export type Notifications_Set_Input = {
  before_15_min?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  when_live?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "Notifications" */
export enum Notifications_Update_Column {
  /** column name */
  Before_15Min = 'before_15_min',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WhenLive = 'when_live'
}

/** columns and relationships of "Orders" */
export type Orders = {
  __typename?: 'Orders';
  /** An array relationship */
  BreakProductItems: Array<BreakProductItems>;
  /** An aggregate relationship */
  BreakProductItems_aggregate: BreakProductItems_Aggregate;
  /** An object relationship */
  User: Users;
  bc_order_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  discount_total: Scalars['numeric'];
  grand_total: Scalars['numeric'];
  id: Scalars['uuid'];
  payment_id?: Maybe<Scalars['uuid']>;
  shipping_total: Scalars['numeric'];
  subtotal: Scalars['numeric'];
  tax_total: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "Orders" */
export type OrdersBreakProductItemsArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


/** columns and relationships of "Orders" */
export type OrdersBreakProductItems_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};

/** aggregated selection of "Orders" */
export type Orders_Aggregate = {
  __typename?: 'Orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "Orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'Orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "Orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'Orders_avg_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Orders" */
export type Orders_Avg_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  BreakProductItems?: Maybe<BreakProductItems_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Orders_Bool_Exp>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Orders_Bool_Exp>>;
  bc_order_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount_total?: Maybe<Numeric_Comparison_Exp>;
  grand_total?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  payment_id?: Maybe<Uuid_Comparison_Exp>;
  shipping_total?: Maybe<Numeric_Comparison_Exp>;
  subtotal?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'Orders_pkey'
}

/** input type for incrementing numeric columns in table "Orders" */
export type Orders_Inc_Input = {
  bc_order_id?: Maybe<Scalars['Int']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Orders" */
export type Orders_Insert_Input = {
  BreakProductItems?: Maybe<BreakProductItems_Arr_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  bc_order_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  payment_id?: Maybe<Scalars['uuid']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'Orders_max_fields';
  bc_order_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  payment_id?: Maybe<Scalars['uuid']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Orders" */
export type Orders_Max_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'Orders_min_fields';
  bc_order_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  payment_id?: Maybe<Scalars['uuid']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Orders" */
export type Orders_Min_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Orders" */
export type Orders_Mutation_Response = {
  __typename?: 'Orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "Orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "Orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "Orders". */
export type Orders_Order_By = {
  BreakProductItems_aggregate?: Maybe<BreakProductItems_Aggregate_Order_By>;
  User?: Maybe<Users_Order_By>;
  bc_order_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: Orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Orders" */
export enum Orders_Select_Column {
  /** column name */
  BcOrderId = 'bc_order_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  GrandTotal = 'grand_total',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  ShippingTotal = 'shipping_total',
  /** column name */
  Subtotal = 'subtotal',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Orders" */
export type Orders_Set_Input = {
  bc_order_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  payment_id?: Maybe<Scalars['uuid']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'Orders_stddev_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Orders" */
export type Orders_Stddev_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'Orders_stddev_pop_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Orders" */
export type Orders_Stddev_Pop_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'Orders_stddev_samp_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Orders" */
export type Orders_Stddev_Samp_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'Orders_sum_fields';
  bc_order_id?: Maybe<Scalars['Int']>;
  discount_total?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  shipping_total?: Maybe<Scalars['numeric']>;
  subtotal?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Orders" */
export type Orders_Sum_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** update columns of table "Orders" */
export enum Orders_Update_Column {
  /** column name */
  BcOrderId = 'bc_order_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscountTotal = 'discount_total',
  /** column name */
  GrandTotal = 'grand_total',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  ShippingTotal = 'shipping_total',
  /** column name */
  Subtotal = 'subtotal',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'Orders_var_pop_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Orders" */
export type Orders_Var_Pop_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'Orders_var_samp_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Orders" */
export type Orders_Var_Samp_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'Orders_variance_fields';
  bc_order_id?: Maybe<Scalars['Float']>;
  discount_total?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  shipping_total?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Orders" */
export type Orders_Variance_Order_By = {
  bc_order_id?: Maybe<Order_By>;
  discount_total?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  shipping_total?: Maybe<Order_By>;
  subtotal?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
};

/** columns and relationships of "Players" */
export type Players = {
  __typename?: 'Players';
  id: Scalars['uuid'];
  name: Scalars['String'];
  sport: Scalars['String'];
};

/** aggregated selection of "Players" */
export type Players_Aggregate = {
  __typename?: 'Players_aggregate';
  aggregate?: Maybe<Players_Aggregate_Fields>;
  nodes: Array<Players>;
};

/** aggregate fields of "Players" */
export type Players_Aggregate_Fields = {
  __typename?: 'Players_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Players_Max_Fields>;
  min?: Maybe<Players_Min_Fields>;
};


/** aggregate fields of "Players" */
export type Players_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Players_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
  _and?: Maybe<Array<Players_Bool_Exp>>;
  _not?: Maybe<Players_Bool_Exp>;
  _or?: Maybe<Array<Players_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sport?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Players" */
export enum Players_Constraint {
  /** unique or primary key constraint */
  PlayersPkey = 'Players_pkey'
}

/** input type for inserting data into table "Players" */
export type Players_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Players_Max_Fields = {
  __typename?: 'Players_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Players_Min_Fields = {
  __typename?: 'Players_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Players" */
export type Players_Mutation_Response = {
  __typename?: 'Players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Players>;
};

/** on_conflict condition type for table "Players" */
export type Players_On_Conflict = {
  constraint: Players_Constraint;
  update_columns?: Array<Players_Update_Column>;
  where?: Maybe<Players_Bool_Exp>;
};

/** Ordering options when selecting data from "Players". */
export type Players_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sport?: Maybe<Order_By>;
};

/** primary key columns input for table: Players */
export type Players_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Players" */
export enum Players_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sport = 'sport'
}

/** input type for updating data in table "Players" */
export type Players_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
};

/** update columns of table "Players" */
export enum Players_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sport = 'sport'
}

/** columns and relationships of "Products" */
export type Products = {
  __typename?: 'Products';
  /** An array relationship */
  Hits: Array<Hits>;
  /** An aggregate relationship */
  Hits_aggregate: Hits_Aggregate;
  /** An array relationship */
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  autograph?: Maybe<Scalars['Boolean']>;
  available: Scalars['Boolean'];
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  /** An array relationship */
  break_products: Array<Break_Product>;
  /** An aggregate relationship */
  break_products_aggregate: Break_Product_Aggregate;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  insert?: Maybe<Scalars['String']>;
  manufacturer: Scalars['String'];
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  unit: Unit_Of_Measure;
  unit_of_measure: Unit_Of_Measure_Enum;
  updated_at: Scalars['timestamptz'];
  year: Scalars['String'];
};


/** columns and relationships of "Products" */
export type ProductsHitsArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Products" */
export type ProductsHits_AggregateArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Products" */
export type ProductsInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/** columns and relationships of "Products" */
export type ProductsInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/** columns and relationships of "Products" */
export type ProductsBreak_ProductsArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


/** columns and relationships of "Products" */
export type ProductsBreak_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};

/** aggregated selection of "Products" */
export type Products_Aggregate = {
  __typename?: 'Products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "Products" */
export type Products_Aggregate_Fields = {
  __typename?: 'Products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "Products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'Products_avg_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Products" */
export type Products_Avg_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  Hits?: Maybe<Hits_Bool_Exp>;
  Inventory?: Maybe<Inventory_Bool_Exp>;
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  autograph?: Maybe<Boolean_Comparison_Exp>;
  available?: Maybe<Boolean_Comparison_Exp>;
  boxes_per_case?: Maybe<Int_Comparison_Exp>;
  brand?: Maybe<String_Comparison_Exp>;
  break_products?: Maybe<Break_Product_Bool_Exp>;
  card_number?: Maybe<String_Comparison_Exp>;
  cards_per_pack?: Maybe<Int_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  grade?: Maybe<String_Comparison_Exp>;
  grader?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  insert?: Maybe<String_Comparison_Exp>;
  manufacturer?: Maybe<String_Comparison_Exp>;
  memorabilia?: Maybe<String_Comparison_Exp>;
  numbered?: Maybe<Int_Comparison_Exp>;
  packs_per_box?: Maybe<Int_Comparison_Exp>;
  parallel?: Maybe<String_Comparison_Exp>;
  player?: Maybe<String_Comparison_Exp>;
  rookie_card?: Maybe<Boolean_Comparison_Exp>;
  series?: Maybe<String_Comparison_Exp>;
  subcategory?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<Unit_Of_Measure_Bool_Exp>;
  unit_of_measure?: Maybe<Unit_Of_Measure_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  year?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'Products_pkey'
}

/** input type for incrementing numeric columns in table "Products" */
export type Products_Inc_Input = {
  boxes_per_case?: Maybe<Scalars['Int']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Products" */
export type Products_Insert_Input = {
  Hits?: Maybe<Hits_Arr_Rel_Insert_Input>;
  Inventory?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  autograph?: Maybe<Scalars['Boolean']>;
  available?: Maybe<Scalars['Boolean']>;
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  break_products?: Maybe<Break_Product_Arr_Rel_Insert_Input>;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Unit_Of_Measure_Obj_Rel_Insert_Input>;
  unit_of_measure?: Maybe<Unit_Of_Measure_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'Products_max_fields';
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Products" */
export type Products_Max_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  brand?: Maybe<Order_By>;
  card_number?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grader?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'Products_min_fields';
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Products" */
export type Products_Min_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  brand?: Maybe<Order_By>;
  card_number?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grader?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** response of any mutation on the table "Products" */
export type Products_Mutation_Response = {
  __typename?: 'Products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "Products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "Products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "Products". */
export type Products_Order_By = {
  Hits_aggregate?: Maybe<Hits_Aggregate_Order_By>;
  Inventory_aggregate?: Maybe<Inventory_Aggregate_Order_By>;
  autograph?: Maybe<Order_By>;
  available?: Maybe<Order_By>;
  boxes_per_case?: Maybe<Order_By>;
  brand?: Maybe<Order_By>;
  break_products_aggregate?: Maybe<Break_Product_Aggregate_Order_By>;
  card_number?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grader?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memorabilia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  parallel?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  rookie_card?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  unit?: Maybe<Unit_Of_Measure_Order_By>;
  unit_of_measure?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: Products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Products" */
export enum Products_Select_Column {
  /** column name */
  Autograph = 'autograph',
  /** column name */
  Available = 'available',
  /** column name */
  BoxesPerCase = 'boxes_per_case',
  /** column name */
  Brand = 'brand',
  /** column name */
  CardNumber = 'card_number',
  /** column name */
  CardsPerPack = 'cards_per_pack',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Grade = 'grade',
  /** column name */
  Grader = 'grader',
  /** column name */
  Id = 'id',
  /** column name */
  Insert = 'insert',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Memorabilia = 'memorabilia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  PacksPerBox = 'packs_per_box',
  /** column name */
  Parallel = 'parallel',
  /** column name */
  Player = 'player',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  Series = 'series',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Type = 'type',
  /** column name */
  UnitOfMeasure = 'unit_of_measure',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "Products" */
export type Products_Set_Input = {
  autograph?: Maybe<Scalars['Boolean']>;
  available?: Maybe<Scalars['Boolean']>;
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memorabilia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  parallel?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_of_measure?: Maybe<Unit_Of_Measure_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'Products_stddev_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Products" */
export type Products_Stddev_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'Products_stddev_pop_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Products" */
export type Products_Stddev_Pop_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'Products_stddev_samp_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Products" */
export type Products_Stddev_Samp_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'Products_sum_fields';
  boxes_per_case?: Maybe<Scalars['Int']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Products" */
export type Products_Sum_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** update columns of table "Products" */
export enum Products_Update_Column {
  /** column name */
  Autograph = 'autograph',
  /** column name */
  Available = 'available',
  /** column name */
  BoxesPerCase = 'boxes_per_case',
  /** column name */
  Brand = 'brand',
  /** column name */
  CardNumber = 'card_number',
  /** column name */
  CardsPerPack = 'cards_per_pack',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Grade = 'grade',
  /** column name */
  Grader = 'grader',
  /** column name */
  Id = 'id',
  /** column name */
  Insert = 'insert',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Memorabilia = 'memorabilia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  PacksPerBox = 'packs_per_box',
  /** column name */
  Parallel = 'parallel',
  /** column name */
  Player = 'player',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  Series = 'series',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Type = 'type',
  /** column name */
  UnitOfMeasure = 'unit_of_measure',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'Products_var_pop_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Products" */
export type Products_Var_Pop_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'Products_var_samp_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Products" */
export type Products_Var_Samp_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'Products_variance_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Products" */
export type Products_Variance_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** columns and relationships of "SaveBreak" */
export type SaveBreak = {
  __typename?: 'SaveBreak';
  /** An object relationship */
  Break: Breaks;
  /** An object relationship */
  User: Users;
  break_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "SaveBreak" */
export type SaveBreak_Aggregate = {
  __typename?: 'SaveBreak_aggregate';
  aggregate?: Maybe<SaveBreak_Aggregate_Fields>;
  nodes: Array<SaveBreak>;
};

/** aggregate fields of "SaveBreak" */
export type SaveBreak_Aggregate_Fields = {
  __typename?: 'SaveBreak_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SaveBreak_Max_Fields>;
  min?: Maybe<SaveBreak_Min_Fields>;
};


/** aggregate fields of "SaveBreak" */
export type SaveBreak_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SaveBreak_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SaveBreak" */
export type SaveBreak_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SaveBreak_Max_Order_By>;
  min?: Maybe<SaveBreak_Min_Order_By>;
};

/** input type for inserting array relation for remote table "SaveBreak" */
export type SaveBreak_Arr_Rel_Insert_Input = {
  data: Array<SaveBreak_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<SaveBreak_On_Conflict>;
};

/** Boolean expression to filter rows from the table "SaveBreak". All fields are combined with a logical 'AND'. */
export type SaveBreak_Bool_Exp = {
  Break?: Maybe<Breaks_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<SaveBreak_Bool_Exp>>;
  _not?: Maybe<SaveBreak_Bool_Exp>;
  _or?: Maybe<Array<SaveBreak_Bool_Exp>>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "SaveBreak" */
export enum SaveBreak_Constraint {
  /** unique or primary key constraint */
  SaveBreakPkey = 'SaveBreak_pkey'
}

/** input type for inserting data into table "SaveBreak" */
export type SaveBreak_Insert_Input = {
  Break?: Maybe<Breaks_Obj_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SaveBreak_Max_Fields = {
  __typename?: 'SaveBreak_max_fields';
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "SaveBreak" */
export type SaveBreak_Max_Order_By = {
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SaveBreak_Min_Fields = {
  __typename?: 'SaveBreak_min_fields';
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "SaveBreak" */
export type SaveBreak_Min_Order_By = {
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "SaveBreak" */
export type SaveBreak_Mutation_Response = {
  __typename?: 'SaveBreak_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SaveBreak>;
};

/** on_conflict condition type for table "SaveBreak" */
export type SaveBreak_On_Conflict = {
  constraint: SaveBreak_Constraint;
  update_columns?: Array<SaveBreak_Update_Column>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};

/** Ordering options when selecting data from "SaveBreak". */
export type SaveBreak_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  User?: Maybe<Users_Order_By>;
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: SaveBreak */
export type SaveBreak_Pk_Columns_Input = {
  break_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "SaveBreak" */
export enum SaveBreak_Select_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "SaveBreak" */
export type SaveBreak_Set_Input = {
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "SaveBreak" */
export enum SaveBreak_Update_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "SaveBreaker" */
export type SaveBreaker = {
  __typename?: 'SaveBreaker';
  /** An object relationship */
  Breaker: Users;
  /** An object relationship */
  User: Users;
  breaker_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "SaveBreaker" */
export type SaveBreaker_Aggregate = {
  __typename?: 'SaveBreaker_aggregate';
  aggregate?: Maybe<SaveBreaker_Aggregate_Fields>;
  nodes: Array<SaveBreaker>;
};

/** aggregate fields of "SaveBreaker" */
export type SaveBreaker_Aggregate_Fields = {
  __typename?: 'SaveBreaker_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SaveBreaker_Max_Fields>;
  min?: Maybe<SaveBreaker_Min_Fields>;
};


/** aggregate fields of "SaveBreaker" */
export type SaveBreaker_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SaveBreaker_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SaveBreaker" */
export type SaveBreaker_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SaveBreaker_Max_Order_By>;
  min?: Maybe<SaveBreaker_Min_Order_By>;
};

/** input type for inserting array relation for remote table "SaveBreaker" */
export type SaveBreaker_Arr_Rel_Insert_Input = {
  data: Array<SaveBreaker_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<SaveBreaker_On_Conflict>;
};

/** Boolean expression to filter rows from the table "SaveBreaker". All fields are combined with a logical 'AND'. */
export type SaveBreaker_Bool_Exp = {
  Breaker?: Maybe<Users_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<SaveBreaker_Bool_Exp>>;
  _not?: Maybe<SaveBreaker_Bool_Exp>;
  _or?: Maybe<Array<SaveBreaker_Bool_Exp>>;
  breaker_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "SaveBreaker" */
export enum SaveBreaker_Constraint {
  /** unique or primary key constraint */
  SaveBreakerPkey = 'SaveBreaker_pkey'
}

/** input type for inserting data into table "SaveBreaker" */
export type SaveBreaker_Insert_Input = {
  Breaker?: Maybe<Users_Obj_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  breaker_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SaveBreaker_Max_Fields = {
  __typename?: 'SaveBreaker_max_fields';
  breaker_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "SaveBreaker" */
export type SaveBreaker_Max_Order_By = {
  breaker_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SaveBreaker_Min_Fields = {
  __typename?: 'SaveBreaker_min_fields';
  breaker_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "SaveBreaker" */
export type SaveBreaker_Min_Order_By = {
  breaker_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "SaveBreaker" */
export type SaveBreaker_Mutation_Response = {
  __typename?: 'SaveBreaker_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SaveBreaker>;
};

/** on_conflict condition type for table "SaveBreaker" */
export type SaveBreaker_On_Conflict = {
  constraint: SaveBreaker_Constraint;
  update_columns?: Array<SaveBreaker_Update_Column>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};

/** Ordering options when selecting data from "SaveBreaker". */
export type SaveBreaker_Order_By = {
  Breaker?: Maybe<Users_Order_By>;
  User?: Maybe<Users_Order_By>;
  breaker_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: SaveBreaker */
export type SaveBreaker_Pk_Columns_Input = {
  breaker_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "SaveBreaker" */
export enum SaveBreaker_Select_Column {
  /** column name */
  BreakerId = 'breaker_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "SaveBreaker" */
export type SaveBreaker_Set_Input = {
  breaker_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "SaveBreaker" */
export enum SaveBreaker_Update_Column {
  /** column name */
  BreakerId = 'breaker_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "SaveEvent" */
export type SaveEvent = {
  __typename?: 'SaveEvent';
  /** An object relationship */
  Event: Events;
  /** An object relationship */
  User: Users;
  created_at: Scalars['timestamptz'];
  event_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "SaveEvent" */
export type SaveEvent_Aggregate = {
  __typename?: 'SaveEvent_aggregate';
  aggregate?: Maybe<SaveEvent_Aggregate_Fields>;
  nodes: Array<SaveEvent>;
};

/** aggregate fields of "SaveEvent" */
export type SaveEvent_Aggregate_Fields = {
  __typename?: 'SaveEvent_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SaveEvent_Max_Fields>;
  min?: Maybe<SaveEvent_Min_Fields>;
};


/** aggregate fields of "SaveEvent" */
export type SaveEvent_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SaveEvent_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "SaveEvent" */
export type SaveEvent_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SaveEvent_Max_Order_By>;
  min?: Maybe<SaveEvent_Min_Order_By>;
};

/** input type for inserting array relation for remote table "SaveEvent" */
export type SaveEvent_Arr_Rel_Insert_Input = {
  data: Array<SaveEvent_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<SaveEvent_On_Conflict>;
};

/** Boolean expression to filter rows from the table "SaveEvent". All fields are combined with a logical 'AND'. */
export type SaveEvent_Bool_Exp = {
  Event?: Maybe<Events_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<SaveEvent_Bool_Exp>>;
  _not?: Maybe<SaveEvent_Bool_Exp>;
  _or?: Maybe<Array<SaveEvent_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  event_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "SaveEvent" */
export enum SaveEvent_Constraint {
  /** unique or primary key constraint */
  SaveEventPkey = 'SaveEvent_pkey'
}

/** input type for inserting data into table "SaveEvent" */
export type SaveEvent_Insert_Input = {
  Event?: Maybe<Events_Obj_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SaveEvent_Max_Fields = {
  __typename?: 'SaveEvent_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "SaveEvent" */
export type SaveEvent_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SaveEvent_Min_Fields = {
  __typename?: 'SaveEvent_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "SaveEvent" */
export type SaveEvent_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "SaveEvent" */
export type SaveEvent_Mutation_Response = {
  __typename?: 'SaveEvent_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SaveEvent>;
};

/** on_conflict condition type for table "SaveEvent" */
export type SaveEvent_On_Conflict = {
  constraint: SaveEvent_Constraint;
  update_columns?: Array<SaveEvent_Update_Column>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};

/** Ordering options when selecting data from "SaveEvent". */
export type SaveEvent_Order_By = {
  Event?: Maybe<Events_Order_By>;
  User?: Maybe<Users_Order_By>;
  created_at?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: SaveEvent */
export type SaveEvent_Pk_Columns_Input = {
  event_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "SaveEvent" */
export enum SaveEvent_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "SaveEvent" */
export type SaveEvent_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "SaveEvent" */
export enum SaveEvent_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "Streams" */
export type Streams = {
  __typename?: 'Streams';
  /** An object relationship */
  User: Users;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  playback_id: Scalars['String'];
  stream_id: Scalars['String'];
  stream_key: Scalars['String'];
  stream_url: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Streams" */
export type Streams_Aggregate = {
  __typename?: 'Streams_aggregate';
  aggregate?: Maybe<Streams_Aggregate_Fields>;
  nodes: Array<Streams>;
};

/** aggregate fields of "Streams" */
export type Streams_Aggregate_Fields = {
  __typename?: 'Streams_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Streams_Max_Fields>;
  min?: Maybe<Streams_Min_Fields>;
};


/** aggregate fields of "Streams" */
export type Streams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Streams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Streams". All fields are combined with a logical 'AND'. */
export type Streams_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Streams_Bool_Exp>>;
  _not?: Maybe<Streams_Bool_Exp>;
  _or?: Maybe<Array<Streams_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  playback_id?: Maybe<String_Comparison_Exp>;
  stream_id?: Maybe<String_Comparison_Exp>;
  stream_key?: Maybe<String_Comparison_Exp>;
  stream_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Streams" */
export enum Streams_Constraint {
  /** unique or primary key constraint */
  StreamsPkey = 'Streams_pkey',
  /** unique or primary key constraint */
  StreamsUserIdKey = 'Streams_user_id_key'
}

/** input type for inserting data into table "Streams" */
export type Streams_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  playback_id?: Maybe<Scalars['String']>;
  stream_id?: Maybe<Scalars['String']>;
  stream_key?: Maybe<Scalars['String']>;
  stream_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Streams_Max_Fields = {
  __typename?: 'Streams_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  playback_id?: Maybe<Scalars['String']>;
  stream_id?: Maybe<Scalars['String']>;
  stream_key?: Maybe<Scalars['String']>;
  stream_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Streams_Min_Fields = {
  __typename?: 'Streams_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  playback_id?: Maybe<Scalars['String']>;
  stream_id?: Maybe<Scalars['String']>;
  stream_key?: Maybe<Scalars['String']>;
  stream_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Streams" */
export type Streams_Mutation_Response = {
  __typename?: 'Streams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Streams>;
};

/** input type for inserting object relation for remote table "Streams" */
export type Streams_Obj_Rel_Insert_Input = {
  data: Streams_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Streams_On_Conflict>;
};

/** on_conflict condition type for table "Streams" */
export type Streams_On_Conflict = {
  constraint: Streams_Constraint;
  update_columns?: Array<Streams_Update_Column>;
  where?: Maybe<Streams_Bool_Exp>;
};

/** Ordering options when selecting data from "Streams". */
export type Streams_Order_By = {
  User?: Maybe<Users_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  playback_id?: Maybe<Order_By>;
  stream_id?: Maybe<Order_By>;
  stream_key?: Maybe<Order_By>;
  stream_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: Streams */
export type Streams_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Streams" */
export enum Streams_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaybackId = 'playback_id',
  /** column name */
  StreamId = 'stream_id',
  /** column name */
  StreamKey = 'stream_key',
  /** column name */
  StreamUrl = 'stream_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Streams" */
export type Streams_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  playback_id?: Maybe<Scalars['String']>;
  stream_id?: Maybe<Scalars['String']>;
  stream_key?: Maybe<Scalars['String']>;
  stream_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "Streams" */
export enum Streams_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaybackId = 'playback_id',
  /** column name */
  StreamId = 'stream_id',
  /** column name */
  StreamKey = 'stream_key',
  /** column name */
  StreamUrl = 'stream_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "Teams" */
export type Teams = {
  __typename?: 'Teams';
  city?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  end_year?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  short_code: Scalars['String'];
  sport: Scalars['String'];
  start_year: Scalars['smallint'];
};

/** aggregated selection of "Teams" */
export type Teams_Aggregate = {
  __typename?: 'Teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "Teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'Teams_aggregate_fields';
  avg?: Maybe<Teams_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
  stddev?: Maybe<Teams_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Sum_Fields>;
  var_pop?: Maybe<Teams_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Var_Samp_Fields>;
  variance?: Maybe<Teams_Variance_Fields>;
};


/** aggregate fields of "Teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Teams_Avg_Fields = {
  __typename?: 'Teams_avg_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Teams_Bool_Exp>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Teams_Bool_Exp>>;
  city?: Maybe<String_Comparison_Exp>;
  color?: Maybe<Bpchar_Comparison_Exp>;
  color_secondary?: Maybe<Bpchar_Comparison_Exp>;
  end_year?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  short_code?: Maybe<String_Comparison_Exp>;
  sport?: Maybe<String_Comparison_Exp>;
  start_year?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "Teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for incrementing numeric columns in table "Teams" */
export type Teams_Inc_Input = {
  end_year?: Maybe<Scalars['smallint']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "Teams" */
export type Teams_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  end_year?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'Teams_max_fields';
  city?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  end_year?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'Teams_min_fields';
  city?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  end_year?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "Teams" */
export type Teams_Mutation_Response = {
  __typename?: 'Teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** on_conflict condition type for table "Teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns?: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "Teams". */
export type Teams_Order_By = {
  city?: Maybe<Order_By>;
  color?: Maybe<Order_By>;
  color_secondary?: Maybe<Order_By>;
  end_year?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  sport?: Maybe<Order_By>;
  start_year?: Maybe<Order_By>;
};

/** primary key columns input for table: Teams */
export type Teams_Pk_Columns_Input = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
  start_year: Scalars['smallint'];
};

/** select columns of table "Teams" */
export enum Teams_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Color = 'color',
  /** column name */
  ColorSecondary = 'color_secondary',
  /** column name */
  EndYear = 'end_year',
  /** column name */
  Name = 'name',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Sport = 'sport',
  /** column name */
  StartYear = 'start_year'
}

/** input type for updating data in table "Teams" */
export type Teams_Set_Input = {
  city?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['bpchar']>;
  color_secondary?: Maybe<Scalars['bpchar']>;
  end_year?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  sport?: Maybe<Scalars['String']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Teams_Stddev_Fields = {
  __typename?: 'Teams_stddev_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Teams_Stddev_Pop_Fields = {
  __typename?: 'Teams_stddev_pop_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Teams_Stddev_Samp_Fields = {
  __typename?: 'Teams_stddev_samp_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Teams_Sum_Fields = {
  __typename?: 'Teams_sum_fields';
  end_year?: Maybe<Scalars['smallint']>;
  start_year?: Maybe<Scalars['smallint']>;
};

/** update columns of table "Teams" */
export enum Teams_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Color = 'color',
  /** column name */
  ColorSecondary = 'color_secondary',
  /** column name */
  EndYear = 'end_year',
  /** column name */
  Name = 'name',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Sport = 'sport',
  /** column name */
  StartYear = 'start_year'
}

/** aggregate var_pop on columns */
export type Teams_Var_Pop_Fields = {
  __typename?: 'Teams_var_pop_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Teams_Var_Samp_Fields = {
  __typename?: 'Teams_var_samp_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Teams_Variance_Fields = {
  __typename?: 'Teams_variance_fields';
  end_year?: Maybe<Scalars['Float']>;
  start_year?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "UserPreferences" */
export type UserPreferences = {
  __typename?: 'UserPreferences';
  /** An object relationship */
  User: Users;
  break_type: Scalars['_text'];
  created_at: Scalars['timestamptz'];
  frequency: Scalars['String'];
  pricing: Scalars['_text'];
  sports: Scalars['_text'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "UserPreferences" */
export type UserPreferences_Aggregate = {
  __typename?: 'UserPreferences_aggregate';
  aggregate?: Maybe<UserPreferences_Aggregate_Fields>;
  nodes: Array<UserPreferences>;
};

/** aggregate fields of "UserPreferences" */
export type UserPreferences_Aggregate_Fields = {
  __typename?: 'UserPreferences_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserPreferences_Max_Fields>;
  min?: Maybe<UserPreferences_Min_Fields>;
};


/** aggregate fields of "UserPreferences" */
export type UserPreferences_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<UserPreferences_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "UserPreferences". All fields are combined with a logical 'AND'. */
export type UserPreferences_Bool_Exp = {
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<UserPreferences_Bool_Exp>>;
  _not?: Maybe<UserPreferences_Bool_Exp>;
  _or?: Maybe<Array<UserPreferences_Bool_Exp>>;
  break_type?: Maybe<_Text_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  frequency?: Maybe<String_Comparison_Exp>;
  pricing?: Maybe<_Text_Comparison_Exp>;
  sports?: Maybe<_Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserPreferences" */
export enum UserPreferences_Constraint {
  /** unique or primary key constraint */
  UserPreferencesPkey = 'UserPreferences_pkey'
}

/** input type for inserting data into table "UserPreferences" */
export type UserPreferences_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  break_type?: Maybe<Scalars['_text']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['_text']>;
  sports?: Maybe<Scalars['_text']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserPreferences_Max_Fields = {
  __typename?: 'UserPreferences_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserPreferences_Min_Fields = {
  __typename?: 'UserPreferences_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "UserPreferences" */
export type UserPreferences_Mutation_Response = {
  __typename?: 'UserPreferences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserPreferences>;
};

/** input type for inserting object relation for remote table "UserPreferences" */
export type UserPreferences_Obj_Rel_Insert_Input = {
  data: UserPreferences_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<UserPreferences_On_Conflict>;
};

/** on_conflict condition type for table "UserPreferences" */
export type UserPreferences_On_Conflict = {
  constraint: UserPreferences_Constraint;
  update_columns?: Array<UserPreferences_Update_Column>;
  where?: Maybe<UserPreferences_Bool_Exp>;
};

/** Ordering options when selecting data from "UserPreferences". */
export type UserPreferences_Order_By = {
  User?: Maybe<Users_Order_By>;
  break_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  frequency?: Maybe<Order_By>;
  pricing?: Maybe<Order_By>;
  sports?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: UserPreferences */
export type UserPreferences_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "UserPreferences" */
export enum UserPreferences_Select_Column {
  /** column name */
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Pricing = 'pricing',
  /** column name */
  Sports = 'sports',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "UserPreferences" */
export type UserPreferences_Set_Input = {
  break_type?: Maybe<Scalars['_text']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['_text']>;
  sports?: Maybe<Scalars['_text']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "UserPreferences" */
export enum UserPreferences_Update_Column {
  /** column name */
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Pricing = 'pricing',
  /** column name */
  Sports = 'sports',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "Users" */
export type Users = {
  __typename?: 'Users';
  /** An array relationship */
  Addresses: Array<Addresses>;
  /** An aggregate relationship */
  Addresses_aggregate: Addresses_Aggregate;
  /** An object relationship */
  BreakerProfile?: Maybe<BreakerProfiles>;
  /** An array relationship */
  Events: Array<Events>;
  /** An aggregate relationship */
  Events_aggregate: Events_Aggregate;
  /** An array relationship */
  Followers: Array<SaveBreaker>;
  /** An aggregate relationship */
  Followers_aggregate: SaveBreaker_Aggregate;
  /** An array relationship */
  Hits: Array<Hits>;
  /** An aggregate relationship */
  Hits_aggregate: Hits_Aggregate;
  /** An object relationship */
  Notification?: Maybe<Notifications>;
  /** An object relationship */
  NotificationSettings?: Maybe<NotificationSettings>;
  /** An array relationship */
  Orders: Array<Orders>;
  /** An aggregate relationship */
  Orders_aggregate: Orders_Aggregate;
  /** An array relationship */
  SavedBreakers: Array<SaveBreaker>;
  /** An aggregate relationship */
  SavedBreakers_aggregate: SaveBreaker_Aggregate;
  /** An array relationship */
  SavedBreaks: Array<SaveBreak>;
  /** An aggregate relationship */
  SavedBreaks_aggregate: SaveBreak_Aggregate;
  /** An array relationship */
  SavedEvents: Array<SaveEvent>;
  /** An aggregate relationship */
  SavedEvents_aggregate: SaveEvent_Aggregate;
  /** An object relationship */
  Stream?: Maybe<Streams>;
  /** An object relationship */
  UserPreference?: Maybe<UserPreferences>;
  bc_user_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  is_breaker: Scalars['Boolean'];
  last_name?: Maybe<Scalars['String']>;
  paysafe_user_id?: Maybe<Scalars['String']>;
  role: User_Role_Enum;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_role: User_Role;
  username?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Users" */
export type UsersAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersHitsArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersHits_AggregateArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedBreakersArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedBreakers_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedBreaksArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedEventsArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersSavedEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};

/** aggregated selection of "Users" */
export type Users_Aggregate = {
  __typename?: 'Users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "Users" */
export type Users_Aggregate_Fields = {
  __typename?: 'Users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "Users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'Users_avg_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Users" */
export type Users_Avg_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  Addresses?: Maybe<Addresses_Bool_Exp>;
  BreakerProfile?: Maybe<BreakerProfiles_Bool_Exp>;
  Events?: Maybe<Events_Bool_Exp>;
  Followers?: Maybe<SaveBreaker_Bool_Exp>;
  Hits?: Maybe<Hits_Bool_Exp>;
  Notification?: Maybe<Notifications_Bool_Exp>;
  NotificationSettings?: Maybe<NotificationSettings_Bool_Exp>;
  Orders?: Maybe<Orders_Bool_Exp>;
  SavedBreakers?: Maybe<SaveBreaker_Bool_Exp>;
  SavedBreaks?: Maybe<SaveBreak_Bool_Exp>;
  SavedEvents?: Maybe<SaveEvent_Bool_Exp>;
  Stream?: Maybe<Streams_Bool_Exp>;
  UserPreference?: Maybe<UserPreferences_Bool_Exp>;
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  bc_user_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  is_breaker?: Maybe<Boolean_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  paysafe_user_id?: Maybe<String_Comparison_Exp>;
  role?: Maybe<User_Role_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_role?: Maybe<User_Role_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'Users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'Users_username_key'
}

/** input type for incrementing numeric columns in table "Users" */
export type Users_Inc_Input = {
  bc_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Users" */
export type Users_Insert_Input = {
  Addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  BreakerProfile?: Maybe<BreakerProfiles_Obj_Rel_Insert_Input>;
  Events?: Maybe<Events_Arr_Rel_Insert_Input>;
  Followers?: Maybe<SaveBreaker_Arr_Rel_Insert_Input>;
  Hits?: Maybe<Hits_Arr_Rel_Insert_Input>;
  Notification?: Maybe<Notifications_Obj_Rel_Insert_Input>;
  NotificationSettings?: Maybe<NotificationSettings_Obj_Rel_Insert_Input>;
  Orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  SavedBreakers?: Maybe<SaveBreaker_Arr_Rel_Insert_Input>;
  SavedBreaks?: Maybe<SaveBreak_Arr_Rel_Insert_Input>;
  SavedEvents?: Maybe<SaveEvent_Arr_Rel_Insert_Input>;
  Stream?: Maybe<Streams_Obj_Rel_Insert_Input>;
  UserPreference?: Maybe<UserPreferences_Obj_Rel_Insert_Input>;
  bc_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_breaker?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  paysafe_user_id?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_role?: Maybe<User_Role_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'Users_max_fields';
  bc_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  paysafe_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Users" */
export type Users_Max_Order_By = {
  bc_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  paysafe_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'Users_min_fields';
  bc_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  paysafe_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Users" */
export type Users_Min_Order_By = {
  bc_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  paysafe_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "Users" */
export type Users_Mutation_Response = {
  __typename?: 'Users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "Users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "Users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "Users". */
export type Users_Order_By = {
  Addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>;
  BreakerProfile?: Maybe<BreakerProfiles_Order_By>;
  Events_aggregate?: Maybe<Events_Aggregate_Order_By>;
  Followers_aggregate?: Maybe<SaveBreaker_Aggregate_Order_By>;
  Hits_aggregate?: Maybe<Hits_Aggregate_Order_By>;
  Notification?: Maybe<Notifications_Order_By>;
  NotificationSettings?: Maybe<NotificationSettings_Order_By>;
  Orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  SavedBreakers_aggregate?: Maybe<SaveBreaker_Aggregate_Order_By>;
  SavedBreaks_aggregate?: Maybe<SaveBreak_Aggregate_Order_By>;
  SavedEvents_aggregate?: Maybe<SaveEvent_Aggregate_Order_By>;
  Stream?: Maybe<Streams_Order_By>;
  UserPreference?: Maybe<UserPreferences_Order_By>;
  bc_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  is_breaker?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  paysafe_user_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_role?: Maybe<User_Role_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: Users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Users" */
export enum Users_Select_Column {
  /** column name */
  BcUserId = 'bc_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsBreaker = 'is_breaker',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PaysafeUserId = 'paysafe_user_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "Users" */
export type Users_Set_Input = {
  bc_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_breaker?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  paysafe_user_id?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'Users_stddev_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Users" */
export type Users_Stddev_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'Users_stddev_pop_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Users" */
export type Users_Stddev_Pop_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'Users_stddev_samp_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Users" */
export type Users_Stddev_Samp_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'Users_sum_fields';
  bc_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Users" */
export type Users_Sum_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** update columns of table "Users" */
export enum Users_Update_Column {
  /** column name */
  BcUserId = 'bc_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsBreaker = 'is_breaker',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PaysafeUserId = 'paysafe_user_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'Users_var_pop_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Users" */
export type Users_Var_Pop_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'Users_var_samp_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Users" */
export type Users_Var_Samp_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'Users_variance_fields';
  bc_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Users" */
export type Users_Variance_Order_By = {
  bc_user_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};


/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};

/** columns and relationships of "break_product" */
export type Break_Product = {
  __typename?: 'break_product';
  /** An object relationship */
  Break: Breaks;
  /** An object relationship */
  Product: Products;
  break_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};

/** aggregated selection of "break_product" */
export type Break_Product_Aggregate = {
  __typename?: 'break_product_aggregate';
  aggregate?: Maybe<Break_Product_Aggregate_Fields>;
  nodes: Array<Break_Product>;
};

/** aggregate fields of "break_product" */
export type Break_Product_Aggregate_Fields = {
  __typename?: 'break_product_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Break_Product_Max_Fields>;
  min?: Maybe<Break_Product_Min_Fields>;
};


/** aggregate fields of "break_product" */
export type Break_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Break_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "break_product" */
export type Break_Product_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Break_Product_Max_Order_By>;
  min?: Maybe<Break_Product_Min_Order_By>;
};

/** input type for inserting array relation for remote table "break_product" */
export type Break_Product_Arr_Rel_Insert_Input = {
  data: Array<Break_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Break_Product_On_Conflict>;
};

/** Boolean expression to filter rows from the table "break_product". All fields are combined with a logical 'AND'. */
export type Break_Product_Bool_Exp = {
  Break?: Maybe<Breaks_Bool_Exp>;
  Product?: Maybe<Products_Bool_Exp>;
  _and?: Maybe<Array<Break_Product_Bool_Exp>>;
  _not?: Maybe<Break_Product_Bool_Exp>;
  _or?: Maybe<Array<Break_Product_Bool_Exp>>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "break_product" */
export enum Break_Product_Constraint {
  /** unique or primary key constraint */
  BreakProductPkey = 'break_product_pkey'
}

/** input type for inserting data into table "break_product" */
export type Break_Product_Insert_Input = {
  Break?: Maybe<Breaks_Obj_Rel_Insert_Input>;
  Product?: Maybe<Products_Obj_Rel_Insert_Input>;
  break_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Break_Product_Max_Fields = {
  __typename?: 'break_product_max_fields';
  break_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "break_product" */
export type Break_Product_Max_Order_By = {
  break_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Break_Product_Min_Fields = {
  __typename?: 'break_product_min_fields';
  break_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "break_product" */
export type Break_Product_Min_Order_By = {
  break_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "break_product" */
export type Break_Product_Mutation_Response = {
  __typename?: 'break_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Break_Product>;
};

/** on_conflict condition type for table "break_product" */
export type Break_Product_On_Conflict = {
  constraint: Break_Product_Constraint;
  update_columns?: Array<Break_Product_Update_Column>;
  where?: Maybe<Break_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "break_product". */
export type Break_Product_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  Product?: Maybe<Products_Order_By>;
  break_id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
};

/** primary key columns input for table: break_product */
export type Break_Product_Pk_Columns_Input = {
  break_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};

/** select columns of table "break_product" */
export enum Break_Product_Select_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "break_product" */
export type Break_Product_Set_Input = {
  break_id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "break_product" */
export enum Break_Product_Update_Column {
  /** column name */
  BreakId = 'break_id',
  /** column name */
  ProductId = 'product_id'
}

/** columns and relationships of "break_status" */
export type Break_Status = {
  __typename?: 'break_status';
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "break_status" */
export type Break_StatusBreaksArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


/** columns and relationships of "break_status" */
export type Break_StatusBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};

/** aggregated selection of "break_status" */
export type Break_Status_Aggregate = {
  __typename?: 'break_status_aggregate';
  aggregate?: Maybe<Break_Status_Aggregate_Fields>;
  nodes: Array<Break_Status>;
};

/** aggregate fields of "break_status" */
export type Break_Status_Aggregate_Fields = {
  __typename?: 'break_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Break_Status_Max_Fields>;
  min?: Maybe<Break_Status_Min_Fields>;
};


/** aggregate fields of "break_status" */
export type Break_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Break_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "break_status". All fields are combined with a logical 'AND'. */
export type Break_Status_Bool_Exp = {
  Breaks?: Maybe<Breaks_Bool_Exp>;
  _and?: Maybe<Array<Break_Status_Bool_Exp>>;
  _not?: Maybe<Break_Status_Bool_Exp>;
  _or?: Maybe<Array<Break_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "break_status" */
export enum Break_Status_Constraint {
  /** unique or primary key constraint */
  BreakStatusPkey = 'break_status_pkey'
}

export enum Break_Status_Enum {
  Available = 'AVAILABLE',
  Closed = 'CLOSED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Live = 'LIVE',
  Notified = 'NOTIFIED',
  Soldout = 'SOLDOUT'
}

/** Boolean expression to compare columns of type "break_status_enum". All fields are combined with logical 'AND'. */
export type Break_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Break_Status_Enum>;
  _in?: Maybe<Array<Break_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Break_Status_Enum>;
  _nin?: Maybe<Array<Break_Status_Enum>>;
};

/** input type for inserting data into table "break_status" */
export type Break_Status_Insert_Input = {
  Breaks?: Maybe<Breaks_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Break_Status_Max_Fields = {
  __typename?: 'break_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Break_Status_Min_Fields = {
  __typename?: 'break_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "break_status" */
export type Break_Status_Mutation_Response = {
  __typename?: 'break_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Break_Status>;
};

/** input type for inserting object relation for remote table "break_status" */
export type Break_Status_Obj_Rel_Insert_Input = {
  data: Break_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Break_Status_On_Conflict>;
};

/** on_conflict condition type for table "break_status" */
export type Break_Status_On_Conflict = {
  constraint: Break_Status_Constraint;
  update_columns?: Array<Break_Status_Update_Column>;
  where?: Maybe<Break_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "break_status". */
export type Break_Status_Order_By = {
  Breaks_aggregate?: Maybe<Breaks_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: break_status */
export type Break_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "break_status" */
export enum Break_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "break_status" */
export type Break_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "break_status" */
export enum Break_Status_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "break_type" */
export type Break_Type = {
  __typename?: 'break_type';
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "break_type" */
export type Break_TypeBreaksArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


/** columns and relationships of "break_type" */
export type Break_TypeBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};

/** aggregated selection of "break_type" */
export type Break_Type_Aggregate = {
  __typename?: 'break_type_aggregate';
  aggregate?: Maybe<Break_Type_Aggregate_Fields>;
  nodes: Array<Break_Type>;
};

/** aggregate fields of "break_type" */
export type Break_Type_Aggregate_Fields = {
  __typename?: 'break_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Break_Type_Max_Fields>;
  min?: Maybe<Break_Type_Min_Fields>;
};


/** aggregate fields of "break_type" */
export type Break_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Break_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "break_type". All fields are combined with a logical 'AND'. */
export type Break_Type_Bool_Exp = {
  Breaks?: Maybe<Breaks_Bool_Exp>;
  _and?: Maybe<Array<Break_Type_Bool_Exp>>;
  _not?: Maybe<Break_Type_Bool_Exp>;
  _or?: Maybe<Array<Break_Type_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "break_type" */
export enum Break_Type_Constraint {
  /** unique or primary key constraint */
  BreakTypePkey = 'break_type_pkey'
}

export enum Break_Type_Enum {
  HitDraft = 'HIT_DRAFT',
  Personal = 'PERSONAL',
  PickYourDivision = 'PICK_YOUR_DIVISION',
  PickYourTeam = 'PICK_YOUR_TEAM',
  RandomDivision = 'RANDOM_DIVISION',
  RandomTeam = 'RANDOM_TEAM'
}

/** Boolean expression to compare columns of type "break_type_enum". All fields are combined with logical 'AND'. */
export type Break_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Break_Type_Enum>;
  _in?: Maybe<Array<Break_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Break_Type_Enum>;
  _nin?: Maybe<Array<Break_Type_Enum>>;
};

/** input type for inserting data into table "break_type" */
export type Break_Type_Insert_Input = {
  Breaks?: Maybe<Breaks_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Break_Type_Max_Fields = {
  __typename?: 'break_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Break_Type_Min_Fields = {
  __typename?: 'break_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "break_type" */
export type Break_Type_Mutation_Response = {
  __typename?: 'break_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Break_Type>;
};

/** input type for inserting object relation for remote table "break_type" */
export type Break_Type_Obj_Rel_Insert_Input = {
  data: Break_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Break_Type_On_Conflict>;
};

/** on_conflict condition type for table "break_type" */
export type Break_Type_On_Conflict = {
  constraint: Break_Type_Constraint;
  update_columns?: Array<Break_Type_Update_Column>;
  where?: Maybe<Break_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "break_type". */
export type Break_Type_Order_By = {
  Breaks_aggregate?: Maybe<Breaks_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: break_type */
export type Break_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "break_type" */
export enum Break_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "break_type" */
export type Break_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "break_type" */
export enum Break_Type_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "dataset_type" */
export type Dataset_Type = {
  __typename?: 'dataset_type';
  value: Scalars['String'];
};

/** aggregated selection of "dataset_type" */
export type Dataset_Type_Aggregate = {
  __typename?: 'dataset_type_aggregate';
  aggregate?: Maybe<Dataset_Type_Aggregate_Fields>;
  nodes: Array<Dataset_Type>;
};

/** aggregate fields of "dataset_type" */
export type Dataset_Type_Aggregate_Fields = {
  __typename?: 'dataset_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Dataset_Type_Max_Fields>;
  min?: Maybe<Dataset_Type_Min_Fields>;
};


/** aggregate fields of "dataset_type" */
export type Dataset_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dataset_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "dataset_type". All fields are combined with a logical 'AND'. */
export type Dataset_Type_Bool_Exp = {
  _and?: Maybe<Array<Dataset_Type_Bool_Exp>>;
  _not?: Maybe<Dataset_Type_Bool_Exp>;
  _or?: Maybe<Array<Dataset_Type_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dataset_type" */
export enum Dataset_Type_Constraint {
  /** unique or primary key constraint */
  DatasetTypePkey = 'dataset_type_pkey'
}

export enum Dataset_Type_Enum {
  Division = 'DIVISION',
  Team = 'TEAM'
}

/** Boolean expression to compare columns of type "dataset_type_enum". All fields are combined with logical 'AND'. */
export type Dataset_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Dataset_Type_Enum>;
  _in?: Maybe<Array<Dataset_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Dataset_Type_Enum>;
  _nin?: Maybe<Array<Dataset_Type_Enum>>;
};

/** input type for inserting data into table "dataset_type" */
export type Dataset_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dataset_Type_Max_Fields = {
  __typename?: 'dataset_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Dataset_Type_Min_Fields = {
  __typename?: 'dataset_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "dataset_type" */
export type Dataset_Type_Mutation_Response = {
  __typename?: 'dataset_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dataset_Type>;
};

/** on_conflict condition type for table "dataset_type" */
export type Dataset_Type_On_Conflict = {
  constraint: Dataset_Type_Constraint;
  update_columns?: Array<Dataset_Type_Update_Column>;
  where?: Maybe<Dataset_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "dataset_type". */
export type Dataset_Type_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: dataset_type */
export type Dataset_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "dataset_type" */
export enum Dataset_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "dataset_type" */
export type Dataset_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "dataset_type" */
export enum Dataset_Type_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "datasets" */
export type Datasets = {
  __typename?: 'datasets';
  category: Scalars['String'];
  data?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Dataset_Type_Enum>;
  year: Scalars['smallint'];
};


/** columns and relationships of "datasets" */
export type DatasetsDataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "datasets" */
export type Datasets_Aggregate = {
  __typename?: 'datasets_aggregate';
  aggregate?: Maybe<Datasets_Aggregate_Fields>;
  nodes: Array<Datasets>;
};

/** aggregate fields of "datasets" */
export type Datasets_Aggregate_Fields = {
  __typename?: 'datasets_aggregate_fields';
  avg?: Maybe<Datasets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Datasets_Max_Fields>;
  min?: Maybe<Datasets_Min_Fields>;
  stddev?: Maybe<Datasets_Stddev_Fields>;
  stddev_pop?: Maybe<Datasets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Datasets_Stddev_Samp_Fields>;
  sum?: Maybe<Datasets_Sum_Fields>;
  var_pop?: Maybe<Datasets_Var_Pop_Fields>;
  var_samp?: Maybe<Datasets_Var_Samp_Fields>;
  variance?: Maybe<Datasets_Variance_Fields>;
};


/** aggregate fields of "datasets" */
export type Datasets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Datasets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Datasets_Append_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Datasets_Avg_Fields = {
  __typename?: 'datasets_avg_fields';
  year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "datasets". All fields are combined with a logical 'AND'. */
export type Datasets_Bool_Exp = {
  _and?: Maybe<Array<Datasets_Bool_Exp>>;
  _not?: Maybe<Datasets_Bool_Exp>;
  _or?: Maybe<Array<Datasets_Bool_Exp>>;
  category?: Maybe<String_Comparison_Exp>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  subcategory?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Dataset_Type_Enum_Comparison_Exp>;
  year?: Maybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "datasets" */
export enum Datasets_Constraint {
  /** unique or primary key constraint */
  DatasetsPkey = 'datasets_pkey',
  /** unique or primary key constraint */
  YearCat = 'year_cat',
  /** unique or primary key constraint */
  YearCatSubcat = 'year_cat_subcat',
  /** unique or primary key constraint */
  YearCatSubcatType = 'year_cat_subcat_type',
  /** unique or primary key constraint */
  YearCatType = 'year_cat_type'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Datasets_Delete_At_Path_Input = {
  data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Datasets_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Datasets_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "datasets" */
export type Datasets_Inc_Input = {
  year?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "datasets" */
export type Datasets_Insert_Input = {
  category?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Dataset_Type_Enum>;
  year?: Maybe<Scalars['smallint']>;
};

/** aggregate max on columns */
export type Datasets_Max_Fields = {
  __typename?: 'datasets_max_fields';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['smallint']>;
};

/** aggregate min on columns */
export type Datasets_Min_Fields = {
  __typename?: 'datasets_min_fields';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['smallint']>;
};

/** response of any mutation on the table "datasets" */
export type Datasets_Mutation_Response = {
  __typename?: 'datasets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Datasets>;
};

/** input type for inserting object relation for remote table "datasets" */
export type Datasets_Obj_Rel_Insert_Input = {
  data: Datasets_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Datasets_On_Conflict>;
};

/** on_conflict condition type for table "datasets" */
export type Datasets_On_Conflict = {
  constraint: Datasets_Constraint;
  update_columns?: Array<Datasets_Update_Column>;
  where?: Maybe<Datasets_Bool_Exp>;
};

/** Ordering options when selecting data from "datasets". */
export type Datasets_Order_By = {
  category?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: datasets */
export type Datasets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Datasets_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "datasets" */
export enum Datasets_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Type = 'type',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "datasets" */
export type Datasets_Set_Input = {
  category?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Scalars['String']>;
  type?: Maybe<Dataset_Type_Enum>;
  year?: Maybe<Scalars['smallint']>;
};

/** aggregate stddev on columns */
export type Datasets_Stddev_Fields = {
  __typename?: 'datasets_stddev_fields';
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Datasets_Stddev_Pop_Fields = {
  __typename?: 'datasets_stddev_pop_fields';
  year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Datasets_Stddev_Samp_Fields = {
  __typename?: 'datasets_stddev_samp_fields';
  year?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Datasets_Sum_Fields = {
  __typename?: 'datasets_sum_fields';
  year?: Maybe<Scalars['smallint']>;
};

/** update columns of table "datasets" */
export enum Datasets_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Type = 'type',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Datasets_Var_Pop_Fields = {
  __typename?: 'datasets_var_pop_fields';
  year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Datasets_Var_Samp_Fields = {
  __typename?: 'datasets_var_samp_fields';
  year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Datasets_Variance_Fields = {
  __typename?: 'datasets_variance_fields';
  year?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "event_status" */
export type Event_Status = {
  __typename?: 'event_status';
  /** An array relationship */
  Events: Array<Events>;
  /** An aggregate relationship */
  Events_aggregate: Events_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "event_status" */
export type Event_StatusEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** columns and relationships of "event_status" */
export type Event_StatusEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};

/** aggregated selection of "event_status" */
export type Event_Status_Aggregate = {
  __typename?: 'event_status_aggregate';
  aggregate?: Maybe<Event_Status_Aggregate_Fields>;
  nodes: Array<Event_Status>;
};

/** aggregate fields of "event_status" */
export type Event_Status_Aggregate_Fields = {
  __typename?: 'event_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Event_Status_Max_Fields>;
  min?: Maybe<Event_Status_Min_Fields>;
};


/** aggregate fields of "event_status" */
export type Event_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "event_status". All fields are combined with a logical 'AND'. */
export type Event_Status_Bool_Exp = {
  Events?: Maybe<Events_Bool_Exp>;
  _and?: Maybe<Array<Event_Status_Bool_Exp>>;
  _not?: Maybe<Event_Status_Bool_Exp>;
  _or?: Maybe<Array<Event_Status_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "event_status" */
export enum Event_Status_Constraint {
  /** unique or primary key constraint */
  EventStatusPkey = 'event_status_pkey'
}

export enum Event_Status_Enum {
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Live = 'LIVE',
  Scheduled = 'SCHEDULED'
}

/** Boolean expression to compare columns of type "event_status_enum". All fields are combined with logical 'AND'. */
export type Event_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Event_Status_Enum>;
  _in?: Maybe<Array<Event_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Event_Status_Enum>;
  _nin?: Maybe<Array<Event_Status_Enum>>;
};

/** input type for inserting data into table "event_status" */
export type Event_Status_Insert_Input = {
  Events?: Maybe<Events_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Event_Status_Max_Fields = {
  __typename?: 'event_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Event_Status_Min_Fields = {
  __typename?: 'event_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "event_status" */
export type Event_Status_Mutation_Response = {
  __typename?: 'event_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event_Status>;
};

/** input type for inserting object relation for remote table "event_status" */
export type Event_Status_Obj_Rel_Insert_Input = {
  data: Event_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Event_Status_On_Conflict>;
};

/** on_conflict condition type for table "event_status" */
export type Event_Status_On_Conflict = {
  constraint: Event_Status_Constraint;
  update_columns?: Array<Event_Status_Update_Column>;
  where?: Maybe<Event_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "event_status". */
export type Event_Status_Order_By = {
  Events_aggregate?: Maybe<Events_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: event_status */
export type Event_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "event_status" */
export enum Event_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "event_status" */
export type Event_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "event_status" */
export enum Event_Status_Update_Column {
  /** column name */
  Value = 'value'
}


export type Jsonb_Cast_Exp = {
  String?: Maybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Maybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Addresses" */
  delete_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "Addresses" */
  delete_Addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "BreakProductItems" */
  delete_BreakProductItems?: Maybe<BreakProductItems_Mutation_Response>;
  /** delete single row from the table: "BreakProductItems" */
  delete_BreakProductItems_by_pk?: Maybe<BreakProductItems>;
  /** delete data from the table: "BreakerProfiles" */
  delete_BreakerProfiles?: Maybe<BreakerProfiles_Mutation_Response>;
  /** delete single row from the table: "BreakerProfiles" */
  delete_BreakerProfiles_by_pk?: Maybe<BreakerProfiles>;
  /** delete data from the table: "Breaks" */
  delete_Breaks?: Maybe<Breaks_Mutation_Response>;
  /** delete single row from the table: "Breaks" */
  delete_Breaks_by_pk?: Maybe<Breaks>;
  /** delete data from the table: "Divisions" */
  delete_Divisions?: Maybe<Divisions_Mutation_Response>;
  /** delete single row from the table: "Divisions" */
  delete_Divisions_by_pk?: Maybe<Divisions>;
  /** delete data from the table: "Events" */
  delete_Events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "Events" */
  delete_Events_by_pk?: Maybe<Events>;
  /** delete data from the table: "ExtensibleValues" */
  delete_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** delete single row from the table: "ExtensibleValues" */
  delete_ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** delete data from the table: "Hits" */
  delete_Hits?: Maybe<Hits_Mutation_Response>;
  /** delete single row from the table: "Hits" */
  delete_Hits_by_pk?: Maybe<Hits>;
  /** delete data from the table: "Inventory" */
  delete_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** delete single row from the table: "Inventory" */
  delete_Inventory_by_pk?: Maybe<Inventory>;
  /** delete data from the table: "NotificationSettings" */
  delete_NotificationSettings?: Maybe<NotificationSettings_Mutation_Response>;
  /** delete single row from the table: "NotificationSettings" */
  delete_NotificationSettings_by_pk?: Maybe<NotificationSettings>;
  /** delete data from the table: "Notifications" */
  delete_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "Notifications" */
  delete_Notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "Orders" */
  delete_Orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "Orders" */
  delete_Orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "Players" */
  delete_Players?: Maybe<Players_Mutation_Response>;
  /** delete single row from the table: "Players" */
  delete_Players_by_pk?: Maybe<Players>;
  /** delete data from the table: "Products" */
  delete_Products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "Products" */
  delete_Products_by_pk?: Maybe<Products>;
  /** delete data from the table: "SaveBreak" */
  delete_SaveBreak?: Maybe<SaveBreak_Mutation_Response>;
  /** delete single row from the table: "SaveBreak" */
  delete_SaveBreak_by_pk?: Maybe<SaveBreak>;
  /** delete data from the table: "SaveBreaker" */
  delete_SaveBreaker?: Maybe<SaveBreaker_Mutation_Response>;
  /** delete single row from the table: "SaveBreaker" */
  delete_SaveBreaker_by_pk?: Maybe<SaveBreaker>;
  /** delete data from the table: "SaveEvent" */
  delete_SaveEvent?: Maybe<SaveEvent_Mutation_Response>;
  /** delete single row from the table: "SaveEvent" */
  delete_SaveEvent_by_pk?: Maybe<SaveEvent>;
  /** delete data from the table: "Streams" */
  delete_Streams?: Maybe<Streams_Mutation_Response>;
  /** delete single row from the table: "Streams" */
  delete_Streams_by_pk?: Maybe<Streams>;
  /** delete data from the table: "Teams" */
  delete_Teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "Teams" */
  delete_Teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "UserPreferences" */
  delete_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** delete single row from the table: "UserPreferences" */
  delete_UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** delete data from the table: "Users" */
  delete_Users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "Users" */
  delete_Users_by_pk?: Maybe<Users>;
  /** delete data from the table: "break_product" */
  delete_break_product?: Maybe<Break_Product_Mutation_Response>;
  /** delete single row from the table: "break_product" */
  delete_break_product_by_pk?: Maybe<Break_Product>;
  /** delete data from the table: "break_status" */
  delete_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** delete single row from the table: "break_status" */
  delete_break_status_by_pk?: Maybe<Break_Status>;
  /** delete data from the table: "break_type" */
  delete_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** delete single row from the table: "break_type" */
  delete_break_type_by_pk?: Maybe<Break_Type>;
  /** delete data from the table: "dataset_type" */
  delete_dataset_type?: Maybe<Dataset_Type_Mutation_Response>;
  /** delete single row from the table: "dataset_type" */
  delete_dataset_type_by_pk?: Maybe<Dataset_Type>;
  /** delete data from the table: "datasets" */
  delete_datasets?: Maybe<Datasets_Mutation_Response>;
  /** delete single row from the table: "datasets" */
  delete_datasets_by_pk?: Maybe<Datasets>;
  /** delete data from the table: "event_status" */
  delete_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** delete single row from the table: "event_status" */
  delete_event_status_by_pk?: Maybe<Event_Status>;
  /** delete data from the table: "order_in_process" */
  delete_order_in_process?: Maybe<Order_In_Process_Mutation_Response>;
  /** delete single row from the table: "order_in_process" */
  delete_order_in_process_by_pk?: Maybe<Order_In_Process>;
  /** delete data from the table: "unit_of_measure" */
  delete_unit_of_measure?: Maybe<Unit_Of_Measure_Mutation_Response>;
  /** delete single row from the table: "unit_of_measure" */
  delete_unit_of_measure_by_pk?: Maybe<Unit_Of_Measure>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** insert data into the table: "Addresses" */
  insert_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "Addresses" */
  insert_Addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "BreakProductItems" */
  insert_BreakProductItems?: Maybe<BreakProductItems_Mutation_Response>;
  /** insert a single row into the table: "BreakProductItems" */
  insert_BreakProductItems_one?: Maybe<BreakProductItems>;
  /** insert data into the table: "BreakerProfiles" */
  insert_BreakerProfiles?: Maybe<BreakerProfiles_Mutation_Response>;
  /** insert a single row into the table: "BreakerProfiles" */
  insert_BreakerProfiles_one?: Maybe<BreakerProfiles>;
  /** insert data into the table: "Breaks" */
  insert_Breaks?: Maybe<Breaks_Mutation_Response>;
  /** insert a single row into the table: "Breaks" */
  insert_Breaks_one?: Maybe<Breaks>;
  /** insert data into the table: "Divisions" */
  insert_Divisions?: Maybe<Divisions_Mutation_Response>;
  /** insert a single row into the table: "Divisions" */
  insert_Divisions_one?: Maybe<Divisions>;
  /** insert data into the table: "Events" */
  insert_Events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "Events" */
  insert_Events_one?: Maybe<Events>;
  /** insert data into the table: "ExtensibleValues" */
  insert_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** insert a single row into the table: "ExtensibleValues" */
  insert_ExtensibleValues_one?: Maybe<ExtensibleValues>;
  /** insert data into the table: "Hits" */
  insert_Hits?: Maybe<Hits_Mutation_Response>;
  /** insert a single row into the table: "Hits" */
  insert_Hits_one?: Maybe<Hits>;
  /** insert data into the table: "Inventory" */
  insert_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** insert a single row into the table: "Inventory" */
  insert_Inventory_one?: Maybe<Inventory>;
  /** insert data into the table: "NotificationSettings" */
  insert_NotificationSettings?: Maybe<NotificationSettings_Mutation_Response>;
  /** insert a single row into the table: "NotificationSettings" */
  insert_NotificationSettings_one?: Maybe<NotificationSettings>;
  /** insert data into the table: "Notifications" */
  insert_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "Notifications" */
  insert_Notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "Orders" */
  insert_Orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "Orders" */
  insert_Orders_one?: Maybe<Orders>;
  /** insert data into the table: "Players" */
  insert_Players?: Maybe<Players_Mutation_Response>;
  /** insert a single row into the table: "Players" */
  insert_Players_one?: Maybe<Players>;
  /** insert data into the table: "Products" */
  insert_Products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "Products" */
  insert_Products_one?: Maybe<Products>;
  /** insert data into the table: "SaveBreak" */
  insert_SaveBreak?: Maybe<SaveBreak_Mutation_Response>;
  /** insert a single row into the table: "SaveBreak" */
  insert_SaveBreak_one?: Maybe<SaveBreak>;
  /** insert data into the table: "SaveBreaker" */
  insert_SaveBreaker?: Maybe<SaveBreaker_Mutation_Response>;
  /** insert a single row into the table: "SaveBreaker" */
  insert_SaveBreaker_one?: Maybe<SaveBreaker>;
  /** insert data into the table: "SaveEvent" */
  insert_SaveEvent?: Maybe<SaveEvent_Mutation_Response>;
  /** insert a single row into the table: "SaveEvent" */
  insert_SaveEvent_one?: Maybe<SaveEvent>;
  /** insert data into the table: "Streams" */
  insert_Streams?: Maybe<Streams_Mutation_Response>;
  /** insert a single row into the table: "Streams" */
  insert_Streams_one?: Maybe<Streams>;
  /** insert data into the table: "Teams" */
  insert_Teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "Teams" */
  insert_Teams_one?: Maybe<Teams>;
  /** insert data into the table: "UserPreferences" */
  insert_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** insert a single row into the table: "UserPreferences" */
  insert_UserPreferences_one?: Maybe<UserPreferences>;
  /** insert data into the table: "Users" */
  insert_Users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "Users" */
  insert_Users_one?: Maybe<Users>;
  /** insert data into the table: "break_product" */
  insert_break_product?: Maybe<Break_Product_Mutation_Response>;
  /** insert a single row into the table: "break_product" */
  insert_break_product_one?: Maybe<Break_Product>;
  /** insert data into the table: "break_status" */
  insert_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** insert a single row into the table: "break_status" */
  insert_break_status_one?: Maybe<Break_Status>;
  /** insert data into the table: "break_type" */
  insert_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** insert a single row into the table: "break_type" */
  insert_break_type_one?: Maybe<Break_Type>;
  /** insert data into the table: "dataset_type" */
  insert_dataset_type?: Maybe<Dataset_Type_Mutation_Response>;
  /** insert a single row into the table: "dataset_type" */
  insert_dataset_type_one?: Maybe<Dataset_Type>;
  /** insert data into the table: "datasets" */
  insert_datasets?: Maybe<Datasets_Mutation_Response>;
  /** insert a single row into the table: "datasets" */
  insert_datasets_one?: Maybe<Datasets>;
  /** insert data into the table: "event_status" */
  insert_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** insert a single row into the table: "event_status" */
  insert_event_status_one?: Maybe<Event_Status>;
  /** insert data into the table: "order_in_process" */
  insert_order_in_process?: Maybe<Order_In_Process_Mutation_Response>;
  /** insert a single row into the table: "order_in_process" */
  insert_order_in_process_one?: Maybe<Order_In_Process>;
  /** insert data into the table: "unit_of_measure" */
  insert_unit_of_measure?: Maybe<Unit_Of_Measure_Mutation_Response>;
  /** insert a single row into the table: "unit_of_measure" */
  insert_unit_of_measure_one?: Maybe<Unit_Of_Measure>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** update data of the table: "Addresses" */
  update_Addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "Addresses" */
  update_Addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "BreakProductItems" */
  update_BreakProductItems?: Maybe<BreakProductItems_Mutation_Response>;
  /** update single row of the table: "BreakProductItems" */
  update_BreakProductItems_by_pk?: Maybe<BreakProductItems>;
  /** update data of the table: "BreakerProfiles" */
  update_BreakerProfiles?: Maybe<BreakerProfiles_Mutation_Response>;
  /** update single row of the table: "BreakerProfiles" */
  update_BreakerProfiles_by_pk?: Maybe<BreakerProfiles>;
  /** update data of the table: "Breaks" */
  update_Breaks?: Maybe<Breaks_Mutation_Response>;
  /** update single row of the table: "Breaks" */
  update_Breaks_by_pk?: Maybe<Breaks>;
  /** update data of the table: "Divisions" */
  update_Divisions?: Maybe<Divisions_Mutation_Response>;
  /** update single row of the table: "Divisions" */
  update_Divisions_by_pk?: Maybe<Divisions>;
  /** update data of the table: "Events" */
  update_Events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "Events" */
  update_Events_by_pk?: Maybe<Events>;
  /** update data of the table: "ExtensibleValues" */
  update_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** update single row of the table: "ExtensibleValues" */
  update_ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** update data of the table: "Hits" */
  update_Hits?: Maybe<Hits_Mutation_Response>;
  /** update single row of the table: "Hits" */
  update_Hits_by_pk?: Maybe<Hits>;
  /** update data of the table: "Inventory" */
  update_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** update single row of the table: "Inventory" */
  update_Inventory_by_pk?: Maybe<Inventory>;
  /** update data of the table: "NotificationSettings" */
  update_NotificationSettings?: Maybe<NotificationSettings_Mutation_Response>;
  /** update single row of the table: "NotificationSettings" */
  update_NotificationSettings_by_pk?: Maybe<NotificationSettings>;
  /** update data of the table: "Notifications" */
  update_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "Notifications" */
  update_Notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "Orders" */
  update_Orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "Orders" */
  update_Orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "Players" */
  update_Players?: Maybe<Players_Mutation_Response>;
  /** update single row of the table: "Players" */
  update_Players_by_pk?: Maybe<Players>;
  /** update data of the table: "Products" */
  update_Products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "Products" */
  update_Products_by_pk?: Maybe<Products>;
  /** update data of the table: "SaveBreak" */
  update_SaveBreak?: Maybe<SaveBreak_Mutation_Response>;
  /** update single row of the table: "SaveBreak" */
  update_SaveBreak_by_pk?: Maybe<SaveBreak>;
  /** update data of the table: "SaveBreaker" */
  update_SaveBreaker?: Maybe<SaveBreaker_Mutation_Response>;
  /** update single row of the table: "SaveBreaker" */
  update_SaveBreaker_by_pk?: Maybe<SaveBreaker>;
  /** update data of the table: "SaveEvent" */
  update_SaveEvent?: Maybe<SaveEvent_Mutation_Response>;
  /** update single row of the table: "SaveEvent" */
  update_SaveEvent_by_pk?: Maybe<SaveEvent>;
  /** update data of the table: "Streams" */
  update_Streams?: Maybe<Streams_Mutation_Response>;
  /** update single row of the table: "Streams" */
  update_Streams_by_pk?: Maybe<Streams>;
  /** update data of the table: "Teams" */
  update_Teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "Teams" */
  update_Teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "UserPreferences" */
  update_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** update single row of the table: "UserPreferences" */
  update_UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** update data of the table: "Users" */
  update_Users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "Users" */
  update_Users_by_pk?: Maybe<Users>;
  /** update data of the table: "break_product" */
  update_break_product?: Maybe<Break_Product_Mutation_Response>;
  /** update single row of the table: "break_product" */
  update_break_product_by_pk?: Maybe<Break_Product>;
  /** update data of the table: "break_status" */
  update_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** update single row of the table: "break_status" */
  update_break_status_by_pk?: Maybe<Break_Status>;
  /** update data of the table: "break_type" */
  update_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** update single row of the table: "break_type" */
  update_break_type_by_pk?: Maybe<Break_Type>;
  /** update data of the table: "dataset_type" */
  update_dataset_type?: Maybe<Dataset_Type_Mutation_Response>;
  /** update single row of the table: "dataset_type" */
  update_dataset_type_by_pk?: Maybe<Dataset_Type>;
  /** update data of the table: "datasets" */
  update_datasets?: Maybe<Datasets_Mutation_Response>;
  /** update single row of the table: "datasets" */
  update_datasets_by_pk?: Maybe<Datasets>;
  /** update data of the table: "event_status" */
  update_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** update single row of the table: "event_status" */
  update_event_status_by_pk?: Maybe<Event_Status>;
  /** update data of the table: "order_in_process" */
  update_order_in_process?: Maybe<Order_In_Process_Mutation_Response>;
  /** update single row of the table: "order_in_process" */
  update_order_in_process_by_pk?: Maybe<Order_In_Process>;
  /** update data of the table: "unit_of_measure" */
  update_unit_of_measure?: Maybe<Unit_Of_Measure_Mutation_Response>;
  /** update single row of the table: "unit_of_measure" */
  update_unit_of_measure_by_pk?: Maybe<Unit_Of_Measure>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BreakProductItemsArgs = {
  where: BreakProductItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BreakProductItems_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BreakerProfilesArgs = {
  where: BreakerProfiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BreakerProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BreaksArgs = {
  where: Breaks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Breaks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DivisionsArgs = {
  where: Divisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Divisions_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ExtensibleValuesArgs = {
  where: ExtensibleValues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ExtensibleValues_By_PkArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_HitsArgs = {
  where: Hits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hits_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InventoryArgs = {
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationSettingsArgs = {
  where: NotificationSettings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_NotificationSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PlayersArgs = {
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Players_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SaveBreakArgs = {
  where: SaveBreak_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SaveBreak_By_PkArgs = {
  break_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SaveBreakerArgs = {
  where: SaveBreaker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SaveBreaker_By_PkArgs = {
  breaker_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SaveEventArgs = {
  where: SaveEvent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SaveEvent_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_StreamsArgs = {
  where: Streams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Streams_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
  start_year: Scalars['smallint'];
};


/** mutation root */
export type Mutation_RootDelete_UserPreferencesArgs = {
  where: UserPreferences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserPreferences_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Break_ProductArgs = {
  where: Break_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Break_Product_By_PkArgs = {
  break_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Break_StatusArgs = {
  where: Break_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Break_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Break_TypeArgs = {
  where: Break_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Break_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Dataset_TypeArgs = {
  where: Dataset_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dataset_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DatasetsArgs = {
  where: Datasets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Datasets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Event_StatusArgs = {
  where: Event_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Order_In_ProcessArgs = {
  where: Order_In_Process_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_In_Process_By_PkArgs = {
  product_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Unit_Of_MeasureArgs = {
  where: Unit_Of_Measure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Unit_Of_Measure_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BreakProductItemsArgs = {
  objects: Array<BreakProductItems_Insert_Input>;
  on_conflict?: Maybe<BreakProductItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BreakProductItems_OneArgs = {
  object: BreakProductItems_Insert_Input;
  on_conflict?: Maybe<BreakProductItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BreakerProfilesArgs = {
  objects: Array<BreakerProfiles_Insert_Input>;
  on_conflict?: Maybe<BreakerProfiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BreakerProfiles_OneArgs = {
  object: BreakerProfiles_Insert_Input;
  on_conflict?: Maybe<BreakerProfiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BreaksArgs = {
  objects: Array<Breaks_Insert_Input>;
  on_conflict?: Maybe<Breaks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Breaks_OneArgs = {
  object: Breaks_Insert_Input;
  on_conflict?: Maybe<Breaks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DivisionsArgs = {
  objects: Array<Divisions_Insert_Input>;
  on_conflict?: Maybe<Divisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Divisions_OneArgs = {
  object: Divisions_Insert_Input;
  on_conflict?: Maybe<Divisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: Maybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: Maybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExtensibleValuesArgs = {
  objects: Array<ExtensibleValues_Insert_Input>;
  on_conflict?: Maybe<ExtensibleValues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExtensibleValues_OneArgs = {
  object: ExtensibleValues_Insert_Input;
  on_conflict?: Maybe<ExtensibleValues_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HitsArgs = {
  objects: Array<Hits_Insert_Input>;
  on_conflict?: Maybe<Hits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hits_OneArgs = {
  object: Hits_Insert_Input;
  on_conflict?: Maybe<Hits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InventoryArgs = {
  objects: Array<Inventory_Insert_Input>;
  on_conflict?: Maybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_OneArgs = {
  object: Inventory_Insert_Input;
  on_conflict?: Maybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationSettingsArgs = {
  objects: Array<NotificationSettings_Insert_Input>;
  on_conflict?: Maybe<NotificationSettings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationSettings_OneArgs = {
  object: NotificationSettings_Insert_Input;
  on_conflict?: Maybe<NotificationSettings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: Maybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: Maybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlayersArgs = {
  objects: Array<Players_Insert_Input>;
  on_conflict?: Maybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Players_OneArgs = {
  object: Players_Insert_Input;
  on_conflict?: Maybe<Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveBreakArgs = {
  objects: Array<SaveBreak_Insert_Input>;
  on_conflict?: Maybe<SaveBreak_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveBreak_OneArgs = {
  object: SaveBreak_Insert_Input;
  on_conflict?: Maybe<SaveBreak_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveBreakerArgs = {
  objects: Array<SaveBreaker_Insert_Input>;
  on_conflict?: Maybe<SaveBreaker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveBreaker_OneArgs = {
  object: SaveBreaker_Insert_Input;
  on_conflict?: Maybe<SaveBreaker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveEventArgs = {
  objects: Array<SaveEvent_Insert_Input>;
  on_conflict?: Maybe<SaveEvent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SaveEvent_OneArgs = {
  object: SaveEvent_Insert_Input;
  on_conflict?: Maybe<SaveEvent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StreamsArgs = {
  objects: Array<Streams_Insert_Input>;
  on_conflict?: Maybe<Streams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Streams_OneArgs = {
  object: Streams_Insert_Input;
  on_conflict?: Maybe<Streams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserPreferencesArgs = {
  objects: Array<UserPreferences_Insert_Input>;
  on_conflict?: Maybe<UserPreferences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserPreferences_OneArgs = {
  object: UserPreferences_Insert_Input;
  on_conflict?: Maybe<UserPreferences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_ProductArgs = {
  objects: Array<Break_Product_Insert_Input>;
  on_conflict?: Maybe<Break_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_Product_OneArgs = {
  object: Break_Product_Insert_Input;
  on_conflict?: Maybe<Break_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_StatusArgs = {
  objects: Array<Break_Status_Insert_Input>;
  on_conflict?: Maybe<Break_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_Status_OneArgs = {
  object: Break_Status_Insert_Input;
  on_conflict?: Maybe<Break_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_TypeArgs = {
  objects: Array<Break_Type_Insert_Input>;
  on_conflict?: Maybe<Break_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Break_Type_OneArgs = {
  object: Break_Type_Insert_Input;
  on_conflict?: Maybe<Break_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dataset_TypeArgs = {
  objects: Array<Dataset_Type_Insert_Input>;
  on_conflict?: Maybe<Dataset_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dataset_Type_OneArgs = {
  object: Dataset_Type_Insert_Input;
  on_conflict?: Maybe<Dataset_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DatasetsArgs = {
  objects: Array<Datasets_Insert_Input>;
  on_conflict?: Maybe<Datasets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Datasets_OneArgs = {
  object: Datasets_Insert_Input;
  on_conflict?: Maybe<Datasets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_StatusArgs = {
  objects: Array<Event_Status_Insert_Input>;
  on_conflict?: Maybe<Event_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_Status_OneArgs = {
  object: Event_Status_Insert_Input;
  on_conflict?: Maybe<Event_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_In_ProcessArgs = {
  objects: Array<Order_In_Process_Insert_Input>;
  on_conflict?: Maybe<Order_In_Process_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_In_Process_OneArgs = {
  object: Order_In_Process_Insert_Input;
  on_conflict?: Maybe<Order_In_Process_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_Of_MeasureArgs = {
  objects: Array<Unit_Of_Measure_Insert_Input>;
  on_conflict?: Maybe<Unit_Of_Measure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Unit_Of_Measure_OneArgs = {
  object: Unit_Of_Measure_Insert_Input;
  on_conflict?: Maybe<Unit_Of_Measure_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _set?: Maybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _set?: Maybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BreakProductItemsArgs = {
  _inc?: Maybe<BreakProductItems_Inc_Input>;
  _set?: Maybe<BreakProductItems_Set_Input>;
  where: BreakProductItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BreakProductItems_By_PkArgs = {
  _inc?: Maybe<BreakProductItems_Inc_Input>;
  _set?: Maybe<BreakProductItems_Set_Input>;
  pk_columns: BreakProductItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BreakerProfilesArgs = {
  _set?: Maybe<BreakerProfiles_Set_Input>;
  where: BreakerProfiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BreakerProfiles_By_PkArgs = {
  _set?: Maybe<BreakerProfiles_Set_Input>;
  pk_columns: BreakerProfiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BreaksArgs = {
  _append?: Maybe<Breaks_Append_Input>;
  _delete_at_path?: Maybe<Breaks_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Breaks_Delete_Elem_Input>;
  _delete_key?: Maybe<Breaks_Delete_Key_Input>;
  _inc?: Maybe<Breaks_Inc_Input>;
  _prepend?: Maybe<Breaks_Prepend_Input>;
  _set?: Maybe<Breaks_Set_Input>;
  where: Breaks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Breaks_By_PkArgs = {
  _append?: Maybe<Breaks_Append_Input>;
  _delete_at_path?: Maybe<Breaks_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Breaks_Delete_Elem_Input>;
  _delete_key?: Maybe<Breaks_Delete_Key_Input>;
  _inc?: Maybe<Breaks_Inc_Input>;
  _prepend?: Maybe<Breaks_Prepend_Input>;
  _set?: Maybe<Breaks_Set_Input>;
  pk_columns: Breaks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DivisionsArgs = {
  _set?: Maybe<Divisions_Set_Input>;
  where: Divisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Divisions_By_PkArgs = {
  _set?: Maybe<Divisions_Set_Input>;
  pk_columns: Divisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _set?: Maybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _set?: Maybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExtensibleValuesArgs = {
  _set?: Maybe<ExtensibleValues_Set_Input>;
  where: ExtensibleValues_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ExtensibleValues_By_PkArgs = {
  _set?: Maybe<ExtensibleValues_Set_Input>;
  pk_columns: ExtensibleValues_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HitsArgs = {
  _inc?: Maybe<Hits_Inc_Input>;
  _set?: Maybe<Hits_Set_Input>;
  where: Hits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hits_By_PkArgs = {
  _inc?: Maybe<Hits_Inc_Input>;
  _set?: Maybe<Hits_Set_Input>;
  pk_columns: Hits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InventoryArgs = {
  _inc?: Maybe<Inventory_Inc_Input>;
  _set?: Maybe<Inventory_Set_Input>;
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_By_PkArgs = {
  _inc?: Maybe<Inventory_Inc_Input>;
  _set?: Maybe<Inventory_Set_Input>;
  pk_columns: Inventory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationSettingsArgs = {
  _set?: Maybe<NotificationSettings_Set_Input>;
  where: NotificationSettings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationSettings_By_PkArgs = {
  _set?: Maybe<NotificationSettings_Set_Input>;
  pk_columns: NotificationSettings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: Maybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: Maybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PlayersArgs = {
  _set?: Maybe<Players_Set_Input>;
  where: Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Players_By_PkArgs = {
  _set?: Maybe<Players_Set_Input>;
  pk_columns: Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SaveBreakArgs = {
  _set?: Maybe<SaveBreak_Set_Input>;
  where: SaveBreak_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SaveBreak_By_PkArgs = {
  _set?: Maybe<SaveBreak_Set_Input>;
  pk_columns: SaveBreak_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SaveBreakerArgs = {
  _set?: Maybe<SaveBreaker_Set_Input>;
  where: SaveBreaker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SaveBreaker_By_PkArgs = {
  _set?: Maybe<SaveBreaker_Set_Input>;
  pk_columns: SaveBreaker_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SaveEventArgs = {
  _set?: Maybe<SaveEvent_Set_Input>;
  where: SaveEvent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SaveEvent_By_PkArgs = {
  _set?: Maybe<SaveEvent_Set_Input>;
  pk_columns: SaveEvent_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StreamsArgs = {
  _set?: Maybe<Streams_Set_Input>;
  where: Streams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Streams_By_PkArgs = {
  _set?: Maybe<Streams_Set_Input>;
  pk_columns: Streams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _inc?: Maybe<Teams_Inc_Input>;
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _inc?: Maybe<Teams_Inc_Input>;
  _set?: Maybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserPreferencesArgs = {
  _set?: Maybe<UserPreferences_Set_Input>;
  where: UserPreferences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserPreferences_By_PkArgs = {
  _set?: Maybe<UserPreferences_Set_Input>;
  pk_columns: UserPreferences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Break_ProductArgs = {
  _set?: Maybe<Break_Product_Set_Input>;
  where: Break_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Break_Product_By_PkArgs = {
  _set?: Maybe<Break_Product_Set_Input>;
  pk_columns: Break_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Break_StatusArgs = {
  _set?: Maybe<Break_Status_Set_Input>;
  where: Break_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Break_Status_By_PkArgs = {
  _set?: Maybe<Break_Status_Set_Input>;
  pk_columns: Break_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Break_TypeArgs = {
  _set?: Maybe<Break_Type_Set_Input>;
  where: Break_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Break_Type_By_PkArgs = {
  _set?: Maybe<Break_Type_Set_Input>;
  pk_columns: Break_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Dataset_TypeArgs = {
  _set?: Maybe<Dataset_Type_Set_Input>;
  where: Dataset_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dataset_Type_By_PkArgs = {
  _set?: Maybe<Dataset_Type_Set_Input>;
  pk_columns: Dataset_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DatasetsArgs = {
  _append?: Maybe<Datasets_Append_Input>;
  _delete_at_path?: Maybe<Datasets_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Datasets_Delete_Elem_Input>;
  _delete_key?: Maybe<Datasets_Delete_Key_Input>;
  _inc?: Maybe<Datasets_Inc_Input>;
  _prepend?: Maybe<Datasets_Prepend_Input>;
  _set?: Maybe<Datasets_Set_Input>;
  where: Datasets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Datasets_By_PkArgs = {
  _append?: Maybe<Datasets_Append_Input>;
  _delete_at_path?: Maybe<Datasets_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Datasets_Delete_Elem_Input>;
  _delete_key?: Maybe<Datasets_Delete_Key_Input>;
  _inc?: Maybe<Datasets_Inc_Input>;
  _prepend?: Maybe<Datasets_Prepend_Input>;
  _set?: Maybe<Datasets_Set_Input>;
  pk_columns: Datasets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_StatusArgs = {
  _set?: Maybe<Event_Status_Set_Input>;
  where: Event_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Status_By_PkArgs = {
  _set?: Maybe<Event_Status_Set_Input>;
  pk_columns: Event_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_In_ProcessArgs = {
  _set?: Maybe<Order_In_Process_Set_Input>;
  where: Order_In_Process_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_In_Process_By_PkArgs = {
  _set?: Maybe<Order_In_Process_Set_Input>;
  pk_columns: Order_In_Process_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Of_MeasureArgs = {
  _set?: Maybe<Unit_Of_Measure_Set_Input>;
  where: Unit_Of_Measure_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Unit_Of_Measure_By_PkArgs = {
  _set?: Maybe<Unit_Of_Measure_Set_Input>;
  pk_columns: Unit_Of_Measure_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_in_process" */
export type Order_In_Process = {
  __typename?: 'order_in_process';
  /** An object relationship */
  BreakProductItems?: Maybe<BreakProductItems>;
  product_id: Scalars['uuid'];
};

/** aggregated selection of "order_in_process" */
export type Order_In_Process_Aggregate = {
  __typename?: 'order_in_process_aggregate';
  aggregate?: Maybe<Order_In_Process_Aggregate_Fields>;
  nodes: Array<Order_In_Process>;
};

/** aggregate fields of "order_in_process" */
export type Order_In_Process_Aggregate_Fields = {
  __typename?: 'order_in_process_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_In_Process_Max_Fields>;
  min?: Maybe<Order_In_Process_Min_Fields>;
};


/** aggregate fields of "order_in_process" */
export type Order_In_Process_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_In_Process_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_in_process". All fields are combined with a logical 'AND'. */
export type Order_In_Process_Bool_Exp = {
  BreakProductItems?: Maybe<BreakProductItems_Bool_Exp>;
  _and?: Maybe<Array<Order_In_Process_Bool_Exp>>;
  _not?: Maybe<Order_In_Process_Bool_Exp>;
  _or?: Maybe<Array<Order_In_Process_Bool_Exp>>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_in_process" */
export enum Order_In_Process_Constraint {
  /** unique or primary key constraint */
  OrderInProcessPkey = 'order_in_process_pkey'
}

/** input type for inserting data into table "order_in_process" */
export type Order_In_Process_Insert_Input = {
  BreakProductItems?: Maybe<BreakProductItems_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Order_In_Process_Max_Fields = {
  __typename?: 'order_in_process_max_fields';
  product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Order_In_Process_Min_Fields = {
  __typename?: 'order_in_process_min_fields';
  product_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "order_in_process" */
export type Order_In_Process_Mutation_Response = {
  __typename?: 'order_in_process_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_In_Process>;
};

/** on_conflict condition type for table "order_in_process" */
export type Order_In_Process_On_Conflict = {
  constraint: Order_In_Process_Constraint;
  update_columns?: Array<Order_In_Process_Update_Column>;
  where?: Maybe<Order_In_Process_Bool_Exp>;
};

/** Ordering options when selecting data from "order_in_process". */
export type Order_In_Process_Order_By = {
  BreakProductItems?: Maybe<BreakProductItems_Order_By>;
  product_id?: Maybe<Order_By>;
};

/** primary key columns input for table: order_in_process */
export type Order_In_Process_Pk_Columns_Input = {
  product_id: Scalars['uuid'];
};

/** select columns of table "order_in_process" */
export enum Order_In_Process_Select_Column {
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "order_in_process" */
export type Order_In_Process_Set_Input = {
  product_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "order_in_process" */
export enum Order_In_Process_Update_Column {
  /** column name */
  ProductId = 'product_id'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  Addresses: Array<Addresses>;
  /** An aggregate relationship */
  Addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "Addresses" using primary key columns */
  Addresses_by_pk?: Maybe<Addresses>;
  /** An array relationship */
  BreakProductItems: Array<BreakProductItems>;
  /** An aggregate relationship */
  BreakProductItems_aggregate: BreakProductItems_Aggregate;
  /** fetch data from the table: "BreakProductItems" using primary key columns */
  BreakProductItems_by_pk?: Maybe<BreakProductItems>;
  /** fetch data from the table: "BreakerProfiles" */
  BreakerProfiles: Array<BreakerProfiles>;
  /** fetch aggregated fields from the table: "BreakerProfiles" */
  BreakerProfiles_aggregate: BreakerProfiles_Aggregate;
  /** fetch data from the table: "BreakerProfiles" using primary key columns */
  BreakerProfiles_by_pk?: Maybe<BreakerProfiles>;
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  /** fetch data from the table: "Breaks" using primary key columns */
  Breaks_by_pk?: Maybe<Breaks>;
  /** fetch data from the table: "Divisions" */
  Divisions: Array<Divisions>;
  /** fetch aggregated fields from the table: "Divisions" */
  Divisions_aggregate: Divisions_Aggregate;
  /** fetch data from the table: "Divisions" using primary key columns */
  Divisions_by_pk?: Maybe<Divisions>;
  /** An array relationship */
  Events: Array<Events>;
  /** An aggregate relationship */
  Events_aggregate: Events_Aggregate;
  /** fetch data from the table: "Events" using primary key columns */
  Events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "ExtensibleValues" */
  ExtensibleValues: Array<ExtensibleValues>;
  /** fetch aggregated fields from the table: "ExtensibleValues" */
  ExtensibleValues_aggregate: ExtensibleValues_Aggregate;
  /** fetch data from the table: "ExtensibleValues" using primary key columns */
  ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** An array relationship */
  Hits: Array<Hits>;
  /** An aggregate relationship */
  Hits_aggregate: Hits_Aggregate;
  /** fetch data from the table: "Hits" using primary key columns */
  Hits_by_pk?: Maybe<Hits>;
  /** An array relationship */
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "Inventory" using primary key columns */
  Inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "NotificationSettings" */
  NotificationSettings: Array<NotificationSettings>;
  /** fetch aggregated fields from the table: "NotificationSettings" */
  NotificationSettings_aggregate: NotificationSettings_Aggregate;
  /** fetch data from the table: "NotificationSettings" using primary key columns */
  NotificationSettings_by_pk?: Maybe<NotificationSettings>;
  /** fetch data from the table: "Notifications" */
  Notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "Notifications" */
  Notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "Notifications" using primary key columns */
  Notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  Orders: Array<Orders>;
  /** An aggregate relationship */
  Orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "Orders" using primary key columns */
  Orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "Players" */
  Players: Array<Players>;
  /** fetch aggregated fields from the table: "Players" */
  Players_aggregate: Players_Aggregate;
  /** fetch data from the table: "Players" using primary key columns */
  Players_by_pk?: Maybe<Players>;
  /** An array relationship */
  Products: Array<Products>;
  /** An aggregate relationship */
  Products_aggregate: Products_Aggregate;
  /** fetch data from the table: "Products" using primary key columns */
  Products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "SaveBreak" */
  SaveBreak: Array<SaveBreak>;
  /** fetch aggregated fields from the table: "SaveBreak" */
  SaveBreak_aggregate: SaveBreak_Aggregate;
  /** fetch data from the table: "SaveBreak" using primary key columns */
  SaveBreak_by_pk?: Maybe<SaveBreak>;
  /** fetch data from the table: "SaveBreaker" */
  SaveBreaker: Array<SaveBreaker>;
  /** fetch aggregated fields from the table: "SaveBreaker" */
  SaveBreaker_aggregate: SaveBreaker_Aggregate;
  /** fetch data from the table: "SaveBreaker" using primary key columns */
  SaveBreaker_by_pk?: Maybe<SaveBreaker>;
  /** fetch data from the table: "SaveEvent" */
  SaveEvent: Array<SaveEvent>;
  /** fetch aggregated fields from the table: "SaveEvent" */
  SaveEvent_aggregate: SaveEvent_Aggregate;
  /** fetch data from the table: "SaveEvent" using primary key columns */
  SaveEvent_by_pk?: Maybe<SaveEvent>;
  /** fetch data from the table: "Streams" */
  Streams: Array<Streams>;
  /** fetch aggregated fields from the table: "Streams" */
  Streams_aggregate: Streams_Aggregate;
  /** fetch data from the table: "Streams" using primary key columns */
  Streams_by_pk?: Maybe<Streams>;
  /** fetch data from the table: "Teams" */
  Teams: Array<Teams>;
  /** fetch aggregated fields from the table: "Teams" */
  Teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "Teams" using primary key columns */
  Teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "UserPreferences" */
  UserPreferences: Array<UserPreferences>;
  /** fetch aggregated fields from the table: "UserPreferences" */
  UserPreferences_aggregate: UserPreferences_Aggregate;
  /** fetch data from the table: "UserPreferences" using primary key columns */
  UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** An array relationship */
  Users: Array<Users>;
  /** An aggregate relationship */
  Users_aggregate: Users_Aggregate;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "break_product" */
  break_product: Array<Break_Product>;
  /** fetch aggregated fields from the table: "break_product" */
  break_product_aggregate: Break_Product_Aggregate;
  /** fetch data from the table: "break_product" using primary key columns */
  break_product_by_pk?: Maybe<Break_Product>;
  /** fetch data from the table: "break_status" */
  break_status: Array<Break_Status>;
  /** fetch aggregated fields from the table: "break_status" */
  break_status_aggregate: Break_Status_Aggregate;
  /** fetch data from the table: "break_status" using primary key columns */
  break_status_by_pk?: Maybe<Break_Status>;
  /** fetch data from the table: "break_type" */
  break_type: Array<Break_Type>;
  /** fetch aggregated fields from the table: "break_type" */
  break_type_aggregate: Break_Type_Aggregate;
  /** fetch data from the table: "break_type" using primary key columns */
  break_type_by_pk?: Maybe<Break_Type>;
  /** fetch data from the table: "dataset_type" */
  dataset_type: Array<Dataset_Type>;
  /** fetch aggregated fields from the table: "dataset_type" */
  dataset_type_aggregate: Dataset_Type_Aggregate;
  /** fetch data from the table: "dataset_type" using primary key columns */
  dataset_type_by_pk?: Maybe<Dataset_Type>;
  /** fetch data from the table: "datasets" */
  datasets: Array<Datasets>;
  /** fetch aggregated fields from the table: "datasets" */
  datasets_aggregate: Datasets_Aggregate;
  /** fetch data from the table: "datasets" using primary key columns */
  datasets_by_pk?: Maybe<Datasets>;
  /** fetch data from the table: "event_status" */
  event_status: Array<Event_Status>;
  /** fetch aggregated fields from the table: "event_status" */
  event_status_aggregate: Event_Status_Aggregate;
  /** fetch data from the table: "event_status" using primary key columns */
  event_status_by_pk?: Maybe<Event_Status>;
  /** fetch data from the table: "order_in_process" */
  order_in_process: Array<Order_In_Process>;
  /** fetch aggregated fields from the table: "order_in_process" */
  order_in_process_aggregate: Order_In_Process_Aggregate;
  /** fetch data from the table: "order_in_process" using primary key columns */
  order_in_process_by_pk?: Maybe<Order_In_Process>;
  /** fetch data from the table: "unit_of_measure" */
  unit_of_measure: Array<Unit_Of_Measure>;
  /** fetch aggregated fields from the table: "unit_of_measure" */
  unit_of_measure_aggregate: Unit_Of_Measure_Aggregate;
  /** fetch data from the table: "unit_of_measure" using primary key columns */
  unit_of_measure_by_pk?: Maybe<Unit_Of_Measure>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
};


export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBreakProductItemsArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


export type Query_RootBreakProductItems_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


export type Query_RootBreakProductItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBreakerProfilesArgs = {
  distinct_on?: Maybe<Array<BreakerProfiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakerProfiles_Order_By>>;
  where?: Maybe<BreakerProfiles_Bool_Exp>;
};


export type Query_RootBreakerProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakerProfiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakerProfiles_Order_By>>;
  where?: Maybe<BreakerProfiles_Bool_Exp>;
};


export type Query_RootBreakerProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBreaksArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


export type Query_RootBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


export type Query_RootBreaks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDivisionsArgs = {
  distinct_on?: Maybe<Array<Divisions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Divisions_Order_By>>;
  where?: Maybe<Divisions_Bool_Exp>;
};


export type Query_RootDivisions_AggregateArgs = {
  distinct_on?: Maybe<Array<Divisions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Divisions_Order_By>>;
  where?: Maybe<Divisions_Bool_Exp>;
};


export type Query_RootDivisions_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
};


export type Query_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootExtensibleValuesArgs = {
  distinct_on?: Maybe<Array<ExtensibleValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExtensibleValues_Order_By>>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};


export type Query_RootExtensibleValues_AggregateArgs = {
  distinct_on?: Maybe<Array<ExtensibleValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExtensibleValues_Order_By>>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};


export type Query_RootExtensibleValues_By_PkArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type Query_RootHitsArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


export type Query_RootHits_AggregateArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


export type Query_RootHits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationSettingsArgs = {
  distinct_on?: Maybe<Array<NotificationSettings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NotificationSettings_Order_By>>;
  where?: Maybe<NotificationSettings_Bool_Exp>;
};


export type Query_RootNotificationSettings_AggregateArgs = {
  distinct_on?: Maybe<Array<NotificationSettings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NotificationSettings_Order_By>>;
  where?: Maybe<NotificationSettings_Bool_Exp>;
};


export type Query_RootNotificationSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPlayersArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSaveBreakArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


export type Query_RootSaveBreak_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


export type Query_RootSaveBreak_By_PkArgs = {
  break_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Query_RootSaveBreakerArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


export type Query_RootSaveBreaker_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


export type Query_RootSaveBreaker_By_PkArgs = {
  breaker_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootSaveEventArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


export type Query_RootSaveEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


export type Query_RootSaveEvent_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Query_RootStreamsArgs = {
  distinct_on?: Maybe<Array<Streams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streams_Order_By>>;
  where?: Maybe<Streams_Bool_Exp>;
};


export type Query_RootStreams_AggregateArgs = {
  distinct_on?: Maybe<Array<Streams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streams_Order_By>>;
  where?: Maybe<Streams_Bool_Exp>;
};


export type Query_RootStreams_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
  start_year: Scalars['smallint'];
};


export type Query_RootUserPreferencesArgs = {
  distinct_on?: Maybe<Array<UserPreferences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPreferences_Order_By>>;
  where?: Maybe<UserPreferences_Bool_Exp>;
};


export type Query_RootUserPreferences_AggregateArgs = {
  distinct_on?: Maybe<Array<UserPreferences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPreferences_Order_By>>;
  where?: Maybe<UserPreferences_Bool_Exp>;
};


export type Query_RootUserPreferences_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBreak_ProductArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


export type Query_RootBreak_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


export type Query_RootBreak_Product_By_PkArgs = {
  break_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


export type Query_RootBreak_StatusArgs = {
  distinct_on?: Maybe<Array<Break_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Status_Order_By>>;
  where?: Maybe<Break_Status_Bool_Exp>;
};


export type Query_RootBreak_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Status_Order_By>>;
  where?: Maybe<Break_Status_Bool_Exp>;
};


export type Query_RootBreak_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootBreak_TypeArgs = {
  distinct_on?: Maybe<Array<Break_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Type_Order_By>>;
  where?: Maybe<Break_Type_Bool_Exp>;
};


export type Query_RootBreak_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Type_Order_By>>;
  where?: Maybe<Break_Type_Bool_Exp>;
};


export type Query_RootBreak_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDataset_TypeArgs = {
  distinct_on?: Maybe<Array<Dataset_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dataset_Type_Order_By>>;
  where?: Maybe<Dataset_Type_Bool_Exp>;
};


export type Query_RootDataset_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Dataset_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dataset_Type_Order_By>>;
  where?: Maybe<Dataset_Type_Bool_Exp>;
};


export type Query_RootDataset_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDatasetsArgs = {
  distinct_on?: Maybe<Array<Datasets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Datasets_Order_By>>;
  where?: Maybe<Datasets_Bool_Exp>;
};


export type Query_RootDatasets_AggregateArgs = {
  distinct_on?: Maybe<Array<Datasets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Datasets_Order_By>>;
  where?: Maybe<Datasets_Bool_Exp>;
};


export type Query_RootDatasets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEvent_StatusArgs = {
  distinct_on?: Maybe<Array<Event_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Status_Order_By>>;
  where?: Maybe<Event_Status_Bool_Exp>;
};


export type Query_RootEvent_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Status_Order_By>>;
  where?: Maybe<Event_Status_Bool_Exp>;
};


export type Query_RootEvent_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootOrder_In_ProcessArgs = {
  distinct_on?: Maybe<Array<Order_In_Process_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_In_Process_Order_By>>;
  where?: Maybe<Order_In_Process_Bool_Exp>;
};


export type Query_RootOrder_In_Process_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_In_Process_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_In_Process_Order_By>>;
  where?: Maybe<Order_In_Process_Bool_Exp>;
};


export type Query_RootOrder_In_Process_By_PkArgs = {
  product_id: Scalars['uuid'];
};


export type Query_RootUnit_Of_MeasureArgs = {
  distinct_on?: Maybe<Array<Unit_Of_Measure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Of_Measure_Order_By>>;
  where?: Maybe<Unit_Of_Measure_Bool_Exp>;
};


export type Query_RootUnit_Of_Measure_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Of_Measure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Of_Measure_Order_By>>;
  where?: Maybe<Unit_Of_Measure_Bool_Exp>;
};


export type Query_RootUnit_Of_Measure_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  Addresses: Array<Addresses>;
  /** An aggregate relationship */
  Addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "Addresses" using primary key columns */
  Addresses_by_pk?: Maybe<Addresses>;
  /** An array relationship */
  BreakProductItems: Array<BreakProductItems>;
  /** An aggregate relationship */
  BreakProductItems_aggregate: BreakProductItems_Aggregate;
  /** fetch data from the table: "BreakProductItems" using primary key columns */
  BreakProductItems_by_pk?: Maybe<BreakProductItems>;
  /** fetch data from the table: "BreakerProfiles" */
  BreakerProfiles: Array<BreakerProfiles>;
  /** fetch aggregated fields from the table: "BreakerProfiles" */
  BreakerProfiles_aggregate: BreakerProfiles_Aggregate;
  /** fetch data from the table: "BreakerProfiles" using primary key columns */
  BreakerProfiles_by_pk?: Maybe<BreakerProfiles>;
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  /** fetch data from the table: "Breaks" using primary key columns */
  Breaks_by_pk?: Maybe<Breaks>;
  /** fetch data from the table: "Divisions" */
  Divisions: Array<Divisions>;
  /** fetch aggregated fields from the table: "Divisions" */
  Divisions_aggregate: Divisions_Aggregate;
  /** fetch data from the table: "Divisions" using primary key columns */
  Divisions_by_pk?: Maybe<Divisions>;
  /** An array relationship */
  Events: Array<Events>;
  /** An aggregate relationship */
  Events_aggregate: Events_Aggregate;
  /** fetch data from the table: "Events" using primary key columns */
  Events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "ExtensibleValues" */
  ExtensibleValues: Array<ExtensibleValues>;
  /** fetch aggregated fields from the table: "ExtensibleValues" */
  ExtensibleValues_aggregate: ExtensibleValues_Aggregate;
  /** fetch data from the table: "ExtensibleValues" using primary key columns */
  ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** An array relationship */
  Hits: Array<Hits>;
  /** An aggregate relationship */
  Hits_aggregate: Hits_Aggregate;
  /** fetch data from the table: "Hits" using primary key columns */
  Hits_by_pk?: Maybe<Hits>;
  /** An array relationship */
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "Inventory" using primary key columns */
  Inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "NotificationSettings" */
  NotificationSettings: Array<NotificationSettings>;
  /** fetch aggregated fields from the table: "NotificationSettings" */
  NotificationSettings_aggregate: NotificationSettings_Aggregate;
  /** fetch data from the table: "NotificationSettings" using primary key columns */
  NotificationSettings_by_pk?: Maybe<NotificationSettings>;
  /** fetch data from the table: "Notifications" */
  Notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "Notifications" */
  Notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "Notifications" using primary key columns */
  Notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  Orders: Array<Orders>;
  /** An aggregate relationship */
  Orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "Orders" using primary key columns */
  Orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "Players" */
  Players: Array<Players>;
  /** fetch aggregated fields from the table: "Players" */
  Players_aggregate: Players_Aggregate;
  /** fetch data from the table: "Players" using primary key columns */
  Players_by_pk?: Maybe<Players>;
  /** An array relationship */
  Products: Array<Products>;
  /** An aggregate relationship */
  Products_aggregate: Products_Aggregate;
  /** fetch data from the table: "Products" using primary key columns */
  Products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "SaveBreak" */
  SaveBreak: Array<SaveBreak>;
  /** fetch aggregated fields from the table: "SaveBreak" */
  SaveBreak_aggregate: SaveBreak_Aggregate;
  /** fetch data from the table: "SaveBreak" using primary key columns */
  SaveBreak_by_pk?: Maybe<SaveBreak>;
  /** fetch data from the table: "SaveBreaker" */
  SaveBreaker: Array<SaveBreaker>;
  /** fetch aggregated fields from the table: "SaveBreaker" */
  SaveBreaker_aggregate: SaveBreaker_Aggregate;
  /** fetch data from the table: "SaveBreaker" using primary key columns */
  SaveBreaker_by_pk?: Maybe<SaveBreaker>;
  /** fetch data from the table: "SaveEvent" */
  SaveEvent: Array<SaveEvent>;
  /** fetch aggregated fields from the table: "SaveEvent" */
  SaveEvent_aggregate: SaveEvent_Aggregate;
  /** fetch data from the table: "SaveEvent" using primary key columns */
  SaveEvent_by_pk?: Maybe<SaveEvent>;
  /** fetch data from the table: "Streams" */
  Streams: Array<Streams>;
  /** fetch aggregated fields from the table: "Streams" */
  Streams_aggregate: Streams_Aggregate;
  /** fetch data from the table: "Streams" using primary key columns */
  Streams_by_pk?: Maybe<Streams>;
  /** fetch data from the table: "Teams" */
  Teams: Array<Teams>;
  /** fetch aggregated fields from the table: "Teams" */
  Teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "Teams" using primary key columns */
  Teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "UserPreferences" */
  UserPreferences: Array<UserPreferences>;
  /** fetch aggregated fields from the table: "UserPreferences" */
  UserPreferences_aggregate: UserPreferences_Aggregate;
  /** fetch data from the table: "UserPreferences" using primary key columns */
  UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** An array relationship */
  Users: Array<Users>;
  /** An aggregate relationship */
  Users_aggregate: Users_Aggregate;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "break_product" */
  break_product: Array<Break_Product>;
  /** fetch aggregated fields from the table: "break_product" */
  break_product_aggregate: Break_Product_Aggregate;
  /** fetch data from the table: "break_product" using primary key columns */
  break_product_by_pk?: Maybe<Break_Product>;
  /** fetch data from the table: "break_status" */
  break_status: Array<Break_Status>;
  /** fetch aggregated fields from the table: "break_status" */
  break_status_aggregate: Break_Status_Aggregate;
  /** fetch data from the table: "break_status" using primary key columns */
  break_status_by_pk?: Maybe<Break_Status>;
  /** fetch data from the table: "break_type" */
  break_type: Array<Break_Type>;
  /** fetch aggregated fields from the table: "break_type" */
  break_type_aggregate: Break_Type_Aggregate;
  /** fetch data from the table: "break_type" using primary key columns */
  break_type_by_pk?: Maybe<Break_Type>;
  /** fetch data from the table: "dataset_type" */
  dataset_type: Array<Dataset_Type>;
  /** fetch aggregated fields from the table: "dataset_type" */
  dataset_type_aggregate: Dataset_Type_Aggregate;
  /** fetch data from the table: "dataset_type" using primary key columns */
  dataset_type_by_pk?: Maybe<Dataset_Type>;
  /** fetch data from the table: "datasets" */
  datasets: Array<Datasets>;
  /** fetch aggregated fields from the table: "datasets" */
  datasets_aggregate: Datasets_Aggregate;
  /** fetch data from the table: "datasets" using primary key columns */
  datasets_by_pk?: Maybe<Datasets>;
  /** fetch data from the table: "event_status" */
  event_status: Array<Event_Status>;
  /** fetch aggregated fields from the table: "event_status" */
  event_status_aggregate: Event_Status_Aggregate;
  /** fetch data from the table: "event_status" using primary key columns */
  event_status_by_pk?: Maybe<Event_Status>;
  /** fetch data from the table: "order_in_process" */
  order_in_process: Array<Order_In_Process>;
  /** fetch aggregated fields from the table: "order_in_process" */
  order_in_process_aggregate: Order_In_Process_Aggregate;
  /** fetch data from the table: "order_in_process" using primary key columns */
  order_in_process_by_pk?: Maybe<Order_In_Process>;
  /** fetch data from the table: "unit_of_measure" */
  unit_of_measure: Array<Unit_Of_Measure>;
  /** fetch aggregated fields from the table: "unit_of_measure" */
  unit_of_measure_aggregate: Unit_Of_Measure_Aggregate;
  /** fetch data from the table: "unit_of_measure" using primary key columns */
  unit_of_measure_by_pk?: Maybe<Unit_Of_Measure>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBreakProductItemsArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


export type Subscription_RootBreakProductItems_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakProductItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakProductItems_Order_By>>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};


export type Subscription_RootBreakProductItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBreakerProfilesArgs = {
  distinct_on?: Maybe<Array<BreakerProfiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakerProfiles_Order_By>>;
  where?: Maybe<BreakerProfiles_Bool_Exp>;
};


export type Subscription_RootBreakerProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<BreakerProfiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<BreakerProfiles_Order_By>>;
  where?: Maybe<BreakerProfiles_Bool_Exp>;
};


export type Subscription_RootBreakerProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBreaksArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


export type Subscription_RootBreaks_AggregateArgs = {
  distinct_on?: Maybe<Array<Breaks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Breaks_Order_By>>;
  where?: Maybe<Breaks_Bool_Exp>;
};


export type Subscription_RootBreaks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDivisionsArgs = {
  distinct_on?: Maybe<Array<Divisions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Divisions_Order_By>>;
  where?: Maybe<Divisions_Bool_Exp>;
};


export type Subscription_RootDivisions_AggregateArgs = {
  distinct_on?: Maybe<Array<Divisions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Divisions_Order_By>>;
  where?: Maybe<Divisions_Bool_Exp>;
};


export type Subscription_RootDivisions_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
};


export type Subscription_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootExtensibleValuesArgs = {
  distinct_on?: Maybe<Array<ExtensibleValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExtensibleValues_Order_By>>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};


export type Subscription_RootExtensibleValues_AggregateArgs = {
  distinct_on?: Maybe<Array<ExtensibleValues_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ExtensibleValues_Order_By>>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};


export type Subscription_RootExtensibleValues_By_PkArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type Subscription_RootHitsArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


export type Subscription_RootHits_AggregateArgs = {
  distinct_on?: Maybe<Array<Hits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Hits_Order_By>>;
  where?: Maybe<Hits_Bool_Exp>;
};


export type Subscription_RootHits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotificationSettingsArgs = {
  distinct_on?: Maybe<Array<NotificationSettings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NotificationSettings_Order_By>>;
  where?: Maybe<NotificationSettings_Bool_Exp>;
};


export type Subscription_RootNotificationSettings_AggregateArgs = {
  distinct_on?: Maybe<Array<NotificationSettings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<NotificationSettings_Order_By>>;
  where?: Maybe<NotificationSettings_Bool_Exp>;
};


export type Subscription_RootNotificationSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notifications_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notifications_Order_By>>;
  where?: Maybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPlayersArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Players_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Players_Order_By>>;
  where?: Maybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSaveBreakArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


export type Subscription_RootSaveBreak_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreak_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreak_Order_By>>;
  where?: Maybe<SaveBreak_Bool_Exp>;
};


export type Subscription_RootSaveBreak_By_PkArgs = {
  break_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Subscription_RootSaveBreakerArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


export type Subscription_RootSaveBreaker_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveBreaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveBreaker_Order_By>>;
  where?: Maybe<SaveBreaker_Bool_Exp>;
};


export type Subscription_RootSaveBreaker_By_PkArgs = {
  breaker_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootSaveEventArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


export type Subscription_RootSaveEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<SaveEvent_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SaveEvent_Order_By>>;
  where?: Maybe<SaveEvent_Bool_Exp>;
};


export type Subscription_RootSaveEvent_By_PkArgs = {
  event_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Subscription_RootStreamsArgs = {
  distinct_on?: Maybe<Array<Streams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streams_Order_By>>;
  where?: Maybe<Streams_Bool_Exp>;
};


export type Subscription_RootStreams_AggregateArgs = {
  distinct_on?: Maybe<Array<Streams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Streams_Order_By>>;
  where?: Maybe<Streams_Bool_Exp>;
};


export type Subscription_RootStreams_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_By_PkArgs = {
  short_code: Scalars['String'];
  sport: Scalars['String'];
  start_year: Scalars['smallint'];
};


export type Subscription_RootUserPreferencesArgs = {
  distinct_on?: Maybe<Array<UserPreferences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPreferences_Order_By>>;
  where?: Maybe<UserPreferences_Bool_Exp>;
};


export type Subscription_RootUserPreferences_AggregateArgs = {
  distinct_on?: Maybe<Array<UserPreferences_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserPreferences_Order_By>>;
  where?: Maybe<UserPreferences_Bool_Exp>;
};


export type Subscription_RootUserPreferences_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBreak_ProductArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


export type Subscription_RootBreak_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Product_Order_By>>;
  where?: Maybe<Break_Product_Bool_Exp>;
};


export type Subscription_RootBreak_Product_By_PkArgs = {
  break_id: Scalars['uuid'];
  product_id: Scalars['uuid'];
};


export type Subscription_RootBreak_StatusArgs = {
  distinct_on?: Maybe<Array<Break_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Status_Order_By>>;
  where?: Maybe<Break_Status_Bool_Exp>;
};


export type Subscription_RootBreak_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Status_Order_By>>;
  where?: Maybe<Break_Status_Bool_Exp>;
};


export type Subscription_RootBreak_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootBreak_TypeArgs = {
  distinct_on?: Maybe<Array<Break_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Type_Order_By>>;
  where?: Maybe<Break_Type_Bool_Exp>;
};


export type Subscription_RootBreak_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Break_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Break_Type_Order_By>>;
  where?: Maybe<Break_Type_Bool_Exp>;
};


export type Subscription_RootBreak_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDataset_TypeArgs = {
  distinct_on?: Maybe<Array<Dataset_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dataset_Type_Order_By>>;
  where?: Maybe<Dataset_Type_Bool_Exp>;
};


export type Subscription_RootDataset_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Dataset_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dataset_Type_Order_By>>;
  where?: Maybe<Dataset_Type_Bool_Exp>;
};


export type Subscription_RootDataset_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDatasetsArgs = {
  distinct_on?: Maybe<Array<Datasets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Datasets_Order_By>>;
  where?: Maybe<Datasets_Bool_Exp>;
};


export type Subscription_RootDatasets_AggregateArgs = {
  distinct_on?: Maybe<Array<Datasets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Datasets_Order_By>>;
  where?: Maybe<Datasets_Bool_Exp>;
};


export type Subscription_RootDatasets_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEvent_StatusArgs = {
  distinct_on?: Maybe<Array<Event_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Status_Order_By>>;
  where?: Maybe<Event_Status_Bool_Exp>;
};


export type Subscription_RootEvent_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Status_Order_By>>;
  where?: Maybe<Event_Status_Bool_Exp>;
};


export type Subscription_RootEvent_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootOrder_In_ProcessArgs = {
  distinct_on?: Maybe<Array<Order_In_Process_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_In_Process_Order_By>>;
  where?: Maybe<Order_In_Process_Bool_Exp>;
};


export type Subscription_RootOrder_In_Process_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_In_Process_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_In_Process_Order_By>>;
  where?: Maybe<Order_In_Process_Bool_Exp>;
};


export type Subscription_RootOrder_In_Process_By_PkArgs = {
  product_id: Scalars['uuid'];
};


export type Subscription_RootUnit_Of_MeasureArgs = {
  distinct_on?: Maybe<Array<Unit_Of_Measure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Of_Measure_Order_By>>;
  where?: Maybe<Unit_Of_Measure_Bool_Exp>;
};


export type Subscription_RootUnit_Of_Measure_AggregateArgs = {
  distinct_on?: Maybe<Array<Unit_Of_Measure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unit_Of_Measure_Order_By>>;
  where?: Maybe<Unit_Of_Measure_Bool_Exp>;
};


export type Subscription_RootUnit_Of_Measure_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "unit_of_measure" */
export type Unit_Of_Measure = {
  __typename?: 'unit_of_measure';
  /** An array relationship */
  Products: Array<Products>;
  /** An aggregate relationship */
  Products_aggregate: Products_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "unit_of_measure" */
export type Unit_Of_MeasureProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** columns and relationships of "unit_of_measure" */
export type Unit_Of_MeasureProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};

/** aggregated selection of "unit_of_measure" */
export type Unit_Of_Measure_Aggregate = {
  __typename?: 'unit_of_measure_aggregate';
  aggregate?: Maybe<Unit_Of_Measure_Aggregate_Fields>;
  nodes: Array<Unit_Of_Measure>;
};

/** aggregate fields of "unit_of_measure" */
export type Unit_Of_Measure_Aggregate_Fields = {
  __typename?: 'unit_of_measure_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Unit_Of_Measure_Max_Fields>;
  min?: Maybe<Unit_Of_Measure_Min_Fields>;
};


/** aggregate fields of "unit_of_measure" */
export type Unit_Of_Measure_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unit_Of_Measure_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "unit_of_measure". All fields are combined with a logical 'AND'. */
export type Unit_Of_Measure_Bool_Exp = {
  Products?: Maybe<Products_Bool_Exp>;
  _and?: Maybe<Array<Unit_Of_Measure_Bool_Exp>>;
  _not?: Maybe<Unit_Of_Measure_Bool_Exp>;
  _or?: Maybe<Array<Unit_Of_Measure_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit_of_measure" */
export enum Unit_Of_Measure_Constraint {
  /** unique or primary key constraint */
  UnitOfMeasurePkey = 'unit_of_measure_pkey'
}

export enum Unit_Of_Measure_Enum {
  Box = 'BOX',
  Card = 'CARD',
  Case = 'CASE',
  Pack = 'PACK'
}

/** Boolean expression to compare columns of type "unit_of_measure_enum". All fields are combined with logical 'AND'. */
export type Unit_Of_Measure_Enum_Comparison_Exp = {
  _eq?: Maybe<Unit_Of_Measure_Enum>;
  _in?: Maybe<Array<Unit_Of_Measure_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Unit_Of_Measure_Enum>;
  _nin?: Maybe<Array<Unit_Of_Measure_Enum>>;
};

/** input type for inserting data into table "unit_of_measure" */
export type Unit_Of_Measure_Insert_Input = {
  Products?: Maybe<Products_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Unit_Of_Measure_Max_Fields = {
  __typename?: 'unit_of_measure_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Unit_Of_Measure_Min_Fields = {
  __typename?: 'unit_of_measure_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "unit_of_measure" */
export type Unit_Of_Measure_Mutation_Response = {
  __typename?: 'unit_of_measure_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Unit_Of_Measure>;
};

/** input type for inserting object relation for remote table "unit_of_measure" */
export type Unit_Of_Measure_Obj_Rel_Insert_Input = {
  data: Unit_Of_Measure_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Unit_Of_Measure_On_Conflict>;
};

/** on_conflict condition type for table "unit_of_measure" */
export type Unit_Of_Measure_On_Conflict = {
  constraint: Unit_Of_Measure_Constraint;
  update_columns?: Array<Unit_Of_Measure_Update_Column>;
  where?: Maybe<Unit_Of_Measure_Bool_Exp>;
};

/** Ordering options when selecting data from "unit_of_measure". */
export type Unit_Of_Measure_Order_By = {
  Products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: unit_of_measure */
export type Unit_Of_Measure_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "unit_of_measure" */
export enum Unit_Of_Measure_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "unit_of_measure" */
export type Unit_Of_Measure_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "unit_of_measure" */
export enum Unit_Of_Measure_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  /** An array relationship */
  Users: Array<Users>;
  /** An aggregate relationship */
  Users_aggregate: Users_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "user_role" */
export type User_RoleUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "user_role" */
export type User_RoleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  Users?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<User_Role_Bool_Exp>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<User_Role_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

export enum User_Role_Enum {
  Admin = 'ADMIN',
  Breaker = 'BREAKER',
  Manager = 'MANAGER',
  User = 'USER'
}

/** Boolean expression to compare columns of type "user_role_enum". All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Role_Enum>;
  _in?: Maybe<Array<User_Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Role_Enum>;
  _nin?: Maybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  Users?: Maybe<Users_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  Users_aggregate?: Maybe<Users_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Value = 'value'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertEventMutationVariables = Exact<{
  data: Events_Insert_Input;
}>;


export type InsertEventMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Events_one?: Maybe<(
    { __typename?: 'Events' }
    & Pick<Events, 'id'>
  )> }
);

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Events_Set_Input;
}>;


export type UpdateEventMutation = (
  { __typename?: 'mutation_root' }
  & { update_Events_by_pk?: Maybe<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'description' | 'image' | 'user_id' | 'title' | 'start_time'>
  )> }
);

export type ArchiveEventsAndBreaksByEventIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ArchiveEventsAndBreaksByEventIdsMutation = (
  { __typename?: 'mutation_root' }
  & { update_Events?: Maybe<(
    { __typename?: 'Events_mutation_response' }
    & Pick<Events_Mutation_Response, 'affected_rows'>
  )>, update_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & Pick<Breaks_Mutation_Response, 'affected_rows'>
  )>, update_Inventory?: Maybe<(
    { __typename?: 'Inventory_mutation_response' }
    & Pick<Inventory_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertBreakMutationVariables = Exact<{
  data: Array<Breaks_Insert_Input> | Breaks_Insert_Input;
}>;


export type InsertBreakMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'event_id' | 'title' | 'description' | 'spots' | 'teams_per_spot' | 'break_type' | 'price' | 'image'>
    )> }
  )> }
);

export type UpdateBreakMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Breaks_Set_Input;
}>;


export type UpdateBreakMutation = (
  { __typename?: 'mutation_root' }
  & { update_Breaks_by_pk?: Maybe<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id'>
  )> }
);

export type FullBreakUpdateMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Array<Breaks_Insert_Input> | Breaks_Insert_Input;
}>;


export type FullBreakUpdateMutation = (
  { __typename?: 'mutation_root' }
  & { delete_break_product?: Maybe<(
    { __typename?: 'break_product_mutation_response' }
    & Pick<Break_Product_Mutation_Response, 'affected_rows'>
  )>, insert_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'event_id' | 'title' | 'description' | 'spots' | 'teams_per_spot' | 'break_type' | 'price' | 'image'>
    )> }
  )> }
);

export type ArchiveBreaksByIdMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ArchiveBreaksByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_Inventory?: Maybe<(
    { __typename?: 'Inventory_mutation_response' }
    & Pick<Inventory_Mutation_Response, 'affected_rows'>
  )>, update_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & Pick<Breaks_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertProductMutationVariables = Exact<{
  data: Products_Insert_Input;
}>;


export type InsertProductMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Products_one?: Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'year' | 'category'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Products_Set_Input;
}>;


export type UpdateProductMutation = (
  { __typename?: 'mutation_root' }
  & { update_Products_by_pk?: Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'year' | 'category'>
  )> }
);

export type DeleteProductsByIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type DeleteProductsByIdsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Products?: Maybe<(
    { __typename?: 'Products_mutation_response' }
    & Pick<Products_Mutation_Response, 'affected_rows'>
  )> }
);

export type ArchiveProductsByIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ArchiveProductsByIdsMutation = (
  { __typename?: 'mutation_root' }
  & { update_Products?: Maybe<(
    { __typename?: 'Products_mutation_response' }
    & Pick<Products_Mutation_Response, 'affected_rows'>
  )> }
);

export type UnarchiveProductsByIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type UnarchiveProductsByIdsMutation = (
  { __typename?: 'mutation_root' }
  & { update_Products?: Maybe<(
    { __typename?: 'Products_mutation_response' }
    & Pick<Products_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertDatasetMutationVariables = Exact<{
  data: Datasets_Insert_Input;
}>;


export type InsertDatasetMutation = (
  { __typename?: 'mutation_root' }
  & { insert_datasets_one?: Maybe<(
    { __typename?: 'datasets' }
    & Pick<Datasets, 'id'>
  )> }
);

export type InsertExtensibleValuesMutationVariables = Exact<{
  data: Array<ExtensibleValues_Insert_Input> | ExtensibleValues_Insert_Input;
}>;


export type InsertExtensibleValuesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_ExtensibleValues?: Maybe<(
    { __typename?: 'ExtensibleValues_mutation_response' }
    & Pick<ExtensibleValues_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertHitMutationVariables = Exact<{
  data: Hits_Insert_Input;
}>;


export type InsertHitMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Hits_one?: Maybe<(
    { __typename?: 'Hits' }
    & Pick<Hits, 'id'>
  )> }
);

export type UpdateHitMutationVariables = Exact<{
  id: Scalars['uuid'];
  data: Hits_Set_Input;
}>;


export type UpdateHitMutation = (
  { __typename?: 'mutation_root' }
  & { update_Hits_by_pk?: Maybe<(
    { __typename?: 'Hits' }
    & Pick<Hits, 'id' | 'user_id' | 'player' | 'published'>
  )> }
);

export type ArchiveHitsByIdMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ArchiveHitsByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_Hits?: Maybe<(
    { __typename?: 'Hits_mutation_response' }
    & Pick<Hits_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateBreakerProfileMutationVariables = Exact<{
  id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  image: Scalars['String'];
  profile: BreakerProfiles_Insert_Input;
}>;


export type UpdateBreakerProfileMutation = (
  { __typename?: 'mutation_root' }
  & { update_Users_by_pk?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'first_name' | 'last_name' | 'image'>
  )>, insert_BreakerProfiles_one?: Maybe<(
    { __typename?: 'BreakerProfiles' }
    & Pick<BreakerProfiles, 'id'>
  )> }
);

export type GetProductIitemsWithOrderIdByBreakIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetProductIitemsWithOrderIdByBreakIdQuery = (
  { __typename?: 'query_root' }
  & { BreakProductItems: Array<(
    { __typename?: 'BreakProductItems' }
    & Pick<BreakProductItems, 'id'>
  )> }
);

export type GetProductsQueryVariables = Exact<{
  unitOfMeasure?: Maybe<Array<Unit_Of_Measure_Enum> | Unit_Of_Measure_Enum>;
  input?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'query_root' }
  & { Products: Array<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'unit_of_measure' | 'description' | 'year' | 'manufacturer' | 'brand' | 'series' | 'category' | 'subcategory' | 'type' | 'boxes_per_case' | 'packs_per_box' | 'cards_per_pack' | 'card_number' | 'player' | 'parallel' | 'insert' | 'rookie_card' | 'memorabilia' | 'autograph' | 'numbered' | 'grader' | 'grade' | 'available'>
    & { break_products: Array<(
      { __typename?: 'break_product' }
      & { Break: (
        { __typename?: 'Breaks' }
        & Pick<Breaks, 'id'>
      ) }
    )> }
  )> }
);

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetProductByIdQuery = (
  { __typename?: 'query_root' }
  & { Products_by_pk?: Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'unit_of_measure' | 'description' | 'year' | 'manufacturer' | 'brand' | 'series' | 'category' | 'subcategory' | 'type' | 'boxes_per_case' | 'packs_per_box' | 'cards_per_pack' | 'card_number' | 'player' | 'parallel' | 'insert' | 'rookie_card' | 'memorabilia' | 'autograph' | 'numbered' | 'grader' | 'grade' | 'available'>
    & { break_products: Array<(
      { __typename?: 'break_product' }
      & { Break: (
        { __typename?: 'Breaks' }
        & Pick<Breaks, 'id' | 'title'>
      ) }
    )> }
  )> }
);

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = (
  { __typename?: 'query_root' }
  & { Events: Array<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title' | 'start_time' | 'description' | 'status' | 'image' | 'video_url'>
    & { User: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'first_name' | 'last_name'>
    ), Breaks: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id'>
    )>, Breaks_aggregate: (
      { __typename?: 'Breaks_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Breaks_aggregate_fields' }
        & Pick<Breaks_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type GetLiveEventByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetLiveEventByIdQuery = (
  { __typename?: 'query_root' }
  & { Events_by_pk?: Maybe<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title' | 'start_time' | 'description' | 'status' | 'image'>
    & { User: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'first_name' | 'last_name'>
    ), Breaks: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'title' | 'break_type' | 'price' | 'spots' | 'description' | 'teams_per_spot' | 'image' | 'line_items' | 'status' | 'result'>
      & { BreakProductItems_aggregate: (
        { __typename?: 'BreakProductItems_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'BreakProductItems_aggregate_fields' }
          & Pick<BreakProductItems_Aggregate_Fields, 'count'>
        )> }
      ), BreakProductItems: Array<(
        { __typename?: 'BreakProductItems' }
        & Pick<BreakProductItems, 'title'>
        & { Order?: Maybe<(
          { __typename?: 'Orders' }
          & { User: (
            { __typename?: 'Users' }
            & Pick<Users, 'username'>
          ) }
        )> }
      )> }
    )> }
  )> }
);

export type SearchEventsQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchEventsQuery = (
  { __typename?: 'query_root' }
  & { Events: Array<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title'>
  )> }
);

export type GetBreakByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBreakByIdQuery = (
  { __typename?: 'query_root' }
  & { Breaks_by_pk?: Maybe<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'image' | 'break_type' | 'description' | 'price' | 'spots' | 'status' | 'teams_per_spot' | 'title' | 'dataset' | 'line_items'>
    & { datasets?: Maybe<(
      { __typename?: 'datasets' }
      & Pick<Datasets, 'data'>
    )>, Event: (
      { __typename?: 'Events' }
      & Pick<Events, 'id' | 'title' | 'start_time' | 'description'>
      & { User: (
        { __typename?: 'Users' }
        & Pick<Users, 'id' | 'first_name' | 'last_name'>
      ) }
    ), break_products: Array<(
      { __typename?: 'break_product' }
      & { Product: (
        { __typename?: 'Products' }
        & Pick<Products, 'id' | 'description'>
      ) }
    )>, BreakProductItems: Array<(
      { __typename?: 'BreakProductItems' }
      & Pick<BreakProductItems, 'id' | 'title' | 'price' | 'bc_product_id'>
      & { Order?: Maybe<(
        { __typename?: 'Orders' }
        & Pick<Orders, 'id'>
        & { User: (
          { __typename?: 'Users' }
          & Pick<Users, 'id' | 'username'>
        ) }
      )> }
    )> }
  )> }
);

export type GetBreakDataQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBreakDataQuery = (
  { __typename?: 'query_root' }
  & { Breaks_by_pk?: Maybe<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'break_type' | 'result'>
    & { BreakProductItems: Array<(
      { __typename?: 'BreakProductItems' }
      & { Order?: Maybe<(
        { __typename?: 'Orders' }
        & { User: (
          { __typename?: 'Users' }
          & Pick<Users, 'id' | 'username'>
        ) }
      )> }
    )>, break_products: Array<(
      { __typename?: 'break_product' }
      & { Product: (
        { __typename?: 'Products' }
        & Pick<Products, 'id' | 'description' | 'year' | 'category' | 'manufacturer' | 'brand'>
      ) }
    )> }
  )> }
);

export type SearchBreaksQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchBreaksQuery = (
  { __typename?: 'query_root' }
  & { Breaks: Array<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'title'>
  )> }
);

export type GetHitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHitsQuery = (
  { __typename?: 'query_root' }
  & { Hits: Array<(
    { __typename?: 'Hits' }
    & Pick<Hits, 'id' | 'description' | 'user_id' | 'break_id' | 'product_id' | 'image_front' | 'image_back' | 'card_number' | 'player' | 'parallel' | 'insert' | 'rookie_card' | 'memorabilia' | 'autograph' | 'numbered' | 'published'>
    & { User: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'username'>
    ), Break: (
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'title'>
      & { Event: (
        { __typename?: 'Events' }
        & Pick<Events, 'start_time'>
      ) }
    ), Product: (
      { __typename?: 'Products' }
      & Pick<Products, 'id' | 'description' | 'year' | 'category' | 'manufacturer' | 'brand' | 'series'>
    ) }
  )> }
);

export type GetExtensibleValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExtensibleValuesQuery = (
  { __typename?: 'query_root' }
  & { ExtensibleValues: Array<(
    { __typename?: 'ExtensibleValues' }
    & Pick<ExtensibleValues, 'field' | 'value'>
  )> }
);

export type GetFilteredExtensibleValuesQueryVariables = Exact<{
  fields: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetFilteredExtensibleValuesQuery = (
  { __typename?: 'query_root' }
  & { ExtensibleValues: Array<(
    { __typename?: 'ExtensibleValues' }
    & Pick<ExtensibleValues, 'value' | 'field'>
  )> }
);

export type SearchExtensibleValuesQueryVariables = Exact<{
  input: Scalars['String'];
  field: Scalars['String'];
}>;


export type SearchExtensibleValuesQuery = (
  { __typename?: 'query_root' }
  & { ExtensibleValues: Array<(
    { __typename?: 'ExtensibleValues' }
    & Pick<ExtensibleValues, 'field' | 'value'>
  )> }
);

export type GetAdminManagerUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminManagerUsersQuery = (
  { __typename?: 'query_root' }
  & { Users: Array<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'email' | 'role' | 'is_breaker'>
  )> }
);

export type GetBreakerProfileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBreakerProfileQuery = (
  { __typename?: 'query_root' }
  & { Users_by_pk?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'first_name' | 'last_name' | 'image' | 'is_breaker'>
    & { Stream?: Maybe<(
      { __typename?: 'Streams' }
      & Pick<Streams, 'stream_key' | 'stream_url'>
    )> }
  )>, BreakerProfiles: Array<(
    { __typename?: 'BreakerProfiles' }
    & Pick<BreakerProfiles, 'bio' | 'video' | 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'tiktok'>
  )> }
);

export type GetChatUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetChatUserQuery = (
  { __typename?: 'query_root' }
  & { Users_by_pk?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'first_name' | 'last_name' | 'image' | 'username'>
  )> }
);

export type GetTeamDataQueryVariables = Exact<{
  year: Scalars['smallint'];
  sport: Scalars['String'];
}>;


export type GetTeamDataQuery = (
  { __typename?: 'query_root' }
  & { Teams: Array<(
    { __typename?: 'Teams' }
    & Pick<Teams, 'name' | 'city' | 'color' | 'color_secondary' | 'short_code'>
  )> }
);

export type GetDivisionDataQueryVariables = Exact<{
  sport: Scalars['String'];
}>;


export type GetDivisionDataQuery = (
  { __typename?: 'query_root' }
  & { Divisions: Array<(
    { __typename?: 'Divisions' }
    & Pick<Divisions, 'short_code' | 'name' | 'color' | 'color_secondary'>
  )> }
);

export type SearchPlayersQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchPlayersQuery = (
  { __typename?: 'query_root' }
  & { Players: Array<(
    { __typename?: 'Players' }
    & Pick<Players, 'id' | 'name'>
  )> }
);

export type GetResultsQueryVariables = Exact<{
  eventId: Scalars['uuid'];
}>;


export type GetResultsQuery = (
  { __typename?: 'query_root' }
  & { Breaks: Array<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'title' | 'result'>
    & { BreakProductItems: Array<(
      { __typename?: 'BreakProductItems' }
      & { Order?: Maybe<(
        { __typename?: 'Orders' }
        & Pick<Orders, 'user_id' | 'bc_order_id'>
        & { User: (
          { __typename?: 'Users' }
          & Pick<Users, 'username' | 'first_name' | 'last_name'>
        ) }
      )> }
    )> }
  )> }
);

export type GetDatasetsQueryVariables = Exact<{
  year: Scalars['smallint'];
  category: Scalars['String'];
  subcategory?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Dataset_Type_Enum_Comparison_Exp>;
}>;


export type GetDatasetsQuery = (
  { __typename?: 'query_root' }
  & { datasets: Array<(
    { __typename?: 'datasets' }
    & Pick<Datasets, 'id' | 'data'>
  )> }
);

export type GetProductOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductOptionsQuery = (
  { __typename?: 'query_root' }
  & { Products: Array<(
    { __typename?: 'Products' }
    & Pick<Products, 'year' | 'subcategory' | 'manufacturer' | 'brand' | 'series' | 'type' | 'parallel' | 'insert' | 'memorabilia'>
  )> }
);

export type GetHitOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHitOptionsQuery = (
  { __typename?: 'query_root' }
  & { Hits: Array<(
    { __typename?: 'Hits' }
    & Pick<Hits, 'parallel' | 'memorabilia' | 'insert'>
  )> }
);

export type GetEventByIdSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetEventByIdSubscription = (
  { __typename?: 'subscription_root' }
  & { Events_by_pk?: Maybe<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title' | 'start_time' | 'publishing_token' | 'stream_name' | 'description' | 'status' | 'image'>
    & { User: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'first_name' | 'last_name' | 'username'>
    ), Breaks: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'title' | 'break_type' | 'price' | 'spots' | 'description' | 'teams_per_spot' | 'image' | 'line_items' | 'status' | 'dataset' | 'result'>
      & { datasets?: Maybe<(
        { __typename?: 'datasets' }
        & Pick<Datasets, 'data'>
      )>, BreakProductItems_aggregate: (
        { __typename?: 'BreakProductItems_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'BreakProductItems_aggregate_fields' }
          & Pick<BreakProductItems_Aggregate_Fields, 'count'>
        )> }
      ), BreakProductItems: Array<(
        { __typename?: 'BreakProductItems' }
        & Pick<BreakProductItems, 'id' | 'title' | 'price' | 'bc_product_id'>
        & { Order?: Maybe<(
          { __typename?: 'Orders' }
          & Pick<Orders, 'id'>
        )> }
      )> }
    )> }
  )> }
);


export const InsertEventDocument = gql`
    mutation InsertEvent($data: Events_insert_input!) {
  insert_Events_one(object: $data) {
    id
  }
}
    `;
export type InsertEventMutationFn = Apollo.MutationFunction<InsertEventMutation, InsertEventMutationVariables>;

/**
 * __useInsertEventMutation__
 *
 * To run a mutation, you first call `useInsertEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertEventMutation, { data, loading, error }] = useInsertEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertEventMutation(baseOptions?: Apollo.MutationHookOptions<InsertEventMutation, InsertEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertEventMutation, InsertEventMutationVariables>(InsertEventDocument, options);
      }
export type InsertEventMutationHookResult = ReturnType<typeof useInsertEventMutation>;
export type InsertEventMutationResult = Apollo.MutationResult<InsertEventMutation>;
export type InsertEventMutationOptions = Apollo.BaseMutationOptions<InsertEventMutation, InsertEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($id: uuid!, $data: Events_set_input!) {
  update_Events_by_pk(pk_columns: {id: $id}, _set: $data) {
    id
    description
    image
    user_id
    title
    start_time
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const ArchiveEventsAndBreaksByEventIdsDocument = gql`
    mutation ArchiveEventsAndBreaksByEventIds($ids: [uuid!]) {
  update_Events(where: {id: {_in: $ids}}, _set: {archived: true}) {
    affected_rows
  }
  update_Breaks(where: {Event: {id: {_in: $ids}}}, _set: {archived: true}) {
    affected_rows
  }
  update_Inventory(
    where: {Break: {Event: {id: {_in: $ids}}}}
    _set: {break_id: null}
  ) {
    affected_rows
  }
}
    `;
export type ArchiveEventsAndBreaksByEventIdsMutationFn = Apollo.MutationFunction<ArchiveEventsAndBreaksByEventIdsMutation, ArchiveEventsAndBreaksByEventIdsMutationVariables>;

/**
 * __useArchiveEventsAndBreaksByEventIdsMutation__
 *
 * To run a mutation, you first call `useArchiveEventsAndBreaksByEventIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveEventsAndBreaksByEventIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveEventsAndBreaksByEventIdsMutation, { data, loading, error }] = useArchiveEventsAndBreaksByEventIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useArchiveEventsAndBreaksByEventIdsMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveEventsAndBreaksByEventIdsMutation, ArchiveEventsAndBreaksByEventIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveEventsAndBreaksByEventIdsMutation, ArchiveEventsAndBreaksByEventIdsMutationVariables>(ArchiveEventsAndBreaksByEventIdsDocument, options);
      }
export type ArchiveEventsAndBreaksByEventIdsMutationHookResult = ReturnType<typeof useArchiveEventsAndBreaksByEventIdsMutation>;
export type ArchiveEventsAndBreaksByEventIdsMutationResult = Apollo.MutationResult<ArchiveEventsAndBreaksByEventIdsMutation>;
export type ArchiveEventsAndBreaksByEventIdsMutationOptions = Apollo.BaseMutationOptions<ArchiveEventsAndBreaksByEventIdsMutation, ArchiveEventsAndBreaksByEventIdsMutationVariables>;
export const InsertBreakDocument = gql`
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
export type InsertBreakMutationFn = Apollo.MutationFunction<InsertBreakMutation, InsertBreakMutationVariables>;

/**
 * __useInsertBreakMutation__
 *
 * To run a mutation, you first call `useInsertBreakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBreakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBreakMutation, { data, loading, error }] = useInsertBreakMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertBreakMutation(baseOptions?: Apollo.MutationHookOptions<InsertBreakMutation, InsertBreakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBreakMutation, InsertBreakMutationVariables>(InsertBreakDocument, options);
      }
export type InsertBreakMutationHookResult = ReturnType<typeof useInsertBreakMutation>;
export type InsertBreakMutationResult = Apollo.MutationResult<InsertBreakMutation>;
export type InsertBreakMutationOptions = Apollo.BaseMutationOptions<InsertBreakMutation, InsertBreakMutationVariables>;
export const UpdateBreakDocument = gql`
    mutation UpdateBreak($id: uuid!, $data: Breaks_set_input!) {
  update_Breaks_by_pk(pk_columns: {id: $id}, _set: $data) {
    id
  }
}
    `;
export type UpdateBreakMutationFn = Apollo.MutationFunction<UpdateBreakMutation, UpdateBreakMutationVariables>;

/**
 * __useUpdateBreakMutation__
 *
 * To run a mutation, you first call `useUpdateBreakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBreakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBreakMutation, { data, loading, error }] = useUpdateBreakMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBreakMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBreakMutation, UpdateBreakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBreakMutation, UpdateBreakMutationVariables>(UpdateBreakDocument, options);
      }
export type UpdateBreakMutationHookResult = ReturnType<typeof useUpdateBreakMutation>;
export type UpdateBreakMutationResult = Apollo.MutationResult<UpdateBreakMutation>;
export type UpdateBreakMutationOptions = Apollo.BaseMutationOptions<UpdateBreakMutation, UpdateBreakMutationVariables>;
export const FullBreakUpdateDocument = gql`
    mutation FullBreakUpdate($id: uuid!, $data: [Breaks_insert_input!]!) {
  delete_break_product(where: {break_id: {_eq: $id}}) {
    affected_rows
  }
  insert_Breaks(
    objects: $data
    on_conflict: {constraint: Breaks_pkey, update_columns: [event_id, title, description, image, spots, teams_per_spot, price, break_type, dataset_id]}
  ) {
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
export type FullBreakUpdateMutationFn = Apollo.MutationFunction<FullBreakUpdateMutation, FullBreakUpdateMutationVariables>;

/**
 * __useFullBreakUpdateMutation__
 *
 * To run a mutation, you first call `useFullBreakUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFullBreakUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fullBreakUpdateMutation, { data, loading, error }] = useFullBreakUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFullBreakUpdateMutation(baseOptions?: Apollo.MutationHookOptions<FullBreakUpdateMutation, FullBreakUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FullBreakUpdateMutation, FullBreakUpdateMutationVariables>(FullBreakUpdateDocument, options);
      }
export type FullBreakUpdateMutationHookResult = ReturnType<typeof useFullBreakUpdateMutation>;
export type FullBreakUpdateMutationResult = Apollo.MutationResult<FullBreakUpdateMutation>;
export type FullBreakUpdateMutationOptions = Apollo.BaseMutationOptions<FullBreakUpdateMutation, FullBreakUpdateMutationVariables>;
export const ArchiveBreaksByIdDocument = gql`
    mutation ArchiveBreaksById($ids: [uuid!]) {
  update_Inventory(where: {break_id: {_in: $ids}}, _set: {break_id: null}) {
    affected_rows
  }
  update_Breaks(where: {id: {_in: $ids}}, _set: {archived: true}) {
    affected_rows
  }
}
    `;
export type ArchiveBreaksByIdMutationFn = Apollo.MutationFunction<ArchiveBreaksByIdMutation, ArchiveBreaksByIdMutationVariables>;

/**
 * __useArchiveBreaksByIdMutation__
 *
 * To run a mutation, you first call `useArchiveBreaksByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveBreaksByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveBreaksByIdMutation, { data, loading, error }] = useArchiveBreaksByIdMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useArchiveBreaksByIdMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveBreaksByIdMutation, ArchiveBreaksByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveBreaksByIdMutation, ArchiveBreaksByIdMutationVariables>(ArchiveBreaksByIdDocument, options);
      }
export type ArchiveBreaksByIdMutationHookResult = ReturnType<typeof useArchiveBreaksByIdMutation>;
export type ArchiveBreaksByIdMutationResult = Apollo.MutationResult<ArchiveBreaksByIdMutation>;
export type ArchiveBreaksByIdMutationOptions = Apollo.BaseMutationOptions<ArchiveBreaksByIdMutation, ArchiveBreaksByIdMutationVariables>;
export const InsertProductDocument = gql`
    mutation InsertProduct($data: Products_insert_input!) {
  insert_Products_one(object: $data) {
    year
    category
  }
}
    `;
export type InsertProductMutationFn = Apollo.MutationFunction<InsertProductMutation, InsertProductMutationVariables>;

/**
 * __useInsertProductMutation__
 *
 * To run a mutation, you first call `useInsertProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductMutation, { data, loading, error }] = useInsertProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertProductMutation(baseOptions?: Apollo.MutationHookOptions<InsertProductMutation, InsertProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertProductMutation, InsertProductMutationVariables>(InsertProductDocument, options);
      }
export type InsertProductMutationHookResult = ReturnType<typeof useInsertProductMutation>;
export type InsertProductMutationResult = Apollo.MutationResult<InsertProductMutation>;
export type InsertProductMutationOptions = Apollo.BaseMutationOptions<InsertProductMutation, InsertProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: uuid!, $data: Products_set_input!) {
  update_Products_by_pk(pk_columns: {id: $id}, _set: $data) {
    year
    category
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductsByIdsDocument = gql`
    mutation DeleteProductsByIds($ids: [uuid!]) {
  delete_Products(where: {id: {_in: $ids}}) {
    affected_rows
  }
}
    `;
export type DeleteProductsByIdsMutationFn = Apollo.MutationFunction<DeleteProductsByIdsMutation, DeleteProductsByIdsMutationVariables>;

/**
 * __useDeleteProductsByIdsMutation__
 *
 * To run a mutation, you first call `useDeleteProductsByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductsByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductsByIdsMutation, { data, loading, error }] = useDeleteProductsByIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteProductsByIdsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductsByIdsMutation, DeleteProductsByIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductsByIdsMutation, DeleteProductsByIdsMutationVariables>(DeleteProductsByIdsDocument, options);
      }
export type DeleteProductsByIdsMutationHookResult = ReturnType<typeof useDeleteProductsByIdsMutation>;
export type DeleteProductsByIdsMutationResult = Apollo.MutationResult<DeleteProductsByIdsMutation>;
export type DeleteProductsByIdsMutationOptions = Apollo.BaseMutationOptions<DeleteProductsByIdsMutation, DeleteProductsByIdsMutationVariables>;
export const ArchiveProductsByIdsDocument = gql`
    mutation ArchiveProductsByIds($ids: [uuid!]) {
  update_Products(where: {id: {_in: $ids}}, _set: {available: false}) {
    affected_rows
  }
}
    `;
export type ArchiveProductsByIdsMutationFn = Apollo.MutationFunction<ArchiveProductsByIdsMutation, ArchiveProductsByIdsMutationVariables>;

/**
 * __useArchiveProductsByIdsMutation__
 *
 * To run a mutation, you first call `useArchiveProductsByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveProductsByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveProductsByIdsMutation, { data, loading, error }] = useArchiveProductsByIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useArchiveProductsByIdsMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveProductsByIdsMutation, ArchiveProductsByIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveProductsByIdsMutation, ArchiveProductsByIdsMutationVariables>(ArchiveProductsByIdsDocument, options);
      }
export type ArchiveProductsByIdsMutationHookResult = ReturnType<typeof useArchiveProductsByIdsMutation>;
export type ArchiveProductsByIdsMutationResult = Apollo.MutationResult<ArchiveProductsByIdsMutation>;
export type ArchiveProductsByIdsMutationOptions = Apollo.BaseMutationOptions<ArchiveProductsByIdsMutation, ArchiveProductsByIdsMutationVariables>;
export const UnarchiveProductsByIdsDocument = gql`
    mutation UnarchiveProductsByIds($ids: [uuid!]) {
  update_Products(where: {id: {_in: $ids}}, _set: {available: true}) {
    affected_rows
  }
}
    `;
export type UnarchiveProductsByIdsMutationFn = Apollo.MutationFunction<UnarchiveProductsByIdsMutation, UnarchiveProductsByIdsMutationVariables>;

/**
 * __useUnarchiveProductsByIdsMutation__
 *
 * To run a mutation, you first call `useUnarchiveProductsByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnarchiveProductsByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unarchiveProductsByIdsMutation, { data, loading, error }] = useUnarchiveProductsByIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useUnarchiveProductsByIdsMutation(baseOptions?: Apollo.MutationHookOptions<UnarchiveProductsByIdsMutation, UnarchiveProductsByIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnarchiveProductsByIdsMutation, UnarchiveProductsByIdsMutationVariables>(UnarchiveProductsByIdsDocument, options);
      }
export type UnarchiveProductsByIdsMutationHookResult = ReturnType<typeof useUnarchiveProductsByIdsMutation>;
export type UnarchiveProductsByIdsMutationResult = Apollo.MutationResult<UnarchiveProductsByIdsMutation>;
export type UnarchiveProductsByIdsMutationOptions = Apollo.BaseMutationOptions<UnarchiveProductsByIdsMutation, UnarchiveProductsByIdsMutationVariables>;
export const InsertDatasetDocument = gql`
    mutation InsertDataset($data: datasets_insert_input!) {
  insert_datasets_one(object: $data) {
    id
  }
}
    `;
export type InsertDatasetMutationFn = Apollo.MutationFunction<InsertDatasetMutation, InsertDatasetMutationVariables>;

/**
 * __useInsertDatasetMutation__
 *
 * To run a mutation, you first call `useInsertDatasetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDatasetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDatasetMutation, { data, loading, error }] = useInsertDatasetMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertDatasetMutation(baseOptions?: Apollo.MutationHookOptions<InsertDatasetMutation, InsertDatasetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertDatasetMutation, InsertDatasetMutationVariables>(InsertDatasetDocument, options);
      }
export type InsertDatasetMutationHookResult = ReturnType<typeof useInsertDatasetMutation>;
export type InsertDatasetMutationResult = Apollo.MutationResult<InsertDatasetMutation>;
export type InsertDatasetMutationOptions = Apollo.BaseMutationOptions<InsertDatasetMutation, InsertDatasetMutationVariables>;
export const InsertExtensibleValuesDocument = gql`
    mutation InsertExtensibleValues($data: [ExtensibleValues_insert_input!]!) {
  insert_ExtensibleValues(objects: $data) {
    affected_rows
  }
}
    `;
export type InsertExtensibleValuesMutationFn = Apollo.MutationFunction<InsertExtensibleValuesMutation, InsertExtensibleValuesMutationVariables>;

/**
 * __useInsertExtensibleValuesMutation__
 *
 * To run a mutation, you first call `useInsertExtensibleValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertExtensibleValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertExtensibleValuesMutation, { data, loading, error }] = useInsertExtensibleValuesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertExtensibleValuesMutation(baseOptions?: Apollo.MutationHookOptions<InsertExtensibleValuesMutation, InsertExtensibleValuesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertExtensibleValuesMutation, InsertExtensibleValuesMutationVariables>(InsertExtensibleValuesDocument, options);
      }
export type InsertExtensibleValuesMutationHookResult = ReturnType<typeof useInsertExtensibleValuesMutation>;
export type InsertExtensibleValuesMutationResult = Apollo.MutationResult<InsertExtensibleValuesMutation>;
export type InsertExtensibleValuesMutationOptions = Apollo.BaseMutationOptions<InsertExtensibleValuesMutation, InsertExtensibleValuesMutationVariables>;
export const InsertHitDocument = gql`
    mutation InsertHit($data: Hits_insert_input!) {
  insert_Hits_one(object: $data) {
    id
  }
}
    `;
export type InsertHitMutationFn = Apollo.MutationFunction<InsertHitMutation, InsertHitMutationVariables>;

/**
 * __useInsertHitMutation__
 *
 * To run a mutation, you first call `useInsertHitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHitMutation, { data, loading, error }] = useInsertHitMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertHitMutation(baseOptions?: Apollo.MutationHookOptions<InsertHitMutation, InsertHitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertHitMutation, InsertHitMutationVariables>(InsertHitDocument, options);
      }
export type InsertHitMutationHookResult = ReturnType<typeof useInsertHitMutation>;
export type InsertHitMutationResult = Apollo.MutationResult<InsertHitMutation>;
export type InsertHitMutationOptions = Apollo.BaseMutationOptions<InsertHitMutation, InsertHitMutationVariables>;
export const UpdateHitDocument = gql`
    mutation UpdateHit($id: uuid!, $data: Hits_set_input!) {
  update_Hits_by_pk(pk_columns: {id: $id}, _set: $data) {
    id
    user_id
    player
    published
  }
}
    `;
export type UpdateHitMutationFn = Apollo.MutationFunction<UpdateHitMutation, UpdateHitMutationVariables>;

/**
 * __useUpdateHitMutation__
 *
 * To run a mutation, you first call `useUpdateHitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHitMutation, { data, loading, error }] = useUpdateHitMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHitMutation, UpdateHitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHitMutation, UpdateHitMutationVariables>(UpdateHitDocument, options);
      }
export type UpdateHitMutationHookResult = ReturnType<typeof useUpdateHitMutation>;
export type UpdateHitMutationResult = Apollo.MutationResult<UpdateHitMutation>;
export type UpdateHitMutationOptions = Apollo.BaseMutationOptions<UpdateHitMutation, UpdateHitMutationVariables>;
export const ArchiveHitsByIdDocument = gql`
    mutation ArchiveHitsById($ids: [uuid!]) {
  update_Hits(where: {id: {_in: $ids}}, _set: {archived: true}) {
    affected_rows
  }
}
    `;
export type ArchiveHitsByIdMutationFn = Apollo.MutationFunction<ArchiveHitsByIdMutation, ArchiveHitsByIdMutationVariables>;

/**
 * __useArchiveHitsByIdMutation__
 *
 * To run a mutation, you first call `useArchiveHitsByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveHitsByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveHitsByIdMutation, { data, loading, error }] = useArchiveHitsByIdMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useArchiveHitsByIdMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveHitsByIdMutation, ArchiveHitsByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveHitsByIdMutation, ArchiveHitsByIdMutationVariables>(ArchiveHitsByIdDocument, options);
      }
export type ArchiveHitsByIdMutationHookResult = ReturnType<typeof useArchiveHitsByIdMutation>;
export type ArchiveHitsByIdMutationResult = Apollo.MutationResult<ArchiveHitsByIdMutation>;
export type ArchiveHitsByIdMutationOptions = Apollo.BaseMutationOptions<ArchiveHitsByIdMutation, ArchiveHitsByIdMutationVariables>;
export const UpdateBreakerProfileDocument = gql`
    mutation UpdateBreakerProfile($id: String!, $first_name: String!, $last_name: String!, $image: String!, $profile: BreakerProfiles_insert_input!) {
  update_Users_by_pk(
    pk_columns: {id: $id}
    _set: {first_name: $first_name, last_name: $last_name, image: $image}
  ) {
    first_name
    last_name
    image
  }
  insert_BreakerProfiles_one(
    object: $profile
    on_conflict: {constraint: BreakerProfiles_user_id_key, update_columns: [bio, video, instagram, twitter, facebook, linkedin, tiktok]}
  ) {
    id
  }
}
    `;
export type UpdateBreakerProfileMutationFn = Apollo.MutationFunction<UpdateBreakerProfileMutation, UpdateBreakerProfileMutationVariables>;

/**
 * __useUpdateBreakerProfileMutation__
 *
 * To run a mutation, you first call `useUpdateBreakerProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBreakerProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBreakerProfileMutation, { data, loading, error }] = useUpdateBreakerProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      image: // value for 'image'
 *      profile: // value for 'profile'
 *   },
 * });
 */
export function useUpdateBreakerProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBreakerProfileMutation, UpdateBreakerProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBreakerProfileMutation, UpdateBreakerProfileMutationVariables>(UpdateBreakerProfileDocument, options);
      }
export type UpdateBreakerProfileMutationHookResult = ReturnType<typeof useUpdateBreakerProfileMutation>;
export type UpdateBreakerProfileMutationResult = Apollo.MutationResult<UpdateBreakerProfileMutation>;
export type UpdateBreakerProfileMutationOptions = Apollo.BaseMutationOptions<UpdateBreakerProfileMutation, UpdateBreakerProfileMutationVariables>;
export const GetProductIitemsWithOrderIdByBreakIdDocument = gql`
    query GetProductIitemsWithOrderIdByBreakId($id: uuid!) {
  BreakProductItems(where: {order_id: {_is_null: false}, Break: {id: {_eq: $id}}}) {
    id
  }
}
    `;

/**
 * __useGetProductIitemsWithOrderIdByBreakIdQuery__
 *
 * To run a query within a React component, call `useGetProductIitemsWithOrderIdByBreakIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductIitemsWithOrderIdByBreakIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductIitemsWithOrderIdByBreakIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductIitemsWithOrderIdByBreakIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductIitemsWithOrderIdByBreakIdQuery, GetProductIitemsWithOrderIdByBreakIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductIitemsWithOrderIdByBreakIdQuery, GetProductIitemsWithOrderIdByBreakIdQueryVariables>(GetProductIitemsWithOrderIdByBreakIdDocument, options);
      }
export function useGetProductIitemsWithOrderIdByBreakIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductIitemsWithOrderIdByBreakIdQuery, GetProductIitemsWithOrderIdByBreakIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductIitemsWithOrderIdByBreakIdQuery, GetProductIitemsWithOrderIdByBreakIdQueryVariables>(GetProductIitemsWithOrderIdByBreakIdDocument, options);
        }
export type GetProductIitemsWithOrderIdByBreakIdQueryHookResult = ReturnType<typeof useGetProductIitemsWithOrderIdByBreakIdQuery>;
export type GetProductIitemsWithOrderIdByBreakIdLazyQueryHookResult = ReturnType<typeof useGetProductIitemsWithOrderIdByBreakIdLazyQuery>;
export type GetProductIitemsWithOrderIdByBreakIdQueryResult = Apollo.QueryResult<GetProductIitemsWithOrderIdByBreakIdQuery, GetProductIitemsWithOrderIdByBreakIdQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($unitOfMeasure: [unit_of_measure_enum!], $input: String) {
  Products(
    order_by: {created_at: asc}
    where: {unit_of_measure: {_in: $unitOfMeasure}, available: {_eq: true}, description: {_ilike: $input}}
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

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      unitOfMeasure: // value for 'unitOfMeasure'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductByIdDocument = gql`
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

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetEventsDocument = gql`
    query GetEvents {
  Events(where: {archived: {_eq: false}}, order_by: {start_time: asc}) {
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
    Breaks(where: {archived: {_eq: false}}) {
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

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetLiveEventByIdDocument = gql`
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
    Breaks(where: {archived: {_eq: false}}, order_by: {created_at: asc}) {
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
      BreakProductItems_aggregate(where: {order_id: {_is_null: true}}) {
        aggregate {
          count
        }
      }
      BreakProductItems(order_by: {title: asc}) {
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

/**
 * __useGetLiveEventByIdQuery__
 *
 * To run a query within a React component, call `useGetLiveEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLiveEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLiveEventByIdQuery, GetLiveEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLiveEventByIdQuery, GetLiveEventByIdQueryVariables>(GetLiveEventByIdDocument, options);
      }
export function useGetLiveEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLiveEventByIdQuery, GetLiveEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLiveEventByIdQuery, GetLiveEventByIdQueryVariables>(GetLiveEventByIdDocument, options);
        }
export type GetLiveEventByIdQueryHookResult = ReturnType<typeof useGetLiveEventByIdQuery>;
export type GetLiveEventByIdLazyQueryHookResult = ReturnType<typeof useGetLiveEventByIdLazyQuery>;
export type GetLiveEventByIdQueryResult = Apollo.QueryResult<GetLiveEventByIdQuery, GetLiveEventByIdQueryVariables>;
export const SearchEventsDocument = gql`
    query SearchEvents($input: String!) {
  Events(where: {title: {_ilike: $input}}) {
    id
    title
  }
}
    `;

/**
 * __useSearchEventsQuery__
 *
 * To run a query within a React component, call `useSearchEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEventsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchEventsQuery(baseOptions: Apollo.QueryHookOptions<SearchEventsQuery, SearchEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEventsQuery, SearchEventsQueryVariables>(SearchEventsDocument, options);
      }
export function useSearchEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEventsQuery, SearchEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEventsQuery, SearchEventsQueryVariables>(SearchEventsDocument, options);
        }
export type SearchEventsQueryHookResult = ReturnType<typeof useSearchEventsQuery>;
export type SearchEventsLazyQueryHookResult = ReturnType<typeof useSearchEventsLazyQuery>;
export type SearchEventsQueryResult = Apollo.QueryResult<SearchEventsQuery, SearchEventsQueryVariables>;
export const GetBreakByIdDocument = gql`
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
    BreakProductItems(order_by: {title: asc}) {
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

/**
 * __useGetBreakByIdQuery__
 *
 * To run a query within a React component, call `useGetBreakByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreakByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreakByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBreakByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBreakByIdQuery, GetBreakByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBreakByIdQuery, GetBreakByIdQueryVariables>(GetBreakByIdDocument, options);
      }
export function useGetBreakByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreakByIdQuery, GetBreakByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBreakByIdQuery, GetBreakByIdQueryVariables>(GetBreakByIdDocument, options);
        }
export type GetBreakByIdQueryHookResult = ReturnType<typeof useGetBreakByIdQuery>;
export type GetBreakByIdLazyQueryHookResult = ReturnType<typeof useGetBreakByIdLazyQuery>;
export type GetBreakByIdQueryResult = Apollo.QueryResult<GetBreakByIdQuery, GetBreakByIdQueryVariables>;
export const GetBreakDataDocument = gql`
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

/**
 * __useGetBreakDataQuery__
 *
 * To run a query within a React component, call `useGetBreakDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreakDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreakDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBreakDataQuery(baseOptions: Apollo.QueryHookOptions<GetBreakDataQuery, GetBreakDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBreakDataQuery, GetBreakDataQueryVariables>(GetBreakDataDocument, options);
      }
export function useGetBreakDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreakDataQuery, GetBreakDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBreakDataQuery, GetBreakDataQueryVariables>(GetBreakDataDocument, options);
        }
export type GetBreakDataQueryHookResult = ReturnType<typeof useGetBreakDataQuery>;
export type GetBreakDataLazyQueryHookResult = ReturnType<typeof useGetBreakDataLazyQuery>;
export type GetBreakDataQueryResult = Apollo.QueryResult<GetBreakDataQuery, GetBreakDataQueryVariables>;
export const SearchBreaksDocument = gql`
    query SearchBreaks($input: String!) {
  Breaks(where: {title: {_ilike: $input}}) {
    id
    title
  }
}
    `;

/**
 * __useSearchBreaksQuery__
 *
 * To run a query within a React component, call `useSearchBreaksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBreaksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBreaksQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchBreaksQuery(baseOptions: Apollo.QueryHookOptions<SearchBreaksQuery, SearchBreaksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBreaksQuery, SearchBreaksQueryVariables>(SearchBreaksDocument, options);
      }
export function useSearchBreaksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBreaksQuery, SearchBreaksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBreaksQuery, SearchBreaksQueryVariables>(SearchBreaksDocument, options);
        }
export type SearchBreaksQueryHookResult = ReturnType<typeof useSearchBreaksQuery>;
export type SearchBreaksLazyQueryHookResult = ReturnType<typeof useSearchBreaksLazyQuery>;
export type SearchBreaksQueryResult = Apollo.QueryResult<SearchBreaksQuery, SearchBreaksQueryVariables>;
export const GetHitsDocument = gql`
    query GetHits {
  Hits(order_by: {created_at: desc}, where: {archived: {_eq: false}}) {
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

/**
 * __useGetHitsQuery__
 *
 * To run a query within a React component, call `useGetHitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHitsQuery(baseOptions?: Apollo.QueryHookOptions<GetHitsQuery, GetHitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHitsQuery, GetHitsQueryVariables>(GetHitsDocument, options);
      }
export function useGetHitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHitsQuery, GetHitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHitsQuery, GetHitsQueryVariables>(GetHitsDocument, options);
        }
export type GetHitsQueryHookResult = ReturnType<typeof useGetHitsQuery>;
export type GetHitsLazyQueryHookResult = ReturnType<typeof useGetHitsLazyQuery>;
export type GetHitsQueryResult = Apollo.QueryResult<GetHitsQuery, GetHitsQueryVariables>;
export const GetExtensibleValuesDocument = gql`
    query GetExtensibleValues {
  ExtensibleValues(order_by: {field: asc, value: asc}) {
    field
    value
  }
}
    `;

/**
 * __useGetExtensibleValuesQuery__
 *
 * To run a query within a React component, call `useGetExtensibleValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtensibleValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtensibleValuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExtensibleValuesQuery(baseOptions?: Apollo.QueryHookOptions<GetExtensibleValuesQuery, GetExtensibleValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExtensibleValuesQuery, GetExtensibleValuesQueryVariables>(GetExtensibleValuesDocument, options);
      }
export function useGetExtensibleValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExtensibleValuesQuery, GetExtensibleValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExtensibleValuesQuery, GetExtensibleValuesQueryVariables>(GetExtensibleValuesDocument, options);
        }
export type GetExtensibleValuesQueryHookResult = ReturnType<typeof useGetExtensibleValuesQuery>;
export type GetExtensibleValuesLazyQueryHookResult = ReturnType<typeof useGetExtensibleValuesLazyQuery>;
export type GetExtensibleValuesQueryResult = Apollo.QueryResult<GetExtensibleValuesQuery, GetExtensibleValuesQueryVariables>;
export const GetFilteredExtensibleValuesDocument = gql`
    query GetFilteredExtensibleValues($fields: [String!]!) {
  ExtensibleValues(where: {field: {_in: $fields}}, order_by: {value: asc}) {
    value
    field
  }
}
    `;

/**
 * __useGetFilteredExtensibleValuesQuery__
 *
 * To run a query within a React component, call `useGetFilteredExtensibleValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredExtensibleValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredExtensibleValuesQuery({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useGetFilteredExtensibleValuesQuery(baseOptions: Apollo.QueryHookOptions<GetFilteredExtensibleValuesQuery, GetFilteredExtensibleValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilteredExtensibleValuesQuery, GetFilteredExtensibleValuesQueryVariables>(GetFilteredExtensibleValuesDocument, options);
      }
export function useGetFilteredExtensibleValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredExtensibleValuesQuery, GetFilteredExtensibleValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilteredExtensibleValuesQuery, GetFilteredExtensibleValuesQueryVariables>(GetFilteredExtensibleValuesDocument, options);
        }
export type GetFilteredExtensibleValuesQueryHookResult = ReturnType<typeof useGetFilteredExtensibleValuesQuery>;
export type GetFilteredExtensibleValuesLazyQueryHookResult = ReturnType<typeof useGetFilteredExtensibleValuesLazyQuery>;
export type GetFilteredExtensibleValuesQueryResult = Apollo.QueryResult<GetFilteredExtensibleValuesQuery, GetFilteredExtensibleValuesQueryVariables>;
export const SearchExtensibleValuesDocument = gql`
    query SearchExtensibleValues($input: String!, $field: String!) {
  ExtensibleValues(
    where: {value: {_ilike: $input}, field: {_eq: $field}}
    order_by: {value: asc}
    limit: 20
  ) {
    field
    value
  }
}
    `;

/**
 * __useSearchExtensibleValuesQuery__
 *
 * To run a query within a React component, call `useSearchExtensibleValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchExtensibleValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchExtensibleValuesQuery({
 *   variables: {
 *      input: // value for 'input'
 *      field: // value for 'field'
 *   },
 * });
 */
export function useSearchExtensibleValuesQuery(baseOptions: Apollo.QueryHookOptions<SearchExtensibleValuesQuery, SearchExtensibleValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchExtensibleValuesQuery, SearchExtensibleValuesQueryVariables>(SearchExtensibleValuesDocument, options);
      }
export function useSearchExtensibleValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchExtensibleValuesQuery, SearchExtensibleValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchExtensibleValuesQuery, SearchExtensibleValuesQueryVariables>(SearchExtensibleValuesDocument, options);
        }
export type SearchExtensibleValuesQueryHookResult = ReturnType<typeof useSearchExtensibleValuesQuery>;
export type SearchExtensibleValuesLazyQueryHookResult = ReturnType<typeof useSearchExtensibleValuesLazyQuery>;
export type SearchExtensibleValuesQueryResult = Apollo.QueryResult<SearchExtensibleValuesQuery, SearchExtensibleValuesQueryVariables>;
export const GetAdminManagerUsersDocument = gql`
    query GetAdminManagerUsers {
  Users(where: {role: {_in: [ADMIN, MANAGER]}}, order_by: {email: asc}) {
    id
    email
    role
    is_breaker
  }
}
    `;

/**
 * __useGetAdminManagerUsersQuery__
 *
 * To run a query within a React component, call `useGetAdminManagerUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminManagerUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminManagerUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminManagerUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminManagerUsersQuery, GetAdminManagerUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminManagerUsersQuery, GetAdminManagerUsersQueryVariables>(GetAdminManagerUsersDocument, options);
      }
export function useGetAdminManagerUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminManagerUsersQuery, GetAdminManagerUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminManagerUsersQuery, GetAdminManagerUsersQueryVariables>(GetAdminManagerUsersDocument, options);
        }
export type GetAdminManagerUsersQueryHookResult = ReturnType<typeof useGetAdminManagerUsersQuery>;
export type GetAdminManagerUsersLazyQueryHookResult = ReturnType<typeof useGetAdminManagerUsersLazyQuery>;
export type GetAdminManagerUsersQueryResult = Apollo.QueryResult<GetAdminManagerUsersQuery, GetAdminManagerUsersQueryVariables>;
export const GetBreakerProfileDocument = gql`
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
  BreakerProfiles(where: {user_id: {_eq: $id}}, limit: 1) {
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

/**
 * __useGetBreakerProfileQuery__
 *
 * To run a query within a React component, call `useGetBreakerProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBreakerProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBreakerProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBreakerProfileQuery(baseOptions: Apollo.QueryHookOptions<GetBreakerProfileQuery, GetBreakerProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBreakerProfileQuery, GetBreakerProfileQueryVariables>(GetBreakerProfileDocument, options);
      }
export function useGetBreakerProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBreakerProfileQuery, GetBreakerProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBreakerProfileQuery, GetBreakerProfileQueryVariables>(GetBreakerProfileDocument, options);
        }
export type GetBreakerProfileQueryHookResult = ReturnType<typeof useGetBreakerProfileQuery>;
export type GetBreakerProfileLazyQueryHookResult = ReturnType<typeof useGetBreakerProfileLazyQuery>;
export type GetBreakerProfileQueryResult = Apollo.QueryResult<GetBreakerProfileQuery, GetBreakerProfileQueryVariables>;
export const GetChatUserDocument = gql`
    query GetChatUser($id: String!) {
  Users_by_pk(id: $id) {
    first_name
    last_name
    image
    username
  }
}
    `;

/**
 * __useGetChatUserQuery__
 *
 * To run a query within a React component, call `useGetChatUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChatUserQuery(baseOptions: Apollo.QueryHookOptions<GetChatUserQuery, GetChatUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatUserQuery, GetChatUserQueryVariables>(GetChatUserDocument, options);
      }
export function useGetChatUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatUserQuery, GetChatUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatUserQuery, GetChatUserQueryVariables>(GetChatUserDocument, options);
        }
export type GetChatUserQueryHookResult = ReturnType<typeof useGetChatUserQuery>;
export type GetChatUserLazyQueryHookResult = ReturnType<typeof useGetChatUserLazyQuery>;
export type GetChatUserQueryResult = Apollo.QueryResult<GetChatUserQuery, GetChatUserQueryVariables>;
export const GetTeamDataDocument = gql`
    query GetTeamData($year: smallint!, $sport: String!) {
  Teams(
    where: {sport: {_eq: $sport}, _and: [{start_year: {_lte: $year}}, {end_year: {_gte: $year}}]}
  ) {
    name
    city
    color
    color_secondary
    short_code
  }
}
    `;

/**
 * __useGetTeamDataQuery__
 *
 * To run a query within a React component, call `useGetTeamDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamDataQuery({
 *   variables: {
 *      year: // value for 'year'
 *      sport: // value for 'sport'
 *   },
 * });
 */
export function useGetTeamDataQuery(baseOptions: Apollo.QueryHookOptions<GetTeamDataQuery, GetTeamDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamDataQuery, GetTeamDataQueryVariables>(GetTeamDataDocument, options);
      }
export function useGetTeamDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamDataQuery, GetTeamDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamDataQuery, GetTeamDataQueryVariables>(GetTeamDataDocument, options);
        }
export type GetTeamDataQueryHookResult = ReturnType<typeof useGetTeamDataQuery>;
export type GetTeamDataLazyQueryHookResult = ReturnType<typeof useGetTeamDataLazyQuery>;
export type GetTeamDataQueryResult = Apollo.QueryResult<GetTeamDataQuery, GetTeamDataQueryVariables>;
export const GetDivisionDataDocument = gql`
    query GetDivisionData($sport: String!) {
  Divisions(where: {sport: {_eq: $sport}}) {
    short_code
    name
    color
    color_secondary
  }
}
    `;

/**
 * __useGetDivisionDataQuery__
 *
 * To run a query within a React component, call `useGetDivisionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDivisionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDivisionDataQuery({
 *   variables: {
 *      sport: // value for 'sport'
 *   },
 * });
 */
export function useGetDivisionDataQuery(baseOptions: Apollo.QueryHookOptions<GetDivisionDataQuery, GetDivisionDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDivisionDataQuery, GetDivisionDataQueryVariables>(GetDivisionDataDocument, options);
      }
export function useGetDivisionDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDivisionDataQuery, GetDivisionDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDivisionDataQuery, GetDivisionDataQueryVariables>(GetDivisionDataDocument, options);
        }
export type GetDivisionDataQueryHookResult = ReturnType<typeof useGetDivisionDataQuery>;
export type GetDivisionDataLazyQueryHookResult = ReturnType<typeof useGetDivisionDataLazyQuery>;
export type GetDivisionDataQueryResult = Apollo.QueryResult<GetDivisionDataQuery, GetDivisionDataQueryVariables>;
export const SearchPlayersDocument = gql`
    query SearchPlayers($input: String!) {
  Players(where: {name: {_ilike: $input}}) {
    id
    name
  }
}
    `;

/**
 * __useSearchPlayersQuery__
 *
 * To run a query within a React component, call `useSearchPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPlayersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchPlayersQuery(baseOptions: Apollo.QueryHookOptions<SearchPlayersQuery, SearchPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPlayersQuery, SearchPlayersQueryVariables>(SearchPlayersDocument, options);
      }
export function useSearchPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPlayersQuery, SearchPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPlayersQuery, SearchPlayersQueryVariables>(SearchPlayersDocument, options);
        }
export type SearchPlayersQueryHookResult = ReturnType<typeof useSearchPlayersQuery>;
export type SearchPlayersLazyQueryHookResult = ReturnType<typeof useSearchPlayersLazyQuery>;
export type SearchPlayersQueryResult = Apollo.QueryResult<SearchPlayersQuery, SearchPlayersQueryVariables>;
export const GetResultsDocument = gql`
    query GetResults($eventId: uuid!) {
  Breaks(where: {event_id: {_eq: $eventId}}) {
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

/**
 * __useGetResultsQuery__
 *
 * To run a query within a React component, call `useGetResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResultsQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetResultsQuery(baseOptions: Apollo.QueryHookOptions<GetResultsQuery, GetResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResultsQuery, GetResultsQueryVariables>(GetResultsDocument, options);
      }
export function useGetResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResultsQuery, GetResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResultsQuery, GetResultsQueryVariables>(GetResultsDocument, options);
        }
export type GetResultsQueryHookResult = ReturnType<typeof useGetResultsQuery>;
export type GetResultsLazyQueryHookResult = ReturnType<typeof useGetResultsLazyQuery>;
export type GetResultsQueryResult = Apollo.QueryResult<GetResultsQuery, GetResultsQueryVariables>;
export const GetDatasetsDocument = gql`
    query GetDatasets($year: smallint!, $category: String!, $subcategory: String_comparison_exp, $type: dataset_type_enum_comparison_exp) {
  datasets(
    where: {_and: [{year: {_eq: $year}}, {category: {_eq: $category}}, {subcategory: $subcategory}, {type: $type}]}
  ) {
    id
    data
  }
}
    `;

/**
 * __useGetDatasetsQuery__
 *
 * To run a query within a React component, call `useGetDatasetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDatasetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDatasetsQuery({
 *   variables: {
 *      year: // value for 'year'
 *      category: // value for 'category'
 *      subcategory: // value for 'subcategory'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetDatasetsQuery(baseOptions: Apollo.QueryHookOptions<GetDatasetsQuery, GetDatasetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDatasetsQuery, GetDatasetsQueryVariables>(GetDatasetsDocument, options);
      }
export function useGetDatasetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDatasetsQuery, GetDatasetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDatasetsQuery, GetDatasetsQueryVariables>(GetDatasetsDocument, options);
        }
export type GetDatasetsQueryHookResult = ReturnType<typeof useGetDatasetsQuery>;
export type GetDatasetsLazyQueryHookResult = ReturnType<typeof useGetDatasetsLazyQuery>;
export type GetDatasetsQueryResult = Apollo.QueryResult<GetDatasetsQuery, GetDatasetsQueryVariables>;
export const GetProductOptionsDocument = gql`
    query getProductOptions {
  Products(
    distinct_on: [year, subcategory, manufacturer, brand, series, type, parallel, insert, memorabilia]
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

/**
 * __useGetProductOptionsQuery__
 *
 * To run a query within a React component, call `useGetProductOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductOptionsQuery, GetProductOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductOptionsQuery, GetProductOptionsQueryVariables>(GetProductOptionsDocument, options);
      }
export function useGetProductOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductOptionsQuery, GetProductOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductOptionsQuery, GetProductOptionsQueryVariables>(GetProductOptionsDocument, options);
        }
export type GetProductOptionsQueryHookResult = ReturnType<typeof useGetProductOptionsQuery>;
export type GetProductOptionsLazyQueryHookResult = ReturnType<typeof useGetProductOptionsLazyQuery>;
export type GetProductOptionsQueryResult = Apollo.QueryResult<GetProductOptionsQuery, GetProductOptionsQueryVariables>;
export const GetHitOptionsDocument = gql`
    query getHitOptions {
  Hits(distinct_on: [parallel, memorabilia, insert]) {
    parallel
    memorabilia
    insert
  }
}
    `;

/**
 * __useGetHitOptionsQuery__
 *
 * To run a query within a React component, call `useGetHitOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHitOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHitOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHitOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetHitOptionsQuery, GetHitOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHitOptionsQuery, GetHitOptionsQueryVariables>(GetHitOptionsDocument, options);
      }
export function useGetHitOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHitOptionsQuery, GetHitOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHitOptionsQuery, GetHitOptionsQueryVariables>(GetHitOptionsDocument, options);
        }
export type GetHitOptionsQueryHookResult = ReturnType<typeof useGetHitOptionsQuery>;
export type GetHitOptionsLazyQueryHookResult = ReturnType<typeof useGetHitOptionsLazyQuery>;
export type GetHitOptionsQueryResult = Apollo.QueryResult<GetHitOptionsQuery, GetHitOptionsQueryVariables>;
export const GetEventByIdDocument = gql`
    subscription GetEventById($id: uuid!) {
  Events_by_pk(id: $id) {
    id
    title
    start_time
    publishing_token
    stream_name
    description
    status
    image
    User {
      id
      first_name
      last_name
      username
    }
    Breaks(where: {archived: {_eq: false}}, order_by: {created_at: asc}) {
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
      result
      datasets {
        data
      }
      BreakProductItems_aggregate(where: {order_id: {_is_null: true}}) {
        aggregate {
          count
        }
      }
      BreakProductItems(order_by: {title: asc}) {
        id
        title
        price
        bc_product_id
        Order {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetEventByIdSubscription__
 *
 * To run a query within a React component, call `useGetEventByIdSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetEventByIdSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventByIdSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventByIdSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetEventByIdSubscription, GetEventByIdSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetEventByIdSubscription, GetEventByIdSubscriptionVariables>(GetEventByIdDocument, options);
      }
export type GetEventByIdSubscriptionHookResult = ReturnType<typeof useGetEventByIdSubscription>;
export type GetEventByIdSubscriptionResult = Apollo.SubscriptionResult<GetEventByIdSubscription>;