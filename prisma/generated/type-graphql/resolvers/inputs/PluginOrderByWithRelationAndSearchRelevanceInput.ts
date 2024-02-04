import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityOrderByRelationAggregateInput } from "../inputs/Custom_entityOrderByRelationAggregateInput";
import { Payment_methodOrderByRelationAggregateInput } from "../inputs/Payment_methodOrderByRelationAggregateInput";
import { PluginOrderByRelevanceInput } from "../inputs/PluginOrderByRelevanceInput";
import { Plugin_translationOrderByRelationAggregateInput } from "../inputs/Plugin_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PluginOrderByWithRelationAndSearchRelevanceInput", {})
export class PluginOrderByWithRelationAndSearchRelevanceInput {
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
  base_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  composer_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  managed_by_composer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  autoload?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  author?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  copyright?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  license?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  upgrade_version?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  installed_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  upgraded_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityOrderByRelationAggregateInput, {
    nullable: true
  })
  custom_entity?: Custom_entityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  payment_method?: Payment_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  plugin_translation?: Plugin_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PluginOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: PluginOrderByRelevanceInput | undefined;
}
