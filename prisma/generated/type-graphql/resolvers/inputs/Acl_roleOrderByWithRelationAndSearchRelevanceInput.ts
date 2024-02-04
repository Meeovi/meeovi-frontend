import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleOrderByRelevanceInput } from "../inputs/Acl_roleOrderByRelevanceInput";
import { Acl_user_roleOrderByRelationAggregateInput } from "../inputs/Acl_user_roleOrderByRelationAggregateInput";
import { AppOrderByRelationAggregateInput } from "../inputs/AppOrderByRelationAggregateInput";
import { Integration_roleOrderByRelationAggregateInput } from "../inputs/Integration_roleOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Acl_roleOrderByWithRelationAndSearchRelevanceInput", {})
export class Acl_roleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  privileges?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deleted_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleOrderByRelationAggregateInput, {
    nullable: true
  })
  acl_user_role?: Acl_user_roleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByRelationAggregateInput, {
    nullable: true
  })
  app?: AppOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleOrderByRelationAggregateInput, {
    nullable: true
  })
  integration_role?: Integration_roleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Acl_roleOrderByRelevanceInput | undefined;
}
