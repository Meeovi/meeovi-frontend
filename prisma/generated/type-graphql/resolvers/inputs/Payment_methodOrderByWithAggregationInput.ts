import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodAvgOrderByAggregateInput } from "../inputs/Payment_methodAvgOrderByAggregateInput";
import { Payment_methodCountOrderByAggregateInput } from "../inputs/Payment_methodCountOrderByAggregateInput";
import { Payment_methodMaxOrderByAggregateInput } from "../inputs/Payment_methodMaxOrderByAggregateInput";
import { Payment_methodMinOrderByAggregateInput } from "../inputs/Payment_methodMinOrderByAggregateInput";
import { Payment_methodSumOrderByAggregateInput } from "../inputs/Payment_methodSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_methodOrderByWithAggregationInput", {})
export class Payment_methodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  handler_identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  after_order_enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  availability_rule_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  plugin_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_id?: SortOrderInput | undefined;

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
  technical_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Payment_methodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Payment_methodAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Payment_methodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Payment_methodMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Payment_methodSumOrderByAggregateInput | undefined;
}
