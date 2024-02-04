import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCountOrderByAggregateInput } from "../inputs/App_action_buttonCountOrderByAggregateInput";
import { App_action_buttonMaxOrderByAggregateInput } from "../inputs/App_action_buttonMaxOrderByAggregateInput";
import { App_action_buttonMinOrderByAggregateInput } from "../inputs/App_action_buttonMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_action_buttonOrderByWithAggregationInput", {})
export class App_action_buttonOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => App_action_buttonCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_action_buttonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_action_buttonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_action_buttonMinOrderByAggregateInput | undefined;
}
