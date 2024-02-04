import * as TypeGraphQL from "type-graphql";

export enum IncrementOrderByRelevanceFieldEnum {
  pool = "pool",
  cluster = "cluster",
  key = "key"
}
TypeGraphQL.registerEnumType(IncrementOrderByRelevanceFieldEnum, {
  name: "IncrementOrderByRelevanceFieldEnum",
  description: undefined,
});
