import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCountOrderByAggregateInput } from "../inputs/Plugin_translationCountOrderByAggregateInput";
import { Plugin_translationMaxOrderByAggregateInput } from "../inputs/Plugin_translationMaxOrderByAggregateInput";
import { Plugin_translationMinOrderByAggregateInput } from "../inputs/Plugin_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Plugin_translationOrderByWithAggregationInput", {})
export class Plugin_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  plugin_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  manufacturer_link?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  support_link?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  changelog?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Plugin_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Plugin_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Plugin_translationMinOrderByAggregateInput | undefined;
}
