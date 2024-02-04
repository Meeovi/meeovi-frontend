import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { Custom_entityOrderByRelevanceInput } from "../inputs/Custom_entityOrderByRelevanceInput";
import { PluginOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PluginOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_entityOrderByWithRelationAndSearchRelevanceInput", {})
export class Custom_entityOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

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
  flags?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  plugin_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields_aware?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label_property?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deleted_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  category?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app?: AppOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => PluginOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  plugin?: PluginOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Custom_entityOrderByRelevanceInput | undefined;
}
