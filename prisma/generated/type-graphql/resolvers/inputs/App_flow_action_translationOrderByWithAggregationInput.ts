import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCountOrderByAggregateInput } from "../inputs/App_flow_action_translationCountOrderByAggregateInput";
import { App_flow_action_translationMaxOrderByAggregateInput } from "../inputs/App_flow_action_translationMaxOrderByAggregateInput";
import { App_flow_action_translationMinOrderByAggregateInput } from "../inputs/App_flow_action_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_flow_action_translationOrderByWithAggregationInput", {})
export class App_flow_action_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_flow_action_id?: "asc" | "desc" | undefined;

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
  headline?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => App_flow_action_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_flow_action_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_flow_action_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_flow_action_translationMinOrderByAggregateInput | undefined;
}
