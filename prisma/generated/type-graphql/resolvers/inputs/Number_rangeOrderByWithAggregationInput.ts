import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeAvgOrderByAggregateInput } from "../inputs/Number_rangeAvgOrderByAggregateInput";
import { Number_rangeCountOrderByAggregateInput } from "../inputs/Number_rangeCountOrderByAggregateInput";
import { Number_rangeMaxOrderByAggregateInput } from "../inputs/Number_rangeMaxOrderByAggregateInput";
import { Number_rangeMinOrderByAggregateInput } from "../inputs/Number_rangeMinOrderByAggregateInput";
import { Number_rangeSumOrderByAggregateInput } from "../inputs/Number_rangeSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_rangeOrderByWithAggregationInput", {})
export class Number_rangeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  global?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Number_rangeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Number_rangeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Number_rangeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Number_rangeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Number_rangeSumOrderByAggregateInput | undefined;
}
