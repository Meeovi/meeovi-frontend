import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceAvgOrderByAggregateInput } from "../inputs/Flow_sequenceAvgOrderByAggregateInput";
import { Flow_sequenceCountOrderByAggregateInput } from "../inputs/Flow_sequenceCountOrderByAggregateInput";
import { Flow_sequenceMaxOrderByAggregateInput } from "../inputs/Flow_sequenceMaxOrderByAggregateInput";
import { Flow_sequenceMinOrderByAggregateInput } from "../inputs/Flow_sequenceMinOrderByAggregateInput";
import { Flow_sequenceSumOrderByAggregateInput } from "../inputs/Flow_sequenceSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Flow_sequenceOrderByWithAggregationInput", {})
export class Flow_sequenceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flow_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_flow_action_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rule_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  action_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  true_case?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Flow_sequenceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Flow_sequenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Flow_sequenceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Flow_sequenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Flow_sequenceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Flow_sequenceSumOrderByAggregateInput | undefined;
}
