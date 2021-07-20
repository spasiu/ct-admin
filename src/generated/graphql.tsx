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
  jsonb: any;
  numeric: any;
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
  state_provice_region: Scalars['String'];
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
  /** on conflict condition */
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
  state_provice_region?: Maybe<String_Comparison_Exp>;
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
  state_provice_region?: Maybe<Scalars['String']>;
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
  state_provice_region?: Maybe<Scalars['String']>;
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
  state_provice_region?: Maybe<Order_By>;
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
  state_provice_region?: Maybe<Scalars['String']>;
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
  state_provice_region?: Maybe<Order_By>;
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

/** on conflict condition type for table "Addresses" */
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
  state_provice_region?: Maybe<Order_By>;
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
  StateProviceRegion = 'state_provice_region',
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
  state_provice_region?: Maybe<Scalars['String']>;
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
  StateProviceRegion = 'state_provice_region',
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
  bc_product_id: Scalars['Int'];
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
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
  /** on conflict condition */
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
  _and?: Maybe<Array<BreakProductItems_Bool_Exp>>;
  _not?: Maybe<BreakProductItems_Bool_Exp>;
  _or?: Maybe<Array<BreakProductItems_Bool_Exp>>;
  bc_product_id?: Maybe<Int_Comparison_Exp>;
  bc_variant_id?: Maybe<Int_Comparison_Exp>;
  break_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
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
  bc_product_id?: Maybe<Scalars['Int']>;
  bc_variant_id?: Maybe<Scalars['Int']>;
  break_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
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

/** on conflict condition type for table "BreakProductItems" */
export type BreakProductItems_On_Conflict = {
  constraint: BreakProductItems_Constraint;
  update_columns?: Array<BreakProductItems_Update_Column>;
  where?: Maybe<BreakProductItems_Bool_Exp>;
};

/** Ordering options when selecting data from "BreakProductItems". */
export type BreakProductItems_Order_By = {
  Break?: Maybe<Breaks_Order_By>;
  bc_product_id?: Maybe<Order_By>;
  bc_variant_id?: Maybe<Order_By>;
  break_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<BreakerProfiles_On_Conflict>;
};

/** on conflict condition type for table "BreakerProfiles" */
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
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** An object relationship */
  break_status: Break_Status;
  break_type: Break_Type_Enum;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  event_id: Scalars['uuid'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
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
export type BreaksLine_ItemsArgs = {
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
  line_items?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Breaks" */
export type Breaks_Arr_Rel_Insert_Input = {
  data: Array<Breaks_Insert_Input>;
  /** on conflict condition */
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
  Inventory?: Maybe<Inventory_Bool_Exp>;
  _and?: Maybe<Array<Breaks_Bool_Exp>>;
  _not?: Maybe<Breaks_Bool_Exp>;
  _or?: Maybe<Array<Breaks_Bool_Exp>>;
  break_status?: Maybe<Break_Status_Bool_Exp>;
  break_type?: Maybe<Break_Type_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  event_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  line_items?: Maybe<Jsonb_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
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
  line_items?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Breaks_Delete_Elem_Input = {
  line_items?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Breaks_Delete_Key_Input = {
  line_items?: Maybe<Scalars['String']>;
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
  Inventory?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  break_status?: Maybe<Break_Status_Obj_Rel_Insert_Input>;
  break_type?: Maybe<Break_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Breaks_On_Conflict>;
};

/** on conflict condition type for table "Breaks" */
export type Breaks_On_Conflict = {
  constraint: Breaks_Constraint;
  update_columns?: Array<Breaks_Update_Column>;
  where?: Maybe<Breaks_Bool_Exp>;
};

/** Ordering options when selecting data from "Breaks". */
export type Breaks_Order_By = {
  BreakProductItems_aggregate?: Maybe<BreakProductItems_Aggregate_Order_By>;
  Event?: Maybe<Events_Order_By>;
  Inventory_aggregate?: Maybe<Inventory_Aggregate_Order_By>;
  break_status?: Maybe<Break_Status_Order_By>;
  break_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  line_items?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
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
  line_items?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "Breaks" */
export enum Breaks_Select_Column {
  /** column name */
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
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
  break_type?: Maybe<Break_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  line_items?: Maybe<Scalars['jsonb']>;
  price?: Maybe<Scalars['numeric']>;
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
  BreakType = 'break_type',
  /** column name */
  CreatedAt = 'created_at',
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

/** columns and relationships of "Events" */
export type Events = {
  __typename?: 'Events';
  /** An array relationship */
  Breaks: Array<Breaks>;
  /** An aggregate relationship */
  Breaks_aggregate: Breaks_Aggregate;
  /** An object relationship */
  User: Users;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  event_status: Event_Status;
  id: Scalars['uuid'];
  image: Scalars['String'];
  start_time: Scalars['timestamptz'];
  status: Event_Status_Enum;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
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
  /** on conflict condition */
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  Breaks?: Maybe<Breaks_Bool_Exp>;
  User?: Maybe<Users_Bool_Exp>;
  _and?: Maybe<Array<Events_Bool_Exp>>;
  _not?: Maybe<Events_Bool_Exp>;
  _or?: Maybe<Array<Events_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  event_status?: Maybe<Event_Status_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  start_time?: Maybe<Timestamptz_Comparison_Exp>;
  status?: Maybe<Event_Status_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Events" */
export enum Events_Constraint {
  /** unique or primary key constraint */
  EventsPkey = 'Events_pkey'
}

/** input type for inserting data into table "Events" */
export type Events_Insert_Input = {
  Breaks?: Maybe<Breaks_Arr_Rel_Insert_Input>;
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_status?: Maybe<Event_Status_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Event_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'Events_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Events" */
export type Events_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'Events_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Events" */
export type Events_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Events_On_Conflict>;
};

/** on conflict condition type for table "Events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: Maybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "Events". */
export type Events_Order_By = {
  Breaks_aggregate?: Maybe<Breaks_Aggregate_Order_By>;
  User?: Maybe<Users_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  event_status?: Maybe<Event_Status_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: Events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Events" */
export enum Events_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Events" */
export type Events_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Event_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "Events" */
export enum Events_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "ExtensibleValues" */
export type ExtensibleValues = {
  __typename?: 'ExtensibleValues';
  field: Scalars['String'];
  id: Scalars['uuid'];
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
  id?: Maybe<Uuid_Comparison_Exp>;
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
  id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ExtensibleValues_Max_Fields = {
  __typename?: 'ExtensibleValues_max_fields';
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ExtensibleValues_Min_Fields = {
  __typename?: 'ExtensibleValues_min_fields';
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
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

/** on conflict condition type for table "ExtensibleValues" */
export type ExtensibleValues_On_Conflict = {
  constraint: ExtensibleValues_Constraint;
  update_columns?: Array<ExtensibleValues_Update_Column>;
  where?: Maybe<ExtensibleValues_Bool_Exp>;
};

/** Ordering options when selecting data from "ExtensibleValues". */
export type ExtensibleValues_Order_By = {
  field?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: ExtensibleValues */
export type ExtensibleValues_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ExtensibleValues" */
export enum ExtensibleValues_Select_Column {
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "ExtensibleValues" */
export type ExtensibleValues_Set_Input = {
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "ExtensibleValues" */
export enum ExtensibleValues_Update_Column {
  /** column name */
  Field = 'field',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

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
  /** on conflict condition */
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

/** on conflict condition type for table "Inventory" */
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
  /** on conflict condition */
  on_conflict?: Maybe<Notifications_On_Conflict>;
};

/** on conflict condition type for table "Notifications" */
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

/** columns and relationships of "Products" */
export type Products = {
  __typename?: 'Products';
  /** An array relationship */
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  autograph?: Maybe<Scalars['Boolean']>;
  available: Scalars['Boolean'];
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand: Scalars['String'];
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['numeric']>;
  grader?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image: Scalars['String'];
  insert?: Maybe<Scalars['String']>;
  manufacturer: Scalars['String'];
  memoribillia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  paralell?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  unit: Unit_Of_Measure;
  unit_of_measure: Unit_Of_Measure_Enum;
  updated_at: Scalars['timestamptz'];
  year: Scalars['String'];
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
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'Products_avg_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Products" */
export type Products_Avg_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  Inventory?: Maybe<Inventory_Bool_Exp>;
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  autograph?: Maybe<Boolean_Comparison_Exp>;
  available?: Maybe<Boolean_Comparison_Exp>;
  boxes_per_case?: Maybe<Int_Comparison_Exp>;
  brand?: Maybe<String_Comparison_Exp>;
  card_number?: Maybe<String_Comparison_Exp>;
  cards_per_pack?: Maybe<Int_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  grade?: Maybe<Numeric_Comparison_Exp>;
  grader?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  insert?: Maybe<String_Comparison_Exp>;
  manufacturer?: Maybe<String_Comparison_Exp>;
  memoribillia?: Maybe<String_Comparison_Exp>;
  numbered?: Maybe<Int_Comparison_Exp>;
  packs_per_box?: Maybe<Int_Comparison_Exp>;
  paralell?: Maybe<String_Comparison_Exp>;
  player?: Maybe<String_Comparison_Exp>;
  rookie_card?: Maybe<Boolean_Comparison_Exp>;
  series?: Maybe<String_Comparison_Exp>;
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
  grade?: Maybe<Scalars['numeric']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Products" */
export type Products_Insert_Input = {
  Inventory?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  autograph?: Maybe<Scalars['Boolean']>;
  available?: Maybe<Scalars['Boolean']>;
  boxes_per_case?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
  card_number?: Maybe<Scalars['String']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['numeric']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memoribillia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  paralell?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
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
  grade?: Maybe<Scalars['numeric']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memoribillia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  paralell?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
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
  image?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memoribillia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  paralell?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
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
  grade?: Maybe<Scalars['numeric']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memoribillia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  paralell?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
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
  image?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memoribillia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  paralell?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "Products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "Products". */
export type Products_Order_By = {
  Inventory_aggregate?: Maybe<Inventory_Aggregate_Order_By>;
  autograph?: Maybe<Order_By>;
  available?: Maybe<Order_By>;
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
  image?: Maybe<Order_By>;
  insert?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  memoribillia?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
  paralell?: Maybe<Order_By>;
  player?: Maybe<Order_By>;
  rookie_card?: Maybe<Order_By>;
  series?: Maybe<Order_By>;
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
  Image = 'image',
  /** column name */
  Insert = 'insert',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Memoribillia = 'memoribillia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  PacksPerBox = 'packs_per_box',
  /** column name */
  Paralell = 'paralell',
  /** column name */
  Player = 'player',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  Series = 'series',
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
  grade?: Maybe<Scalars['numeric']>;
  grader?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  insert?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  memoribillia?: Maybe<Scalars['String']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
  paralell?: Maybe<Scalars['String']>;
  player?: Maybe<Scalars['String']>;
  rookie_card?: Maybe<Scalars['Boolean']>;
  series?: Maybe<Scalars['String']>;
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
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Products" */
export type Products_Stddev_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'Products_stddev_pop_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Products" */
export type Products_Stddev_Pop_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'Products_stddev_samp_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Products" */
export type Products_Stddev_Samp_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'Products_sum_fields';
  boxes_per_case?: Maybe<Scalars['Int']>;
  cards_per_pack?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['numeric']>;
  numbered?: Maybe<Scalars['Int']>;
  packs_per_box?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Products" */
export type Products_Sum_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
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
  Image = 'image',
  /** column name */
  Insert = 'insert',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Memoribillia = 'memoribillia',
  /** column name */
  Numbered = 'numbered',
  /** column name */
  PacksPerBox = 'packs_per_box',
  /** column name */
  Paralell = 'paralell',
  /** column name */
  Player = 'player',
  /** column name */
  RookieCard = 'rookie_card',
  /** column name */
  Series = 'series',
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
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Products" */
export type Products_Var_Pop_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'Products_var_samp_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Products" */
export type Products_Var_Samp_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'Products_variance_fields';
  boxes_per_case?: Maybe<Scalars['Float']>;
  cards_per_pack?: Maybe<Scalars['Float']>;
  grade?: Maybe<Scalars['Float']>;
  numbered?: Maybe<Scalars['Float']>;
  packs_per_box?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Products" */
export type Products_Variance_Order_By = {
  boxes_per_case?: Maybe<Order_By>;
  cards_per_pack?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  numbered?: Maybe<Order_By>;
  packs_per_box?: Maybe<Order_By>;
};

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

/** columns and relationships of "UserPreferences" */
export type UserPreferences = {
  __typename?: 'UserPreferences';
  /** An object relationship */
  User: Users;
  break_type: Scalars['_text'];
  created_at: Scalars['timestamptz'];
  frequency: Scalars['String'];
  id: Scalars['uuid'];
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
  id?: Maybe<Uuid_Comparison_Exp>;
  pricing?: Maybe<_Text_Comparison_Exp>;
  sports?: Maybe<_Text_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserPreferences" */
export enum UserPreferences_Constraint {
  /** unique or primary key constraint */
  UserPreferencesPkey = 'UserPreferences_pkey',
  /** unique or primary key constraint */
  UserPreferencesUserIdKey = 'UserPreferences_user_id_key'
}

/** input type for inserting data into table "UserPreferences" */
export type UserPreferences_Insert_Input = {
  User?: Maybe<Users_Obj_Rel_Insert_Input>;
  break_type?: Maybe<Scalars['_text']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
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
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserPreferences_Min_Fields = {
  __typename?: 'UserPreferences_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<UserPreferences_On_Conflict>;
};

/** on conflict condition type for table "UserPreferences" */
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
  id?: Maybe<Order_By>;
  pricing?: Maybe<Order_By>;
  sports?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: UserPreferences */
export type UserPreferences_Pk_Columns_Input = {
  id: Scalars['uuid'];
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
  Id = 'id',
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
  id?: Maybe<Scalars['uuid']>;
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
  Id = 'id',
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
  BreakerProfile: BreakerProfiles;
  /** An array relationship */
  Events: Array<Events>;
  /** An aggregate relationship */
  Events_aggregate: Events_Aggregate;
  /** An object relationship */
  Notification: Notifications;
  /** An object relationship */
  UserPreference: UserPreferences;
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  is_breaker: Scalars['Boolean'];
  last_name: Scalars['String'];
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

/** aggregated selection of "Users" */
export type Users_Aggregate = {
  __typename?: 'Users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "Users" */
export type Users_Aggregate_Fields = {
  __typename?: 'Users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "Users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  Addresses?: Maybe<Addresses_Bool_Exp>;
  BreakerProfile?: Maybe<BreakerProfiles_Bool_Exp>;
  Events?: Maybe<Events_Bool_Exp>;
  Notification?: Maybe<Notifications_Bool_Exp>;
  UserPreference?: Maybe<UserPreferences_Bool_Exp>;
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  is_breaker?: Maybe<Boolean_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
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

/** input type for inserting data into table "Users" */
export type Users_Insert_Input = {
  Addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  BreakerProfile?: Maybe<BreakerProfiles_Obj_Rel_Insert_Input>;
  Events?: Maybe<Events_Arr_Rel_Insert_Input>;
  Notification?: Maybe<Notifications_Obj_Rel_Insert_Input>;
  UserPreference?: Maybe<UserPreferences_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_breaker?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_role?: Maybe<User_Role_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'Users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'Users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "Users" */
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
  Notification?: Maybe<Notifications_Order_By>;
  UserPreference?: Maybe<UserPreferences_Order_By>;
  created_at?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  is_breaker?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
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
  CreatedAt = 'created_at',
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
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "Users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_breaker?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "Users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
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
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}


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
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Live = 'LIVE',
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
  /** on conflict condition */
  on_conflict?: Maybe<Break_Status_On_Conflict>;
};

/** on conflict condition type for table "break_status" */
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
  /** on conflict condition */
  on_conflict?: Maybe<Break_Type_On_Conflict>;
};

/** on conflict condition type for table "break_type" */
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
  /** on conflict condition */
  on_conflict?: Maybe<Event_Status_On_Conflict>;
};

/** on conflict condition type for table "event_status" */
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


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
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
  /** delete data from the table: "Events" */
  delete_Events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "Events" */
  delete_Events_by_pk?: Maybe<Events>;
  /** delete data from the table: "ExtensibleValues" */
  delete_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** delete single row from the table: "ExtensibleValues" */
  delete_ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** delete data from the table: "Inventory" */
  delete_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** delete single row from the table: "Inventory" */
  delete_Inventory_by_pk?: Maybe<Inventory>;
  /** delete data from the table: "Notifications" */
  delete_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "Notifications" */
  delete_Notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "Products" */
  delete_Products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "Products" */
  delete_Products_by_pk?: Maybe<Products>;
  /** delete data from the table: "UserPreferences" */
  delete_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** delete single row from the table: "UserPreferences" */
  delete_UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** delete data from the table: "Users" */
  delete_Users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "Users" */
  delete_Users_by_pk?: Maybe<Users>;
  /** delete data from the table: "break_status" */
  delete_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** delete single row from the table: "break_status" */
  delete_break_status_by_pk?: Maybe<Break_Status>;
  /** delete data from the table: "break_type" */
  delete_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** delete single row from the table: "break_type" */
  delete_break_type_by_pk?: Maybe<Break_Type>;
  /** delete data from the table: "event_status" */
  delete_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** delete single row from the table: "event_status" */
  delete_event_status_by_pk?: Maybe<Event_Status>;
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
  /** insert data into the table: "Events" */
  insert_Events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "Events" */
  insert_Events_one?: Maybe<Events>;
  /** insert data into the table: "ExtensibleValues" */
  insert_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** insert a single row into the table: "ExtensibleValues" */
  insert_ExtensibleValues_one?: Maybe<ExtensibleValues>;
  /** insert data into the table: "Inventory" */
  insert_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** insert a single row into the table: "Inventory" */
  insert_Inventory_one?: Maybe<Inventory>;
  /** insert data into the table: "Notifications" */
  insert_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "Notifications" */
  insert_Notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "Products" */
  insert_Products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "Products" */
  insert_Products_one?: Maybe<Products>;
  /** insert data into the table: "UserPreferences" */
  insert_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** insert a single row into the table: "UserPreferences" */
  insert_UserPreferences_one?: Maybe<UserPreferences>;
  /** insert data into the table: "Users" */
  insert_Users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "Users" */
  insert_Users_one?: Maybe<Users>;
  /** insert data into the table: "break_status" */
  insert_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** insert a single row into the table: "break_status" */
  insert_break_status_one?: Maybe<Break_Status>;
  /** insert data into the table: "break_type" */
  insert_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** insert a single row into the table: "break_type" */
  insert_break_type_one?: Maybe<Break_Type>;
  /** insert data into the table: "event_status" */
  insert_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** insert a single row into the table: "event_status" */
  insert_event_status_one?: Maybe<Event_Status>;
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
  /** update data of the table: "Events" */
  update_Events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "Events" */
  update_Events_by_pk?: Maybe<Events>;
  /** update data of the table: "ExtensibleValues" */
  update_ExtensibleValues?: Maybe<ExtensibleValues_Mutation_Response>;
  /** update single row of the table: "ExtensibleValues" */
  update_ExtensibleValues_by_pk?: Maybe<ExtensibleValues>;
  /** update data of the table: "Inventory" */
  update_Inventory?: Maybe<Inventory_Mutation_Response>;
  /** update single row of the table: "Inventory" */
  update_Inventory_by_pk?: Maybe<Inventory>;
  /** update data of the table: "Notifications" */
  update_Notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "Notifications" */
  update_Notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "Products" */
  update_Products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "Products" */
  update_Products_by_pk?: Maybe<Products>;
  /** update data of the table: "UserPreferences" */
  update_UserPreferences?: Maybe<UserPreferences_Mutation_Response>;
  /** update single row of the table: "UserPreferences" */
  update_UserPreferences_by_pk?: Maybe<UserPreferences>;
  /** update data of the table: "Users" */
  update_Users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "Users" */
  update_Users_by_pk?: Maybe<Users>;
  /** update data of the table: "break_status" */
  update_break_status?: Maybe<Break_Status_Mutation_Response>;
  /** update single row of the table: "break_status" */
  update_break_status_by_pk?: Maybe<Break_Status>;
  /** update data of the table: "break_type" */
  update_break_type?: Maybe<Break_Type_Mutation_Response>;
  /** update single row of the table: "break_type" */
  update_break_type_by_pk?: Maybe<Break_Type>;
  /** update data of the table: "event_status" */
  update_event_status?: Maybe<Event_Status_Mutation_Response>;
  /** update single row of the table: "event_status" */
  update_event_status_by_pk?: Maybe<Event_Status>;
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
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
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
export type Mutation_RootDelete_UserPreferencesArgs = {
  where: UserPreferences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserPreferences_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Event_StatusArgs = {
  where: Event_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_Status_By_PkArgs = {
  value: Scalars['String'];
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
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "Inventory" using primary key columns */
  Inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "Notifications" */
  Notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "Notifications" */
  Notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "Notifications" using primary key columns */
  Notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  Products: Array<Products>;
  /** An aggregate relationship */
  Products_aggregate: Products_Aggregate;
  /** fetch data from the table: "Products" using primary key columns */
  Products_by_pk?: Maybe<Products>;
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
  /** fetch data from the table: "event_status" */
  event_status: Array<Event_Status>;
  /** fetch aggregated fields from the table: "event_status" */
  event_status_aggregate: Event_Status_Aggregate;
  /** fetch data from the table: "event_status" using primary key columns */
  event_status_by_pk?: Maybe<Event_Status>;
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
  id: Scalars['uuid'];
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
  Inventory: Array<Inventory>;
  /** An aggregate relationship */
  Inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "Inventory" using primary key columns */
  Inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "Notifications" */
  Notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "Notifications" */
  Notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "Notifications" using primary key columns */
  Notifications_by_pk?: Maybe<Notifications>;
  /** An array relationship */
  Products: Array<Products>;
  /** An aggregate relationship */
  Products_aggregate: Products_Aggregate;
  /** fetch data from the table: "Products" using primary key columns */
  Products_by_pk?: Maybe<Products>;
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
  /** fetch data from the table: "event_status" */
  event_status: Array<Event_Status>;
  /** fetch aggregated fields from the table: "event_status" */
  event_status_aggregate: Event_Status_Aggregate;
  /** fetch data from the table: "event_status" using primary key columns */
  event_status_by_pk?: Maybe<Event_Status>;
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
  id: Scalars['uuid'];
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
  /** on conflict condition */
  on_conflict?: Maybe<Unit_Of_Measure_On_Conflict>;
};

/** on conflict condition type for table "unit_of_measure" */
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
  /** on conflict condition */
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** on conflict condition type for table "user_role" */
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

export type DeleteEventByIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type DeleteEventByIdsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Events?: Maybe<(
    { __typename?: 'Events_mutation_response' }
    & Pick<Events_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteEventsAndBreaksByEventIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type DeleteEventsAndBreaksByEventIdsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & Pick<Breaks_Mutation_Response, 'affected_rows'>
  )>, delete_Events?: Maybe<(
    { __typename?: 'Events_mutation_response' }
    & Pick<Events_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertBreakMutationVariables = Exact<{
  data: Breaks_Insert_Input;
}>;


export type InsertBreakMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Breaks_one?: Maybe<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'event_id' | 'title' | 'description' | 'spots' | 'teams_per_spot' | 'break_type' | 'price' | 'image'>
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

export type DeleteBreakByIdsMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type DeleteBreakByIdsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Breaks?: Maybe<(
    { __typename?: 'Breaks_mutation_response' }
    & Pick<Breaks_Mutation_Response, 'affected_rows'>
  )> }
);

export type ArchiveBreaksByIdMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ArchiveBreaksByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_BreakProductItems?: Maybe<(
    { __typename?: 'BreakProductItems_mutation_response' }
    & Pick<BreakProductItems_Mutation_Response, 'affected_rows'>
  )>, update_Inventory?: Maybe<(
    { __typename?: 'Inventory_mutation_response' }
    & Pick<Inventory_Mutation_Response, 'affected_rows'>
  )>, delete_Breaks?: Maybe<(
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
    & Pick<Products, 'id'>
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
    & Pick<Products, 'id'>
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

export type InsertInventoryMutationVariables = Exact<{
  inventory: Array<Inventory_Insert_Input> | Inventory_Insert_Input;
}>;


export type InsertInventoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Inventory?: Maybe<(
    { __typename?: 'Inventory_mutation_response' }
    & Pick<Inventory_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateInventoryBreakMutationVariables = Exact<{
  ids?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
  breakId: Scalars['uuid'];
}>;


export type UpdateInventoryBreakMutation = (
  { __typename?: 'mutation_root' }
  & { update_Inventory?: Maybe<(
    { __typename?: 'Inventory_mutation_response' }
    & Pick<Inventory_Mutation_Response, 'affected_rows'>
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

export type GetProductsQueryVariables = Exact<{
  unitOfMeasure?: Maybe<Array<Unit_Of_Measure_Enum> | Unit_Of_Measure_Enum>;
  input?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'query_root' }
  & { Products: Array<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'unit_of_measure' | 'description' | 'year' | 'manufacturer' | 'brand' | 'series' | 'category' | 'type' | 'boxes_per_case' | 'packs_per_box' | 'cards_per_pack' | 'card_number' | 'player' | 'paralell' | 'insert' | 'rookie_card' | 'memoribillia' | 'autograph' | 'numbered' | 'grader' | 'grade' | 'available'>
    & { totalCost: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'Inventory_sum_fields' }
          & Pick<Inventory_Sum_Fields, 'cost_basis'>
        )> }
      )> }
    ), averageCost: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & { avg?: Maybe<(
          { __typename?: 'Inventory_avg_fields' }
          & Pick<Inventory_Avg_Fields, 'cost_basis'>
        )> }
      )> }
    ), unassignedCount: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & Pick<Inventory_Aggregate_Fields, 'count'>
      )> }
    ), assignedCount: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & Pick<Inventory_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetProductByIdQuery = (
  { __typename?: 'query_root' }
  & { Products_by_pk?: Maybe<(
    { __typename?: 'Products' }
    & Pick<Products, 'id' | 'unit_of_measure' | 'description' | 'year' | 'manufacturer' | 'brand' | 'series' | 'category' | 'type' | 'boxes_per_case' | 'packs_per_box' | 'cards_per_pack' | 'card_number' | 'player' | 'paralell' | 'insert' | 'rookie_card' | 'memoribillia' | 'autograph' | 'numbered' | 'grader' | 'grade' | 'available'>
    & { Inventory: Array<(
      { __typename?: 'Inventory' }
      & Pick<Inventory, 'id' | 'location' | 'supplier' | 'purchase_date' | 'cost_basis'>
      & { Break?: Maybe<(
        { __typename?: 'Breaks' }
        & Pick<Breaks, 'id' | 'title'>
      )> }
    )>, totalCost: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & { sum?: Maybe<(
          { __typename?: 'Inventory_sum_fields' }
          & Pick<Inventory_Sum_Fields, 'cost_basis'>
        )> }
      )> }
    ), averageCost: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & { avg?: Maybe<(
          { __typename?: 'Inventory_avg_fields' }
          & Pick<Inventory_Avg_Fields, 'cost_basis'>
        )> }
      )> }
    ), unassignedCount: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & Pick<Inventory_Aggregate_Fields, 'count'>
      )> }
    ), assignedCount: (
      { __typename?: 'Inventory_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Inventory_aggregate_fields' }
        & Pick<Inventory_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type GetInventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInventoryQuery = (
  { __typename?: 'query_root' }
  & { Inventory: Array<(
    { __typename?: 'Inventory' }
    & Pick<Inventory, 'id' | 'location' | 'break_id'>
    & { Product: (
      { __typename?: 'Products' }
      & Pick<Products, 'id' | 'description' | 'category' | 'manufacturer' | 'brand' | 'type' | 'year'>
    ) }
  )> }
);

export type GetUnassignedInventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnassignedInventoryQuery = (
  { __typename?: 'query_root' }
  & { Inventory: Array<(
    { __typename?: 'Inventory' }
    & Pick<Inventory, 'id' | 'location' | 'break_id'>
    & { Product: (
      { __typename?: 'Products' }
      & Pick<Products, 'id' | 'description' | 'category' | 'manufacturer' | 'brand' | 'type' | 'year'>
    ) }
  )> }
);

export type GetInventoryByProdIdQueryVariables = Exact<{
  prod_id: Scalars['uuid'];
}>;


export type GetInventoryByProdIdQuery = (
  { __typename?: 'query_root' }
  & { Inventory: Array<(
    { __typename?: 'Inventory' }
    & Pick<Inventory, 'id' | 'cost_basis'>
    & { Break?: Maybe<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id'>
      & { Event: (
        { __typename?: 'Events' }
        & Pick<Events, 'id'>
      ) }
    )>, Product: (
      { __typename?: 'Products' }
      & Pick<Products, 'id' | 'unit_of_measure' | 'category' | 'manufacturer' | 'brand' | 'type' | 'year'>
    ) }
  )> }
);

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = (
  { __typename?: 'query_root' }
  & { Events: Array<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title' | 'start_time' | 'description' | 'status' | 'image'>
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

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetEventByIdQuery = (
  { __typename?: 'query_root' }
  & { Events_by_pk?: Maybe<(
    { __typename?: 'Events' }
    & Pick<Events, 'id' | 'title' | 'start_time' | 'description' | 'status' | 'image'>
    & { User: (
      { __typename?: 'Users' }
      & Pick<Users, 'id' | 'first_name' | 'last_name'>
    ), Breaks: Array<(
      { __typename?: 'Breaks' }
      & Pick<Breaks, 'id' | 'title' | 'break_type' | 'price' | 'spots' | 'description' | 'teams_per_spot' | 'image' | 'line_items'>
      & { Inventory: Array<(
        { __typename?: 'Inventory' }
        & Pick<Inventory, 'id' | 'location'>
        & { Product: (
          { __typename?: 'Products' }
          & Pick<Products, 'id' | 'description'>
        ) }
      )>, BreakProductItems: Array<(
        { __typename?: 'BreakProductItems' }
        & Pick<BreakProductItems, 'id' | 'title' | 'price'>
      )> }
    )> }
  )> }
);

export type GetBreakByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBreakByIdQuery = (
  { __typename?: 'query_root' }
  & { Breaks_by_pk?: Maybe<(
    { __typename?: 'Breaks' }
    & Pick<Breaks, 'id' | 'image' | 'break_type' | 'description' | 'price' | 'spots' | 'status' | 'teams_per_spot' | 'title'>
    & { Event: (
      { __typename?: 'Events' }
      & Pick<Events, 'id' | 'title' | 'start_time' | 'description'>
      & { User: (
        { __typename?: 'Users' }
        & Pick<Users, 'id' | 'first_name' | 'last_name'>
      ) }
    ), Inventory: Array<(
      { __typename?: 'Inventory' }
      & Pick<Inventory, 'id'>
      & { Product: (
        { __typename?: 'Products' }
        & Pick<Products, 'id' | 'description'>
      ) }
    )>, BreakProductItems: Array<(
      { __typename?: 'BreakProductItems' }
      & Pick<BreakProductItems, 'id' | 'title' | 'price'>
    )> }
  )> }
);

export type GetExtensibleValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExtensibleValuesQuery = (
  { __typename?: 'query_root' }
  & { ExtensibleValues: Array<(
    { __typename?: 'ExtensibleValues' }
    & Pick<ExtensibleValues, 'id' | 'field' | 'value'>
  )> }
);

export type GetFilteredExtensibleValuesQueryVariables = Exact<{
  fields: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetFilteredExtensibleValuesQuery = (
  { __typename?: 'query_root' }
  & { ExtensibleValues: Array<(
    { __typename?: 'ExtensibleValues' }
    & Pick<ExtensibleValues, 'id' | 'value' | 'field'>
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
export const DeleteEventByIdsDocument = gql`
    mutation DeleteEventByIds($ids: [uuid!]) {
  delete_Events(where: {id: {_in: $ids}}) {
    affected_rows
  }
}
    `;
export type DeleteEventByIdsMutationFn = Apollo.MutationFunction<DeleteEventByIdsMutation, DeleteEventByIdsMutationVariables>;

/**
 * __useDeleteEventByIdsMutation__
 *
 * To run a mutation, you first call `useDeleteEventByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventByIdsMutation, { data, loading, error }] = useDeleteEventByIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteEventByIdsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventByIdsMutation, DeleteEventByIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventByIdsMutation, DeleteEventByIdsMutationVariables>(DeleteEventByIdsDocument, options);
      }
export type DeleteEventByIdsMutationHookResult = ReturnType<typeof useDeleteEventByIdsMutation>;
export type DeleteEventByIdsMutationResult = Apollo.MutationResult<DeleteEventByIdsMutation>;
export type DeleteEventByIdsMutationOptions = Apollo.BaseMutationOptions<DeleteEventByIdsMutation, DeleteEventByIdsMutationVariables>;
export const DeleteEventsAndBreaksByEventIdsDocument = gql`
    mutation DeleteEventsAndBreaksByEventIds($ids: [uuid!]) {
  delete_Breaks(where: {Event: {id: {_in: $ids}}}) {
    affected_rows
  }
  delete_Events(where: {id: {_in: $ids}}) {
    affected_rows
  }
}
    `;
export type DeleteEventsAndBreaksByEventIdsMutationFn = Apollo.MutationFunction<DeleteEventsAndBreaksByEventIdsMutation, DeleteEventsAndBreaksByEventIdsMutationVariables>;

/**
 * __useDeleteEventsAndBreaksByEventIdsMutation__
 *
 * To run a mutation, you first call `useDeleteEventsAndBreaksByEventIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventsAndBreaksByEventIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventsAndBreaksByEventIdsMutation, { data, loading, error }] = useDeleteEventsAndBreaksByEventIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteEventsAndBreaksByEventIdsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventsAndBreaksByEventIdsMutation, DeleteEventsAndBreaksByEventIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventsAndBreaksByEventIdsMutation, DeleteEventsAndBreaksByEventIdsMutationVariables>(DeleteEventsAndBreaksByEventIdsDocument, options);
      }
export type DeleteEventsAndBreaksByEventIdsMutationHookResult = ReturnType<typeof useDeleteEventsAndBreaksByEventIdsMutation>;
export type DeleteEventsAndBreaksByEventIdsMutationResult = Apollo.MutationResult<DeleteEventsAndBreaksByEventIdsMutation>;
export type DeleteEventsAndBreaksByEventIdsMutationOptions = Apollo.BaseMutationOptions<DeleteEventsAndBreaksByEventIdsMutation, DeleteEventsAndBreaksByEventIdsMutationVariables>;
export const InsertBreakDocument = gql`
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
export const DeleteBreakByIdsDocument = gql`
    mutation DeleteBreakByIds($ids: [uuid!]) {
  delete_Breaks(where: {id: {_in: $ids}}) {
    affected_rows
  }
}
    `;
export type DeleteBreakByIdsMutationFn = Apollo.MutationFunction<DeleteBreakByIdsMutation, DeleteBreakByIdsMutationVariables>;

/**
 * __useDeleteBreakByIdsMutation__
 *
 * To run a mutation, you first call `useDeleteBreakByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBreakByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBreakByIdsMutation, { data, loading, error }] = useDeleteBreakByIdsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteBreakByIdsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBreakByIdsMutation, DeleteBreakByIdsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBreakByIdsMutation, DeleteBreakByIdsMutationVariables>(DeleteBreakByIdsDocument, options);
      }
export type DeleteBreakByIdsMutationHookResult = ReturnType<typeof useDeleteBreakByIdsMutation>;
export type DeleteBreakByIdsMutationResult = Apollo.MutationResult<DeleteBreakByIdsMutation>;
export type DeleteBreakByIdsMutationOptions = Apollo.BaseMutationOptions<DeleteBreakByIdsMutation, DeleteBreakByIdsMutationVariables>;
export const ArchiveBreaksByIdDocument = gql`
    mutation ArchiveBreaksById($ids: [uuid!]) {
  delete_BreakProductItems(where: {break_id: {_in: $ids}}) {
    affected_rows
  }
  update_Inventory(where: {break_id: {_in: $ids}}, _set: {break_id: null}) {
    affected_rows
  }
  delete_Breaks(where: {id: {_in: $ids}}) {
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
    id
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
    id
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
export const InsertInventoryDocument = gql`
    mutation InsertInventory($inventory: [Inventory_insert_input!]!) {
  insert_Inventory(objects: $inventory) {
    affected_rows
  }
}
    `;
export type InsertInventoryMutationFn = Apollo.MutationFunction<InsertInventoryMutation, InsertInventoryMutationVariables>;

/**
 * __useInsertInventoryMutation__
 *
 * To run a mutation, you first call `useInsertInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertInventoryMutation, { data, loading, error }] = useInsertInventoryMutation({
 *   variables: {
 *      inventory: // value for 'inventory'
 *   },
 * });
 */
export function useInsertInventoryMutation(baseOptions?: Apollo.MutationHookOptions<InsertInventoryMutation, InsertInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertInventoryMutation, InsertInventoryMutationVariables>(InsertInventoryDocument, options);
      }
export type InsertInventoryMutationHookResult = ReturnType<typeof useInsertInventoryMutation>;
export type InsertInventoryMutationResult = Apollo.MutationResult<InsertInventoryMutation>;
export type InsertInventoryMutationOptions = Apollo.BaseMutationOptions<InsertInventoryMutation, InsertInventoryMutationVariables>;
export const UpdateInventoryBreakDocument = gql`
    mutation UpdateInventoryBreak($ids: [uuid!], $breakId: uuid!) {
  update_Inventory(where: {id: {_in: $ids}}, _set: {break_id: $breakId}) {
    affected_rows
  }
}
    `;
export type UpdateInventoryBreakMutationFn = Apollo.MutationFunction<UpdateInventoryBreakMutation, UpdateInventoryBreakMutationVariables>;

/**
 * __useUpdateInventoryBreakMutation__
 *
 * To run a mutation, you first call `useUpdateInventoryBreakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInventoryBreakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInventoryBreakMutation, { data, loading, error }] = useUpdateInventoryBreakMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      breakId: // value for 'breakId'
 *   },
 * });
 */
export function useUpdateInventoryBreakMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInventoryBreakMutation, UpdateInventoryBreakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInventoryBreakMutation, UpdateInventoryBreakMutationVariables>(UpdateInventoryBreakDocument, options);
      }
export type UpdateInventoryBreakMutationHookResult = ReturnType<typeof useUpdateInventoryBreakMutation>;
export type UpdateInventoryBreakMutationResult = Apollo.MutationResult<UpdateInventoryBreakMutation>;
export type UpdateInventoryBreakMutationOptions = Apollo.BaseMutationOptions<UpdateInventoryBreakMutation, UpdateInventoryBreakMutationVariables>;
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
    type
    boxes_per_case
    packs_per_box
    cards_per_pack
    card_number
    player
    paralell
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
    unassignedCount: Inventory_aggregate(where: {break_id: {_is_null: true}}) {
      aggregate {
        count
      }
    }
    assignedCount: Inventory_aggregate(where: {break_id: {_is_null: false}}) {
      aggregate {
        count
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
    type
    boxes_per_case
    packs_per_box
    cards_per_pack
    card_number
    player
    paralell
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
    unassignedCount: Inventory_aggregate(where: {break_id: {_is_null: true}}) {
      aggregate {
        count
      }
    }
    assignedCount: Inventory_aggregate(where: {break_id: {_is_null: false}}) {
      aggregate {
        count
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
export const GetInventoryDocument = gql`
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

/**
 * __useGetInventoryQuery__
 *
 * To run a query within a React component, call `useGetInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInventoryQuery(baseOptions?: Apollo.QueryHookOptions<GetInventoryQuery, GetInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInventoryQuery, GetInventoryQueryVariables>(GetInventoryDocument, options);
      }
export function useGetInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInventoryQuery, GetInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInventoryQuery, GetInventoryQueryVariables>(GetInventoryDocument, options);
        }
export type GetInventoryQueryHookResult = ReturnType<typeof useGetInventoryQuery>;
export type GetInventoryLazyQueryHookResult = ReturnType<typeof useGetInventoryLazyQuery>;
export type GetInventoryQueryResult = Apollo.QueryResult<GetInventoryQuery, GetInventoryQueryVariables>;
export const GetUnassignedInventoryDocument = gql`
    query GetUnassignedInventory {
  Inventory(where: {break_id: {_is_null: true}}) {
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

/**
 * __useGetUnassignedInventoryQuery__
 *
 * To run a query within a React component, call `useGetUnassignedInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnassignedInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnassignedInventoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnassignedInventoryQuery(baseOptions?: Apollo.QueryHookOptions<GetUnassignedInventoryQuery, GetUnassignedInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnassignedInventoryQuery, GetUnassignedInventoryQueryVariables>(GetUnassignedInventoryDocument, options);
      }
export function useGetUnassignedInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnassignedInventoryQuery, GetUnassignedInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnassignedInventoryQuery, GetUnassignedInventoryQueryVariables>(GetUnassignedInventoryDocument, options);
        }
export type GetUnassignedInventoryQueryHookResult = ReturnType<typeof useGetUnassignedInventoryQuery>;
export type GetUnassignedInventoryLazyQueryHookResult = ReturnType<typeof useGetUnassignedInventoryLazyQuery>;
export type GetUnassignedInventoryQueryResult = Apollo.QueryResult<GetUnassignedInventoryQuery, GetUnassignedInventoryQueryVariables>;
export const GetInventoryByProdIdDocument = gql`
    query GetInventoryByProdId($prod_id: uuid!) {
  Inventory(where: {product_id: {_eq: $prod_id}}) {
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

/**
 * __useGetInventoryByProdIdQuery__
 *
 * To run a query within a React component, call `useGetInventoryByProdIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoryByProdIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoryByProdIdQuery({
 *   variables: {
 *      prod_id: // value for 'prod_id'
 *   },
 * });
 */
export function useGetInventoryByProdIdQuery(baseOptions: Apollo.QueryHookOptions<GetInventoryByProdIdQuery, GetInventoryByProdIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInventoryByProdIdQuery, GetInventoryByProdIdQueryVariables>(GetInventoryByProdIdDocument, options);
      }
export function useGetInventoryByProdIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInventoryByProdIdQuery, GetInventoryByProdIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInventoryByProdIdQuery, GetInventoryByProdIdQueryVariables>(GetInventoryByProdIdDocument, options);
        }
export type GetInventoryByProdIdQueryHookResult = ReturnType<typeof useGetInventoryByProdIdQuery>;
export type GetInventoryByProdIdLazyQueryHookResult = ReturnType<typeof useGetInventoryByProdIdLazyQuery>;
export type GetInventoryByProdIdQueryResult = Apollo.QueryResult<GetInventoryByProdIdQuery, GetInventoryByProdIdQueryVariables>;
export const GetEventsDocument = gql`
    query GetEvents {
  Events(order_by: {start_time: asc}) {
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
export const GetEventByIdDocument = gql`
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
    Breaks(order_by: {created_at: asc}) {
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

/**
 * __useGetEventByIdQuery__
 *
 * To run a query within a React component, call `useGetEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
      }
export function useGetEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
        }
export type GetEventByIdQueryHookResult = ReturnType<typeof useGetEventByIdQuery>;
export type GetEventByIdLazyQueryHookResult = ReturnType<typeof useGetEventByIdLazyQuery>;
export type GetEventByIdQueryResult = Apollo.QueryResult<GetEventByIdQuery, GetEventByIdQueryVariables>;
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
    BreakProductItems {
      id
      title
      price
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
export const GetExtensibleValuesDocument = gql`
    query GetExtensibleValues {
  ExtensibleValues(order_by: {field: asc, value: asc}) {
    id
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
    id
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