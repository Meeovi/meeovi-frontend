import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCountOrderByAggregateInput } from "../inputs/Od_scheduler_jobCountOrderByAggregateInput";
import { Od_scheduler_jobMaxOrderByAggregateInput } from "../inputs/Od_scheduler_jobMaxOrderByAggregateInput";
import { Od_scheduler_jobMinOrderByAggregateInput } from "../inputs/Od_scheduler_jobMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_jobOrderByWithAggregationInput", {})
export class Od_scheduler_jobOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  message?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  started_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  finished_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Od_scheduler_jobCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Od_scheduler_jobMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Od_scheduler_jobMinOrderByAggregateInput | undefined;
}
