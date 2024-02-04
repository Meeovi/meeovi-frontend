import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { App_action_buttonOrderByRelevanceInput } from "../inputs/App_action_buttonOrderByRelevanceInput";
import { App_action_button_translationOrderByRelationAggregateInput } from "../inputs/App_action_button_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_action_buttonOrderByWithRelationAndSearchRelevanceInput", {})
export class App_action_buttonOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  view?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  open_new_tab?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => App_action_button_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: App_action_buttonOrderByRelevanceInput | undefined;
}
