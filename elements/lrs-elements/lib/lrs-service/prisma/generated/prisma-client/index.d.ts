// Code generated by Prisma (prisma@1.29.0-beta.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  statement: (where?: StatementWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  statement: (where: StatementWhereUniqueInput) => StatementPromise;
  statements: (
    args?: {
      where?: StatementWhereInput;
      orderBy?: StatementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Statement>;
  statementsConnection: (
    args?: {
      where?: StatementWhereInput;
      orderBy?: StatementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => StatementConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createStatement: (data: StatementCreateInput) => StatementPromise;
  updateStatement: (
    args: { data: StatementUpdateInput; where: StatementWhereUniqueInput }
  ) => StatementPromise;
  updateManyStatements: (
    args: {
      data: StatementUpdateManyMutationInput;
      where?: StatementWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertStatement: (
    args: {
      where: StatementWhereUniqueInput;
      create: StatementCreateInput;
      update: StatementUpdateInput;
    }
  ) => StatementPromise;
  deleteStatement: (where: StatementWhereUniqueInput) => StatementPromise;
  deleteManyStatements: (where?: StatementWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  statement: (
    where?: StatementSubscriptionWhereInput
  ) => StatementSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type StatementOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "data_ASC"
  | "data_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface StatementCreateInput {
  data: Json;
}

export interface StatementUpdateInput {
  data?: Json;
}

export interface StatementUpdateManyMutationInput {
  data?: Json;
}

export interface StatementWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: StatementWhereInput[] | StatementWhereInput;
  OR?: StatementWhereInput[] | StatementWhereInput;
  NOT?: StatementWhereInput[] | StatementWhereInput;
}

export interface StatementSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: StatementWhereInput;
  AND?: StatementSubscriptionWhereInput[] | StatementSubscriptionWhereInput;
  OR?: StatementSubscriptionWhereInput[] | StatementSubscriptionWhereInput;
  NOT?: StatementSubscriptionWhereInput[] | StatementSubscriptionWhereInput;
}

export type StatementWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface StatementEdge {
  node: Statement;
  cursor: String;
}

export interface StatementEdgePromise
  extends Promise<StatementEdge>,
    Fragmentable {
  node: <T = StatementPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StatementEdgeSubscription
  extends Promise<AsyncIterator<StatementEdge>>,
    Fragmentable {
  node: <T = StatementSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Statement {
  id: ID_Output;
  data: Json;
}

export interface StatementPromise extends Promise<Statement>, Fragmentable {
  id: () => Promise<ID_Output>;
  data: () => Promise<Json>;
}

export interface StatementSubscription
  extends Promise<AsyncIterator<Statement>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  data: () => Promise<AsyncIterator<Json>>;
}

export interface StatementSubscriptionPayload {
  mutation: MutationType;
  node: Statement;
  updatedFields: String[];
  previousValues: StatementPreviousValues;
}

export interface StatementSubscriptionPayloadPromise
  extends Promise<StatementSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StatementPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StatementPreviousValuesPromise>() => T;
}

export interface StatementSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StatementSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StatementSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StatementPreviousValuesSubscription>() => T;
}

export interface StatementConnection {
  pageInfo: PageInfo;
  edges: StatementEdge[];
}

export interface StatementConnectionPromise
  extends Promise<StatementConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StatementEdge>>() => T;
  aggregate: <T = AggregateStatementPromise>() => T;
}

export interface StatementConnectionSubscription
  extends Promise<AsyncIterator<StatementConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StatementEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStatementSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStatement {
  count: Int;
}

export interface AggregateStatementPromise
  extends Promise<AggregateStatement>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStatementSubscription
  extends Promise<AsyncIterator<AggregateStatement>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface StatementPreviousValues {
  id: ID_Output;
  data: Json;
}

export interface StatementPreviousValuesPromise
  extends Promise<StatementPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  data: () => Promise<Json>;
}

export interface StatementPreviousValuesSubscription
  extends Promise<AsyncIterator<StatementPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  data: () => Promise<AsyncIterator<Json>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Json = any;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Statement",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
