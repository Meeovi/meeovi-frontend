import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { App_script_conditionOrderByRelevanceInput } from "../inputs/App_script_conditionOrderByRelevanceInput";
import { App_script_condition_translationOrderByRelationAggregateInput } from "../inputs/App_script_condition_translationOrderByRelationAggregateInput";
import { Rule_conditionOrderByRelationAggregateInput } from "../inputs/Rule_conditionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_script_conditionOrderByWithRelationAndSearchRelevanceInput", {})
export class App_script_conditionOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  group?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  script?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  constraints?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app?: AppOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Rule_conditionOrderByRelationAggregateInput, {
    nullable: true
  })
  rule_condition?: Rule_conditionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: App_script_conditionOrderByRelevanceInput | undefined;
}
