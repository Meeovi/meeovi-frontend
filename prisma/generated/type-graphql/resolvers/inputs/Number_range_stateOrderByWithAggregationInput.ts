import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_stateAvgOrderByAggregateInput } from "../inputs/Number_range_stateAvgOrderByAggregateInput";
import { Number_range_stateCountOrderByAggregateInput } from "../inputs/Number_range_stateCountOrderByAggregateInput";
import { Number_range_stateMaxOrderByAggregateInput } from "../inputs/Number_range_stateMaxOrderByAggregateInput";
import { Number_range_stateMinOrderByAggregateInput } from "../inputs/Number_range_stateMinOrderByAggregateInput";
import { Number_range_stateSumOrderByAggregateInput } from "../inputs/Number_range_stateSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_stateOrderByWithAggregationInput", {})
export class Number_range_stateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Number_range_stateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Number_range_stateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Number_range_stateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Number_range_stateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_stateSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Number_range_stateSumOrderByAggregateInput | undefined;
}
