import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCountOrderByAggregateInput } from "../inputs/App_flow_eventCountOrderByAggregateInput";
import { App_flow_eventMaxOrderByAggregateInput } from "../inputs/App_flow_eventMaxOrderByAggregateInput";
import { App_flow_eventMinOrderByAggregateInput } from "../inputs/App_flow_eventMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_flow_eventOrderByWithAggregationInput", {})
export class App_flow_eventOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aware?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => App_flow_eventCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_flow_eventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_flow_eventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_flow_eventMinOrderByAggregateInput | undefined;
}
