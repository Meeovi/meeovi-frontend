import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCountOrderByAggregateInput } from "../inputs/App_action_button_translationCountOrderByAggregateInput";
import { App_action_button_translationMaxOrderByAggregateInput } from "../inputs/App_action_button_translationMaxOrderByAggregateInput";
import { App_action_button_translationMinOrderByAggregateInput } from "../inputs/App_action_button_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_action_button_translationOrderByWithAggregationInput", {})
export class App_action_button_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_action_button_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_action_button_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_action_button_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_action_button_translationMinOrderByAggregateInput | undefined;
}
