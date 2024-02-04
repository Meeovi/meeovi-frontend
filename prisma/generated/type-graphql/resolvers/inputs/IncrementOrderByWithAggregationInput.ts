import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncrementAvgOrderByAggregateInput } from "../inputs/IncrementAvgOrderByAggregateInput";
import { IncrementCountOrderByAggregateInput } from "../inputs/IncrementCountOrderByAggregateInput";
import { IncrementMaxOrderByAggregateInput } from "../inputs/IncrementMaxOrderByAggregateInput";
import { IncrementMinOrderByAggregateInput } from "../inputs/IncrementMinOrderByAggregateInput";
import { IncrementSumOrderByAggregateInput } from "../inputs/IncrementSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncrementOrderByWithAggregationInput", {})
export class IncrementOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pool?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cluster?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => IncrementCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IncrementCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncrementAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IncrementAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncrementMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IncrementMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncrementMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IncrementMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncrementSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IncrementSumOrderByAggregateInput | undefined;
}
