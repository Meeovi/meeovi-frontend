import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnqueueAvgOrderByAggregateInput } from "../inputs/EnqueueAvgOrderByAggregateInput";
import { EnqueueCountOrderByAggregateInput } from "../inputs/EnqueueCountOrderByAggregateInput";
import { EnqueueMaxOrderByAggregateInput } from "../inputs/EnqueueMaxOrderByAggregateInput";
import { EnqueueMinOrderByAggregateInput } from "../inputs/EnqueueMinOrderByAggregateInput";
import { EnqueueSumOrderByAggregateInput } from "../inputs/EnqueueSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EnqueueOrderByWithAggregationInput", {})
export class EnqueueOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  body?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  headers?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  properties?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  redelivered?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  queue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  delayed_until?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  time_to_live?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  delivery_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  redeliver_after?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => EnqueueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EnqueueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnqueueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EnqueueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnqueueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EnqueueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnqueueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EnqueueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnqueueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EnqueueSumOrderByAggregateInput | undefined;
}
