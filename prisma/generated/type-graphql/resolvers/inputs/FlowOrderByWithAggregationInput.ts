import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowAvgOrderByAggregateInput } from "../inputs/FlowAvgOrderByAggregateInput";
import { FlowCountOrderByAggregateInput } from "../inputs/FlowCountOrderByAggregateInput";
import { FlowMaxOrderByAggregateInput } from "../inputs/FlowMaxOrderByAggregateInput";
import { FlowMinOrderByAggregateInput } from "../inputs/FlowMinOrderByAggregateInput";
import { FlowSumOrderByAggregateInput } from "../inputs/FlowSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowOrderByWithAggregationInput", {})
export class FlowOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_flow_event_id?: SortOrderInput | undefined;

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
  event_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  payload?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invalid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => FlowCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FlowCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FlowAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FlowMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FlowMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FlowSumOrderByAggregateInput | undefined;
}
